import { Poropsal } from "@/app/(features)/(protected)/(shared)/types";
export function isAccessToPostPorposal(proposals: Poropsal[], currentUser: string) {
    return !proposals.length
        ? true
        : !proposals.some(
            (porposal) => porposal.freelancerId._id === currentUser
        );
}
