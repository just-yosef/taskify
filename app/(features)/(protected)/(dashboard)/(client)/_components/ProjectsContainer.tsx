import ProjectItem from "./ProjectItem";
import { getProjectById } from "../service";
import EmptyStateResource from "./EmptyStateResource";
const ProjectsContainer = async () => {
  const projects = await getProjectById("68f8e9b15e089c79700816a9");
  return (
    <>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-2">
        {projects?.map((project) => (
          <ProjectItem key={project?.duration} project={project} />
        ))}
      </section>
      {!projects?.length && (
        <EmptyStateResource showAction={false} title="No Projects For You" />
      )}
    </>
  );
};

export default ProjectsContainer;
