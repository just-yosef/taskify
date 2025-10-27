import { api } from "@/app/(features)/(general)/constants";
import { Proposal } from "../../(freelancer)/types";
import { AxiosResponse } from "axios";
type AggregatedProposals = {
  proposals: Proposal[];
  stats: { totalProposals: number }[];
};

export const getClientOffers = async (
  id?: string
): Promise<AxiosResponse<AggregatedProposals>> => {
  const res = await api.get(`/client-offers?clientId=${id}`);
  return res.data;
};
