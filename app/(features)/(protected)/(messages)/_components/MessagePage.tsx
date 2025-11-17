"use client";
import { useParams } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useMessages } from "../hooks/useMessages";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Message as M, Message } from "../types/chat";
import { useChat } from "../hooks/useUserChats";
import SendMessageArea from "./SendMessageArea";
import { Loader } from "@/app/(shared)/_components";
import ChatHeader from "./ChatHeader";
import ChatActions from "./ChatActions";
import ChatPageContent, { ChatHeaderSkeleton } from "./ChatPageContent";
import { useParamStore } from "../stores/useParamsStore";
import { useSocketStore } from "../stores/useSocketStore";
import { useChatSettingsStore } from "../stores/useChatsSettingsStore";
export default function MessagePage() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messageId } = useParams<{ messageId: string }>();
  const { messages: realMessages, isLoading } = useMessages(messageId!);
  const [newMessages, setNewMessages] = useState<Message[]>([]);
  const { chats, isLoading: isLoadingChats } = useChat(messageId);
  const paramStore = useParamStore();
  const socketStore = useSocketStore();
  const socket = socketStore?.socket;
  const sender = useMemo(() => localStorage.getItem("userId")!, [socket]);
  useEffect(() => {
    socketStore?.connect(sender);
  }, []);
  console.log(socketStore.onlineUsers);

  useEffect(() => {
    if (!socket) return;
    socket?.emit("join-chat", messageId);
    socket?.on("send-message-success", (data: Message) =>
      setNewMessages((prev) => [...prev, data])
    );
    socket?.on("online-users", (users) => {
      socketStore.setOnlineUsers(users);
    });
    socket?.emit("new-client-connection", { userId: sender });

    return () => {
      // socketStore.disconnect();
      socket?.off("online-users");
      socket?.off("send-message-success");
    };
  }, [socketStore.socket, messageId]);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    paramStore.setParamId(messageId);
  }, [newMessages, messageId]);
  const consumer = chats?.chat.members?.filter(
    (el) => el._id!.toString() !== sender.toString()
  );
  const reciver = useMemo(
    () =>
      chats?.chat.members?.filter(
        (person) => person._id!.toString()! !== sender
      ),
    [chats]
  );
  const { isOpen, close } = useChatSettingsStore();
  return (
    <div className="flex flex-col sm:h-[calc(100vh-100px)] h-full border border-teal-600 overflow-hidden bg-white shadow-md w-full relative">
      <section className="flex justify-between items-center border-b border-teal-600 px-4 py-3 bg-teal-soft text-teal">
        {isLoading ? (
          <ChatHeaderSkeleton />
        ) : (
          <ChatHeader
            isOnline={socketStore.onlineUsers.some(
              (user) => user.userId === reciver?.[0]._id
            )}
            name={consumer?.[0]?.fullName}
          />
        )}
        <ChatActions />
      </section>
      {isOpen && <ChatPageContent.Settings onClose={close} isOpen={isOpen} />}
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
        {[...(realMessages || []), ...newMessages]?.map((msg: M) => {
          return (
            <motion.div
              key={msg._id}
              className={`flex items-end gap-2 w-full relative transition-all ${cn(
                msg.receiver?._id ? "justify-end" : "justify-start",
                isLoading ? "top-5" : "top-0"
              )}`}
            >
              <ChatPageContent.Message socket={socket} message={msg} />
            </motion.div>
          );
        })}
        <div ref={messagesEndRef} />
      </motion.section>
      {isLoadingChats ? (
        <Loader />
      ) : !!socket ? (
        <SendMessageArea
          sender={sender}
          reciver={reciver?.[0]?._id!.toString()!}
          chatId={messageId}
          socket={socket}
          messages={realMessages!}
          ref={messagesEndRef}
        />
      ) : (
        ""
      )}
    </div>
  );
}
