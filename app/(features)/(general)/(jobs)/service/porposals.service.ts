import axios from "axios";
import { api } from "../../constants";
interface Porposal {
  projectId: string;
  freelancerId: string;
  clientId: string;
  coverLetter: string;
  amount: number;
  duration: string;
}
export async function createProposal(data: Porposal) {
  try {
    const res = await api.post("/porposals", data);
    return res.data;
  } catch (error: any) {
    console.error("❌ createProposal error:", error.response?.data || error);
    throw new Error(error.response?.data?.error || "Failed to create proposal");
  }
}
