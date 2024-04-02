import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import SkillsSoft from "./components/SkillsSoft";
import Experience from "./components/Experience";

import "./index.css";
import "./styles/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-3 sm:px-2 px-0 bg-slate-200 text-zinc-950 dark:bg-zinc-950 dark:text-gray-300 duration-500 pb-24">
        <div name="home" className="section-container pt-12">
          <Home />
        </div>
        <div name="about" className="section-container pt-12">
          <About />
        </div>
        <div name="skills" className="section-container pt-24">
          <Skills />
        </div>
        <div className="section-container">
          <SkillsSoft />
        </div>
        <div name="work" className="section-container pt-24">
          <Work />
        </div>
        <div name="experience" className="section-container pt-24">
          <Experience />
        </div>
        <div name="contact" className="section-container pt-24">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
