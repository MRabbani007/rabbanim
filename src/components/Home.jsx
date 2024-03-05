import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    // Aos.init({ duration: 2000 });
  }, []);

  return (
    <section name="home" className="flex flex-col justify-center">
      {/* bg-[#0a192f] */}
      {/* Container */}
      <div className="flex flex-col justify-center w-fit mx-auto">
        <h1
          className="text-slate-500 dark:text-slate-100 duration-500"
          // data-aos="fade-up"
        >
          Mohamad Rabbani
        </h1>
        <h2
          className="text-3xl sm:text-5xl font-extralight text-slate-400"
          // data-aos="fade-up"
        >
          Electrical & Computer Engineer
          {/* I'm a Full Stack Developer */}
        </h2>
        <p
          className="py-4 max-w-[700px] text-2xl font-light text-slate-700 dark:text-slate-400 duration-500"
          // data-aos="flip-up"
        >
          I'm an aspiring Full Stack Developer specializing in building
          exceptional digital experiences. Currently I'm focused on building
          responsive full-stack web applications
        </p>
        <div>
          <button
            className=" text-xl group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-500 border-slate-700 dark:text-slate-100 text-slate-700 duration-500"
            // data-aos="fade-up"
          >
            <Link to="work" smooth={true} duration={500}>
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 inline" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
