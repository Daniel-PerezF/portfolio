import { useEffect } from "react";
import { DetailsFooter } from "../components/DetailsFooter";
import { DetailsHeader } from "../components/DetailsHeader";
import { ProjectDetails } from "../components/ProjectDetails";

export function ProjectDetailsPage() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-screen bg-[#364652]">
      <DetailsHeader />
      <ProjectDetails />
      <DetailsFooter />
    </div>
  );
}
