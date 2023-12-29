import { Link } from "react-router-dom";
import { projects } from "./projects";

export function MyProjects() {
  return (
    <div className="flex flex-wrap ">
      {projects.map((project, index) => (
        <div key={index} className="p-4 rounded-md mb-4 w-full lg:w-1/2">
          <div className="w-full flex justify-center items-center flex-col text-white">
            <div className="w-[24rem] lg:w-[65%]">
              <Link to={`/projects/${project.key}`}>
                <img
                  src={project.imgs[0]}
                  className="w-full"
                  alt={`Project ${project.name} img`}
                />
              </Link>
            </div>
            <h3 className="text-2xl">{project.name}</h3>
            <div className="w-full lg:w-1/2 md:w-1/2">
              <p className="text-center">{project.about}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
