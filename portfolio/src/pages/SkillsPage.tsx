import { Header } from "../components/Header";
import { FaReact } from "react-icons/fa";

export function SkillsPage() {
  return (
    <div className="bg-[#364652] h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center text-white gap-4">
        <h3 className="text-5xl">My Skills</h3>
        <p className="px-14">
          about my software joureny and how i learned these skills
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="border w-1/2">
          <div className="flex gap-4">
            <FaReact className="text-5xl text-white" />

            <h3 className="text-2xl text-white self-center">Front End</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
