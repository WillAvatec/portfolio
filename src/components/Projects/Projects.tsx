import data from "../../mocks/projects.json";
import { Project } from "../../types/types";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  const projectsData: Project[] = data;

  return (
    <section id="projects" className="py-24">
      {/* Header*/}
      <div className="w-[1250px] max-w-full  mx-auto flex flex-row items-center mb-5 md:mb-20 py-12">
        <div className="w-full h-[4px] bg-orange-600"></div>
        <h3 className="text-center w-full text-3xl underline decoration-4  text-orange-600">
          Some websites I've built
        </h3>
        <div className="w-full h-[4px] bg-orange-600"></div>
      </div>

      {/* Project Cards Container */}
      <div className="my-0 max-w-5xl mx-auto">
        {projectsData.map((project, i) => {
          return <ProjectCard key={i} {...project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
