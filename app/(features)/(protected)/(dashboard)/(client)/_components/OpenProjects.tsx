"use client";
import ProjectItem from "./ProjectItem";
import { Button } from "@/components/ui/button";
import AddNewProject from "./AddNewProject";
import { useClientProjects } from "../hooks";
import { Loader } from "@/app/(shared)/_components";
// import { projects } from "../constants";

const OpenProjects: React.FC = () => {
  const { data: projects, isLoading } = useClientProjects();

  return (
    <section className="relative min-h-[200px] ">
      <AddNewProject />
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <Loader />
        ) : (
          projects?.map((project) => (
            <ProjectItem key={project?.duration} project={project} />
          ))
        )}
      </section>
      {/* {!projects?.length && <EmptyStateResource title="Project" />} */}
      {projects!?.length > 3 && (
        <Button className="!mx-auto flex mt-4" size="lg" variant="teal">
          View All Projects
        </Button>
      )}
    </section>
  );
};

export default OpenProjects;
