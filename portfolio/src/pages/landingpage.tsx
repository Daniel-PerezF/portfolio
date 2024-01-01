import Particle from "../components/Particle";

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
              src={`${import.meta.env.BASE_URL}/daniel-perez.png`}
              className="rounded-full w-full h-full object-cover select-none"
              alt="Daniel Perez"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
        <h3 className="text-white text-6xl">Daniel Perez</h3>
        <p className="text-white text-xl">Software Engineer</p>
        <div className="flex justify-between w-[75%] pt-8 ">
          <button className="px-4 py-1 rounded-md text-[0.9rem] font-medium text-white bg-[#1F2937] hover:text-[orange] hover:outline hover:outline-[orange] hover:outline-1 transition ease-in-out">
            Contact Me
          </button>
          <button
            onClick={openResume}
            className="px-4 py-1 rounded-md text-[0.95rem] text-white font-medium bg-[#1F2937] hover:text-[orange] transition ease-in-out hover:outline hover:outline-[orange] hover:outline-1"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
