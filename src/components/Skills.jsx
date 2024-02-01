import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

// Imported Media
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";
import GitHub from "../assets/github.png";
import AutoCad from "../assets/autocad.png";
import PhotoShop from "../assets/photoshop.png";
import Trello from "../assets/trello.png";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="skills"
      className="w-full min-h-screen flex flex-col justify-center bg-slate-200 text-zinc-900 dark:bg-zinc-900 dark:text-gray-300 duration-500"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 w-full h-full">
        <p
          className="text-4xl py-4 px-4 mx-4 w-fit border-b-4 border-yellow-500"
          data-aos="fade-right"
        >
          Skills
        </p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 skills-container">
          <div
            className="shadow-md shadow-slate-500   skill-card"
            data-aos="flip-left"
          >
            <img className="w-20 mx-auto py-2" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div
            className="shadow-md shadow-slate-500   skill-card"
            data-aos="flip-left"
          >
            <img className="w-20 mx-auto py-2" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div
            className="shadow-md shadow-slate-500   skill-card"
            data-aos="flip-left"
          >
            <img
              className="w-20 mx-auto py-2"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div
            className="shadow-md shadow-slate-500   skill-card"
            data-aos="flip-left"
          >
            <img className="w-20 mx-auto py-2" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div
            className="shadow-md shadow-slate-500   skill-card"
            data-aos="flip-left"
          >
            <img className="w-20 mx-auto py-2" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div
            className="shadow-md shadow-slate-500   skill-card"
            data-aos="flip-left"
          >
            <img className="w-20 mx-auto py-2" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div
            className="shadow-md shadow-slate-500   skill-card"
            data-aos="flip-left"
          >
            <img className="w-20 mx-auto py-2" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div
            className="shadow-md shadow-slate-500 skill-card"
            data-aos="flip-left"
          >
            <img
              className="w-20 mx-auto py-2"
              src={Bootstrap}
              alt="HTML icon"
            />
            <p className="my-4">BOOTSTRAP</p>
          </div>
          <div
            className="shadow-md shadow-slate-500 skill-card"
            data-aos="flip-left"
          >
            <img className="w-20 mx-auto py-2" src={Trello} alt="HTML icon" />
            <p className="my-4">TRELLO</p>
          </div>
          <div
            className="shadow-md shadow-slate-500 skill-card"
            data-aos="flip-left"
          >
            <img className="w-20 mx-auto py-2" src={AutoCad} alt="HTML icon" />
            <p className="my-4">AUTOCAD</p>
          </div>
          <div
            className="shadow-md shadow-slate-500 skill-card"
            data-aos="flip-left"
          >
            <img
              className="w-20 mx-auto py-2"
              src={PhotoShop}
              alt="HTML icon"
            />
            <p className="my-4">PHOTOSHOP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
