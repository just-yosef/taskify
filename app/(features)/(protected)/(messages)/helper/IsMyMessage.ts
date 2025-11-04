import { Message } from "../types/chat";

export function isMyMessage(message: Message, currentUserId: string): boolean {
  return message.sender._id.toString() === currentUserId;
}
