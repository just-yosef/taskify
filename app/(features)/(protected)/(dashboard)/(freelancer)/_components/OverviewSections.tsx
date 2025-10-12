import React from "react";
import { stats } from "../constants";
import { GridContainer, StatCard } from "../../(shared)/_components";

const OverviewSections = () => {
  return (
    <GridContainer>
      {stats.map(({ title, value }) => (
        <StatCard title={title} value={value} />
      ))}
    </GridContainer>
  );
};

export default OverviewSections;
