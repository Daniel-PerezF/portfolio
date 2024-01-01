import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { MenuModalProps } from "../constants/types";

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
      <ScrollLink
        to="landing-section"
        smooth={true}
        duration={500}
        onClick={scrollToTop}
      >
        <img
          src={`${import.meta.env.BASE_URL}/orange-icon.png`}
          className="max-w-[4rem] lg:max-w-[6rem] hover:translate-y-[2px] cursor-pointer"
        />
      </ScrollLink>
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
        {/* Add onClick handlers to trigger smooth scrolling */}
        <ScrollLink
          to="landing-section"
          smooth={true}
          duration={500}
          onClick={scrollToTop}
        >
          <h3 className="cursor-pointer  hover:text-[#FB904D]">Home</h3>
        </ScrollLink>
        <ScrollLink to="skills-page" smooth={true} duration={500} offset={-10}>
          <h3 className="cursor-pointer  hover:text-[#FB904D]">Skills</h3>
        </ScrollLink>
        <ScrollLink
          to="projects-page"
          smooth={true}
          duration={500}
          offset={-50}
        >
          <h3 className="cursor-pointer  hover:text-[#FB904D]">Projects</h3>
        </ScrollLink>
        <ScrollLink
          to="contact-page"
          smooth={true}
          duration={500}
          offset={-110}
        >
          <h3 className="cursor-pointer  hover:text-[#FB904D]">Contact</h3>
        </ScrollLink>
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
        <div className="flex justify-between h-[90vh] pt-[2rem] flex-col">
          <div className="flex flex-col gap-20 max-w-[25%] text-xl ">
            <ScrollLink
              className="hover:text-[#FB904D] ease-in-out delay-75 text-slate-200"
              to="landing-section"
              smooth={true}
              duration={500}
              onClick={onClose}
            >
              Home
            </ScrollLink>

            <ScrollLink
              className="hover:text-[#FB904D] ease-in-out delay-75 text-slate-200"
              onClick={onClose}
              to="skills-page"
              smooth={true}
              duration={500}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects-page"
              smooth={true}
              duration={500}
              className="hover:text-[#FB904D] ease-in-out delay-75 text-slate-200"
              onClick={onClose}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact-page"
              smooth={true}
              duration={500}
              className="hover:text-[#FB904D] ease-in-out delay-75 text-slate-200"
              onClick={onClose}
            >
              Contact
            </ScrollLink>
          </div>
          <div className="mt-9 text-[0.65rem] font-light lg:text-sm leading-5 text-white pb-20">
            <h3>© 2024. All Rights Reserved.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
