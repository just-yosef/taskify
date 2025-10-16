"use client";
import React, { useCallback } from "react";
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
import { MoreButton, PendingFormLabel } from "@/app/(shared)/_components";
import { useDeleteProject } from "../hooks";
import { toast } from "sonner";
import EditProject from "./EditProject";
import { getProjectVariant } from "../../(shared)/helpers/getProjectVariant";

const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  onView,
  showButton = true,
}) => {
  const getVariant = useCallback(getProjectVariant, []);
  const { mutate, isPending } = useDeleteProject();
  const handleDelete = useCallback(() => {
    mutate(project._id!, {
      onSuccess: () => toast.success("Project deleted successfully"),
      onError: () => toast.error("Failed to delete project"),
    });
  }, []);
  return (
    <Card className="border-teal bg-white">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-gray-800">
            {project.title}
            <Badge
              variant={getVariant(project.status)}
              className="text-xs px-2 py-0.5 ml-2"
            >
              {project.status}
            </Badge>
          </CardTitle>
          <div className="flex gap-2">
            <MoreButton>
              <EditProject project={project} />
              <Button
                onClick={handleDelete}
                size="sm"
                disabled={isPending}
                variant="destructive"
              >
                <PendingFormLabel action="Delete" isSubmitting={isPending} />
              </Button>
            </MoreButton>
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-sm text-gray-500 space-y-1">
        <p>
          <span className="font-medium text-gray-700">By:</span>
          {project.clientName}
        </p>
        <p>{project.duration}</p>
      </CardContent>

      {showButton && (
        <CardFooter>
          <Button variant="teal" size="sm" className="mt-1">
            Show More
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectItem;
