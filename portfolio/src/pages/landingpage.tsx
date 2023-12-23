import { Link } from "react-router-dom";
import Particle from "../components/Particle";
import { RiMenuUnfoldLine } from "react-icons/ri";

import { RiMenu3Fill } from "react-icons/ri";
import { MenuModalProps } from "../Types/types";
import { useState } from "react";

export function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenuClick() {
    setIsOpen(!isOpen);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }
  return (
    <div className="h-screen">
      <Particle />
      <div className="flex justify-between p-1 relative z-61">
        <Link to="/">
          <img
            src={`${import.meta.env.BASE_URL}/Daniel.png`}
            className="max-w-[4rem] lg:max-w-[6rem] hover:translate-y-[2px]"
          />
        </Link>
        <div className="lg:hidden">
          {!isOpen ? (
            <RiMenu3Fill
              className="text-4xl mt-7 lg:text-5xl cursor-pointer z-50"
              onClick={handleMenuClick}
            />
          ) : (
            <RiMenuUnfoldLine
              className="text-4xl mt-7 lg:text-5xl cursor-pointer z-51"
              onClick={handleCloseMenu}
            />
          )}
        </div>
        <div className="hidden justify-around w-1/2 sm:hidden lg:flex text-2xl text-white">
          <h3>Home</h3>
          <h3>Skills</h3>
          <h3>Work</h3>
          <h3>Contact</h3>
        </div>
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
        <div className="flex justify-between w-[75%] pt-8 lg:justify-around lg:w-1/2 lg:px-24 ">
          <button className="p-1 rounded-xl text-lg bg-[#858AE3] hover:outline hover:outline-3 hover:outline-white">
            Contact Me
          </button>
          <button className="p-4 rounded-xl text-lg bg-[#858AE3] hover:outline hover:outline-3 hover:outline-white">
            Resume
          </button>
        </div>
      </div>
      <MenuModal isOpen={isOpen} onClose={handleCloseMenu} />
    </div>
  );
}

function MenuModal({ isOpen, onClose }: MenuModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-start transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-black opacity-20"
        onClick={onClose}
      ></div>
      <div
        className={`bg-[white]/[0.65] px-8 py-1 w-[50%] lg:w-[30%] h-screen fixed right-0 top-20 transform transition-transform ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between h-full pt-[2rem]">
          <div className="flex flex-col gap-20 max-w-[25%] text-xl underline">
            <Link
              to="/"
              className="hover:text-[#899CA9] ease-in-out delay-75"
              onClick={onClose}
            >
              Home
            </Link>

            <a>Skills</a>
            <a>Work</a>
            <a>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
