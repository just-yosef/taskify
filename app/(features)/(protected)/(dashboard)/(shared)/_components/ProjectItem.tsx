"use client";
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
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  onView,
  showButton = true,
}) => {
  return (
    <Card className={cn(`border-${project.variant} bg-white pt-3`)}>
      <CardHeader className="pb-2 p-0">
        <div className="flex items-center justify-between px-5">
          <CardTitle className={cn(`text-base text-${project.variant} font-semibold`)}>
            {project.title}
          </CardTitle>
          <Badge
            variant={project.variant as any}
            className="text-xs px-2 py-0.5"
          >
            {project.status}
          </Badge>
        </div>
        <Separator className={cn(`bg-${project.variant}`)} />
      </CardHeader>
      <CardContent className="text-sm text-gray-500 space-y-1">
        <p>
          <span className="font-medium text-gray-700">By:</span>
          {project.author}
        </p>
        <p>{project.remaining}</p>
      </CardContent>

      {showButton && (
        <CardFooter>
          <Button
            variant="emerald"
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
