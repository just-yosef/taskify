"use client";
import Link from "next/link";
import React from "react";
import { getChats } from "../service/chats.service";
import { AlertCircleIcon } from "lucide-react";
import profileImage from "@/app/(shared)/assets/4c3d75aa967003e4bee5b269ee3c6332.webp";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useParamStore } from "../stores/useParamsStore";

interface Props {
  children?: React.ReactNode;
}
export default function ChatPage({ children }: Props) {
  const { data: chats, isLoading } = useQuery({
    queryFn: () => getChats(localStorage.getItem("userId")!),
    queryKey: ["user", getChats(localStorage.getItem("userId")!), "chats"],
  });
  const paramsStore = useParamStore();
  return (
    <div className="flex sm:h-[calc(100vh-100px)] h-[calc(100svh-90px)] bg-background border-teal rounded-xl overflow-hidden">
      <section className="w-1/3 border-r-2 border-r-teal-600 bg-white hidden sm:flex flex-col">
        <div className="flex items-center justify-between p-4 border-b-2 border-b-teal-600">
          <h2 className="text-lg font-semibold text-primary ">Chats</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {isLoading && <h5 className="m-5">Loading Your Chats..</h5>}
          {!chats?.length && !isLoading && (
            <section className="flex flex-col gap-2 items-center mt-5 text-orange-400">
              <AlertCircleIcon />
              No Chats Yet
            </section>
          )}
          {chats?.map((chat) => (
            <Link
              href={`/messages/${chat._id}`}
              key={(chat?._id as string) + Math.random()}
              className={cn(
                "p-3 cursor-pointer hover:bg-blue-50 transition-all border-b-2 border-b-teal-600 flex gap-2",
                paramsStore.paramId === chat._id ? "bg-teal-soft" : ""
              )}
            >
              <div className="flex">
                <Image
                  width={40}
                  height={40}
                  alt="IMG_PROFILE"
                  src={profileImage}
                  className="rounded-full"
                />
              </div>
              <h4 className="font-medium text-sm text-gray-500 truncate">
                {chat.name || "Unnamed Group"}
              </h4>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex-1 flex flex-col items-center justify-center text-gray-400 relative">
        {!paramsStore.paramId && <p>Select a chat to start messaging 💬</p>}
        {children}
      </section>
    </div>
  );
}
