import { ProjectStatus } from "../types";

export const getProjectVariant = (
  status: ProjectStatus
): "teal" | "peach" | "sky" => {
  switch (status) {
    case "completed":
      return "teal";
    case "in_progress":
      return "peach";

    default:
      return "sky";
  }
};
