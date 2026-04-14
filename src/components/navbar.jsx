import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import logo from "../assets/logo.webp";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollTo =
    (id, closeMenu = false) =>
    (e) => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      if (closeMenu) setIsMenuOpen(false);
    };

  return (
    <nav className="bg-gray-900/40 shadow-md shadow-gray-500 dark:shadow-none dark:bg-gray-900/40 backdrop-blur-2xl flex items-center justify-between md:justify-center ml-4 mr-4 md:mx-auto p-4 z-999 rounded-[52px] md:rounded-full max-w-2xl md:max-w-5xl mx-auto border-amber-50 top-5 fixed left-0 right-0">
      <div className="container mx-auto px-4 hidden md:block">
        <div className="flex items-center justify-between h-10">
          <div className="text-white font-bold text-xl flex items-center gap-4">
            <a href="/">
              <img src={logo} alt="Logo" className="w-8 h-8" />
            </a>
            <div className="text-center">
              <h4>
                <a href="/" className="text-white">
                  {" "}
                  Abhinav Verma
                </a>
              </h4>
              <div className="flex justify-center items-center gap-px">
                <div className="p-1 rounded-full bg-white dark:bg-gray-300 w-px h-px "></div>
                <div className="w-1/4 bg-white dark:bg-gray-300 h-0.5 rounded-4xl"></div>
                <div>
                  <p className="text-[8px] text-white">Portfolio 3.0</p>
                </div>
                <div className="w-1/4 bg-white dark:bg-gray-300 h-0.5 rounded-4xl"></div>
                <div className="p-1 rounded-full bg-white dark:bg-gray-300 w-px h-px "></div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={scrollTo("about")}
                className="text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </button>
              <button
                onClick={scrollTo("skills")}
                className="text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Skills
              </button>
              <button
                onClick={scrollTo("projects")}
                className="text-white hover:text-purple-700  transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </button>
              <button
                onClick={scrollTo("experience")}
                className="text-white hover:text-purple-700  transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Experience
              </button>
              <button
                onClick={scrollTo("message")}
                className="text-white hover:text-purple-700  transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Message
              </button>
            </div>
          </div>
          <div className="ml-4 gap-2 flex items-center justify-center">
            <button
              onClick={toggleTheme}
              className="transition-transform duration-300 hover:scale-110"
            >
              {theme === "dark" ? (
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 48 48"
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
                    <g id="day">
                      {" "}
                      <g id="day_2">
                        {" "}
                        <path
                          id="Combined Shape"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M25 9V5C25 4.44772 24.5523 4 24 4C23.4477 4 23 4.44772 23 5V9C23 9.55228 23.4477 10 24 10C24.5523 10 25 9.55228 25 9ZM24.0008 34C27.7953 34 31.2116 31.8658 32.9084 28.5468C33.1598 28.0551 33.7622 27.8602 34.254 28.1116C34.7457 28.363 34.9406 28.9655 34.6892 29.4572C32.6537 33.4387 28.5537 36 24.0008 36C17.3732 36 12.0008 30.6269 12.0008 24C12.0008 21.0466 13.0678 18.3423 14.8374 16.2516L9.85729 11.2715C9.46677 10.881 9.46677 10.2478 9.85729 9.85729C10.2478 9.46677 10.881 9.46677 11.2715 9.85729L16.2516 14.8374C18.3423 13.0674 21.0469 12 24.0008 12C30.2903 12 35.4514 16.8414 35.9597 23H43C43.5523 23 44 23.4477 44 24C44 24.5523 43.5523 25 43 25H35.0008H33C32.4477 25 32 24.5523 32 24C32 23.4477 32.4477 23 33 23H33.9514C33.4495 17.9476 29.185 14 24.0008 14C21.5993 14 19.3956 14.8466 17.6717 16.2575L18.7075 17.2933C19.098 17.6838 19.098 18.317 18.7075 18.7075C18.317 19.098 17.6838 19.098 17.2933 18.7075L16.2575 17.6718C14.847 19.3956 14.0008 21.5991 14.0008 24C14.0008 29.5224 18.4778 34 24.0008 34ZM18 24C18 27.3137 20.6863 30 24 30C24.5523 30 25 30.4477 25 31C25 31.5523 24.5523 32 24 32C19.5817 32 16 28.4183 16 24C16 23.4477 16.4477 23 17 23C17.5523 23 18 23.4477 18 24ZM25 39V43C25 43.5523 24.5523 44 24 44C23.4477 44 23 43.5523 23 43V39C23 38.4477 23.4477 38 24 38C24.5523 38 25 38.4477 25 39ZM9 25H5C4.44772 25 4 24.5523 4 24C4 23.4477 4.44772 23 5 23H9C9.55228 23 10 23.4477 10 24C10 24.5523 9.55228 25 9 25ZM33.9003 35.3145L36.7283 38.1425C37.1188 38.533 37.752 38.533 38.1425 38.1425C38.533 37.752 38.533 37.1188 38.1425 36.7283L35.3145 33.9003C34.924 33.5098 34.2908 33.5098 33.9003 33.9003C33.5098 34.2908 33.5098 34.924 33.9003 35.3145ZM12.6855 33.9003L9.85749 36.7283C9.46697 37.1188 9.46697 37.752 9.85749 38.1425C10.248 38.533 10.8812 38.533 11.2717 38.1425L14.0997 35.3145C14.4902 34.924 14.4902 34.2908 14.0997 33.9003C13.7092 33.5098 13.076 33.5098 12.6855 33.9003ZM33.9005 12.6853L36.7285 9.85729C37.119 9.46677 37.7522 9.46677 38.1427 9.85729C38.5332 10.2478 38.5332 10.881 38.1427 11.2715L35.3147 14.0995C34.9242 14.49 34.291 14.49 33.9005 14.0995C33.51 13.709 33.51 13.0758 33.9005 12.6853Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              ) : (
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 48 48"
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
                    <g id="night">
                      {" "}
                      <g id="night_2">
                        {" "}
                        <path
                          id="Combined Shape"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.7808 39.678C30.2725 41.5227 38.9355 34.9129 39.9084 25.7064C25.3849 34.6376 13.3977 22.6246 22.2943 8.08028C13.086 9.04803 6.46841 17.7148 8.31368 27.2111C9.20895 31.8246 12.2255 35.8586 16.3944 38.1053C16.8806 38.3673 17.0623 38.9738 16.8003 39.46C16.5383 39.9462 15.9318 40.1279 15.4456 39.8659C10.7538 37.3374 7.36096 32.8002 6.35035 27.5923C4.19047 16.477 12.3759 6.3517 23.4224 6.00003C24.3791 5.97168 25.0622 6.89645 24.8058 7.79733L24.6708 8.08611C15.4263 21.6734 26.3363 32.6062 39.8994 23.3282L40.1834 23.1938C41.0866 22.9297 42.0251 23.6154 41.9895 24.5754C41.6379 35.6187 31.5135 43.8013 20.3992 41.6412C19.8571 41.5359 19.503 41.0109 19.6084 40.4688C19.7137 39.9267 20.2386 39.5726 20.7808 39.678ZM12.2323 26.4109C13.1386 31.0805 16.9115 34.8534 21.5811 35.7597C22.1233 35.8649 22.4775 36.3897 22.3723 36.9319C22.267 37.4741 21.7422 37.8283 21.2001 37.7231C15.7297 36.6614 11.3306 32.2623 10.2689 26.7919C10.1637 26.2497 10.5179 25.7249 11.0601 25.6197C11.6022 25.5145 12.127 25.8687 12.2323 26.4109Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              )}
            </button>
            <a
              href="#contact"
              className="text-white bg-purple p-4 px-3 py-2 rounded-full text-sm font-medium hover:transform hover:scale-105 transition-transform duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full">
        <div className="flex items-center justify-between h-12 pl-4 pr-4">
          <div className=" text-white font-bold text-xl flex items-center gap-3 sm:gap-4">
            <a href="/">
              <img src={logo} alt="Logo" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <div className=" flex flex-col text-center align-middle">
              <a href="/" className="text-white text-sm md:text-lg">
                Abhinav Verma
              </a>
              <div className="flex justify-center items-center gap-px">
                <div className="p-0.5 rounded-full bg-gray-300 w-px h-px "></div>
                <div className="w-1/4 bg-gray-300 h-0.5 rounded-4xl"></div>
                <div>
                  <p className="text-[5px] text-white">Portfolio 3.0</p>
                </div>
                <div className="w-1/4 bg-gray-300 h-0.5 rounded-4xl"></div>
                <div className="p-0.5 rounded-full bg-gray-300 w-px h-px "></div>
              </div>
            </div>
          </div>

          <div className=" flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="transition-transform duration-300 hover:scale-110"
            >
              {theme === "dark" ? (
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 48 48"
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
                    <g id="day">
                      {" "}
                      <g id="day_2">
                        {" "}
                        <path
                          id="Combined Shape"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M25 9V5C25 4.44772 24.5523 4 24 4C23.4477 4 23 4.44772 23 5V9C23 9.55228 23.4477 10 24 10C24.5523 10 25 9.55228 25 9ZM24.0008 34C27.7953 34 31.2116 31.8658 32.9084 28.5468C33.1598 28.0551 33.7622 27.8602 34.254 28.1116C34.7457 28.363 34.9406 28.9655 34.6892 29.4572C32.6537 33.4387 28.5537 36 24.0008 36C17.3732 36 12.0008 30.6269 12.0008 24C12.0008 21.0466 13.0678 18.3423 14.8374 16.2516L9.85729 11.2715C9.46677 10.881 9.46677 10.2478 9.85729 9.85729C10.2478 9.46677 10.881 9.46677 11.2715 9.85729L16.2516 14.8374C18.3423 13.0674 21.0469 12 24.0008 12C30.2903 12 35.4514 16.8414 35.9597 23H43C43.5523 23 44 23.4477 44 24C44 24.5523 43.5523 25 43 25H35.0008H33C32.4477 25 32 24.5523 32 24C32 23.4477 32.4477 23 33 23H33.9514C33.4495 17.9476 29.185 14 24.0008 14C21.5993 14 19.3956 14.8466 17.6717 16.2575L18.7075 17.2933C19.098 17.6838 19.098 18.317 18.7075 18.7075C18.317 19.098 17.6838 19.098 17.2933 18.7075L16.2575 17.6718C14.847 19.3956 14.0008 21.5991 14.0008 24C14.0008 29.5224 18.4778 34 24.0008 34ZM18 24C18 27.3137 20.6863 30 24 30C24.5523 30 25 30.4477 25 31C25 31.5523 24.5523 32 24 32C19.5817 32 16 28.4183 16 24C16 23.4477 16.4477 23 17 23C17.5523 23 18 23.4477 18 24ZM25 39V43C25 43.5523 24.5523 44 24 44C23.4477 44 23 43.5523 23 43V39C23 38.4477 23.4477 38 24 38C24.5523 38 25 38.4477 25 39ZM9 25H5C4.44772 25 4 24.5523 4 24C4 23.4477 4.44772 23 5 23H9C9.55228 23 10 23.4477 10 24C10 24.5523 9.55228 25 9 25ZM33.9003 35.3145L36.7283 38.1425C37.1188 38.533 37.752 38.533 38.1425 38.1425C38.533 37.752 38.533 37.1188 38.1425 36.7283L35.3145 33.9003C34.924 33.5098 34.2908 33.5098 33.9003 33.9003C33.5098 34.2908 33.5098 34.924 33.9003 35.3145ZM12.6855 33.9003L9.85749 36.7283C9.46697 37.1188 9.46697 37.752 9.85749 38.1425C10.248 38.533 10.8812 38.533 11.2717 38.1425L14.0997 35.3145C14.4902 34.924 14.4902 34.2908 14.0997 33.9003C13.7092 33.5098 13.076 33.5098 12.6855 33.9003ZM33.9005 12.6853L36.7285 9.85729C37.119 9.46677 37.7522 9.46677 38.1427 9.85729C38.5332 10.2478 38.5332 10.881 38.1427 11.2715L35.3147 14.0995C34.9242 14.49 34.291 14.49 33.9005 14.0995C33.51 13.709 33.51 13.0758 33.9005 12.6853Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              ) : (
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 48 48"
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
                    <g id="night">
                      {" "}
                      <g id="night_2">
                        {" "}
                        <path
                          id="Combined Shape"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.7808 39.678C30.2725 41.5227 38.9355 34.9129 39.9084 25.7064C25.3849 34.6376 13.3977 22.6246 22.2943 8.08028C13.086 9.04803 6.46841 17.7148 8.31368 27.2111C9.20895 31.8246 12.2255 35.8586 16.3944 38.1053C16.8806 38.3673 17.0623 38.9738 16.8003 39.46C16.5383 39.9462 15.9318 40.1279 15.4456 39.8659C10.7538 37.3374 7.36096 32.8002 6.35035 27.5923C4.19047 16.477 12.3759 6.3517 23.4224 6.00003C24.3791 5.97168 25.0622 6.89645 24.8058 7.79733L24.6708 8.08611C15.4263 21.6734 26.3363 32.6062 39.8994 23.3282L40.1834 23.1938C41.0866 22.9297 42.0251 23.6154 41.9895 24.5754C41.6379 35.6187 31.5135 43.8013 20.3992 41.6412C19.8571 41.5359 19.503 41.0109 19.6084 40.4688C19.7137 39.9267 20.2386 39.5726 20.7808 39.678ZM12.2323 26.4109C13.1386 31.0805 16.9115 34.8534 21.5811 35.7597C22.1233 35.8649 22.4775 36.3897 22.3723 36.9319C22.267 37.4741 21.7422 37.8283 21.2001 37.7231C15.7297 36.6614 11.3306 32.2623 10.2689 26.7919C10.1637 26.2497 10.5179 25.7249 11.0601 25.6197C11.6022 25.5145 12.127 25.8687 12.2323 26.4109Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>{" "}
                    </g>{" "}
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
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M20 17H17M4 17L13 17"
                    stroke="#ffffff"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M4 12H7L20 12"
                    stroke="#ffffff"
                    strokeWidth="1"
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
              <button
                onClick={scrollTo("about", true)}
                className="text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </button>
              <button
                onClick={scrollTo("projects", true)}
                className="text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </button>
              <button
                onClick={scrollTo("experience", true)}
                className="text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Experience
              </button>
              <button
                onClick={scrollTo("skills", true)}
                className="text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Skills
              </button>
              <button
                onClick={scrollTo("contact", true)}
                className="text-white hover:text-purple-700 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </button>
              <a
                href="#contact"
                className="text-white bg-purple p-4 px-3 py-2 rounded-full text-sm font-medium hover:transform hover:scale-105 transition-transform duration-300 w-full"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
