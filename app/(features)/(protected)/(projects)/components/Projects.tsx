import { getProjects } from "../../(dashboard)/(client)/service";
import FilterProjects from "./FilterProjects";
import ProjectItem from "./ProjectItem";
type PageProps = {
  searchParams: {
    search?: string;
    categories?: string;
  };
};
const Projects = async ({ searchParams }: PageProps) => {
  const projects = await getProjects();
  console.log(searchParams.categories?.split(","), "Page Params");
  console.log(projects);
  return (
    <section className="flex gap-3">
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
      <div className="w-1/4 mt-3">
        <FilterProjects />
      </div>
    </section>
  );
};

export default Projects;
