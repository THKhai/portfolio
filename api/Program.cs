// Contact API for kaitr.dev: receives the portfolio contact form and forwards it by email (SMTP).
// Routed by Traefik: kaitr.dev/api/* → this container. Secrets come from env vars (see .env.example).

using System.Net;
using System.Threading.RateLimiting;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(o => o.Limits.MaxRequestBodySize = 16 * 1024);
builder.Services.Configure<SmtpOptions>(builder.Configuration.GetSection("Smtp"));
builder.Services.AddSingleton<MailSender>();

// Behind Cloudflare → Traefik, RemoteIpAddress is Traefik. Cloudflare sets Cf-Connecting-Ip at its edge,
// and this container is only reachable through the tunnel, so the header can be trusted here.
static string ClientIp(HttpContext ctx) =>
    ctx.Request.Headers["Cf-Connecting-Ip"].FirstOrDefault()
    ?? ctx.Request.Headers["X-Forwarded-For"].FirstOrDefault()?.Split(',')[0].Trim()
    ?? ctx.Connection.RemoteIpAddress?.ToString()
    ?? "unknown";

builder.Services.AddRateLimiter(o =>
{
    o.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
    o.AddPolicy("contact", ctx => RateLimitPartition.GetFixedWindowLimiter(ClientIp(ctx), _ => new FixedWindowRateLimiterOptions
    {
        PermitLimit = 5,
        Window = TimeSpan.FromMinutes(15),
        QueueLimit = 0,
    }));
});

var app = builder.Build();
app.UseRateLimiter();

var mail = app.Services.GetRequiredService<MailSender>();
if (!mail.IsConfigured)
    app.Logger.LogWarning("SMTP is not configured (Smtp__Host/User/Password/To). /api/contact will return 503.");

app.MapGet("/api/health", () => Results.Ok(new { status = "ok", smtpConfigured = mail.IsConfigured }));

app.MapPost("/api/contact", async (ContactRequest req, HttpContext ctx, ILogger<Program> log, CancellationToken ct) =>
{
    // Honeypot: real visitors never see the "website" field; bots fill every field.
    // Pretend success so the bot learns nothing.
    if (!string.IsNullOrWhiteSpace(req.Website))
    {
        log.LogInformation("Honeypot triggered from {Ip}", ClientIp(ctx));
        return Results.Accepted(value: new { ok = true });
    }

    var name = req.Name?.Trim() ?? "";
    var email = req.Email?.Trim() ?? "";
    var message = req.Message?.Trim() ?? "";

    var errors = new Dictionary<string, string>();
    if (name.Length is < 1 or > 100) errors["name"] = "Name must be 1-100 characters.";
    else if (name.Any(char.IsControl)) errors["name"] = "Name contains invalid characters.";
    if (email.Length > 254 || !MailboxAddress.TryParse(email, out var from) || !from.Address.Contains('@'))
        errors["email"] = "Please enter a valid email address.";
    if (message.Length is < 1 or > 5000) errors["message"] = "Message must be 1-5000 characters.";
    if (errors.Count > 0) return Results.BadRequest(new { error = "Invalid input.", fields = errors });

    if (!mail.IsConfigured)
        return Results.Json(new { error = "Contact form is temporarily unavailable." }, statusCode: 503);

    try
    {
        await mail.SendAsync(name, email, message, ClientIp(ctx), ct);
        log.LogInformation("Contact message forwarded ({Length} chars)", message.Length);
        return Results.Accepted(value: new { ok = true });
    }
    catch (Exception ex)
    {
        log.LogError(ex, "Sending contact email failed");
        return Results.Json(new { error = "Could not send your message. Please email me directly." }, statusCode: 502);
    }
}).RequireRateLimiting("contact");

app.Run();

record ContactRequest(string? Name, string? Email, string? Message, string? Website);

sealed class SmtpOptions
{
    public string Host { get; set; } = "";
    public int Port { get; set; } = 587;
    /// <summary>StartTls (Gmail :587), SslOnConnect (:465) or None (local test server only).</summary>
    public SecureSocketOptions Security { get; set; } = SecureSocketOptions.StartTls;
    public string User { get; set; } = "";
    public string Password { get; set; } = "";
    /// <summary>Recipient of the contact messages.</summary>
    public string To { get; set; } = "";
}

sealed class MailSender(Microsoft.Extensions.Options.IOptions<SmtpOptions> options)
{
    private readonly SmtpOptions _o = options.Value;

    public bool IsConfigured =>
        _o.Host != "" && _o.To != "" && (_o.Security == SecureSocketOptions.None || (_o.User != "" && _o.Password != ""));

    public async Task SendAsync(string name, string email, string message, string ip, CancellationToken ct)
    {
        var msg = new MimeMessage();
        // From must be our own mailbox (SPF/DKIM); the visitor goes in Reply-To so "Reply" just works.
        msg.From.Add(new MailboxAddress("kaitr.dev contact form", _o.User != "" ? _o.User : _o.To));
        msg.To.Add(MailboxAddress.Parse(_o.To));
        msg.ReplyTo.Add(new MailboxAddress(name, email));
        msg.Subject = $"[kaitr.dev] Message from {OneLine(name)}";
        msg.Body = new TextPart("plain")
        {
            Text = $"""
                    Name:    {name}
                    Email:   {email}
                    IP:      {ip}
                    Time:    {DateTimeOffset.UtcNow:yyyy-MM-dd HH:mm} UTC

                    {message}
                    """,
        };

        using var timeout = CancellationTokenSource.CreateLinkedTokenSource(ct);
        timeout.CancelAfter(TimeSpan.FromSeconds(20));
        using var smtp = new SmtpClient();
        await smtp.ConnectAsync(_o.Host, _o.Port, _o.Security, timeout.Token);
        if (_o.User != "") await smtp.AuthenticateAsync(new NetworkCredential(_o.User, _o.Password), timeout.Token);
        await smtp.SendAsync(msg, timeout.Token);
        await smtp.DisconnectAsync(true, timeout.Token);
    }

    private static string OneLine(string s) => s.Replace('\r', ' ').Replace('\n', ' ');
}
