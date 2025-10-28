import { Poropsal } from "@/app/(features)/(protected)/(shared)/types";

export function groupProposalsByProjectId(proposals: Poropsal[]) {
  return proposals.reduce((acc, proposal) => {
    const key = proposal.projectId;
    if (!acc[key]) acc[key] = [];
    acc[key].push(proposal);
    return acc;
  }, {} as Record<string, Poropsal[]>);
}
