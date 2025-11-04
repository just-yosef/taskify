import axios from "axios";
import { IChat } from "../types/chat";

export const getChats = async (userId: string): Promise<IChat[] | null> => {
  if (!userId) throw new Error("userId is required");
  const { data } = await axios.get(
    `http://localhost:3000/api/chats?userId=${userId}`
  );
  return data.chats;
};
