import { FaReact } from "react-icons/fa";
import { BackEndSkills, FrontEndSkills, Tools } from "../components/Skills";
import { FaGear } from "react-icons/fa6";
import { Footer } from "../components/Footer";
import { FaTools } from "react-icons/fa";
import { Header } from "../components/Header";

export function SkillsPage() {
  return (
    <div className="bg-[#364652] min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center text-white gap-4">
        <h3 className="text-5xl">Skills</h3>
        <div className="w-full flex justify-center py-4">
          <p className="px-2 w-full lg:w-2/3 lg:px-12 text-center lg:text-xl">
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
              <FaReact className="text-5xl text-white" />
              <h3 className="text-3xl text-white self-center">Front End</h3>
            </div>
            <div>
              <FrontEndSkills />
            </div>
          </div>
        </div>
        <hr className="mx-8 mt-4" />
        <div className="w-full flex justify-center">
          <div className="w-full mx-4 pt-2">
            <div className="flex gap-4 justify-center">
              <FaGear className="text-5xl text-white" />
              <h3 className="text-3xl text-white self-center">Back End</h3>
            </div>
            <div>
              <BackEndSkills />
            </div>
          </div>
        </div>
      </div>

      <hr className="mx-8 mt-4" />
      <div className="w-full flex justify-center">
        <div className="w-full mx-4 pt-2">
          <div className="flex gap-4 justify-center">
            <FaTools className="text-5xl text-white " />
            <h3 className="text-3xl text-white self-center">Misc Tools</h3>
          </div>
          <div>
            <Tools />
          </div>
        </div>
      </div>

      <div className="mt-9">
        <Footer />
      </div>
    </div>
  );
}
