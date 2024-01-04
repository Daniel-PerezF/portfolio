import { useEffect } from "react";
import { DetailsFooter } from "../components/DetailsFooter";
import { DetailsHeader } from "../components/DetailsHeader";
import { ProjectDetails } from "../components/ProjectDetails";
import { useDarkMode } from "../context/useDarkMode";

export function ProjectDetailsPage() {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`h-screen slow ${darkMode ? "bg-dark" : "bg-[#EBEBEB]"}`}>
      <DetailsHeader />
      <ProjectDetails />
      <DetailsFooter />
    </div>
  );
}
