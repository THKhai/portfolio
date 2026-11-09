/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from 'prop-types';

import React from 'react';

/**
 * Card for one project.
 * - liveUrl set   → the whole card opens the live subdomain, a small "code" button opens GitHub.
 * - liveUrl null  → the whole card opens GitHub (previous behaviour).
 */
const ProjectCard = (
    {
        imgSrc,
        title,
        tags,
        liveUrl,
        sourceUrl,
        classes = ""
    }
) => {
    const primaryUrl = liveUrl || sourceUrl;

    return (
        <div
            className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 " +
                "ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}
        >
            <figure
                className={"img-box relative aspect-square rounded-lg mb-4"}
            >
                <img
                    src={imgSrc}
                    alt={title}
                    loading="lazy"
                    className={"img-cover"}
                />
                {liveUrl && (
                    <span
                        className={"absolute top-3 left-3 flex items-center gap-1.5 h-7 px-2.5 rounded-lg " +
                            "bg-zinc-950/80 text-xs font-medium text-emerald-400 backdrop-blur"}
                    >
                        <span className={"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}></span>
                        Live
                    </span>
                )}
            </figure>
            <div className={"flex items-center justify-between gap-4"}>
                <div>
                    <h3
                        className={"title-1 mb-3"}
                    >
                        {title}
                    </h3>
                    <div className={"flex flex-wrap items-center gap-2"}>
                        {tags.map((label) => (
                            <span
                                key={label}
                                className={"h-9 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"}
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
                <div className={"flex flex-col gap-2 shrink-0"}>
                    <div
                        className={"w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950"}
                        title={liveUrl ? "Open live demo" : "View source"}
                    >
                        <span
                            className={"material-symbols-rounded"}
                            aria-hidden={true}
                        >
                            arrow_outward
                        </span>
                    </div>
                    {liveUrl && sourceUrl && (
                        // Sits above the stretched card link so it gets its own click
                        <a
                            href={sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={"relative z-10 w-11 h-11 rounded-lg grid place-items-center " +
                                "bg-zinc-50/5 text-zinc-300 hover:bg-zinc-50/10 transition-colors"}
                            title="View source on GitHub"
                            aria-label={`${title} source code`}
                        >
                            <span className={"material-symbols-rounded"} aria-hidden={true}>
                                code
                            </span>
                        </a>
                    )}
                </div>
            </div>
            <a
                href={primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={"absolute inset-0"}
                aria-label={liveUrl ? `Open ${title} live demo` : `${title} source code`}
            ></a>
        </div>
    );
};
ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveUrl: PropTypes.string,
    sourceUrl: PropTypes.string,
    classes: PropTypes.string,
}
export default ProjectCard;
