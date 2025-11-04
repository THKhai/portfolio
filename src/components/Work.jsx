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
        projectLink:"",
    },
    {
        imgSrc: "/AirBnb-auction.png",
        title:"E-commerce AirBnb auction",
        tags:["API","FastAPI","Development","Backend"],
        projectLink:"",
    },
    {
        imgSrc: "/AirBnb-auction.png",
        title:"E-commerce AirBnb auction",
        tags:["API","FastAPI","Development","Backend"],
        projectLink:"",
    },
    {
        imgSrc: "/AirBnb-auction.png",
        title:"E-commerce AirBnb auction",
        tags:["API","FastAPI","Development","Backend"],
        projectLink:"",
    },
    {
        imgSrc: "/AirBnb-auction.png",
        title:"E-commerce AirBnb auction",
        tags:["API","FastAPI","Development","Backend"],
        projectLink:"",
    },
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
                        work.map(({imgSrc,title,tags,projectLink},key) => (
                            <ProjectCard
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
                                projectLink={projectLink}
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

export default Work;