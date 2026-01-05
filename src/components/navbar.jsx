import React from "react";
import logo from "../assets/logo.webp";
function Navbar() {
  return (
    <nav className="bg-gray-900 flex items-center justify-center p-4 z-999 rounded-full max-w-5xl mx-auto border-amber-50 top-5 fixed left-0 right-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10">
          <div className=" text-white font-bold text-xl flex items-center gap-4">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <div className="text-center">
              <h4>
                <a href="/"> Abhinav Verma</a>
              </h4>
              <div className="flex justify-center items-center gap-px">
                <div className="p-1 rounded-full bg-gray-300 w-px h-px "></div>
                <div className="w-1/4 bg-gray-300 h-0.5 rounded-4xl"></div>
                <div>
                  <p className="text-[8px] text-gray-300">Portfolio 3.0</p>
                </div>
                <div className="w-1/4 bg-gray-300 h-0.5 rounded-4xl"></div>
                <div className="p-1 rounded-full bg-gray-300 w-px h-px "></div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="ml-4 gap-2 flex items-center justify-center">
            <button>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M12 2V4"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M12 20V22"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M4 12L2 12"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M22 12L20 12"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M19.7778 4.22266L17.5558 6.25424"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M4.22217 4.22266L6.44418 6.25424"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M6.44434 17.5557L4.22211 19.7779"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M19.7778 19.7773L17.5558 17.5551"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
            <button className="text-white bg-purple p-4 px-3 py-2 rounded-full text-sm font-medium hover:transform hover:scale-105 transition-transform duration-300">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
