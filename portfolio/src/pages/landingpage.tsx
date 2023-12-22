import { RiMenu3Fill } from "react-icons/ri";

export function LandingPage() {
  return (
    <div className="h-screen">
      <div className="flex justify-between p-1 ">
        <img
          src="/portfolio/public/Daniel.png"
          className="max-w-[4rem] lg:max-w-[6rem]"
        />
        <RiMenu3Fill className="text-4xl mt-7 lg:text-5xl " />
      </div>
      <div className="flex justify-center pt-24 pb-4 ">
        <img
          src="/portfolio/public/Me3.png"
          className="rounded-full w-80 h-80 lg:max-w-[26rem] "
        />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h3 className=" text-white text-6xl">Daniel Perez</h3>
        <p className="text-white">Full Stack Software Engineer</p>
        <div className="flex justify-between w-1/2">
          <button className="border">Contact Me</button>
          <button className="border">Resume</button>
        </div>
      </div>
    </div>
  );
}
