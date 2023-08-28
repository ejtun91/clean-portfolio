"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 200);
    });
    AOS.init();
  }, []);

  return (
    <header
      className={`navbar-container transition-all fixed top-0 z-50 w-full bg-[#0a192f] ${
        scroll ? "shadow-xl" : "shadow-none md:py-5"
      }`}
    >
      <nav className="navbar-wrapper py-3 flex items-center mx-auto md:px-12 px-2 justify-between">
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-button cursor-pointer w-[32px] h-[24px] justify-between flex flex-col gap-2 md:hidden fixed right-5 z-50"
        >
          <span
            className={`w-full transition-all h-[1px] ${
              menuOpen ? "origin-left rotate-45" : ""
            } bg-cyan-300`}
          ></span>
          <span
            className={`w-full transition-all h-[1px] ${
              menuOpen ? "opacity-0 origin-left" : "opacity-100"
            }   bg-cyan-300`}
          ></span>
          <span
            className={`w-full transition-all h-[1px] ${
              menuOpen ? "origin-left -rotate-45" : ""
            }  bg-cyan-300`}
          ></span>
        </div>
        <div className="left">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              id="svg"
            >
              <g
                fill="none"
                stroke="#6ed4e6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  d="M19.875 6.27A2.225 2.225 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1-2.184 0l-6.75-4.27A2.225 2.225 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
                  id="A"
                />
                <path d="M10 16v-6a2 2 0 1 1 4 0v6m-4-3h4" />
              </g>
            </svg>
          </a>
        </div>
        <div
          className={`right md:text-sm text-lg transition-all flex gap-6 ${
            menuOpen ? "right-0" : "-right-[80%] md:-right-0"
          }  top-0 bottom-0 md:relative md:bg-[transparent]  w-[75%] bg-[#112240] fixed md:flex-row flex-col items-center h-[100vh] md:h-0 justify-center md:justify-end`}
        >
          <div className="items flex md:flex-row flex-col items-center gap-6">
            <a
              onClick={() => setMenuOpen(false)}
              href="#about"
              data-aos-easing="linear"
              data-aos="fade-down"
              data-aos-duration="200"
              className="item flex md:flex-row flex-col items-center"
            >
              <span className="mr-2 text-cyan-300">01.</span>
              <span>About</span>
            </a>
            <a
              data-aos="fade-down"
              data-aos-duration="300"
              data-aos-easing="linear"
              onClick={() => setMenuOpen(false)}
              href="#work"
              className="item flex md:flex-row flex-col items-center"
            >
              <span className="mr-2 text-cyan-300">02.</span>
              <span>Work</span>
            </a>
            <a
              data-aos="fade-down"
              data-aos-duration="400"
              data-aos-easing="linear"
              onClick={() => setMenuOpen(false)}
              href="#contact"
              className="item flex md:flex-row flex-col items-center"
            >
              <span className="mr-2 text-cyan-300">03.</span>
              <span>Contact</span>
            </a>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-easing="linear"
            className="resume-container relative"
          >
            <a
              href="#_"
              className="relative inline-flex items-center px-12 py-3 overflow-hidden text-sm font-medium text-cyan-300 border-2 border-cyan-300 rounded-md hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-cyan-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">Resume</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
