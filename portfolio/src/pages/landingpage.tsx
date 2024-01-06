import { Link as ScrollLink } from "react-scroll";
import { Particle } from "../components/Particle";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { useEffect } from "react";
import { useDarkMode } from "../context/useDarkMode";

export function LandingPage() {
  const openResume = () => {
    const resumeURL = `${import.meta.env.BASE_URL}resume.pdf`;
    window.open(resumeURL, "_blank");
  };
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const { darkMode } = useDarkMode();
  return (
    <div className={`h-screen flex flex-col items-center justify-center `}>
      <Particle />
      <div className="flex justify-center pt-24 pb-4">
        <div className="w-full flex justify-center">
          <div className="w-64 h-64 lg:w-[25rem] lg:h-[25rem] sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden">
            <img
              draggable="false"
              src={`/daniel-perez.png`}
              className={`rounded-full w-full h-full object-cover select-none `}
              alt="Daniel Perez"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
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
        <ScrollLink to="skills-page" smooth={true} duration={500} offset={-10}>
          <div className="pt-20">
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
