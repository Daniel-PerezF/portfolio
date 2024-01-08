import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { Link as ScrollLink } from "react-scroll";
import { useDarkMode } from "../context/useDarkMode";

export function Footer() {
  const { darkMode } = useDarkMode();
  function handleMailClick() {
    const emailAddress = "danielperezf98@gmail.com";
    const subject = "Lets Connect!";
    const body = "Hello,\n\nI would like to connect with you...";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  }
  return (
    <div
      className={`slow ${
        darkMode ? "bg-[#232f37] text-white " : "bg-dark text-white"
      } p-4 `}
    >
      <div className="flex justify-evenly w-full ">
        <div>
          <h3 className="lg:text-lg">Site Map</h3>
          <hr className="my-2 w-[58%]" />
          <div className="flex  items-center text-[0.9rem] lg:text-lg flex-wrap w-3/4 gap-4">
            <ScrollLink
              to="landing-page"
              smooth={true}
              duration={500}
              onClick={scrollToTop}
            >
              <h3 className="cursor-pointer  hover:text-[#FB904D]  transition ease-in">
                Home
              </h3>
            </ScrollLink>

            <ScrollLink
              to="skills-page"
              smooth={true}
              duration={500}
              offset={20}
            >
              <h3 className="cursor-pointer  hover:text-[#FB904D]  transition ease-in">
                Skills
              </h3>
            </ScrollLink>
            <ScrollLink
              to="projects-page"
              smooth={true}
              duration={500}
              offset={20}
            >
              <h3 className="cursor-pointer  hover:text-[#FB904D]  transition ease-in">
                Projects
              </h3>
            </ScrollLink>
            <ScrollLink
              to="about-page"
              smooth={true}
              duration={500}
              offset={-140}
            >
              <h3 className="cursor-pointer  hover:text-[#FB904D]  transition ease-in">
                About
              </h3>
            </ScrollLink>

            <ScrollLink
              to="contact-page"
              smooth={true}
              duration={500}
              offset={0}
            >
              <h3 className="cursor-pointer  hover:text-[#FB904D]  transition ease-in">
                Contact
              </h3>
            </ScrollLink>
          </div>
        </div>
        <div>
          <h3 className="lg:text-lg">Let's Connect</h3>
          <hr className="my-2 " />

          <div className="flex justify-between w-full text-2xl gap-3">
            <Link
              to="https://www.linkedin.com/in/daniel-f-perez/"
              target="_blank"
              className="hover:text-[#1866C2] transition ease-in"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://github.com/Daniel-PerezF"
              target="_blank"
              className="hover:text-[#696AEF] transition ease-in"
            >
              <FaGithub />
            </Link>
            <MdEmail
              onClick={handleMailClick}
              className="cursor-pointer hover:text-slate-500 transition ease-in"
            />
          </div>
        </div>
      </div>
      <div className="mt-9 text-xs font-light lg:text-sm leading-5">
        <h3>
          © 2024. All Rights Reserved. <br /> Made in California by Daniel
          Perez. <br />
        </h3>
      </div>
    </div>
  );
}
