const frontSkills = [
  {
    name: "JavaScript",
    logo: "./logos/js-logo.png",
  },
  {
    name: "HTML5",
    logo: "./logos/html-logo.png",
  },
  {
    name: "CSS3",
    logo: "./logos/css-logo.png",
  },
  {
    name: "React",
    logo: "./logos/react-logo.png",
  },
  {
    name: "TailWindCSS",
    logo: "./logos/tailwind-logo.png",
  },
  {
    name: "TypeScript",
    logo: "./logos/typescript-logo.png",
  },
];

const backSkills = [
  {
    name: "Node.js",
    logo: "./logos/node-logo.png",
  },
  {
    name: "Express.js",
    logo: "./logos/express-logo.svg",
  },
  {
    name: "PostgreSQL",
    logo: "./logos/postgresql-logo.png",
  },
];

const miscTools = [
  {
    name: "AWS",
    logo: "./logos/aws-logo.png",
  },
  {
    name: "Git",
    logo: "./logos/git-logo.png",
  },
  {
    name: "GitHub",
    logo: "./logos/github-logo.png",
  },
  {
    name: "JWT",
    logo: "./logos/jwt-logo.svg",
  },
  {
    name: "NPM",
    logo: "./logos/npm-logo.png",
  },
  {
    name: "React Router",
    logo: "./logos/react-router-logo.png",
  },
  {
    name: "Vite",
    logo: "./logos/vite-logo.png",
  },
  {
    name: "Canva",
    logo: "./logos/canva-logo.png",
  },
  {
    name: "Figma",
    logo: "./logos/figma-logo.png",
  },
  {
    name: "ESLint",
    logo: "./logos/eslint-logo.png",
  },
  {
    name: "Docker",
    logo: "./logos/docker-logo.png",
  },
  {
    name: "Visual Studio Code",
    logo: "./logos/vscode-logo.png",
  },
  {
    name: "Slack",
    logo: "./logos/slack-logo.png",
  },
];
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
