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

const skillItems = [
    // Programming Languages
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        label: "C#",
        desc: "Backend Programming Language"
    },
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        label: "C++",
        desc: "System Programming"
    },
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        label: "Python",
        desc: "API Development"
    },

    // Back-end Development
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
        label: "ASP.NET Core",
        desc: "Web Framework"
    },
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
        label: ".NET Framework",
        desc: "Enterprise Framework"
    },
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        label: "FastAPI",
        desc: "Python Framework"
    },
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
        label: "SQLAlchemy/SQLModel",
        desc: "ORM Framework"
    },

    // Database Systems
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
        label: "Microsoft SQL Server",
        desc: "Relational Database"
    },
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        label: "MongoDB",
        desc: "NoSQL Database"
    },
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        label: "Redis",
        desc: "Caching System"
    },
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        label: "PostgreSQL",
        desc: "Advanced Database"
    },
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cassandra/cassandra-original.svg",
        label: "Cassandra",
        desc: "Distributed Database"
    },
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg",
        label: "Neo4j",
        desc: "Graph Database"
    },

    // Tools & Technologies
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        label: "Docker",
        desc: "Containerization"
    },
    {
        imgSrc: "https://jwt.io/img/pic_logo.svg",
        label: "JWT Authentication",
        desc: "Security Token"
    },
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
        label: "RabbitMQ",
        desc: "Message Queue"
    },
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
        label: "Swagger",
        desc: "API Documentation"
    },

    // Front-end Development
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        label: "React.js",
        desc: "Frontend Library"
    },
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg",
        label: "WinForms",
        desc: "Desktop Development"
    },

    // Data Skills
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/2103/2103665.png",
        label: "ETL Processes",
        desc: "Data Pipeline"
    },
    {
        imgSrc: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png",
        label: "Tableau",
        desc: "Data Visualization"
    },

    // Version Control
    {
        imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        label: "Git",
        desc: "Version Control"
    },

    // Soft Skills
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/1534/1534938.png",
        label: "Teamwork",
        desc: "Team Collaboration"
    },
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/2040/2040946.png",
        label: "Problem-solving",
        desc: "System Optimization"
    },
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/3048/3048425.png",
        label: "Adaptability",
        desc: "Technology Learning"
    },
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/2972/2972351.png",
        label: "Time Management",
        desc: "Project Planning"
    },
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
        label: "Presentation Skills",
        desc: "Technical Presentation"
    },
    {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/3048/3048378.png",
        label: "Work Under Pressure",
        desc: "Performance Handling"
    }
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
                    Discover the powerful tools and technologies i used to build
                    my webs and applications in my projects.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(200px,_1fr))]">
                    {
                        skillItems.map(({imgSrc, label, desc},key) => (
                            <SkillCard
                                imgSrc={imgSrc}
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