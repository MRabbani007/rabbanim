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
    <section name="work" className="">
      <div className="section-container">
        <h2
        // data-aos="fade-left"
        >
          Work
        </h2>
        <div className="w-full mx-auto">
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
