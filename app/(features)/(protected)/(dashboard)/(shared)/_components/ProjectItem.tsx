"use client"
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProjectItemProps } from "../types";

const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  onView,
  showButton = true,
}) => {
  return (
    <Card className="border-teal bg-white">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-gray-800">
            {project.title}
          </CardTitle>
          <Badge
            variant={project.variant as any}
            className="text-xs px-2 py-0.5"
          >
            {project.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="text-sm text-gray-500 space-y-1">
        <p>
          <span className="font-medium text-gray-700">By:</span>{" "}
          {project.author}
        </p>
        <p>{project.remaining}</p>
      </CardContent>

      {showButton && (
        <CardFooter>
          <Button
            variant="teal"
            size="sm"
            className="mt-1"
            onClick={() => onView && onView(project.id)}
          >
            Show More
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectItem;
