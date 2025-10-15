import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProjectInput } from "../types";
import { createProject } from "../service/project.service";

export function useAddProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ProjectInput) => createProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (error: any) => {
      console.log(error.message);
    },
  });
}
