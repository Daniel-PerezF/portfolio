import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { MenuModalProps } from "../constants/types";
import { useDarkMode } from "../context/useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="flex justify-between p-1 relative z-61 pt-3">
      <MenuModal isOpen={isOpen} onClose={handleCloseMenu} />
      <ScrollLink
        to="landing-section"
        smooth={true}
        duration={500}
        onClick={scrollToTop}
      >
        <img
          src={`/orange-icon.png`}
          draggable="false"
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
      <div
        className={`hidden justify-end gap-10 w-1/2 sm:hidden lg:flex text-2xl slow ${
          darkMode ? "text-white" : "text-darker"
        }`}
      >
        <ScrollLink
          to="landing-section"
          smooth={true}
          duration={500}
          onClick={scrollToTop}
        >
          <h3 className="cursor-pointer hover:text-[#FB904D] transition ease-in">
            Home
          </h3>
        </ScrollLink>
        <ScrollLink to="skills-page" smooth={true} duration={500} offset={-10}>
          <h3 className="cursor-pointer hover:text-[#FB904D] transition ease-in">
            Skills
          </h3>
        </ScrollLink>
        <ScrollLink
          to="projects-page"
          smooth={true}
          duration={500}
          offset={-50}
        >
          <h3 className="cursor-pointer hover:text-[#FB904D] transition ease-in">
            Projects
          </h3>
        </ScrollLink>
        <ScrollLink
          to="contact-page"
          smooth={true}
          duration={500}
          offset={-110}
        >
          <h3 className="cursor-pointer hover:text-[#FB904D] transition ease-in">
            Contact
          </h3>
        </ScrollLink>
        <div className="hover:translate-y-[3px] transition ease-in-out">
          <DarkModeSwitch
            checked={darkMode}
            onChange={toggleDarkMode}
            moonColor="white"
            sunColor="orange"
            size={30}
          />
        </div>
      </div>
    </div>
  );
}

function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  function handleMoon() {
    toggleDarkMode();
    onClose();
  }
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-start transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0  slow ${
          darkMode ? "bg-black opacity-20" : "bg-black opacity-[0.40]"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`slow ${
          darkMode ? "bg-[#6d7c88dd] text-white" : "bg-[#c6c7c9e0] text-darker"
        } px-8 py-1 w-[50%] lg:w-[30%] h-screen fixed right-0 top-20 transform transition-transform ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between h-[90vh] pt-[2rem] flex-col">
          <div className="flex flex-col gap-20 max-w-[25%] text-xl ">
            <div className="absolute top-[1rem] right-4 transition slow">
              <DarkModeSwitch
                checked={darkMode}
                moonColor="white"
                sunColor="orange"
                onChange={handleMoon}
                size={35}
              />
            </div>
            <ScrollLink
              className="hover:text-[#FB904D] ease-in-out delay-75  mt-10"
              to="landing-section"
              smooth={true}
              duration={500}
              onClick={onClose}
            >
              Home
            </ScrollLink>

            <ScrollLink
              className="hover:text-[#FB904D] ease-in-out delay-75 "
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
              className="hover:text-[#FB904D] ease-in-out delay-75 "
              onClick={onClose}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact-page"
              smooth={true}
              duration={500}
              className="hover:text-[#FB904D] ease-in-out delay-75 "
              onClick={onClose}
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}
