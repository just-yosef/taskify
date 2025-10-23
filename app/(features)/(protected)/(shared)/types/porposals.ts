export interface Poropsal {
  projectId: string;
  freelancerId: string;
  clientId: string;
  coverLetter: string;
  amount: number;
  duration: string;
  status: "pending" | "accepted" | "rejected";
}
