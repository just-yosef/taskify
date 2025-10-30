import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "../service";
import { Project } from "../../(shared)/types";
import { getUserId } from "@/app/(shared)/helpers";

export const useClientProjects = (
  userId: string = "68e8f790ff890cfe04613c72"
) => {
  return useQuery<Project[]>({
    queryKey: ["projects", userId],
    queryFn: () => getProjectById(userId!),
    enabled: !!userId,
  });
};
