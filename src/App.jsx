/**
 * @Copyrigt 2025 KhaiTR
 * @license Apache-2.0
 * */

/**
 * Components
 * */
import Header from './components/Header.jsx';
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import Work from "./components/Work.jsx";
const App =  () => {
    return (
        <>{/* React Fragment */}
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Skill/>
                <Work/>
            </main>
        </>
    )
}
export default App