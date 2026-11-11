# Contact API (kaitr.dev)

API nhỏ viết bằng .NET 10, nhận form Contact trên portfolio rồi chuyển tiếp nội dung về Gmail qua SMTP.
Nó thay cho Getform cũ, nên không còn phụ thuộc dịch vụ bên ngoài nào ngoài Gmail.

```
Trình duyệt ──POST /api/contact──► Cloudflare Tunnel ──► Traefik ──► container `api` (:8080)
                                                                      │  MailKit, SMTP 587 StartTLS
                                                                      ▼
                                                              smtp.gmail.com ──► hộp thư Smtp__To
```

- Traefik đưa `kaitr.dev` + `PathPrefix(/api)` vào container này. Router được đặt `priority=100` để thắng router SPA,
  vì router SPA có rule dài hơn nên mặc định được ưu tiên cao hơn (xem `docker-compose.prod.yml`).
- Mọi request khác của `kaitr.dev` vẫn vào container `web` (nginx + build React).

## Endpoint

| Method | Path | Kết quả |
|---|---|---|
| GET | `/api/health` | `{"status":"ok","smtpConfigured":true}` |
| POST | `/api/contact` | Body JSON `{name, email, message, website}` |

Các mã trả về của `POST /api/contact`:

| Code | Khi nào | Frontend hiển thị |
|---|---|---|
| 202 | Đã gửi mail, hoặc honeypot bị kích hoạt (giả vờ thành công) | "Message sent" |
| 400 | Dữ liệu không hợp lệ (`fields` cho biết lỗi ở ô nào) | Báo lỗi |
| 429 | Vượt rate limit | Thông báo "thử lại sau" |
| 503 | Chưa cấu hình SMTP (thiếu biến trong `.env`) | Lỗi kèm link mailto |
| 502 | Gửi SMTP thất bại (sai App Password, Gmail chặn, timeout…) | Lỗi kèm link mailto |

## Các lớp bảo vệ

- **Honeypot**: ô `website` được giấu khỏi màn hình. Người thật không điền, còn bot thường điền hết mọi ô.
  Khi ô này có giá trị, API trả 202 nhưng không gửi mail, và ghi log `Honeypot triggered`.
- **Rate limit**: tối đa 5 request / 15 phút cho mỗi IP, tính theo header `Cf-Connecting-Ip`.
  Bộ đếm nằm trong RAM nên **reset mỗi khi deploy hoặc restart**.
- **Validation**:
  - name dài 1–100 ký tự, không chứa ký tự điều khiển;
  - email hợp lệ, tối đa 254 ký tự;
  - message dài 1–5000 ký tự;
  - body tối đa 16 KB.
- **Chống header injection**: name được đưa lên subject trên một dòng duy nhất, còn Reply-To do MimeKit tự encode.
- **From = hộp thư của mình, Reply-To = người gửi**. Nhờ vậy mail không bị dính SPF/DKIM, và khi bấm Reply là trả lời thẳng cho khách.
- Timeout SMTP là 20 giây. Container chạy bằng user không phải root (`$APP_UID`).

## Cấu hình (`.env`)

Trên server, file nằm ở `~/apps/portfolio/.env` (`chmod 600`). Workflow Deploy sẽ copy file này vào lúc deploy.
Mẫu xem ở `../.env.example`.

| Biến | Ví dụ | Ghi chú |
|---|---|---|
| `Smtp__Host` | `smtp.gmail.com` | |
| `Smtp__Port` | `587` | |
| `Smtp__Security` | `StartTls` | `SslOnConnect` cho cổng 465; `None` chỉ dùng khi test local |
| `Smtp__User` | `you@gmail.com` | Cũng chính là địa chỉ From |
| `Smtp__Password` | *(App Password 16 ký tự)* | **Không dấu cách**, không phải mật khẩu Google |
| `Smtp__To` | `you@gmail.com` | Hộp thư nhận tin |

> ⚠️ Sửa `.env` xong thì **phải chạy lại workflow Deploy** (Actions → Deploy → Run workflow).
> Container chỉ đọc env lúc khởi động.

### Tạo App Password

1. Bật xác minh 2 bước cho tài khoản Google.
2. Vào https://myaccount.google.com/apppasswords. Tên app không được chứa dấu chấm, ví dụ đặt là `kaitr`.
3. Copy 16 ký tự, bỏ hết dấu cách, rồi dán vào `Smtp__Password`.
   Để kiểm tra độ dài trên server:
   ```bash
   grep '^Smtp__Password=' ~/apps/portfolio/.env | cut -d= -f2- | tr -d '\n' | wc -c   # phải ra 16
   sed -i '/^Smtp__Password=/ s/ //g' ~/apps/portfolio/.env                            # xoá dấu cách nếu có
   ```

## Giới hạn & những điều cần nhớ

| Điểm cần nhớ | Chi tiết |
|---|---|
| Hạn mức gửi của Gmail | Khoảng vài trăm thư/ngày với tài khoản cá nhân. Nếu vượt, Gmail khoá chức năng gửi khoảng 24h và API trả 502. Với portfolio thì thực tế không chạm tới |
| **Đổi mật khẩu Google** | Google **tự thu hồi toàn bộ App Password**, làm form ngừng gửi được. Cách sửa: tạo App Password mới, sửa `.env`, rồi chạy lại Deploy |
| `/api/health` | Chỉ kiểm tra là **đã có cấu hình**, không đăng nhập thử SMTP. Vì vậy health vẫn có thể báo `true` trong khi mail không gửi được |
| Không có cảnh báo tự động | Khi gửi lỗi, chỉ người gửi thấy. Nên tự gửi thử khoảng mỗi tháng một lần |
| Spam | Honeypot và rate limit chặn được bot đơn giản. Nếu spam tăng, thêm Cloudflare Turnstile (miễn phí) |
| Email người gửi | Không được xác minh, khách có thể ghi bừa. Khi đó thư Reply sẽ không tới |
| Lộ App Password | Thu hồi ngay tại trang apppasswords, rồi tạo mã mới |

## Vận hành trên server

```bash
curl -s https://kaitr.dev/api/health                 # kiểm tra nhanh
docker ps --filter name=portfolio                    # xem container web + api
docker logs --tail 100 portfolio-api-1               # log: Honeypot / forwarded / lỗi SMTP
docker logs portfolio-api-1 2>&1 | grep -i error     # chỉ xem lỗi
```

Một số lỗi thường gặp trong log:

- `535 5.7.8 Username and Password not accepted`: App Password sai hoặc đã bị thu hồi.
- `SMTP is not configured`: `.env` thiếu biến, hoặc chưa chạy lại Deploy sau khi sửa.
- Lỗi timeout: server mất mạng, hoặc cổng 587 ra ngoài bị chặn.

## Chạy local

```bash
cd api
dotnet run                     # http://127.0.0.1:5038 (theo Properties/launchSettings.json)
```

Ở thư mục gốc, chạy `npm run dev`. Vite sẽ proxy `/api` sang `http://127.0.0.1:5038` (xem `vite.config.js`).

Có hai cách cấu hình SMTP khi test local:

- **Gửi thật**: đặt biến môi trường `Smtp__*` giống production.
- **Không gửi thật**: dùng một SMTP "giả" chạy local, chỉ in mail ra console.
  ```bash
  # Terminal 1: SMTP sink ở cổng 1025 (cần: pip install aiosmtpd)
  python -m aiosmtpd -n -l 127.0.0.1:1025
  # Terminal 2
  Smtp__Host=127.0.0.1 Smtp__Port=1025 Smtp__Security=None Smtp__To=test@local dotnet run
  ```

Thử bằng curl:

```bash
curl -i -X POST http://127.0.0.1:5038/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"test@example.com","message":"Hello","website":""}'
```

## File liên quan

- `Program.cs`: toàn bộ API (endpoint, rate limit, gửi mail).
- `Dockerfile`: build bằng `sdk:10.0-alpine`, chạy bằng `aspnet:10.0-alpine`, có healthcheck `/api/health`.
- `../docker-compose.prod.yml`: service `api` và các label Traefik.
- `../src/components/Contact.jsx`: form phía frontend (fetch, các trạng thái, honeypot, link mailto dự phòng).
- `../.env.example`: mẫu các biến môi trường.
