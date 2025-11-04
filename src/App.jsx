/**
 * @Copyrigt 2025 KhaiTR
 * @license Apache-2.0
 * */

/**
 * Node modules
 * */
import ReactLenis from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 * */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 * */
import Header from './components/Header.jsx';
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import Work from "./components/Work.jsx";
import Review from "./components/Review.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App =  () => {

    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up');

        elements.forEach((el) => {
            gsap.fromTo(el, {
                y: 14,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                }
            })
        })
    });
    return (
        <ReactLenis root>
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Skill/>
                <Work/>
                <Review/>
                <Contact/>
                <Footer/>
            </main>
        </ReactLenis>
    )
}
export default App