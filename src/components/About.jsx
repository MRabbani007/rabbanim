import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    // Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      name="about"
      className="dark:bg-zinc-900 bg-slate-200 text-zinc-900 dark:text-gray-300 duration-500"
    >
      <div className="section-container w-fit mx-auto">
        <h2
        // data-aos="fade-left"
        >
          About
        </h2>
        <div className="font-light mx-auto px-2 flex flex-col lg:flex-row">
          <p
            className="flex-1 text-left md:text-4xl text-3xl font-normal px-2"
            // data-aos="fade-right"
          >
            Mission-driven engineer with a passion for thoughtful UI design and
            a futuristic user experience
          </p>
          <div className="flex-1 text-justify px-2 text-xl">
            <p
              className="py-2"
              // data-aos="fade-left"
            >
              Motivated individual with a passion for software development
              aspiring to build innovative and cutting-edge business solutions
              for a refined user experience.
            </p>
            <p
              className="py-2"
              // data-aos="fade-left"
            >
              Diligent Electrical & Computer Engineer with 8 years of experience
              in oil & gas mega projects and the skills to complete work in a
              well-organized and professional manner.
            </p>
            <p
              className="py-2"
              // data-aos="fade-left"
            >
              Experienced in working with small and large teams of diverse
              backgrounds across multiple companies.
            </p>
          </div>
        </div>
      </div>
    </section>

    // {/* <p>
    //           I am passionate about building excellent software that improves
    //           the lives of those around me. I specialize for creating software
    //           for clients ranging from individuals and small buisnesses all the
    //           way to large enterprise corporations. What would you do if you had
    //           a softare expert at your fingertips?
    //         </p> */}
  );
};

export default About;
