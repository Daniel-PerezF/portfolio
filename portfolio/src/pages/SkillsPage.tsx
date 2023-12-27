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
        <h3 className="text-5xl">My Skills</h3>
        <p className="px-14">
          about my software joureny and how i learned these skills
        </p>
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
      <hr className="mx-8 mt-4" />

      <div className="mt-9">
        <Footer />
      </div>
    </div>
  );
}
