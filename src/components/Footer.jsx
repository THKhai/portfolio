/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */

/**
 * Components
 */
import {ButtonPrimary} from "./Button.jsx";

/**
 * Node modules
 */

import React from 'react';

const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://www.github.com/codewithsadee-org'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
        label: 'Twitter X',
        href: 'https://x.com/codewithsadee_'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/codewithsadee'
    },
    {
        label: 'CodePen',
        href: 'https://codepen.io/codewithsadee'
    }
];

const Footer = () => {
    return (
        <footer className={"section"}>
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className={"headline-2 mb-8 lg:max-w-[12ch] reveal-up"}>
                            let&apos;s work together today
                        </h2>
                        <ButtonPrimary
                            href="mailto:thkhai0912@gmail.com"
                            label={"Start project"}
                            icon="chevron_right"
                            classes={"reveal-up"}
                        />
                    </div>
                    <div className={"grid grid-cols-2 gap-4 lg:pl-20"}>
                        <div>
                            <p className={"mb-2 reveal-up"}>
                                SiteMap
                            </p>
                            <ul>
                                {sitemap.map(({label,href},key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            className={"block text0-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"}
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className={"mb-2 reveal-up"}>
                                Socials
                            </p>
                            <ul>
                                {socials.map(({label,href},key) => (
                                    <li key={key}>
                                        <a href={href}
                                           target={"_blank"}
                                           className="block text0-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"flex items-center justify-between pt-10 mb-8"}>
                    <a
                        href ="/"
                        className={"logo"}
                    >
                        <img
                            src="/logo.png"
                            alt="logo"
                            height={40}
                            width={40}
                        />
                    </a>
                    <p className={"text-zinc-500 text-sm"}>
                        &copy; 2025 <span className={"text-zinc-200"}>KhaiTR</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;