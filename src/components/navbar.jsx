import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import logo from "../assets/logo.webp";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md shadow-gray-500 dark:shadow-none dark:bg-gray-900/40 backdrop-blur-2xl flex items-center justify-between md:justify-center p-4 z-999 rounded-[52px] md:rounded-full max-w-2xl md:max-w-5xl mx-auto border-amber-50 top-5 fixed left-0 right-0">
      <div className="container mx-auto px-4 hidden md:block">
        <div className="flex items-center justify-between h-10">
          <div className="dark:text-white font-bold text-xl flex items-center gap-4">
            <a href="/">
              <img src={logo} alt="Logo" className="w-8 h-8" />
            </a>
            <div className="text-center">
              <h4>
                <a href="/" className="dark:text-white">
                  {" "}
                  Abhinav Verma
                </a>
              </h4>
              <div className="flex justify-center items-center gap-px">
                <div className="p-1 rounded-full bg-black dark:bg-gray-300 w-px h-px "></div>
                <div className="w-1/4 bg-black dark:bg-gray-300 h-0.5 rounded-4xl"></div>
                <div>
                  <p className="text-[8px] dark:text-white">Portfolio 3.0</p>
                </div>
                <div className="w-1/4 bg-black dark:bg-gray-300 h-0.5 rounded-4xl"></div>
                <div className="p-1 rounded-full bg-black dark:bg-gray-300 w-px h-px "></div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#about"
                className="dark:text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#skills"
                className="dark:text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="dark:text-white hover:text-purple-700  transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="dark:text-white hover:text-purple-700  transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Experience
              </a>
              <a
                href="#message"
                className="dark:text-white hover:text-purple-700  transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Message
              </a>
            </div>
          </div>
          <div className="ml-4 gap-2 flex items-center justify-center">
            <button
              onClick={toggleTheme}
              className="transition-transform duration-300 hover:scale-110"
            >
              {theme === "dark" ? (
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M12 2V4"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M12 20V22"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M4 12L2 12"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M22 12L20 12"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M19.7778 4.22266L17.5558 6.25424"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M4.22217 4.22266L6.44418 6.25424"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M6.44434 17.5557L4.22211 19.7779"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M19.7778 19.7773L17.5558 17.5551"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </g>
                </svg>
              ) : (
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              )}
            </button>
            <button className="text-white bg-purple p-4 px-3 py-2 rounded-full text-sm font-medium hover:transform hover:scale-105 transition-transform duration-300">
              Hire Me
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full">
        <div className="flex items-center justify-between gap-14 h-12 pl-4 pr-4">
          <div className=" text-white font-bold text-xl flex items-center gap-4">
            <a href="/">
              <img src={logo} alt="Logo" className="w-8 h-8" />
            </a>
            <div className="text-center ">
              <h4>
                <a href="/" className="text-white">
                  Abhinav Verma
                </a>
              </h4>
              <div className="flex justify-center items-center gap-px">
                <div className="p-1 rounded-full bg-gray-300 w-px h-px "></div>
                <div className="w-1/4 bg-gray-300 h-0.5 rounded-4xl"></div>
                <div>
                  <p className="text-[8px] text-white">Portfolio 3.0</p>
                </div>
                <div className="w-1/4 bg-gray-300 h-0.5 rounded-4xl"></div>
                <div className="p-1 rounded-full bg-gray-300 w-px h-px "></div>
              </div>
            </div>
          </div>

          <div className=" flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="transition-transform duration-300 hover:scale-110"
            >
              {theme === "dark" ? (
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M12 2V4"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M12 20V22"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M4 12L2 12"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M22 12L20 12"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M19.7778 4.22266L17.5558 6.25424"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M4.22217 4.22266L6.44418 6.25424"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M6.44434 17.5557L4.22211 19.7779"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M19.7778 19.7773L17.5558 17.5551"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </g>
                </svg>
              ) : (
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              )}
            </button>
            <button onClick={toggleMenu}>
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 7L7 7M20 7L11 7"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M20 17H17M4 17L13 17"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M4 12H7L20 12"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 pb-4 border-t border-gray-700 pt-4 rounded-4xl">
            <div className="flex flex-col space-y-3">
              <a
                href="#about"
                onClick={toggleMenu}
                className="text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={toggleMenu}
                className="text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#experience"
                onClick={toggleMenu}
                className="text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Experience
              </a>
              <a
                href="#skills"
                onClick={toggleMenu}
                className="text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
              <button className="text-white bg-purple p-4 px-3 py-2 rounded-full text-sm font-medium hover:transform hover:scale-105 transition-transform duration-300 w-full">
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
