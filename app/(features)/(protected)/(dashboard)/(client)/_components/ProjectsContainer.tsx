"use client";
import { Project } from "@/app/(shared)/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Projects from "./Projects";
interface Props {
  projects: Project[];
}
const ProjectsContainer = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Projects />
    </QueryClientProvider>
  );
};

export default ProjectsContainer;
