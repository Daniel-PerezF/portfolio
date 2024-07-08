import { Link as ScrollLink } from "react-scroll";
import { Particle } from "../components/Particle";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { useEffect } from "react";
import { useDarkMode } from "../context/useDarkMode";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function LandingPage() {
  const openResume = () => {
    const resumeURL = `resume-24.pdf`;
    window.open(resumeURL, "_blank");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { darkMode } = useDarkMode();
  return (
    <div className={`h-screen flex flex-col items-center justify-center `}>
      <Particle />
      <div className="flex justify-center pt-24 pb-4">
        <div className="w-full flex justify-center">
          <div className="w-64 h-64 lg:w-[20rem] lg:h-[20rem] sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden">
            <img
              draggable="false"
              src={`/me.png`}
              className={`rounded-full w-full h-full object-cover select-none `}
              alt="Daniel Perez"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-4">
        <h3
          className={`slow text-6xl font-bold select-none ${
            darkMode ? "text-white" : "text-darker"
          } `}
        >
          Daniel Perez
        </h3>
        <p
          className={`slow ${
            darkMode ? "text-white" : "text-darker"
          } text-xl select-none`}
        >
          Software Engineer
        </p>
        <div
          className={`ml-4 flex w-1/4 justify-between text-4xl pt-2 ${
            darkMode ? "text-white" : "text-darker"
          }`}
        >
          <Link to="https://github.com/Daniel-PerezF" target="_blank">
            <FaGithub className="cursor-pointer hover:translate-y-1 transition ease-in-out " />
          </Link>
          <Link
            to="https://www.linkedin.com/in/daniel-f-perez/"
            target="_blank"
          >
            <FaLinkedin className="cursor-pointer hover:translate-y-1 transition ease-in-out" />
          </Link>
        </div>
        <div className="flex justify-between w-[75%] pt-8 ">
          <ScrollLink to="contact-page" smooth={true} duration={500}>
            <button
              className={`px-4 py-1 rounded-sm text-[0.85rem] font-medium slow ${
                darkMode ? "bg-darker" : "bg-dark"
              } hover:text-[#FB904D] outline-1 ${
                darkMode ? "" : "outline-dark"
              } hover:outline hover:outline-[#FB904D] hover:outline-1 transition ease-in-out text-${
                darkMode ? "white" : "white"
              }`}
            >
              Contact Me
            </button>
          </ScrollLink>
          <button
            onClick={openResume}
            className={`px-4 py-1 rounded-sm text-[0.9rem] font-medium slow ${
              darkMode ? "bg-darker" : "bg-dark"
            } hover:text-[#FB904D] outline-1 ${
              darkMode ? "" : "outline-dark"
            } hover:outline hover:outline-[#FB904D] hover:outline-1 transition ease-in-out text-${
              darkMode ? "white" : "white"
            }`}
          >
            Resume
          </button>
        </div>
        <ScrollLink to="about-page" smooth={true} duration={500} offset={30}>
          <div className="relative top-8">
            <RiArrowDownDoubleFill
              className={`text-6xl custom-bounce  cursor-pointer hover:text-[#FB904D] slow ${
                darkMode ? "text-white" : "text-dark"
              }`}
            />
          </div>
        </ScrollLink>
      </div>
    </div>
  );
}
