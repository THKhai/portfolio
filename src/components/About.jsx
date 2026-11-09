/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */


import React from 'react';
// Figures from the EMERGE app role (see CV)
const aboutItems = [
    { number: '86', suffix: '', label: 'Tickets delivered' },
    { number: '90.7', suffix: '%', label: 'On-time delivery' },
    { number: '6', suffix: '', label: 'Agile sprints' },
];
const About = () => {
    return (
        <section
            id="about"
            className={"section"}
        >
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-400 mb-4 md:mb-8 md:text-xl md:max-w-[70ch]">
                        Hi, I&apos;m Tran Hoang Khai, a Software Engineer with hands-on experience building and optimizing
                        enterprise systems using C#, ASP.NET and SQL Server. At EMERGE app I delivered features and fixes on a
                        multi-tenant ERP platform, with strengths in debugging, database optimization and system integrations.<br/>
                        I graduated in Information Systems from VNUHCM - University of Science, and I&apos;m looking to grow
                        further into scalable system design and distributed architectures.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label, number, suffix}) => (
                                <div key={label}>
                                    <div className="flex items-center md:mb-2">
                                        <span className={"text-2xl font-bold md:text-4xl"}>{number}</span>
                                        {suffix && <span className="text-sky-400 font-semibold md:text-3xl">{suffix}</span>}
                                    </div>
                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                        <img
                            src="/logo.png"
                            alt={"logo"}
                            width={70}
                            height={70}
                            className={"ml-auto md:w-[40px] md:h-[40px]"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;