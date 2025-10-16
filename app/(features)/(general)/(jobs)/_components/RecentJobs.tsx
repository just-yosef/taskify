import { projects } from "@/app/(features)/(protected)/(dashboard)/(client)/constants";
import {
  GridContainer,
  JobItem,
  TitleSection,
} from "@/app/(shared)/_components";
import ProjectItem from "@/app/(shared)/_components/ProjectItem";
import React from "react";

const RecentJobs = () => {
  return (
    <>
      <TitleSection text="Recent Jobs" />
      <GridContainer>
        {projects.map((project) => (
          <JobItem project={project} />
        ))}
      </GridContainer>
    </>
  );
};

export default RecentJobs;
