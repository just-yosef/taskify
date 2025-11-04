import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React, { RefObject, useEffect, useState } from "react";
interface Message {
  id: string;
  sender: string;
  content: string;
  time: string;
  isMine?: boolean;
  avatar?: string;
}
interface Props {
  ref: RefObject<HTMLDivElement | null>;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  messages: Message[];
}
const SendMessageArea = ({ ref, messages, setMessages }: Props) => {
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [newMsg, setNewMsg] = useState("");
  const handleSend = () => {
    if (!newMsg.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "Me",
        content: newMsg,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMine: true,
      },
    ]);
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
        variant="blue"
        onClick={handleSend}
        className="flex items-center gap-1"
      >
        <Send className="w-4 h-4" /> إرسال
      </Button>
    </section>
  );
};

export default SendMessageArea;
