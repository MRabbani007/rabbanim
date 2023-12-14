import React, { useEffect } from "react";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";
// Imported Components
import ExperienceItem from "./ExperienceItem";
import { experience } from "../data/experience";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-slate-200 text-zinc-900 dark:bg-zinc-900 dark:text-gray-300 duration-500"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 h-full">
        <p
          className="w-fit text-4xl py-4 px-4 my-4 border-b-4 border-yellow-500"
          data-aos="fade-left"
        >
          Experience
        </p>
        {/* <p className="py-4">These are the technologies that I work with</p> */}
        {experience.map((item, index) => (
          <ExperienceItem item={item} key={"exp-" + index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
