import { useQuery } from "@tanstack/react-query";
import { getSubscriptions } from "../(services)/subscription.service";

export function useSubscribtions() {
    return useQuery({
        queryKey: ["subscribtions"],
        queryFn: getSubscriptions,
        staleTime: 5 * (1000 * 60)
    })
}