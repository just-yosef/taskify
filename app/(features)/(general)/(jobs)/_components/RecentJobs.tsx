import {
  GridContainer,
  JobItem,
  TitleSection,
} from "@/app/(shared)/_components";
import Link from "next/link";
import React from "react";
import { api } from "../../constants";
import { Project } from "@/app/(shared)/types";
import { getProjects } from "@/app/(features)/(protected)/(dashboard)/(client)/service";

const RecentJobs = async () => {

  const data = await getProjects();
  return (
    <>
      <TitleSection text="Recent Jobs" />
      <GridContainer>
        {data?.map((project) => (
          <Link href={{ pathname: `/projects/${project._id}` }}>
            <JobItem project={project} />
          </Link>
        ))}
      </GridContainer>
    </>
  );
};

export default RecentJobs;
