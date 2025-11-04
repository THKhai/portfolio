/**
 * @Copyrigt 2025 KhaiTR
 * @license Apache-2.0
 * */

/**
 * Node modules
 * */


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
    return (
        <>{/* React Fragment */}
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
        </>
    )
}
export default App