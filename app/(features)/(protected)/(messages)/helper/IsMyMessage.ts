import { Message } from "../types/chat";

export function isMyMessage(message: Message, currentUserId: string): boolean {
  if (!message?.sender || !currentUserId) return false;

  const senderId =
    typeof message.sender === "object" ? message.sender._id : message.sender;

  return senderId?.toString() === currentUserId?.toString();
}
