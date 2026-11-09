/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */

/**
 * Portfolio project list — the single place to add a project.
 *
 * liveUrl:   the project's subdomain once it is deployed (https://<name>.kaitr.dev).
 *            Leave null until the deploy is live; the card then links to the source.
 * sourceUrl: GitHub repository.
 */
const projects = [
    {
        imgSrc: "/dealership-scheduler.jpg",
        title: "Dealership Service Scheduler",
        tags: [".NET 10", "EF Core", "PostgreSQL", "xUnit", "Testcontainers", "OpenTelemetry"],
        liveUrl: null,
        sourceUrl: "https://github.com/THKhai/dealership-service-scheduler",
    },
    {
        imgSrc: "/AirBnb-auction.png",
        title: "E-commerce AirBnb auction",
        tags: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "RabbitMQ", "WebSockets"],
        liveUrl: null, // → "https://airbnb.kaitr.dev" after deploy
        sourceUrl: "https://github.com/THKhai/EC-Airbnb",
    },
    {
        imgSrc: "/hospital-management.png",
        title: "Hospital Management System",
        tags: ["FastAPI", "Microservices", "JWT", "PostgreSQL", "MongoDB", "Docker"],
        liveUrl: null,
        sourceUrl: "https://github.com/THKhai/UDPT-Hospital-Management-System-BE",
    },
    {
        imgSrc: "/hrm-system.jpg",
        title: "HRM Web Application",
        tags: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "JWT", "Docker"],
        liveUrl: null,
        sourceUrl: "https://github.com/THKhai/HRM_WebApplication",
    },
    {
        imgSrc: "/nosql-ecommerce.png",
        title: "NoSQL E-commerce Platform",
        tags: ["C# .NET", "MongoDB", "Redis", "Cassandra", "Neo4j", "Docker"],
        liveUrl: null,
        sourceUrl: "https://github.com/THKhai/MDBMS---E-COMMERCE-PLATFORM",
    },
];

export default projects;
