import { api } from "@/app/(features)/(general)/constants";
import { ProjectInput } from "../types";
import { Project } from "@/app/(shared)/types";
const getProjects = async (): Promise<Project[] | undefined> => {
  try {
    const res = await api.get(`/projects`);
    return res.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

const getProjectById = async (id: string) => {
  const res = await api.get(`/projects/${id}`);
  return res.data;
};

const createProject = async (data: ProjectInput) => {
  const res = await api.post("/projects", data);
  return res.data;
};

const updateProject = async (id: string, data: Partial<ProjectInput>) => {
  const res = await api.patch(`/projects/${id}`, data);
  return res.data;
};

const deleteProject = async (id: string) => {
  const res = await api.delete(`/projects/${id}`);
  return res.data;
};

export {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
