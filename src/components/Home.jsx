import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="home"
      className="flex items-center bg-zinc-900 min-h-screen w-full"
    >
      {/* bg-[#0a192f] */}
      {/* Container */}
      <div className="flex flex-col justify-center h-full max-w-[1000px] mx-auto p-8">
        {/* <p className="text-pink-600">Hi, my name is</p> */}
        <h1
          className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]"
          data-aos="fade-up"
        >
          Mohamad Rabbani
        </h1>
        <h2
          className="text-3xl sm:text-5xl font-normal text-[#8892b0]"
          data-aos="fade-up"
        >
          Electrical & Computer Engineer
          {/* I'm a Full Stack Developer */}
        </h2>
        <p
          className="py-4  max-w-[700px] font-light text-[#8892b0]"
          data-aos="flip-up"
        >
          I'm an aspiring Full Stack Developer specializing in building
          exceptional digital experiences. Currently I'm focused on building
          responsive full-stack web applications
        </p>
        <div>
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-500"
            data-aos="fade-up"
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
    </div>
  );
};

export default Home;
