import { useQuery } from "@tanstack/react-query";
import { getUserPorposals } from "../service/porposal.service";

export function useGetPorposals() {
  return useQuery({
    queryFn: () => getUserPorposals(localStorage.getItem("userId")!),
    queryKey: ["user", localStorage.getItem("userId"), "porposals"],
    staleTime: 60 * 1000 * 5,
  });

}