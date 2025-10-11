import React from "react";
import { Badge } from "@/components/ui/badge";

import { projects } from "../constants";
import ProjectItem from "./ProjectItem";
import EmptyStateResource from "./EmptyStateResource";
import { Project } from "../types";
import { Button } from "@/components/ui/button";

const OpenProjects: React.FC = () => {
  return (
    <>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project: Project, index) => (
          <ProjectItem key={project?.id} project={project} />
        ))}
      </section>
      {!projects.length && <EmptyStateResource title="Project" />}
      {projects.length > 3 && (
        <Button className="!mx-auto flex mt-4" size="lg" variant="teal">
          View All Projects
        </Button>
      )}
    </>
  );
};

export default OpenProjects;
