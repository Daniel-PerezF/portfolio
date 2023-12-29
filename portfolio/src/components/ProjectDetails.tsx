import { Carousel } from "./Carousel";
import { useParams } from "react-router-dom";
import { projects } from "./projects";

export function ProjectDetails() {
  const { projectKey } = useParams();
  const project = projects.find((p) => p.key === projectKey);
  console.log(projects);

  if (!project) {
    // Handle case where project is not found
    return <div>Project not found</div>;
  }

  return (
    <div className="h-screen bg-inherit">
      <h2 className="text-4xl text-white flex justify-center my-4">
        {project.name}
      </h2>
      <Carousel
        items={project.imgs.map((img, imgIndex) => (
          <img
            key={imgIndex}
            src={img}
            className="w-full"
            alt={`Project ${project.name} Image ${imgIndex + 1}`}
          />
        ))}
      />
      <h3>About Project</h3>
    </div>
  );
}
