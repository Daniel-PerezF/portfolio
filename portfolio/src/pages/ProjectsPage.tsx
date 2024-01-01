// import { Footer } from "../components/Footer";
// import { Header } from "../components/Header";
import { MyProjects } from "../components/MyProjects";

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#364652]">
      <div className="flex flex-col justify-center items-center text-white gap-4">
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
      {/* <Footer /> */}
    </div>
  );
}
