import { backSkills, frontSkills, miscTools } from "../constants/data";
import { useDarkMode } from "../context/useDarkMode";

export function FrontEndSkills() {
  const { darkMode } = useDarkMode();
  return (
    <div className="flex flex-wrap justify-center">
      {frontSkills.map((skill) => (
        <div
          key={skill.name}
          className="w-24 p-2 xl:w-32 lg:w-28 group relative"
        >
          <div className="relative w-full h-full">
            <div
              className={`w-full h-full p-4 outline outline-2 ${
                darkMode ? "outline-white" : "outline-dark"
              }   rounded-md `}
            >
              <img
                src={skill.logo}
                className="w-full h-full object-contain rounded-md"
                alt={skill.name}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity group-hover:opacity-65 rounded-md">
              <p className="text-white font-bold lg:text-lg text-xs text-center">
                {skill.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function BackEndSkills() {
  const { darkMode } = useDarkMode();
  return (
    <div className="flex flex-wrap justify-center">
      {backSkills.map((skill) => (
        <div
          key={skill.name}
          className="w-24 p-2 xl:w-32 lg:w-28 group relative"
        >
          <div className="relative w-full h-full">
            <div
              className={`w-full h-full p-4 outline outline-2 ${
                darkMode ? "outline-white" : "outline-dark"
              } rounded-md `}
            >
              <img
                src={skill.logo}
                className="w-full h-full object-contain rounded-md"
                alt={skill.name}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity group-hover:opacity-65 rounded-md">
              <p className="text-white lg:text-lg text-xs font-bold text-center">
                {skill.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Tools() {
  const { darkMode } = useDarkMode();
  return (
    <div className="flex flex-wrap justify-center lg:mx-[22%]">
      {miscTools.map((tool) => (
        <div
          key={tool.name}
          className="w-24 p-2 xl:w-32 lg:w-28 group relative"
        >
          <div
            className={`relative w-full h-full p-4 outline outline-2 ${
              darkMode ? "outline-white" : "outline-dark"
            } rounded-md `}
          >
            <img
              src={tool.logo}
              className="w-full h-full object-contain"
              alt={tool.name}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity group-hover:opacity-65 rounded-md">
              <p className="text-white lg:text-lg  text-xs font-bold text-center">
                {tool.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
