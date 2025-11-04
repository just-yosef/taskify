"use client";
import { useParams } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MoreVertical } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SendMessageArea from "./SendMessageArea";
import { useMessages } from "../hooks/useMessages";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Message as M } from "../types/chat";
import { isMyMessage } from "../helper/IsMyMessage";
import { useLoggedInUser } from "../../(shared)/hooks";
import { ar, enUS } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";
import { useLanguageStore } from "@/app/(features)/(general)/(localization)/_store";

interface Message {
  id: string;
  sender: string;
  content: string;
  time: string;
  isMine?: boolean;
  avatar?: string;
}
export default function MessagePage() {
  const { messageId } = useParams<{ messageId: string }>();
  const { messages: realMessages, isLoading } = useMessages(messageId!);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "Ahmed",
      content: "صباح الفل يا صاحبي ☀️",
      time: "10:15 AM",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "2",
      sender: "Me",
      content: "صباح النور يا معلم 😎",
      time: "10:16 AM",
      isMine: true,
    },
    {
      id: "3",
      sender: "Ahmed",
      content: "خلصت الجزء بتاع الـ Dashboard؟",
      time: "10:18 AM",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "4",
      sender: "Me",
      content: "أيوه قربت أخلصه 💪",
      time: "10:19 AM",
      isMine: true,
    },
  ]);
  const { data } = useLoggedInUser();
  const isMessageIsMine = useCallback(isMyMessage, [messageId]);
  const langugeStore = useLanguageStore();
  return (
    <div className="flex flex-col sm:h-[calc(100vh-100px)] h-full border border-teal-600 overflow-hidden bg-white shadow-md w-full">
      <section className="flex justify-between items-center border-b border-teal-600 px-4 py-3 bg-teal-soft text-teal">
        <div className="flex items-center gap-3">
          <Link href="/chat" className="sm:hidden">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h2 className="font-semibold text-base">Ahmed</h2>
            <p className="text-xs opacity-80">Online</p>
          </div>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:bg-teal-700"
        >
          <MoreVertical className="w-5 h-5" />
        </Button>
      </section>

      <motion.section
        layout
        className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-3"
      >
        <AnimatePresence>
          {isLoading && (
            <motion.section
              layout
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0, transition: { ease: "easeInOut" } }}
              exit={{ opacity: 0, y: -10 }}
              className="border-teal p-2 w-fit rounded-lg mx-auto px-10 bg-teal-soft"
            >
              جاري تحميل دردشاتك ...
            </motion.section>
          )}
        </AnimatePresence>

        {realMessages!?.map((msg: M) => (
          <div
            key={msg.chat._id?.toString()}
            className={`flex items-end gap-2 relative transition-all ${cn(
              msg.receiver._id ? "justify-end" : "justify-start",
              isLoading ? "top-5" : "top-0"
            )}`}
          >
            <div
              className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm shadow-sm ${
                isMessageIsMine(msg, data?._id!)
                  ? "bg-teal-500 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none"
              }`}
            >
              <p>{msg.content}</p>
              <span
                className={`text-[11px] block mt-1 ${
                  isMessageIsMine(msg, data?._id!)
                    ? "text-gray-100"
                    : "text-gray-500"
                }`}
              >
                {formatDistanceToNow(msg.updatedAt, {
                  locale: langugeStore.language === "ar" ? ar : enUS,
                })}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </motion.section>
      <SendMessageArea
        messages={messages}
        setMessages={setMessages}
        ref={messagesEndRef}
      />
    </div>
  );
}
