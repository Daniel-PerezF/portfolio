import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ContactPage } from "./ContactPage";
import { LandingPage } from "./LandingPage";
import { ProjectsPage } from "./ProjectsPage";
import { SkillsPage } from "./SkillsPage";

export function SinglePage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set showScrollToTop to true when the user scrolls down, false otherwise
      setShowScrollToTop(window.scrollY > window.innerHeight / 2);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
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

  return (
    <div>
      <div className="fixed w-full z-[1000]">
        <Header />
      </div>

      <div className="landing-section" id="landing-page">
        <LandingPage />
      </div>

      {/* Skills Section */}
      <div
        className="skills-section pb-20 pt-[22%] lg:pt-4 bg-[#364652]"
        id="skills-page"
      >
        <SkillsPage />
      </div>

      {/* Projects Section */}
      <div
        className="projects-section pb-20 pt-[22%] lg:pt-4 bg-[#364652]"
        id="projects-page"
      >
        <ProjectsPage />
      </div>

      {/* Contact Section */}
      <div
        className="contact-section pb-20 pt-[22%] lg:pt-4 bg-[#364652]"
        id="contact-page"
      >
        <ContactPage />
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#1F2937] text-white p-2 rounded-full cursor-pointer"
        >
          Scroll to Top
        </button>
      )}

      <Footer />
    </div>
  );
}
