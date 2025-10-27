import { getProject } from "@/app/(features)/(protected)/(dashboard)/(client)/service/project.service";
import { useQuery } from "@tanstack/react-query";

export function useProject(id: string) {
  return useQuery({
    queryFn: () => getProject(id),
    queryKey: ["project"],
    enabled: !!id,
  });
}
