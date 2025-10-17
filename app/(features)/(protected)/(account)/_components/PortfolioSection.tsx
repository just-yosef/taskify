import { GridContainer, TitleSection } from "@/app/(shared)/_components";
import React from "react";
import { fakePortfolio } from "../constants";
import PortfolioItem from "./PortfolioItem";

const PortfolioSection = () => {
  return (
    <>
      <TitleSection text="Portfolio" />
      <GridContainer>
        {fakePortfolio.map(
          ({ title, _id, technologies, liveUrl, githubUrl }) => (
            <PortfolioItem
              liveUrl={liveUrl}
              githubUrl={githubUrl}
              technologies={technologies}
              title={title}
              key={_id}
            />
          )
        )}
      </GridContainer>
    </>
  );
};

export default PortfolioSection;
