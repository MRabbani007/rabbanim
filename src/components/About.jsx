import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="about"
      className="w-full min-h-screen flex flex-col justify-center items-center py-4 dark:bg-zinc-900 bg-slate-200 text-zinc-900 dark:text-gray-300 duration-500"
    >
      <div className="w-full">
        <div className="max-w-[1000px] w-full mx-auto">
          <p
            className="text-left text-4xl pb-2 pl-4 mb-2 text-bold px-4 border-b-4 border-yellow-500"
            data-aos="fade-left"
          >
            About
          </p>
        </div>
        <div className="max-w-[1000px] w-full mx-auto grid sm:grid-cols-2 grid-cols-1 gap-8">
          <p
            className="text-left text-4xl font-normal px-4"
            data-aos="fade-right"
          >
            Mission-driven engineer with a passion for thoughtful UI design and
            a futuristic user experience
          </p>
          <div className="text-justify px-4 text-2xl">
            <p className="py-2" data-aos="fade-left">
              Motivated individual with a passion for software development
              aspiring to build innovative and cutting-edge business solutions
              for a refined user experience.
            </p>
            <p className="py-2" data-aos="fade-left">
              Diligent Electrical & Computer Engineer with 8 years of experience
              in oil & gas mega projects and the skills to complete work in a
              well-organized and professional manner.
            </p>
            <p className="py-2" data-aos="fade-left">
              Experienced in working with small and large teams of diverse
              backgrounds across multiple companies.
            </p>
            {/* <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize for creating software
              for clients ranging from individuals and small buisnesses all the
              way to large enterprise corporations. What would you do if you had
              a softare expert at your fingertips?
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
