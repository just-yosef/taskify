"use client";
import React from "react";
import { useClientProjects } from "../hooks";
import ProjectItem from "./ProjectItem";
import EmptyStateResource from "./EmptyStateResource";
import { Loader } from "@/app/(shared)/_components";

const Projects = () => {
  const { data: projects, isLoading } = useClientProjects();
  return (
    <>
      {isLoading && <Loader />}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-2">
        {projects?.map((project) => (
          <ProjectItem key={project?.duration} project={project} />
        ))}
      </section>
      {!isLoading && !projects?.length && (
        <EmptyStateResource showAction={false} title="No Projects For You" />
      )}
    </>
  );
};

export default Projects;
