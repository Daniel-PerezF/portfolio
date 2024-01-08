import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ContactPage } from "./ContactPage";
import { LandingPage } from "./landingpage";
import { ProjectsPage } from "./ProjectsPage";
import { SkillsPage } from "./SkillsPage";
import { useDarkMode } from "../context/useDarkMode";
import { IoIosArrowDropup } from "react-icons/io";
import { AboutPage } from "./AboutPage";

export function SinglePage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const { darkMode } = useDarkMode();
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const transitionStyles = {
    transition: "background-color 1s ease-in-out, color 1s ease-in-out",
  };
  return (
    <div
      style={transitionStyles}
      className={`slow ${darkMode ? "dark" : "light"}`}
    >
      <div className="fixed w-full z-[1000]">
        <Header />
      </div>

      <div className="" id="landing-page">
        <LandingPage />
      </div>

      {/*About Page */}
      <div
        className={`pb-20 slow  ${darkMode ? "bg-dark" : "bg-[#EBEBEB]"}`}
        id="about-page"
      >
        <AboutPage />
      </div>

      {/* Skills Section */}
      <div
        className={`pb-20 slow ${darkMode ? "bg-dark" : "bg-[#EBEBEB]"}`}
        id="skills-page"
      >
        <SkillsPage />
      </div>

      {/* Projects Section */}
      <div
        className={`slow pb-20  ${darkMode ? "bg-dark" : "bg-[#EBEBEB]"}`}
        id="projects-page"
      >
        <ProjectsPage />
      </div>

      {/* Contact Section */}
      <div
        className={`slow pb-20 pt-[22%] lg:pt-4 ${
          darkMode ? "bg-dark" : "bg-[#EBEBEB]"
        }`}
        id="contact-page"
      >
        <ContactPage />
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <div
          onClick={scrollToTop}
          className={`slow text-[3.2rem] lg:text-[3.7rem] fixed bottom-8 right-8 text-orange cursor-pointer`}
        >
          <IoIosArrowDropup />
        </div>
      )}

      <Footer />
    </div>
  );
}
