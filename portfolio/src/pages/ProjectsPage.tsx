import { MyProjects } from "../components/MyProjects";
import { useDarkMode } from "../context/useDarkMode";

export function ProjectsPage() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`min-h-screen slow  ${
        darkMode ? "bg-dark text-white" : "bg-white text-darker"
      } `}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-4xl md:text-4xl lg:text-5xl">Projects</h3>
        <div className="w-full flex justify-center py-4 xl:mr-[4rem] lg:mr-0">
          <p className="px-2 w-full lg:w-4/5 lg:px-12 text-center  md:w-3/4 text-[0.95rem] lg:text-base xl:text-lg">
            A showcase of my latest projects, click to view more detailed
            information on each project as well as links to the code and live
            site.
          </p>
        </div>
      </div>
      <MyProjects />
    </div>
  );
}
