import { api } from "@/app/(features)/(general)/constants";
import axios from "axios";
import type { Message } from "../types/chat";

export interface MessagePayload {
  chatId: string;
  senderId: string;
  receiverId?: string;
  content: string;
  attachments?: string[];
}

const BASE_URL = "/messages";

export const messageService = {
  async getMessages(chatId?: string): Promise<Message[]> {
    const url = chatId ? `${BASE_URL}?chatId=${chatId}` : BASE_URL;
    const res = await api.get(url);
    if (!res.data) {
      throw new Error("Failed to fetch messages");
    }
    return res.data;
  },
  async sendMessage(payload: MessagePayload) {
    const res = await api.post(BASE_URL, payload);

    if (!res.data) {
      throw new Error("Failed to send message");
    }

    return res.data;
  },
};
