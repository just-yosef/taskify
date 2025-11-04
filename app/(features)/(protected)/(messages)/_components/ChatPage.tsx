import Link from "next/link";
import NewChatDialog from "./AddNewChat";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getChats } from "../service/chats.service";
import { decodedUser } from "@/app/(shared)/helpers/server";
import { AlertCircleIcon } from "lucide-react";
import profileImage from "@/app/(shared)/assets/4c3d75aa967003e4bee5b269ee3c6332.webp";
import Image from "next/image";

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  unread?: number;
}

interface Props {
  children?: React.ReactNode;
}
export default async function ChatPage({ children }: Props) {
  const chats = await getChats((await decodedUser())?._id!);
  return (
    <div className="flex sm:h-[calc(100vh-100px)] h-[calc(100svh-90px)] bg-background border-teal rounded-xl overflow-hidden">
      <section className="w-1/3 border-r-2 border-r-teal-600 bg-white hidden sm:flex flex-col">
        <div className="flex items-center justify-between p-4 border-b-2 border-b-teal-600">
          <h2 className="text-lg font-semibold text-primary ">Chats</h2>
          <NewChatDialog />
        </div>
        <div className="flex-1 overflow-y-auto">
          {!chats?.length && (
            <section className="flex flex-col gap-2 items-center mt-5 text-orange-400">
              <AlertCircleIcon />
              No Chats Yet
            </section>
          )}
          {chats?.map((chat) => (
            <Link
              href={`/messages/${chat._id}`}
              key={(chat?._id as string) + Math.random()}
              className="p-3 cursor-pointer hover:bg-blue-50 transition-all border-b-2 border-b-teal-600 flex gap-2"
            >
              <div className="flex ">
                <Image
                  width={40}
                  height={40}
                  alt="IMG_PROFILE"
                  src={profileImage}
                  className="rounded-full"
                />
                <h4 className="font-medium">{chat.name}</h4>
              </div>
              <p className="text-sm text-gray-500 truncate">Last Message</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex-1 flex flex-col items-center justify-center text-gray-400 relative">
        {children || <p>Select a chat to start messaging 💬</p>}
      </section>
    </div>
  );
}
