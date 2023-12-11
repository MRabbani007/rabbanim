import React, { useEffect } from "react";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";
// Imported Components
import { data } from "../data/data.js";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // projects file
  const project = data;
  //setProject(data);
  // comment
  return (
    <div
      name="work"
      className="w-full md:min-h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto py-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl ml-3 font-bold inline border-b-4 text-gray-300 border-pink-600"
            data-aos="fade-left"
          >
            Work
          </p>
        </div>

        {/* container for projects */}
        <div className="flex flex-wrap justify-center">
          {/* grid sm:grid-cols-2 md:grid-cols-3 gap-4 */}
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              // style={{ backgroundImage: `url(${item.image})` }}
              className="relative shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center m-2 content-div min-w-[400px] w-[45%] h-[300px]"
              data-aos="flip-right"
            >
              <img
                src={item.image}
                className="absolute top-0 w-full h-full z-1"
                alt=""
              />
              {/* Hover effect for images */}
              <div className="relative w-full h-full bg-blue-600 flex flex-col justify-center items-center opacity-0 group-hover:opacity-90 z-2">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
