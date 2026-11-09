/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */
/**
 * Components
 */
import SkillCard from "./SkillCard.jsx";

/**
 * Node modules
 */
import React from 'react';

// Kept in sync with the CV: only list skills the CV also claims.
const skillItems = [

    // Back-end
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", label: "C#", desc: "Primary language" },
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg", label: "ASP.NET Core / Web API", desc: "REST API framework" },
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg", label: "Entity Framework", desc: "ORM, LINQ" },
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", label: "Python / FastAPI", desc: "University project" },

    // Databases & messaging
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", label: "SQL Server", desc: "Relational database" },
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", label: "PostgreSQL", desc: "Relational database" },
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", label: "Redis", desc: "Cache" },
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", label: "MongoDB", desc: "NoSQL database" },
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg", label: "RabbitMQ", desc: "Message broker" },
    { icon: "hub", label: "MassTransit", desc: "Messaging framework" },
    { icon: "schedule", label: "Quartz.NET", desc: "Background jobs" },

    // Testing & observability
    { icon: "task_alt", label: "xUnit", desc: "Unit & integration tests" },
    { icon: "deployed_code", label: "Testcontainers", desc: "Integration tests on real DBs" },
    { icon: "receipt_long", label: "Serilog", desc: "Structured logging" },
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opentelemetry/opentelemetry-original.svg", label: "OpenTelemetry", desc: "Metrics & tracing" },

    // Tools
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", label: "Docker", desc: "Containerization" },
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", label: "Git", desc: "Version control" },
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg", label: "Azure DevOps", desc: "Boards, repos, pipelines" },
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg", label: "Swagger", desc: "API documentation" },
    { icon: "key", label: "JWT", desc: "Authentication" },

    // Front-end
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg", label: "AngularJS", desc: "Frontend framework" },
    { imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", label: "React.js", desc: "Frontend library" },
];


const Skill = () => {
    return (
        <section
            className={"section"}

        >
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    The languages, frameworks and tools I use at work and in my projects.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(200px,_1fr))]">
                    {
                        skillItems.map(({imgSrc, icon, label, desc},key) => (
                            <SkillCard
                                imgSrc={imgSrc}
                                icon={icon}
                                label={label}
                                desc={desc}
                                key={key}
                                classes={"reveal-up"}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Skill;