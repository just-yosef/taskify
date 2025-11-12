"use client";
import { useState, useCallback, useMemo, useEffect, memo } from "react";
import {
  ChatInfoProps,
  ChatMediaProps,
  ChatNotificationsProps,
  ChatSettingsProps,
  Message,
} from "../types/chat";
import { isMyMessage } from "../helper/IsMyMessage";
import { formatDistanceToNow } from "date-fns";
import { ar } from "date-fns/locale";
import { Pencil, Check, X, Trash2, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Socket } from "socket.io-client";
import { useParamStore } from "../stores/useParamsStore";
import { useQueryClient } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { updateQueryCache } from "../helper/UpdateQuery";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChatPageContent() {
  return <div></div>;
}
ChatPageContent.Message = function ({
  message: msg,
  onDelete,
  socket,
}: {
  message: Message;
  onDelete?: (id: string) => void;
  socket: Socket;
}) {
  const qc = useQueryClient();
  const sender = useMemo(() => localStorage.getItem("userId")!, []);
  const isMessageIsMine = useMemo(() => isMyMessage(msg, sender), [msg]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(msg.content);
  const [isSelected, setIsSelected] = useState(false);
  const paramStore = useParamStore();
  const handleSave = useCallback(() => {
    if (msg.content === editedText) return;
    const payload = {
      messageId: msg._id,
      senderId: sender,
      newContent: editedText,
      chatId: paramStore.paramId,
    };
    socket?.emit("update-message", payload);
    setIsEditing(false);
    setIsSelected(false);
  }, [isSelected]);
  const updateQueryClient = useCallback(
    (updatedMsg: Message) => {
      updateQueryCache<Message[]>(
        qc,
        ["messages", paramStore.paramId!],
        (old) => {
          if (!old) return [updatedMsg];
          return old.map((m) => (m._id === updatedMsg._id ? updatedMsg : m));
        }
      );
    },
    [socket]
  );

  useEffect(() => {
    socket?.on("update-message-success", updateQueryClient);
    socket?.on("delete-message-success", updateQueryClient);
    return () => {
      socket?.off("update-message-success");
      socket?.off("delete-message-success");
    };
  }, [socket]);
  const handleCancel = () => {
    setEditedText(msg.content);
    setIsEditing(false);
    setIsSelected(false);
  };

  const handleDelete = useCallback(() => {
    socket.emit("delete-message", {
      messageId: msg._id,
      senderId: sender,
      chatId: paramStore.paramId,
    });
    toast("deleted");
    setIsSelected(false);
  }, []);

  return (
    <div
      className={`relative flex w-full flex-col ${
        isMessageIsMine ? "justify-end" : "justify-start"
      }`}
    >
      {msg.isDeleted ? (
        <i className={cn(isMessageIsMine ? "ml-auto" : "mr-auto")}>
          Deleted Message
        </i>
      ) : (
        <>
          <div
            onClick={() => setIsSelected((prev) => !prev)}
            className={`cursor-pointer px-3 py-2 rounded-2xl text-sm shadow-sm transition-all duration-200 ${
              isMessageIsMine
                ? "bg-[#3c6e71] text-white rounded-br-none ml-auto"
                : "bg-white text-gray-800 rounded-bl-none mr-auto"
            }`}
          >
            {isEditing ? (
              <div className="flex items-center gap-2">
                <Input
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="flex-1 px-2 py-1 rounded-lg text-sm outline-0 border-background text-black"
                />
                <button
                  onClick={handleSave}
                  className="p-1 rounded-md bg-green-500 hover:bg-green-600 text-white"
                >
                  <Check size={14} />
                </button>
                <button
                  onClick={handleCancel}
                  className="p-1 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-700"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <>
                <p>{msg.content}</p>
                <span
                  className={`text-[11px] block mt-1 ${
                    isMessageIsMine ? "text-gray-100" : "text-gray-500"
                  }`}
                >
                  {formatDistanceToNow(msg.createdAt, { locale: ar })}
                </span>
              </>
            )}
          </div>
          {isSelected && (
            <>
              {msg.updatedAt !== msg.createdAt && (
                <span className={cn(isMessageIsMine ? "ml-auto" : "mr-auto")}>
                  {" "}
                  رساله معدلة{" "}
                </span>
              )}
              <div className="flex flex-col gap-2">
                {isMessageIsMine && !isEditing && isSelected && (
                  <div
                    className={`flex gap-2 mt-1 ${
                      isMessageIsMine ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-1 text-xs bg-white text-gray-700 border px-2 py-1 rounded-lg hover:bg-gray-100 transition"
                    >
                      <Pencil size={14} />
                    </button>

                    <button
                      onClick={handleDelete}
                      className="flex items-center gap-1 text-xs bg-red-500 text-white border px-2 py-1 rounded-lg hover:bg-red-600 transition"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
ChatPageContent.Settings = function ChatSettings({
  isOpen = true,
  onClose,
  chatName,
  onDeleteChat,
}: ChatSettingsProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-0 right-0 h-full w-full bg-white shadow-xl z-50 flex flex-col p-5"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          key={"chat-settings-panel"}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-teal-700">
              إعدادات المحادثة
            </h2>
            <Button variant="ghost" onClick={onClose}>
              <X />
            </Button>
          </div>
          <ChatInfo isGroup chatName="asdasdas" />
          <ChatNotifications notificationsEnabled />
          <ChatMedia filesCount={12} photosCount={2} />
          {/* <div className="space-y-6">
              <div>
                <h3 className="text-gray-700 text-sm font-medium mb-2">
                  المحادثة مع
                </h3>
                <p className="text-base font-semibold text-teal-600">
                  {chatName || "شخص غير معروف"}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="text-gray-600" size={18} />
                  <span className="text-gray-700 text-sm">الإشعارات</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Palette className="text-gray-600" size={18} />
                  <span className="text-gray-700 text-sm">الثيم</span>
                </div>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value as "light" | "dark")}
                  className="border border-gray-300 rounded-md text-sm px-2 py-1"
                >
                  <option value="light">فاتح</option>
                  <option value="dark">غامق</option>
                </select>
              </div>

              <Button
                variant="destructive"
                className="w-full flex items-center justify-center gap-2 mt-6"
                onClick={onDeleteChat}
              >
                <Trash2 size={18} />
                حذف المحادثة
              </Button>
            </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function ChatInfo({
  chatName,
  chatImage,
  lastSeen,
  isGroup,
  description,
}: ChatInfoProps) {
  return (
    <div className="flex flex-col gap-3 mb-4">
      <div className="flex items-center gap-3">
        <img src={chatImage} alt={chatName} />
        <div>
          <h2 className="font-semibold text-lg text-teal-700">{chatName}</h2>
          {!isGroup && lastSeen && (
            <span className="text-sm text-gray-500">آخر ظهور: {lastSeen}</span>
          )}
        </div>
      </div>
      {isGroup && description && (
        <p className="text-sm text-gray-600">{description}</p>
      )}
    </div>
  );
}

export function ChatNotifications({
  notificationsEnabled,
  onToggle,
  muteDuration,
}: ChatNotificationsProps) {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <h3 className="text-gray-700 font-medium text-sm">الإشعارات</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell size={16} className="text-gray-600" />
          <span className="text-gray-700 text-sm">تشغيل الإشعارات</span>
        </div>
      </div>
      {muteDuration && (
        <span className="text-gray-500 text-xs">
          مكتومة لمدة: {muteDuration}
        </span>
      )}
    </div>
  );
}

export function ChatMedia({
  photosCount,
  filesCount,
  onViewPhotos,
  onViewFiles,
}: ChatMediaProps) {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <h3 className="text-gray-700 font-medium text-sm">الوسائط والملفات</h3>
      <div className="flex flex-col gap-1">
        <Button
          variant="outline"
          size="sm"
          onClick={onViewPhotos}
          className="flex items-center gap-2"
        >
          الصور ({photosCount})
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onViewFiles}
          className="flex items-center gap-2"
        >
          <FileText size={16} /> الملفات ({filesCount})
        </Button>
      </div>
    </div>
  );
}

export function ChatHeaderSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <div className="sm:hidden w-5 h-5 bg-teal rounded animate-pulse" />
      <div className="w-10 h-10 rounded-full bg-teal animate-pulse" />
      <div className="flex flex-col gap-1">
        <div className="w-24 h-4 bg-teal rounded animate-pulse" />
        <div className="w-16 h-3 bg-teal rounded animate-pulse" />
      </div>
    </div>
  );
}
