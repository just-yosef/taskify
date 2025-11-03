"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Plus } from "lucide-react";
import NewChatDialog from "./AddNewChat";

interface Message {
  id: string;
  sender: string;
  content: string;
  time: string;
  isMine?: boolean;
}

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  unread?: number;
}

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const chats: Chat[] = [
    { id: "1", name: "Ahmed", lastMessage: "تمام يا صاحبي 👌", unread: 2 },
    { id: "2", name: "Sara", lastMessage: "هشوف وارجعلك 👍" },
    { id: "3", name: "Project Group", lastMessage: "يلا بينا نبدأ الكود 💻" },
  ];

  const messages: Message[] = [
    { id: "m1", sender: "Ahmed", content: "إزيك؟", time: "10:20 AM" },
    {
      id: "m2",
      sender: "Me",
      content: "الحمد لله تمام وانت؟",
      time: "10:21 AM",
      isMine: true,
    },
    {
      id: "m3",
      sender: "Ahmed",
      content: "كله تمام، شغال على المشروع؟",
      time: "10:22 AM",
    },
    {
      id: "m4",
      sender: "Me",
      content: "أيوه قربت أخلص الجزء بتاع الـ UI 😎",
      time: "10:23 AM",
      isMine: true,
    },
  ];

  const handleSend = () => {
    if (!message.trim()) return;
    console.log("Send:", message);
    setMessage("");
  };

  return (
    <div className="flex h-[calc(100vh-100px)] bg-background border-teal rounded-xl overflow-hidden">
      <aside className="w-1/3 border-r-2 border-r-teal-600 bg-white hidden sm:flex flex-col">
        <div className="flex items-center justify-between p-4 border-b-2 border-b-teal-600">
          <h2 className="text-lg font-semibold text-primary">Chats</h2>
          <NewChatDialog />
        </div>

        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`p-3 cursor-pointer hover:bg-blue-50 transition-all border-b-2 border-b-teal-600 ${
                selectedChat === chat.id ? "bg-teal-soft" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{chat.name}</h4>
                {chat.unread && (
                  <span className="bg-teal text-white text-xs rounded-full px-2 py-0.5">
                    {chat.unread}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 truncate">
                {chat.lastMessage}
              </p>
            </div>
          ))}
        </div>
      </aside>

      <section className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <div className="border-b-2 p-4 flex justify-between items-center border-b-teal-600">
              <h3 className="font-semibold text-lg">
                {chats.find((c) => c.id === selectedChat)?.name}
              </h3>
              <Button size="sm" variant="outline">
                <Plus className="w-4 h-4 mr-1" /> Add Member
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.isMine ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] px-3 py-2 rounded-2xl text-sm shadow-sm ${
                      msg.isMine
                        ? "bg-blue-500 text-white rounded-br-none"
                        : "bg-white text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <p>{msg.content}</p>
                    <span className="text-xs opacity-70 block mt-1 text-right">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-t-teal-600 p-3 flex gap-2 bg-white items-center">
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button variant="blue" onClick={handleSend}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
            <p>Select a chat to start messaging 💬</p>
          </div>
        )}
      </section>
    </div>
  );
}
