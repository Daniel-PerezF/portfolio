import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { useDarkMode } from "../context/useDarkMode";
import { experience } from "../constants/data";
import { CiLocationOn } from "react-icons/ci";

export function ExperiencePage() {
  const { darkMode } = useDarkMode();
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  return (
    <div
      className={`slow min-h-fit pb-20 ${
        darkMode ? "bg-dark text-white" : "bg-[#EBEBEB] text-darker"
      }`}
    >
      {" "}
      <div className="flex flex-col justify-center items-center gap-4  pb-4">
        <h3 className="text-4xl md:text-4xl lg:text-5xl text-center">
          Professional Experience
        </h3>
      </div>
      <div className="w-full flex justify-start px-4 pb-9 lg:justify-center">
        <div className="w-full lg:w-[70%]">
          {experience.map((experience, index) => (
            <div key={index} className="py-1 ">
              <button
                className={`w-full text-left p-4 slow  rounded-lg ${
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
                <div className="flex justify-between w-full">
                  {`${experience.name}
                  ${experience.company}`}
                  <div className="pr-2 hidden sm:block"> {experience.time}</div>
                </div>

                {openAccordionIndex === index ? (
                  <IoMdArrowDropup />
                ) : (
                  <IoMdArrowDropdown />
                )}
              </button>

              {openAccordionIndex === index && (
                <div
                  className={`p-2 text-[0.92rem] lg:text-base  my-2 ${darkMode ? "bg-[#465a69]":"bg-[#E0E0E0]"}  rounded-lg ${
                    openAccordionIndex === index ? " " : ""
                  } `}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-1">
                      <CiLocationOn className="self-center" />
                      {experience.location}
                    </div>
                    <div className="">{experience.desc}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
