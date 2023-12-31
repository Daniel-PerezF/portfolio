import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ContactPage } from "./ContactPage";
import { LandingPage } from "./LandingPage";
import { ProjectsPage } from "./ProjectsPage";
import { SkillsPage } from "./SkillsPage";

export function SinglePage() {
  return (
    <div>
      <div className="fixed w-full  z-[1000]">
        <Header />
      </div>

      {/* Landing Section */}
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

      {/* Project Details Section */}
      {/* Add similar sections for project details, contact, etc. */}

      {/* Contact Section */}
      <div
        className="contact-section pb-20 pt-[22%] lg:pt-4 bg-[#364652]"
        id="contact-page"
      >
        <ContactPage />
      </div>
    </div>
  );
}
