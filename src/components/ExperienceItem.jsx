import React, { useEffect } from "react";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

const ExperienceItem = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 my-10">
      <div>
        <div
          className="flex justify-center items-center py-2"
          data-aos="fade-right"
        >
          <img
            src={item.companyLogo}
            alt="Company Logo"
            className="inline w-12 mx-2"
          />
          <p className="text-xl">{item.company}</p>
        </div>
        <div data-aos="flip-right">
          <img src={item.image} alt="" />
          <p className="text-center text-xl p-2 bg-slate-400 dark:text-zinc-900 duration-500">
            {item.project}
          </p>
        </div>
      </div>
      <div className="sm:my-0 my-3" data-aos="fade-left">
        <p className="text-center text-3xl">{item.position}</p>
        <p className="text-center text-2xl">{item.period}</p>
        {item.responsibilities.map((resp, index) => (
          <p
            className="border-[1px] p-2 my-2 mx-4 border-zinc-800 dark:border-gray-100 duration-500"
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
