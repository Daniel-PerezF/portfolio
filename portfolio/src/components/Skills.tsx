import { backSkills, frontSkills, miscTools } from "../constants/data";

export function FrontEndSkills() {
  return (
    <div className="flex flex-wrap justify-center">
      {frontSkills.map((skill) => (
        <div
          key={skill.name}
          className="w-32 p-2 lg:w-42 md:w-40 group relative"
        >
          <div className="relative w-full h-full">
            <div className="w-full h-full p-4 outline outline-white rounded-md ">
              <img
                src={skill.logo}
                className="w-full h-full object-contain rounded-md"
                alt={skill.name}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity group-hover:opacity-65 rounded-md">
              <p className="text-white text-lg font-bold">{skill.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function BackEndSkills() {
  return (
    <div className="flex flex-wrap justify-center">
      {backSkills.map((skill) => (
        <div
          key={skill.name}
          className="w-32 p-2 lg:w-42 md:w-40 group relative"
        >
          <div className="relative w-full h-full">
            <div className="w-full h-full p-4 outline outline-white rounded-md ">
              <img
                src={skill.logo}
                className="w-full h-full object-contain rounded-md"
                alt={skill.name}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity group-hover:opacity-65 rounded-md">
              <p className="text-white text-lg font-bold">{skill.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Tools() {
  return (
    <div className="flex flex-wrap justify-center lg:mx-[22%]">
      {miscTools.map((tool) => (
        <div
          key={tool.name}
          className="w-32 p-2 lg:w-42 md:w-40 group relative"
        >
          <div className="relative w-full h-full p-4 outline outline-white rounded-md ">
            <img
              src={tool.logo}
              className="w-full h-full object-contain"
              alt={tool.name}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity group-hover:opacity-65 rounded-md">
              <p className="text-white text-lg font-bold">{tool.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
