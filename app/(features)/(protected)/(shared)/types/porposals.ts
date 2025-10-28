import { IUser } from "@/app/(features)/(general)/types";
import { Project } from "@/app/(shared)/types";

export interface Poropsal {
  projectId: string;
  freelancerId: IUser;
  clientId: string;
  coverLetter: string;
  amount: number;
  duration: string;
  status: "pending" | "accepted" | "rejected";
}
