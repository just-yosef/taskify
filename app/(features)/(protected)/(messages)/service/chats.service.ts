import axios from "axios";
import { Chat, IChat } from "../types/chat";
import { api } from "@/app/(features)/(general)/constants";

export const getChats = async (userId: string): Promise<IChat[] | null> => {
  if (!userId) throw new Error("userId is required");
  const { data } = await axios.get(
    `https://taskify-five-psi.vercel.app/api/chats`,
    { params: { userId } }
  );
  return data.chats;
};
export async function getChatsByUserId(
  userId: string
): Promise<{ chat: Chat } | null> {
  if (!userId) throw new Error("userId is required");

  try {
    const chats = await api.get(`/chats/${userId}`);
    return chats.data;
  } catch (error: any) {
    console.error("Error fetching chats:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch chats");
  }
}
