import React, { useEffect } from "react";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

const ExperienceItem = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 my-10">
      {/* Left Column: Company & Project IMG */}
      <div className="">
        <div
          className="flex justify-center items-center py-2"
          data-aos="fade-right"
        >
          <img
            src={item.companyLogo}
            alt="Company Logo"
            className="w-12 mr-2"
          />
          <p className="text-xl">{item.company}</p>
        </div>
        <div data-aos="flip-right" className="">
          <img src={item.image} alt="" className="object-fill w-full" />
          <p className="text-center text-xl p-2 bg-slate-400 dark:text-zinc-900 duration-500">
            {item.project}
          </p>
        </div>
      </div>
      {/* Right Column: Position & Responsibilities */}
      <div className="sm:my-0 my-3" data-aos="fade-left">
        <p className="text-3xl">{item.position}</p>
        <p className="text-2xl">{item.period}</p>
        {item.responsibilities.map((resp, index) => (
          <p
            className="p-2 my-2 border-[1px] border-zinc-800 dark:border-gray-100 duration-500"
            key={"expitem-" + index}
          >
            {resp}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
