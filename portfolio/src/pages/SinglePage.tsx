import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ContactPage } from "./ContactPage";
import { LandingPage } from "./landingpage";
import { ProjectsPage } from "./ProjectsPage";
import { SkillsPage } from "./SkillsPage";
import { useDarkMode } from "../context/useDarkMode";
import { BsArrowUpSquareFill } from "react-icons/bs";

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

      <div className="landing-section" id="landing-page">
        <LandingPage />
      </div>

      {/* Skills Section */}
      <div
        className={`skills-section pb-20 slow ${
          darkMode ? "bg-dark" : "bg-white"
        }`}
        id="skills-page"
      >
        <SkillsPage />
      </div>

      {/* Projects Section */}
      <div
        className={`slow projects-section pb-20 pt-[22%] lg:pt-4 ${
          darkMode ? "bg-dark" : "bg-white"
        }`}
        id="projects-page"
      >
        <ProjectsPage />
      </div>

      {/* Contact Section */}
      <div
        className={`slow contact-section pb-20 pt-[22%] lg:pt-4 ${
          darkMode ? "bg-dark" : "bg-white"
        }`}
        id="contact-page"
      >
        <ContactPage />
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <div
          onClick={scrollToTop}
          className={`slow text-[2.8rem] lg:text-6xl fixed bottom-8 right-8 ${
            darkMode ? "text-darker" : "text-orange"
          }  p-2 rounded-full cursor-pointer  ${
            darkMode ? "hover:text-orange" : "hover:text-darker "
          } `}
        >
          <BsArrowUpSquareFill />
        </div>
      )}

      <Footer />
    </div>
  );
}
