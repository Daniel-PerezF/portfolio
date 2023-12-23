import { Link } from "react-router-dom";
import Particle from "../components/Particle";

import { RiMenu3Fill } from "react-icons/ri";

export function LandingPage() {
  return (
    <div className="h-screen">
      <Particle />
      <div className="flex justify-between p-1 ">
        <Link to="/">
          <img
            src={`${import.meta.env.BASE_URL}/Daniel.png`}
            className="max-w-[4rem] lg:max-w-[6rem]"
          />
        </Link>
        <RiMenu3Fill className="text-4xl mt-7 lg:text-5xl " />
      </div>
      <div className="flex justify-center pt-24 pb-4 ">
        <img
          src={`${import.meta.env.BASE_URL}/Me3.png`}
          className="rounded-full w-80 h-80 lg:max-w-[26rem] "
        />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h3 className=" text-white text-6xl">Daniel Perez</h3>
        <p className="text-white">Software Engineer</p>
        <div className="flex justify-between w-[75%] pt-8">
          <button className="p-1 rounded-xl text-lg bg-[#858AE3] ">
            Contact Me
          </button>
          <button className="p-4 rounded-xl text-lg bg-[#858AE3]">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
