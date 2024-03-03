import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { skills_technical } from "../data/skills";

const Skills = () => {
  useEffect(() => {
    // Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      name="skills"
      className="w-full min-h-screen flex flex-col justify-center bg-slate-200 text-zinc-900 dark:bg-zinc-900 dark:text-gray-300 duration-500"
    >
      {/* Container */}
      <div className="section-container">
        <h2
        // data-aos="fade-right"
        >
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-center skills-container">
          {skills_technical.map((skill, index) => {
            return (
              <div
                key={index}
                className="shadow-md shadow-slate-500 w-32 skill-card p-3"
                // data-aos="flip-left"
              >
                <img
                  className="w-20 mx-auto py-2"
                  src={skill.image}
                  alt={skill.name}
                  title={skill.name}
                />
                <p className="my-2 font-mono">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
