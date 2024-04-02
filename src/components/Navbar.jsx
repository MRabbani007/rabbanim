import { useEffect, useState } from "react";
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
    <menu className="dark:bg-black dark:text-gray-300 bg-slate-300 text-zinc-950">
      <div
        className="text-yellow-500 text-3xl flex name-container"
        // data-aos="fade-down"
      >
        M<div className="overflow-hidden whitespace-nowrap name">ohamad </div>R
        <div className="overflow-hidden whitespace-nowrap name">abbani</div>
      </div>
      {/* container for aligning to the right */}
      <div className="flex justify-center items-center">
        {/* Menu */}
        <ul
          className="hidden lg:flex text-xl"
          // data-aos="fade-down"
        >
          <li className="hover:text-yellow-500 duration-500">
            <Link
              to="home"
              className="nav-link"
              smooth={true}
              duration={500}
              spy={true}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-yellow-500 duration-500">
            <Link
              to="about"
              className="nav-link"
              smooth={true}
              duration={500}
              spy={true}
            >
              About
            </Link>
          </li>
          <li className="hover:text-yellow-500 duration-500">
            <Link to="skills" className="nav-link" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="hover:text-yellow-500 duration-500">
            <Link to="work" className="nav-link" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="hover:text-yellow-500 duration-500">
            <Link
              to="experience"
              className="nav-link"
              smooth={true}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className="hover:text-yellow-500 duration-500">
            <Link
              to="contact"
              className="nav-link"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Hamburger Menu */}
        <div
          onClick={handleClick}
          className="lg:hidden text-3xl z-10"
          // data-aos="fade-down"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Dark Mode */}
        <div className="ml-3">
          <FaMoon
            className="inline-block text-2xl cursor-pointer"
            onClick={() => toggleDarkMode()}
            // data-aos="fade-down"
          />
        </div>
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden fixed -top-[3000px]"
            : "fixed top-0 left-0 right-0 bottom-0 dark:bg-zinc-950 dark:text-slate-100 bg-slate-200 text-zinc-950 flex flex-col justify-evenly items-center duration-100 mobile-menu"
        }
      >
        <li>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClick}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li>
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
              rel="noopener noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center pl-6 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/MRabbani007"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center pl-6 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="mailto: mrabbani@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center pl-6 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="./Mohamad_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </menu>
  );
};

export default Navbar;
