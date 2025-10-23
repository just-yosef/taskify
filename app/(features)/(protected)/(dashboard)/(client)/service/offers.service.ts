import { api } from "@/app/(features)/(general)/constants";


const getClientOffers = async (id?: string): Promise<[]> => {
  const res = await api.get(`/porposals?userId=${id}`);
  return res.data;
};
