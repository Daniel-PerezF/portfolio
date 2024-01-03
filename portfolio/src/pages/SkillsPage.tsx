import { FaReact } from "react-icons/fa";
import { BackEndSkills, FrontEndSkills, Tools } from "../components/Skills";
import { FaGear } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

export function SkillsPage() {
  return (
    <div className="bg-[#364652] min-h-screen pt-[8rem]">
      <div className="flex flex-col justify-center items-center text-white gap-4">
        <h3 className="text-4xl md:text-4xl lg:text-5xl">Skills</h3>
        <div className="w-full flex justify-center py-4">
          <p className="px-2 w-[98%] lg:w-[74%] xl:w-3/5  lg:px-12 text-center text-[0.95rem] lg:text-base xl:text-lg">
            I developed my software skills at LearningFuze, a leading coding
            bootcamp in Irvine, California. Delving into an intensive curriculum
            and gaining hands-on experience in web development, mastering key
            technologies like HTML, CSS, JavaScript, and more as listed below.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full flex justify-center">
          <div className=" w-full mx-4 pt-2">
            <div className="flex gap-4 justify-center">
              <FaReact className="text-4xl text-white mb-4 " />
              <h3 className="text-3xl text-white self-center mb-4">
                Front End
              </h3>
            </div>
            <div>
              <FrontEndSkills />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <hr className="mx-8 mt-4 lg:w-[68%] xl:w-7/12 w-full" />
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full mx-4 pt-2">
            <div className="flex gap-4 justify-center">
              <FaGear className="text-4xl text-white mb-4" />
              <h3 className="text-3xl text-white self-center mb-4">Back End</h3>
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
      <div className="w-full flex justify-center">
        <div className="w-full mx-4 pt-2">
          <div className="flex gap-4 justify-center">
            <FaTools className="text-4xl text-white mb-4 mt-1" />
            <h3 className="text-3xl text-white self-center mb-4">Misc Tools</h3>
          </div>
          <div>
            <Tools />
          </div>
        </div>
      </div>
    </div>
  );
}
