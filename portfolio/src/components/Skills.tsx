const frontSkills = [
  {
    name: "JavaScript",
    logo: "./jslogo.png",
  },
  {
    name: "HTML5",
    logo: "./htmllogo.png",
  },
  {
    name: "CSS3",
    logo: "./csslogo.png",
  },
  {
    name: "React",
    logo: "./reacticon.png",
  },
  {
    name: "TailWindCSS",
    logo: "./tailwind.png",
  },
  {
    name: "TypeScript",
    logo: "./typescript.png",
  },
];

const backSkills = [
  {
    name: "Node.js",
    logo: "./node.png",
  },
  {
    name: "Express.js",
    logo: "./expresslogo.svg",
  },
  {
    name: "PostgreSQL",
    logo: "./postgresql.png",
  },
];
export function FrontEndSkills() {
  return (
    <div className="flex flex-wrap justify-center">
      {frontSkills.map((skill) => (
        <div key={skill.name} className="w-[30%] p-2 ">
          <div className="w-full h-full p-4 outline outline-white hover:bg-white rounded-md cursor-pointer">
            <img
              src={skill.logo}
              className="w-full h-full object-contain "
              alt={skill.name}
            />
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
        <div key={skill.name} className="w-[30%] p-2">
          <div className="w-full h-full p-4 outline outline-white hover:bg-white rounded-md cursor-pointer">
            <img
              src={skill.logo}
              className="w-full h-full object-contain"
              alt={skill.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Tools() {
  return (
    <div className="flex flex-wrap justify-center">
      {backSkills.map((skill) => (
        <div key={skill.name} className="w-[30%] p-2">
          <div className="w-full h-full p-4 outline outline-white hover:bg-white rounded-md cursor-pointer">
            <img
              src={skill.logo}
              className="w-full h-full object-contain"
              alt={skill.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
