import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React, { RefObject, useEffect, useState } from "react";
import { Message } from "../types/chat";
import { Socket } from "socket.io-client";

interface Props {
  ref: RefObject<HTMLDivElement | null>;
  messages: Message[];
  socket: Socket;
  sender: string;
  reciver: string;
  chatId: string;
}
const SendMessageArea = ({
  ref,
  messages,
  socket,
  chatId,
  reciver,
  sender,
}: Props) => {
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const [newMsg, setNewMsg] = useState("");
  const handleSend = () => {
    if (!newMsg.trim()) return;
    socket?.emit(
      "send-message",
      {
        content: newMsg,
        sender,
        receiver: reciver,
        chat: chatId,
      },
      chatId
    );
    setNewMsg("");
  };
  return (
    <section className="border-t border-teal-600 p-3 flex gap-2 bg-white items-center">
      <Input
        placeholder="اكتب رسالتك..."
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <Button
        variant="teal"
        onClick={handleSend}
        className="flex items-center mt-0"
      >
        <Send />
      </Button>
    </section>
  );
};

export default SendMessageArea;
