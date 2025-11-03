/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */


import React from 'react';
const aboutItems = [
    {
        label: 'Project done',
        number: 45
    },
    {
        label: 'Years of experience',
        number: 10
    }
];
const About = () => {
    return (
        <section
            id="about"
            className={"section"}
        >
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-400 mb-4 md:mb-8 md:text-xl md:max-w-[70ch]">
                        Welcome! My name is Tran Hoang Khai, I recently graduated with a degree in Information Systems from VNUHCM-University of Science and am seeking full-time
                        opportunities as a Back-end Developer. I have hands-on experience building back-end systems using C#, ASP.NET Core,
                        FastAPI, and Entity Framework Core for .NET and SQLAlchemy/SQLModel for FastAPI, with practical experience in HRM
                        systems and e-commerce platforms.<br/>
                        My current goal is to build a long-term commitment with the company in order to understand the work environment and
                        gain valuable experience. I also aim to expand my knowledge about career development paths and future opportunities for
                        personal growth in the IT field
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label, number},key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className={"text-2xl font-bold md:text-4xl"}>{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className="texxt=sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                        <img
                            src="/logo.png"
                            alt={"logo"}
                            width={30}
                            height={30}
                            className={"ml-auto md:w-[40px] md:h-[40px]"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;