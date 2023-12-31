import data from "../../mocks/projects.json";
import { Project } from "../../types/types";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  const projectsData: Project[] = data;

  return (
    <section id="projects" className="py-24">
      {/* Header*/}
      <div className="w-[1250px] max-w-full  mx-auto flex flex-row items-center mb-5 md:mb-20 py-12">
        <h3 className="w-full px-5 py-3 text-center text-3xl uppercase font-semibold border-orange-400 border-t-4 border-b-4 decoration-4  text-orange-600">
          Some websites I've built
        </h3>
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
