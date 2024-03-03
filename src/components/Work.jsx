import { useEffect } from "react";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";
// Imported Components
import Slider from "./Slider.jsx";
import { projects } from "../data/projects.js";

const Work = () => {
  useEffect(() => {
    // Aos.init({ duration: 2000 });
  }, []);

  // projects file
  const project = []; // data;
  //setProject(data);
  // comment
  return (
    <section
      name="work"
      className="text-zinc-900 bg-slate-200 dark:text-gray-300 dark:bg-zinc-900 duration-500"
    >
      <div className="section-container">
        <h2
        // data-aos="fade-left"
        >
          Work
        </h2>
        <div className="w-fit mx-auto">
          {Array.isArray(projects) &&
            projects.map((project, index) => {
              return <Slider project={project} key={index} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Work;
