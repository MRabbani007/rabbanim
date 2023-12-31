import React, { useEffect } from "react";

// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

// Imported Media
import Communication from "../assets/communication.png";
import LeaderShip from "../assets/leadership.png";
import Prioritize from "../assets/prioritize.png";
import Decision from "../assets/decision.png";
import TimeManagement from "../assets/time-manage.png";
import Scrum from "../assets/scrum.png";
import ProjectManagement from "../assets/project-manage.png";
import SoftwareTesting from "../assets/software-testing.png";

const SkillsSoft = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="skills-soft"
      className="w-full min-h-screen flex flex-col justify-center bg-slate-200 text-zinc-900 dark:bg-zinc-900 dark:text-gray-300 duration-500"
    >
      <div className="max-w-[1000px] mx-auto p-4 justify-center w-full h-full">
        <p
          className="w-fit text-4xl py-4 px-4 border-b-4 border-yellow-500"
          data-aos="fade-right"
        >
          Soft Skills
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="flip-right"
          >
            <img className="w-20 mx-auto py-2" src={Scrum} alt="HTML icon" />
            <p className="my-4">Agile Scrum Methodologies</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="flip-right"
          >
            <img
              className="w-20 mx-auto py-2"
              src={ProjectManagement}
              alt="HTML icon"
            />
            <p className="my-4">Technical Program Management</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="flip-right"
          >
            <img
              className="w-20 mx-auto py-2"
              src={SoftwareTesting}
              alt="HTML icon"
            />
            <p className="my-4">Software Testing</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="flip-right"
          >
            <img
              className="w-20 mx-auto py-2"
              src={Communication}
              alt="HTML icon"
            />
            <p className="my-4">Effective Communication</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="flip-right"
          >
            <img
              className="w-20 mx-auto py-2"
              src={LeaderShip}
              alt="HTML icon"
            />
            <p className="my-4">Team Leadership & Supervision</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="flip-right"
          >
            <img
              className="w-20 mx-auto py-2"
              src={TimeManagement}
              alt="HTML icon"
            />
            <p className="my-4">Time Management</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="flip-right"
          >
            <img className="w-20 mx-auto py-2" src={Decision} alt="HTML icon" />
            <p className="my-4">Decision Making</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="flip-right"
          >
            <img
              className="w-20 mx-auto py-2"
              src={Prioritize}
              alt="HTML icon"
            />
            <p className="my-4">Prioritization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSoft;
