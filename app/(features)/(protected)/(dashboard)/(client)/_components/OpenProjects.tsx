import { Project } from "@/app/(shared)/types";
import { AddNewProject, ProjectsContainer } from ".";

function OpenProjects() {
  return (
    <section className="relative min-h-[200px] ">
      <AddNewProject />
      <ProjectsContainer />
    </section>
  );
}

export default OpenProjects;
