import React from "react";
import Slider from "./Slider";

{
  /* container for projects */
}
<div className="flex flex-col items-center">
  {/* Gird Item */}
  <TodoApp />
  {project.map((item, index) => (
    <div
      key={index}
      // style={{ backgroundImage: `url(${item.image})` }}
      className="relative shadow-lg shadow-[#040c16] group container rounded-md 
  flex justify-center text-center items-center m-2 min-w-[350px] w-[45%] h-[300px]"
      // data-aos="flip-right"
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
</div>;

const TodoApp = () => {
  return <div className="flex-1 w-full mx-auto"></div>;
};

export default TodoApp;
