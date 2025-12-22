import { getProjects } from "../../(dashboard)/(client)/service";
import FilterProjects from "./FilterProjects";
import ProjectItem from "./ProjectItem";

const Projects = async () => {
  const projects = await getProjects();
  return (
    <section className="flex gap-1 ">
      <div className="w-[80%]">
        {projects?.map((project) => (
          <ProjectItem
            userName={project.clientName}
            projectId={project._id}
            time={project.createdAt}
            title={project.title}
          />
        ))}
      </div>
      <div className="w-1/5 mt-3">
        <FilterProjects />
      </div>
    </section>
  );
};

export default Projects;
