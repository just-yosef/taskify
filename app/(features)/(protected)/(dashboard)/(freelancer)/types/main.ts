export interface Proposal {
  id: number;
  projectTitle: string;
  freelancerName: string;
  price: number;
  duration: number;
  status: "pending" | "accepted" | "rejected";
  submittedAt: string; // ISO date string
  message: string;
}
