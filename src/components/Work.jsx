/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */
/**
 * Components
 */
import ProjectCard from "./ProjectCard.jsx";

/**
 * Data
 */
import projects from "../data/projects.js";

/**
 * Node modules
 */
import React from 'react';

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
                        projects.map(({imgSrc, title, tags, liveUrl, sourceUrl}) => (
                            <ProjectCard
                                key={title}
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
                                liveUrl={liveUrl}
                                sourceUrl={sourceUrl}
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
