import { AddNewProject, ProjectsContainer } from ".";

async function OpenProjects() {
  return (
    <section className="relative min-h-[200px] ">
      <AddNewProject />
      <ProjectsContainer />
    </section>
  );
}

export default OpenProjects;
