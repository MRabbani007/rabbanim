import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import SkillsSoft from "./components/SkillsSoft";
import Experience from "./components/Experience";
import Stars from "./components/Stars";

function App() {
  return (
    <>
      <Navbar />
      {/* <Stars /> */}
      <Home />
      <About />
      <Skills />
      <SkillsSoft />
      <Work />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
