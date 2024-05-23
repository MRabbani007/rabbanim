import React, { useEffect } from "react";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";
// Imported Components
import ExperienceItem from "./ExperienceItem";
import { experience } from "../data/experience";
import ExperienceBlock from "./ExperienceBlock";

const Experience = () => {
  useEffect(() => {
    // Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="dark:bg-zinc-950">
      <h2
      // data-aos="fade-left"
      >
        Experience
      </h2>
      <div className="flex flex-col gap-0">
        {experience.map((item, index) => (
          <ExperienceBlock item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
