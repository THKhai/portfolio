/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */

/**
 * Data
 */
import experience from "../data/experience.js";

/**
 * Node modules
 */
import React from 'react';

const Experience = () => {
    return (
        <section
            id="experience"
            className={"section"}
        >
            <div className="container">
                <h2 className={"headline-2 mb-8 reveal-up"}>
                    Experience &amp; education
                </h2>
                <ol className={"grid gap-4"}>
                    {experience.map(({icon, role, org, orgUrl, period, summary, highlights, tags}) => (
                        <li
                            key={role + org}
                            className={"bg-zinc-800/50 p-6 rounded-2xl ring-1 ring-inset ring-zinc-50/5 md:p-8 reveal-up"}
                        >
                            <div className={"flex flex-wrap items-start gap-4"}>
                                <span
                                    className={"material-symbols-rounded w-11 h-11 shrink-0 grid place-items-center " +
                                        "rounded-lg bg-sky-400 text-zinc-950"}
                                    aria-hidden={true}
                                >
                                    {icon}
                                </span>
                                <div className={"flex-1 min-w-[200px]"}>
                                    <h3 className={"title-1"}>{role}</h3>
                                    <p className={"text-zinc-300"}>
                                        {orgUrl ? (
                                            <a
                                                href={orgUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={"inline-flex items-center gap-1 hover:text-sky-400 transition-colors"}
                                            >
                                                {org}
                                                <span className={"material-symbols-rounded text-base"} aria-hidden={true}>arrow_outward</span>
                                            </a>
                                        ) : org}
                                    </p>
                                    <p className={"text-zinc-400 text-sm mt-1"}>{summary}</p>
                                </div>
                                <p className={"text-sm text-zinc-400 whitespace-nowrap"}>{period}</p>
                            </div>

                            {highlights.length > 0 && (
                                <ul className={"mt-5 grid gap-2 text-zinc-400 md:pl-15"}>
                                    {highlights.map((item) => (
                                        <li key={item} className={"flex gap-2"}>
                                            <span className={"text-sky-400"} aria-hidden={true}>▹</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {tags.length > 0 && (
                                <div className={"mt-5 flex flex-wrap gap-2 md:pl-15"}>
                                    {tags.map((label) => (
                                        <span
                                            key={label}
                                            className={"h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"}
                                        >
                                            {label}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Experience;
