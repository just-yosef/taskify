import { TitleSection } from "@/app/(shared)/_components";
import React from "react";
import { OverviewSections } from "./index";

const FreelancerOverview = () => {
  return (
    <>
      <TitleSection text="Overview" />
      <OverviewSections />
    </>
  );
};

export default FreelancerOverview;
