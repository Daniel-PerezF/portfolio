import { Carousel } from "./Carousel";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropup } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { projects } from "../constants/data";
import { CiMobile3 } from "react-icons/ci";
import { RiMacbookLine } from "react-icons/ri";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { useDarkMode } from "../context/useDarkMode";

export function ProjectDetails() {
  const { projectKey } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const project = projects.find((p) => p.key === projectKey);
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );
  const [view, setView] = useState("desktop");
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  const toggleView = () => {
    setView(view === "mobile" ? "desktop" : "mobile");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`slow min-h-screen pb-20 ${
        darkMode ? "bg-dark text-white" : "bg-[#EBEBEB] text-darker"
      }`}
    >
      <h2 className="text-4xl  flex justify-center my-4 lg:text-6xl font-bold">
        {project.name}
      </h2>

      <div className="w-full flex justify-center mb-4">
        <div className="w-full lg:w-1/2">
          <div className="flex gap-2  text-sm font-light ml-12 mb-2  ">
            <Link
              to="/"
              className="hover:text-[#FB904D] transition ease-in-out"
            >
              Home
            </Link>
            <p>{`>`}</p>
            <span
              className="hover:text-[#FB904D] cursor-pointer transition ease-in-out"
              onClick={() => navigate(-1)} // Use navigate with -1 to go back
            >
              Projects
            </span>
            <p>{`>`}</p>
            <p>{project.name}</p>
          </div>

          {view === "desktop" ? (
            <div className="flex h-[400px] lg:h-[450px] justify-center flex-col overflow-hidden ">
              <Carousel
                items={project.imgs.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    className="w-full rounded-md"
                    alt={`Project ${project.name} Image ${imgIndex + 1}`}
                  />
                ))}
              />
            </div>
          ) : project.mobileImgs && project.mobileImgs.length > 0 ? (
            <div className="flex justify-center overflow-hidden">
              <div className="h-[400px] lg:h-[450px] justify-center flex-col flex overflow-hidden">
                <Carousel
                  items={project.mobileImgs.map((img, imgIndex) => (
                    <div key={imgIndex}>
                      <img
                        src={img}
                        className="w-full rounded-md "
                        alt={`Project ${project.name} Image ${imgIndex + 1}`}
                      />
                    </div>
                  ))}
                />
              </div>
            </div>
          ) : (
            <div className="text-purple-400 flex gap-2 px-2 justify-center lg:my-[14.45rem] my-[6.38rem] text-sm lg:text-lg font-bold ">
              <div className="flex mt-1">
                <HiOutlineEmojiSad />
              </div>

              <h3>Sorry no mobile images available for this project</h3>
            </div>
          )}
        </div>
      </div>

      <div className="px-4 pb-4  lg:w-full lg:flex lg:justify-center">
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
            className="flex gap-2 hover:text-purple-400 transition ease-in-out "
          >
            <IoIosLink />
            <p className="text-sm">Open Site</p>
          </Link>
          <div
            className="flex gap-2 hover:text-purple-400 transition ease-in-out cursor-pointer"
            onClick={toggleView}
          >
            {view === "mobile" ? <RiMacbookLine /> : <CiMobile3 />}
            <h3 className="text-sm ">
              {view === "mobile" ? "View Desktop" : "View Mobile"}
            </h3>{" "}
          </div>
        </div>
      </div>

      <div className=" text-[0.92rem] mx-4 lg:w-full lg:flex lg:justify-center lg:text-[1.1rem]">
        <div className="w-full lg:w-1/2">{project.fullDesc}</div>
      </div>
      <div className="w-full lg:flex lg:justify-center">
        <hr className="mx-4 my-4 lg:w-1/2" />
      </div>

      <div className="mx-4  my-4 lg:w-full lg:flex lg:flex-col lg:justify-center">
        <div className="w-full lg:w-1/2 lg:justify-center lg:flex lg:mx-12">
          <h3 className="font-semibold text-[#FB904D]">Technologies</h3>
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

      <div className="mx-4  my-4 lg:w-full lg:flex lg:justify-center">
        <div className="w-full lg:w-1/2 lg:justify-start lg:flex lg:mx-12">
          <h3 className="font-semibold text-[#FB904D]">Key Features</h3>
        </div>
      </div>

      <div className="w-full flex justify-start px-4 pb-9 lg:justify-center">
        <div className="w-full lg:w-1/2">
          {project.features.map((feature, index) => (
            <div key={index} className="py-1 ">
              <button
                className={`w-full text-left p-2 slow rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-slate-300"
                } hover:outline transition ease-in-out lg:text-[1.1rem] flex justify-between ${
                  openAccordionIndex === index ? "outline " : ""
                }`}
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
                <div
                  className={`p-2 text-[0.92rem] lg:text-base ${
                    openAccordionIndex === index ? " " : ""
                  } `}
                >
                  {feature.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex flex-col items-center cursor-pointer`}
        onClick={scrollToTop}
      >
        <IoIosArrowDropup className={`text-3xl`} />
        <h3>Back to Top</h3>
      </div>
    </div>
  );
}
