import { decodedUser } from "@/app/(shared)/helpers/server";
import { getProjectById } from "./project.service";
import { getClientOffers } from "./offers.service";

export async function getClientOverview(): Promise<number[]> {
  try {
    const user = await decodedUser();
    const clientProjects = await getProjectById(user!._id);
    const clientOffers = await getClientOffers(user!._id);
    return [
      clientProjects.length,
      clientOffers.data.proposals.length,
      user!.totalSpend,
    ];
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
