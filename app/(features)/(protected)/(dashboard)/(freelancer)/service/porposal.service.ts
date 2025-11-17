import { api } from "@/app/(features)/(general)/constants";
import { IProposal } from "../models/porposal.model";

export async function getUserPorposals(userId: string): Promise<IProposal[]> {
    try {
        const userPorposals = await api.get("/porposals", { params: { userId } })
        return userPorposals.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}


export async function deleteUserPorposal(porposalId: string): Promise<IProposal[]> {
    try {
        const userPorposals = await api.delete(`/porposals/${porposalId}`)
        return userPorposals.data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

