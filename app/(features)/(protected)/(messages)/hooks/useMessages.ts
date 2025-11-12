import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { MessagePayload, messageService } from "../service/messages.service";
export function useMessages(chatId?: string) {
  const queryClient = useQueryClient();
  const {
    data: messages,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["messages", chatId],
    queryFn: () => messageService.getMessages(chatId),
    enabled: !!chatId,
    // staleTime: 60 * 1000,
  });

  const sendMessage = useMutation({
    mutationFn: (payload: MessagePayload) =>
      messageService.sendMessage(payload),
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["messages", chatId] });
    // },
  });

  return {
    messages,
    isLoading,
    isError,
    sendMessage: sendMessage.mutateAsync,
    isSending: sendMessage.isPending,
  };
}
