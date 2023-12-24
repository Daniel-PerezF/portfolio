import { Header } from "../components/Header";
import Particle from "../components/Particle";

export function LandingPage() {
  const openResume = () => {
    const resumeURL = `${import.meta.env.BASE_URL}resume.pdf`;
    window.open(resumeURL, "_blank");
  };
  return (
    <div className="h-screen">
      <Particle />
      <Header />
      <div className="flex justify-center pt-24 pb-4 ">
        <img
          src={`${import.meta.env.BASE_URL}/Me3.png`}
          className="rounded-full w-80 h-80 lg:max-w-[26rem] "
        />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h3 className=" text-white text-6xl">Daniel Perez</h3>
        <p className="text-white">Software Engineer</p>
        <div className="flex justify-between w-[75%] pt-8 lg:justify-around lg:w-1/2 lg:px-24 ">
          <button className="p-1 rounded-xl text-lg hover:text-white bg-[#858AE3] hover:outline hover:outline-3 hover:outline-white">
            Contact Me
          </button>
          <button
            onClick={openResume}
            className="p-4 rounded-xl text-lg hover:text-white bg-[#858AE3] hover:outline hover:outline-3 hover:outline-white"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
