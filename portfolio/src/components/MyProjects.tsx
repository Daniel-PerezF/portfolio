import { Link } from "react-router-dom";
import { projects } from "../constants/data";

export function MyProjects() {
  return (
    <div className="w-full justify-center flex">
      <div className="flex mb-24 flex-wrap justify-center lg:w-4/5 md:w-3/4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 rounded-md mb-4 w-full lg:w-1/2 md:w-full sm:w-full"
          >
            <div className="lg:w-3/4 w-full flex justify-center flex-col m-auto">
              <div className="w-full lg:max-w-[28rem]">
                <Link to={`/projects/${project.key}`}>
                  <img
                    src={project.mainImg}
                    className="w-full rounded hover:outline hover:outline-white hover:outline-offset-1 hover:outline-2"
                    alt={`Project ${project.name} img`}
                  />
                </Link>
              </div>
              <div className="w-full lg:max-w-[28rem] text-white mt-4">
                <h3 className="text-2xl">{project.name}</h3>
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
