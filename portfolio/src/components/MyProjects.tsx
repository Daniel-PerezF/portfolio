import { Link } from "react-router-dom";
import { projects } from "../constants/data";
import { useDarkMode } from "../context/useDarkMode";
import { GiClick } from "react-icons/gi";

export function MyProjects() {
  const { darkMode } = useDarkMode();
  return (
    <div className="w-full justify-center flex">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-4/5 md:w-3/4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 rounded-md mb-4 w-full">
            <div className="lg:w-3/4 w-full flex justify-center flex-col m-auto">
              <div className="w-full lg:max-w-[28rem] relative group">
                <Link to={`/projects/${project.key}`}>
                  <img
                    src={project.mainImg}
                    className="w-full  rounded "
                    alt={`Project ${project.name} img`}
                  />
                  <div className="absolute bottom-20 right-40 text-5xl  text-[#F57A00] transition-transform group-hover:translate-y-[-1rem] group-hover:translate-x-[-1rem]">
                    <GiClick />
                  </div>
                </Link>
              </div>
              <div
                className={` slow ${
                  darkMode ? "text-white" : "text-darker"
                } w-full lg:max-w-[28rem] mt-4`}
              >
                <Link to={`/projects/${project.key}`}>
                  <h3 className="text-2xl">{project.name}</h3>
                </Link>
                <p className="text-left text-sm lg:text-sm xl:text-base">
                  {project.about}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
