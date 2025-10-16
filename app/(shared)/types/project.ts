export interface Project {
  _id?: string;
  title: string;
  description: string;
  budgetMin?: number;
  budgetMax?: number;
  duration?: string;
  category?: string;
  status: ProjectStatus;
  clientId: string;
  createdAt: Date | string;
  clientName: string;
  variant?: ProjectStatus;
}

export type ProjectStatus = "open" | "in_progress" | "completed";

export interface ProjectItemProps {
  project: Project;
  onView?: (id: number) => void;
  showButton?: boolean;
}
