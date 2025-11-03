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

const App =  () => {
    return (
        <>{/* React Fragment */}
            <Header/>
            <main>
                <Hero/>
                <About/>
            </main>
        </>
    )
}
export default App