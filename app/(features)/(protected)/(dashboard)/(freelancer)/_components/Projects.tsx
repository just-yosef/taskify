import { TitleSection } from "@/app/(shared)/_components";
import {
  GridContainer,
  ProjectItem,
} from "@/app/(features)/(protected)/(dashboard)/(shared)/_components";
import React from "react";
import { Project } from "../../(shared)/types";

const Projects = () => {
  return (
    <>
      <TitleSection text="My Open Projects" />
      <GridContainer distance="wd">
        {(
          [
            {
              author: "Abc",
              remaining: "5d",
              status: "active",
              title: "Building Dashboard",
              id: 1,
              variant: "sky",
            },
            {
              author: "asdasd",
              remaining: "5d",
              status: "in_progress",
              title: "Building Dashboard",
              id: 2,
              variant: "sky",
            },
            {
              status: "active",
              title: "Building Dashboard",
              id: 3,
              variant: "peach",
            },
          ] as Project[]
        ).map((item) => (
          <ProjectItem
            project={{
              ...item,
              variant:
                item.status === "completed"
                  ? "teal"
                  : item.status === "in_progress"
                  ? "peach"
                  : "sky",
            }}
            key={item.clientId}
          />
        ))}
      </GridContainer>
    </>
  );
};

export default Projects;
