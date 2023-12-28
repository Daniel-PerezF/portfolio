import { Carousel } from "./Carousel";

const projects = [
  {
    name: "Spin Trade",
    img: [
      "./project-images/spin-trade-home.png",
      "./project-images/spin-trade-record.png",
      "./project-images/spin-trade-cart.png",
    ],
    live: "http://recordmarketplace-dev.us-west-1.elasticbeanstalk.com/",
    github: "https://github.com/Daniel-PerezF/RecordMarketplace",
    about: "about spin-trade",
  },
  {
    name: "Ghibli Wiki",
    img: [
      "./project-images/ghibli-wiki-home.png",
      "./project-images/ghibli-wiki-film.png",
    ],
    live: "https://daniel-perezf.github.io/ghibli-wiki/#/",
    github: "https://github.com/Daniel-PerezF/ghibli-wiki",
    about: "about ghibli wiki",
  },
];

export function MyProjects() {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className=" p-4 rounded-md mb-4">
          <div className="w-full flex justify-center items-center flex-col text-white">
            <div className="w-[28rem] lg:w-1/2">
              <Carousel
                items={project.img.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    className="w-full"
                    alt={`Project ${project.name} Image ${imgIndex + 1}`}
                  />
                ))}
              />
            </div>
            <h3 className="">{project.name}</h3>
            <p>{project.about}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
