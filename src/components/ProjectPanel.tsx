import Carousel from "./Carousel";
import { HStack } from "./HStack";

type Project = {
  title: string;
  description: string;
  date: string;
  imageSrc: string[];
  technologies: string[];
  link?: string;
};

interface ProjectPanelProps {
  project: Project;
}

export default function ProjectPanel(project: ProjectPanelProps) {
  return (
    <>
      <div className="bg-white flex items-center m-2 p-4 shadow-md flex-col gap-2 rounded-lg">
        <div className="items-center flex flex-row justify-between w-full">
          <p className={"text-xl font-bold"}>{project.project.title}</p>
          {project.project.link && (
            <a href={project.project.link}>
              <i
                className="
                    transition-colors
                    duration-200
                    ease-in-out hover:text-teal-400 text-2xl 
                    bi bi-github"
              ></i>
            </a>
          )}
        </div>
        <div className="basis-3/4">
          <Carousel images={project.project.imageSrc} />
        </div>

        <p className="text-md">{project.project.description}</p>

        <HStack items={project.project.technologies}></HStack>
      </div>
    </>
  );
}
