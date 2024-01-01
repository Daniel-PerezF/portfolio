import { DetailsFooter } from "../components/DetailsFooter";
import { DetailsHeader } from "../components/DetailsHeader";
import { ProjectDetails } from "../components/ProjectDetails";

export function ProjectDetailsPage() {
  return (
    <div className="h-screen bg-[#364652]">
      <DetailsHeader />
      <ProjectDetails />
      <DetailsFooter />
    </div>
  );
}
