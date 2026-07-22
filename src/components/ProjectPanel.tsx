import Carousel from "./Carousel";
import { HStack } from "./HStack";

type Project = {
  title: string;
  description: string;
  //   date: string;
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
      <div className="dark:bg-slate-700 bg-white md:w-[48%] flex items-center m-2 p-4 shadow-md flex-col gap-2 rounded-lg">
        <div className="items-center flex flex-row justify-between w-full">
          <p className={"text-2xl font-bold"}>{project.project.title}</p>
          {project.project.link && (
            <a
              className="leading-none"
              href={project.project.link}
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="
                   text-glow text-2xl 
                    bi bi-github
                    "
              ></i>
            </a>
          )}
        </div>
        <div className="">
          <Carousel images={project.project.imageSrc} />
        </div>

        <p className="text-md">{project.project.description}</p>

        <HStack items={project.project.technologies}></HStack>
      </div>
    </>
  );
}
