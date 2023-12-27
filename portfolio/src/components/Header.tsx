import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
import { MenuModalProps } from "../Types/types";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenuClick() {
    setIsOpen(!isOpen);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }
  return (
    <div className="flex justify-between p-1 relative z-61 ">
      <MenuModal isOpen={isOpen} onClose={handleCloseMenu} />
      <Link to="/">
        <img
          src={`${import.meta.env.BASE_URL}/DP-icon.png`}
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
        <Link to="/">
          <h3 className="cursor-pointer hover:underline hover:text-purple-400">
            Home
          </h3>
        </Link>
        <Link to="skills">
          <h3 className="cursor-pointer hover:underline hover:text-purple-400">
            Skills
          </h3>
        </Link>

        <h3 className="cursor-pointer hover:underline hover:text-purple-400">
          Work
        </h3>
        <h3 className="cursor-pointer hover:underline hover:text-purple-400">
          Contact
        </h3>
      </div>
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
        className={`bg-[#6d7c88dd] px-8 py-1 w-[50%] lg:w-[30%] h-screen fixed right-0 top-20 transform transition-transform ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between h-full pt-[2rem]">
          <div className="flex flex-col gap-20 max-w-[25%] text-xl underline">
            <Link
              to="/"
              className="hover:text-purple-300 ease-in-out delay-75 text-slate-200"
              onClick={onClose}
            >
              Home
            </Link>

            <Link to="skills" className="text-slate-200" onClick={onClose}>
              Skills
            </Link>
            <a className="text-slate-200">Work</a>
            <a className="text-slate-200">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
