import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectDetails } from "../components/ProjectDetails";

export function ProjectDetailsPage() {
  return (
    <div className="h-screen bg-[#364652]">
      <Header />
      <ProjectDetails />
      <Footer />
    </div>
  );
}
