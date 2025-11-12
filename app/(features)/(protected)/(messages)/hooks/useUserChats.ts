import { useQuery } from "@tanstack/react-query";
import { getChatsByUserId } from "../service/chats.service";
export function useChat(userId?: string) {
  const {
    data: chats,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["chats", userId],
    queryFn: () => getChatsByUserId(userId!),
    enabled: !!userId,
    staleTime: 60 * 1000 * 5,
  });
  return {
    chats,
    isLoading,
    isError,
    refetch,
  };
}
