/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */
/**
 * Components
 */
import ProjectCard from "./ProjectCard.jsx";

/**
 * Node modules
 */
import React from 'react';

const work = [
    {
        imgSrc: "/AirBnb-auction.png",
        title:"E-commerce AirBnb auction",
        tags:["API","FastAPI","Development","Backend"],
        projectLink:"https://github.com/vongagh094/ecommerce_be",
    },
    {
        imgSrc: "/hospital-management.png",
        title: "Hospital Management System",
        tags: ["FastAPI", "Microservices", "JWT", "PostgreSQL", "MongoDB", "Docker"],
        projectLink: "https://github.com/THKhai/UDPT-Hospital-Management-System-BE",
    },
    {
        imgSrc: "/hrm-system.jpg",
        title: "HRM Web Application",
        tags: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "JWT", "Docker"],
        projectLink: "https://github.com/THKhai/HRM_WebApplication",
    },
    {
        imgSrc: "/nosql-ecommerce.png",
        title: "NoSQL E-commerce Platform",
        tags: ["C# .NET", "MongoDB", "Redis", "Cassandra", "Neo4j", "Docker"],
        projectLink: "https://github.com/THKhai/MDBMS---E-COMMERCE-PLATFORM",
    }
];

const Work = () => {
    return (
        <section
            id="work"
            className={"section"}
        >
            <div className="container">
                <h2 className={"headline-2 mb-8 reveal-up"}>
                    My portfolio highlights
                </h2>
                <div
                    className={"grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))]"}
                >
                    {
                        work.map(({imgSrc,title,tags,projectLink,role},key) => (
                            <ProjectCard
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
                                projectLink={projectLink}
                                key={key}
                                classes={"reveal-up"}
                                role={role}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Work;