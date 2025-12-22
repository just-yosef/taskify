import { api } from "@/app/(features)/(general)/constants";
import { Project } from "@/app/(shared)/types";

export const getProjectById = async (id: string): Promise<Project> => {
    try {
        return (await api.get(`/projects/${id}`)).data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export async function getProjects(): Promise<Partial<Project>[]> {
    try {
        const res = (await api.get("/projects")).data;
        return res
    } catch (error: any) {
        console.error("Error fetching Projects:", error);
        throw new Error(error.message || "Failed to fetch Projects");
    }
}
