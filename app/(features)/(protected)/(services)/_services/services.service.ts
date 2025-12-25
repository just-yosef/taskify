import { api } from "@/app/(features)/(general)/constants";
import { Types } from "mongoose";
import { Service } from "../types/services";

interface ServiceResponse {
    services: Service[],
    count: number
}
export const getAllServices = async () => {
    return await api.get("/services")
};
export const getServicesByUserId = async (userId: string): Promise<ServiceResponse> => {
    if (!Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid userId");
    }
    return (await api.get(`/services?userId=${userId}`)).data
};
