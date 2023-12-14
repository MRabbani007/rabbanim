import React, { useEffect, useState } from "react";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";
// Imported Icons
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// Imported Components
import { Link } from "react-scroll";
// Imported Media
import Logo from "../assets/logo1.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-zinc-950  text-gray-300 z-50">
      {/* bg-[#091220] */}
      <div className="text-yellow-500 text-3xl" data-aos="fade-down">
        MR
        {/* <img
          src={Logo}
          alt="Logo Image"
          className=""
          style={{ width: "80px", height: "70px" }}
        /> */}
      </div>
      {/* Menu */}
      <ul className="hidden md:flex" data-aos="fade-down">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10"
        data-aos="fade-down"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-zinc-950 flex flex-col justify-center items-center"
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
        className="hidden lg:flex fixed flex-col top-[35%] left-0"
        data-aos="fade-right"
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
              href="#"
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
