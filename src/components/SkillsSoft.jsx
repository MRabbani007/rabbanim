import React, { useEffect } from "react";

// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";
import { skills_soft } from "../data/skills";

// Imported Media

const SkillsSoft = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section name="skills-soft" className="">
      <div className="max-w-[1000px] mx-auto p-4 justify-center w-full h-full">
        <h2
        // data-aos="fade-right"
        >
          Soft Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-center skills-container">
          {skills_soft.map((skill, index) => {
            return (
              <div
                key={index}
                className="shadow-md shadow-slate-500 w-44 skill-card"
                // data-aos="flip-right"
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

export default SkillsSoft;
