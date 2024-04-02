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

  return (
    <section className="">
      <h2
      // data-aos="fade-left"
      >
        Work
      </h2>
      <div className="flex flex-wrap justify-center w-full gap-3 mx-auto">
        {Array.isArray(projects) &&
          projects.map((project, index) => {
            return <Slider project={project} key={index} />;
          })}
      </div>
    </section>
  );
};

export default Work;
