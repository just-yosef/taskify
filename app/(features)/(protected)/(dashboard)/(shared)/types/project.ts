export interface Project {
  id: number;
  title: string;
  status: string;
  variant?: "peach" | "sky" | "teal";
  author: string;
  remaining: string;
}

export interface ProjectItemProps {
  project: Project;
  onView?: (id: number) => void;
  showButton?: boolean;
}

export interface ProjectItemProps {
  project: Project;
  onView?: (id: number) => void;
  showButton?: boolean;
}
