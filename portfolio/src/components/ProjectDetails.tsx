import { Carousel } from "./Carousel";
import { Link, useParams } from "react-router-dom";
import { projects } from "./projects";
import { useState } from "react";

export function ProjectDetails() {
  const { projectKey } = useParams();
  const project = projects.find((p) => p.key === projectKey);
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="h-screen bg-inherit">
      <h2 className="text-4xl text-white flex justify-center my-4">
        {project.name}
      </h2>

      <div className="w-full flex justify-center mb-4">
        <div className="w-full lg:w-1/2">
          <div className="flex gap-2 text-white text-sm font-light">
            <Link to="/" className="text-white ml-12 mb-2">
              Home
            </Link>
            <p>{`>`}</p>
            <Link to="/projects">Projects</Link>
            <p>{`>`}</p>
            <p>{project.name}</p>
          </div>

          <Carousel
            items={project.imgs.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                className="w-full"
                alt={`Project ${project.name} Image ${imgIndex + 1}`}
              />
            ))}
          />
        </div>
      </div>

      <div className="text-white text-md mx-4">{project.fullDesc}</div>
      <hr className="mx-4" />

      <div className="mx-4 text-white">
        <div className="w-full">
          <h3 className="font-semibold text-[orange]">Technologies</h3>
        </div>

        {project.tech.map((tech) => (
          <div>{tech}</div>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <div className="w-3/4">
          {project.features.map((feature, index) => (
            <div key={index} className="py-1">
              <button
                className="w-full text-left p-2 bg-gray-800 text-white"
                onClick={() =>
                  setOpenAccordionIndex(
                    openAccordionIndex === index ? null : index
                  )
                }
              >
                {feature.ft}
              </button>
              {openAccordionIndex === index && (
                <div className="p-2">{feature.desc}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
