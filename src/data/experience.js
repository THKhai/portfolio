/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */

/**
 * Work history and education, newest first. Keep in sync with the CV.
 */
const experience = [
    {
        icon: "work",
        role: "Fullstack Developer",
        org: "EMERGE app",
        orgUrl: "https://emergeapp.net/",
        period: "12/2025 – 6/2026",
        summary: "Emerge ERP System (multi-tenant) · Agile Scrum",
        highlights: [
            "Delivered 86 tickets (90.7% on-time) across 6 sprints with AngularJS, ASP.NET Web API (C#) and SQL Server",
            "Cut page load for large product datasets from ~30s to 2–5s with lazy loading",
            "Eliminated N+1 queries by consolidating them into a single async LINQ projection",
            "Resolved multi-tab race conditions in the critical Quotation-to-SalesOrder workflow",
            "Integrated Shopify (REST & GraphQL) with background processing on Quartz.NET, MassTransit and RabbitMQ",
            "Built PDF generation for Sales Orders, Quotations and Delivery Orders (iTextSharp, multi-language)",
        ],
        tags: ["C#", "ASP.NET Web API", "Entity Framework", "AngularJS", "SQL Server", "RabbitMQ", "Azure DevOps"],
    },
    {
        icon: "school",
        role: "Bachelor of Information Technology",
        org: "VNUHCM - University of Science (HCMUS)",
        period: "10/2021 – 2025",
        summary: "Major: Information Systems",
        highlights: [],
        tags: [],
    },
];

export default experience;
