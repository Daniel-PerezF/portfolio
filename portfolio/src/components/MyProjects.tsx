import { Link } from "react-router-dom";
import { projects } from "./projects";

// export const projects = [
//   {
//     name: "Spin Trade",
//     key: "spin-trade",
//     imgs: [
//       "./project-images/spin-trade-home.png",
//       "./project-images/spin-trade-record.png",
//       "./project-images/spin-trade-cart.png",
//     ],
//     live: "http://recordmarketplace-dev.us-west-1.elasticbeanstalk.com/",
//     github: "https://github.com/Daniel-PerezF/RecordMarketplace",
//     about:
//       "A full stack web application for vinyl collectors to buy and sell records.",
//   },
//   {
//     name: "Ghibli Wiki",
//     key: "ghibli-wiki",
//     imgs: [
//       "./project-images/ghibli-wiki-home.png",
//       "./project-images/ghibli-wiki-film.png",
//     ],
//     live: "https://daniel-perezf.github.io/ghibli-wiki/#/",
//     github: "https://github.com/Daniel-PerezF/ghibli-wiki",
//     about:
//       "A front end web application for Studio Ghibli fans to view information about films as well as create a favorites and watchlist.",
//   },
// ];

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
