import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import SkillsSection from "../components/SkillsSection"

const Mainpage = () => {
    return (
        <div>
            <Hero />
            <About />
            <Projects />
            <SkillsSection />
            <Contact />
        </div>
    )
}

export default Mainpage
