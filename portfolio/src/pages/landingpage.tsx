import { Link as ScrollLink } from "react-scroll";
import Particle from "../components/Particle";
import { RiArrowDownDoubleFill } from "react-icons/ri";
// import { useEffect } from "react";

export function LandingPage() {
  const openResume = () => {
    const resumeURL = `${import.meta.env.BASE_URL}resume.pdf`;
    window.open(resumeURL, "_blank");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Particle />

      <div className="flex justify-center pt-24 pb-4">
        <div className="w-full flex justify-center">
          <div className="w-64 h-64 lg:w-[25rem] lg:h-[25rem] sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden">
            <img
              src={`/daniel-perez.png`}
              className="rounded-full w-full h-full object-cover select-none cursor-pointer"
              alt="Daniel Perez"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
        <h3 className="text-white text-6xl font-bold">Daniel Perez</h3>
        <p className="text-white text-xl">Software Engineer</p>
        <div className="flex justify-between w-[75%] pt-8 ">
          <ScrollLink to="contact-page" smooth={true} duration={500}>
            <button className="px-4 py-1 rounded-md text-[0.9rem] font-medium text-white bg-[#1F2937] hover:text-[#FB904D] hover:outline hover:outline-[#FB904D] hover:outline-1 transition ease-in-out">
              Contact Me
            </button>
          </ScrollLink>
          <button
            onClick={openResume}
            className="px-4 py-1 rounded-md text-[0.95rem] text-white font-medium bg-[#1F2937] hover:text-[#FB904D] transition ease-in-out hover:outline hover:outline-[#FB904D] hover:outline-1"
          >
            Resume
          </button>
        </div>
        <ScrollLink to="skills-page" smooth={true} duration={500} offset={-10}>
          <div className="pt-20">
            <RiArrowDownDoubleFill className="text-6xl text-[white] custom-bounce  cursor-pointer hover:text-[#FB904D]" />
          </div>
        </ScrollLink>
      </div>
    </div>
  );
}
