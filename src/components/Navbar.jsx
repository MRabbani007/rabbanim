import React, { useEffect, useState } from "react";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";
// Imported Icons
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaStar } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// Imported Components
import { Link } from "react-scroll";
// Imported Media
import Logo from "../assets/logo1.png";

const Navbar = () => {
  const [dark, setDark] = useState(true);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const toggleDarkMode = () => {
    if (dark) {
      document.body.classList.remove("dark");
      setDark(false);
    } else {
      document.body.classList.add("dark");
      setDark(true);
    }
  };

  useEffect(() => {
    // Aos.init({ duration: 2000 });
    document.body.classList.add("dark");
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 z-50 h-[80px] dark:bg-zinc-950 dark:text-gray-300 bg-slate-300 text-zinc-900 duration-500">
      {/* bg-[#091220] */}
      <div
        className="text-yellow-500 text-3xl"
        // data-aos="fade-down"
      >
        MR
        {/* <img
          src={Logo}
          alt="Logo Image"
          className=""
          style={{ width: "80px", height: "70px" }}
        /> */}
      </div>
      {/* container for aligning to the right */}
      <div className="flex justify-center items-center">
        {/* Menu */}
        <ul
          className="hidden lg:flex text-xl"
          // data-aos="fade-down"
        >
          <li className="hover:text-yellow-500 duration-300">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-yellow-500 duration-300">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-yellow-500 duration-300">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="hover:text-yellow-500 duration-300">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="hover:text-yellow-500 duration-300">
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className="hover:text-yellow-500 duration-300">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        {/* Hamburger Menu */}
        <div
          onClick={handleClick}
          className="lg:hidden text-3xl z-10"
          data-aos="fade-down"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Dark Mode */}
        <div className="mx-4">
          <FaMoon
            className="inline-block text-2xl cursor-pointer"
            onClick={() => toggleDarkMode()}
            data-aos="fade-down"
          />
        </div>
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-screen h-screen dark:bg-zinc-950 dark:text-slate-100 bg-slate-200 text-zinc-950 flex flex-col justify-center items-center"
        }
      >
        {/* bg-[#0a192f] */}
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Icons */}
      <div
        className="hidden lg:flex fixed lg:flex-col top-[35%] left-0"
        // data-aos="fade-right"
      >
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center pl-6 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/mohamadrabbani/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center pl-6 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="#"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center pl-6 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="mailto: mrabbani@outlook.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center pl-6 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="./Mohamad_CV.pdf"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
