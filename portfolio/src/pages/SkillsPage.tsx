import { FaReact } from "react-icons/fa";
import { BackEndSkills, FrontEndSkills, Tools } from "../components/Skills";
import { FaGear } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { useDarkMode } from "../context/useDarkMode";

export function SkillsPage() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`slow ${darkMode ? "bg-dark" : "bg-[#EBEBEB]"} ${
        darkMode ? "text-white" : "text-darker"
      } min-h-screen pt-[10rem]`}
    >
      <div className="flex flex-col justify-center items-center  gap-4">
        <h3 className="text-4xl md:text-4xl lg:text-5xl">Skills</h3>
        <div className="w-full flex justify-center py-4">
          <p className="px-4 w-full lg:w-[70%] text-center text-[0.95rem] lg:text-base xl:text-lg">
            I honed my software proficiency at LearningFuze, a distinguished
            coding bootcamp located in Irvine, California. Immersed in a
            rigorous curriculum, I gained hands-on experience in web
            development, mastering key technologies such as HTML, CSS,
            JavaScript, and more, as outlined below.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 select-none">
        <div className="w-full flex justify-center">
          <div className=" w-full mx-4 pt-2">
            <div className="flex gap-4 justify-center">
              <FaReact className="text-4xl  mb-4 " />
              <h3 className="text-3xl  self-center mb-4">Front End</h3>
            </div>
            <div>
              <FrontEndSkills />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center select-none">
          <hr className="mx-8 mt-4 lg:w-[68%] xl:w-7/12 w-1/2" />
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full mx-4 pt-2 select-none">
            <div className="flex gap-4 justify-center">
              <FaGear className="text-4xl  mb-4" />
              <h3 className="text-3xl  self-center mb-4">Back End</h3>
            </div>
            <div>
              <BackEndSkills />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <hr className="mx-8 mt-4 lg:w-[68%] xl:w-7/12 w-full" />
      </div>
      <div className="w-full flex justify-center select-none">
        <div className="w-full mx-4 pt-2">
          <div className="flex gap-4 justify-center">
            <FaTools className="text-4xl  mb-4 mt-1" />
            <h3 className="text-3xl  self-center mb-4"> Tools</h3>
          </div>
          <div>
            <Tools />
          </div>
        </div>
      </div>
    </div>
  );
}
