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
    <section name="skills-soft" className="dark:bg-zinc-950">
      <div className=" mx-auto">
        <h2
        // data-aos="fade-right"
        >
          Soft Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 text-center skills-container">
          {skills_soft.map((skill, index) => {
            return (
              <div
                key={index}
                className="rounded-md shadow-md shadow-slate-500 w-40 skill-card"
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
