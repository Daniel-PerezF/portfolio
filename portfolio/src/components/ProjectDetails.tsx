import { Carousel } from "./Carousel";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { projects } from "../constants/data";

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
    <div className="min-h-screen bg-inherit">
      <h2 className="text-4xl text-white flex justify-center my-4 lg:text-6xl font-bold">
        {project.name}
      </h2>

      <div className="w-full flex justify-center mb-4">
        <div className="w-full lg:w-1/2">
          <div className="flex gap-2 text-white text-sm font-light ml-12 mb-2  ">
            <Link
              to="/"
              className=" hover:text-[orange] transition ease-in-out"
            >
              Home
            </Link>
            <p>{`>`}</p>
            <Link
              to="/projects"
              className="hover:text-[orange] transition ease-in-out"
            >
              Projects
            </Link>
            <p>{`>`}</p>
            <p>{project.name}</p>
          </div>

          <Carousel
            items={project.imgs.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                className="w-full rounded"
                alt={`Project ${project.name} Image ${imgIndex + 1}`}
              />
            ))}
          />
        </div>
      </div>

      <div className="px-4 pb-4 text-white lg:w-full lg:flex lg:justify-center">
        <div className="flex gap-4 lg:w-1/2">
          <Link
            to={project.github}
            target="_blank"
            className="flex gap-2 hover:text-purple-400 transition ease-in-out "
          >
            <FaCode />
            <p className="text-sm">Open Code</p>
          </Link>
          <Link
            to={project.live}
            target="_blank"
            className="flex gap-2 hover:text-purple-400 transition ease-in-out"
          >
            <IoIosLink />
            <p className="text-sm ">Open Site</p>
          </Link>
        </div>
      </div>

      <div className="text-white text-[0.92rem] mx-4 lg:w-full lg:flex lg:justify-center lg:text-[1.1rem]">
        <div className="w-full lg:w-1/2">{project.fullDesc}</div>
      </div>
      <div className="w-full lg:flex lg:justify-center">
        <hr className="mx-4 my-4 lg:w-1/2" />
      </div>

      <div className="mx-4 text-white my-4 lg:w-full lg:flex lg:flex-col lg:justify-center">
        <div className="w-full lg:w-1/2 lg:justify-center lg:flex lg:mx-12">
          <h3 className="font-semibold text-[orange]">Technologies</h3>
        </div>

        <div className="lg:w-full lg:flex lg:justify-center lg:text-[1.1rem]">
          <div className="lg:w-1/2">
            {project.tech.map((tech) => (
              <div>{tech}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:flex lg:justify-center">
        <hr className="mx-4 my-4 lg:w-1/2" />
      </div>

      {/* <div className="px-4 pb-4 text-white lg:w-full lg:flex lg:justify-center">
        <div className="flex gap-4 lg:w-1/2">
          <Link
            to={project.github}
            target="_blank"
            className="flex gap-2 hover:text-purple-400 transition ease-in-out "
          >
            <FaCode />
            <p className="text-sm">Open Code</p>
          </Link>
          <Link
            to={project.live}
            target="_blank"
            className="flex gap-2 hover:text-purple-400 transition ease-in-out"
          >
            <IoIosLink />
            <p className="text-sm ">Open Site</p>
          </Link>
        </div>
      </div> */}

      <div className="mx-4 text-white my-4 lg:w-full lg:flex lg:justify-center">
        <div className="w-full lg:w-1/2 lg:justify-start lg:flex lg:mx-12">
          <h3 className="font-semibold text-[orange]">Key Features</h3>
        </div>
      </div>

      <div className="w-full flex justify-start px-4 pb-9 lg:justify-center">
        <div className="w-full lg:w-1/2">
          {project.features.map((feature, index) => (
            <div key={index} className="py-1 text-white">
              <button
                className="w-full text-left p-2 bg-gray-800 text-white hover:outline transition ease-in-out lg:text-[1.1rem] flex justify-between"
                onClick={() =>
                  setOpenAccordionIndex(
                    openAccordionIndex === index ? null : index
                  )
                }
              >
                {feature.ft}
                {openAccordionIndex === index ? (
                  <IoMdArrowDropup />
                ) : (
                  <IoMdArrowDropdown />
                )}
              </button>

              {openAccordionIndex === index && (
                <div className="p-2 text-[0.92rem] lg:text-base">
                  {feature.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
}
