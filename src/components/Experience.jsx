import React, { useEffect } from "react";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";
// Imported Components
import ExperienceItem from "./ExperienceItem";
import { experience } from "../data/experience";

const Experience = () => {
  useEffect(() => {
    // Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      name="experience"
      className="bg-slate-200 text-zinc-900 dark:bg-zinc-900 dark:text-gray-300 duration-500"
    >
      {/* Container */}
      <div className="section-container">
        <h2
        // data-aos="fade-left"
        >
          Experience
        </h2>
        <div className="flex flex-col gap-10">
          {experience.map((item, index) => (
            <ExperienceItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
