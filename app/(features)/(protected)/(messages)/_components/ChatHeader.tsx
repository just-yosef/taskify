import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  name: string | undefined;
  isOnline: boolean;
}
const ChatHeader = ({ name, isOnline }: Props) => {
  return (
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
      <div className="flex flex-col">
        <h2 className="font-semibold text-base"> {name} </h2>
        {isOnline ? (
          <p className="text-xs opacity-80">Online</p>
        ) : (
          <p className="text-xs opacity-80"> Last Seen Recently</p>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
