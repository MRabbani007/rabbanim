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
      <div className="bg-slate-200 text-zinc-900 dark:bg-zinc-900 dark:text-gray-300 duration-500">
        <Home />
        <About />
        <Skills />
        <SkillsSoft />
        <Work />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default App;
