/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */

/**
 * Components
 */

import {ButtonPrimary,ButtonOutline} from "./Button.jsx";
import React from 'react';

const Hero = () => {
    const Hero_content = [
        {
            Slogan:'Building the future of technology'
        }
    ]
    return (
        <section
            id="home"
            className="flex items-center justify-center gap-8 px-4 pt-28 lgg:pt-36"
        >
            <div
                className="container items-center lg:grid lg:grid-cols-2 lg:gap-10"
            >
                <div>
                    <div
                        className="flex items-center gap-3"
                    >
                        <figure
                            className="img-box w-9 h-9 rounded-lg"
                        >
                            <img
                                src="/avatar-1.jpg"
                                alt="Hoang Khai portrait"
                                width={40}
                                height={40}
                                className="image-cover"
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        {Hero_content[0].Slogan}
                    </h2>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label="Dowload CV"
                            icon="download"
                        />

                        <ButtonOutline
                            label="Sroll down"
                            href="#about"
                            icon="arrow_downward"
                        />
                    </div>
                </div>
                <div
                    className="hidden lg:block"
                >
                    <figure
                        className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25%
                        via-sky-400/30 to-65% rounded-[60px] overflow-hidden"
                    >
                        <img
                            src="/avatar-Hero.png"
                            alt="Hoang Khai"
                            width={656}
                            height={800}
                            className="image-cover"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;