import React from "react";
import { messages } from "../../(client)/constants";
import { User } from "lucide-react";
import Link from "next/link";

const MessagesContent = () => {
  return (
    <>
      <section className="flex items-center justify-between border-b-solid border-b-teal-500 w-full sticky -top-0 left-0 z-[999] bg-white p-3 py-1 font-[rubicMedium]  border-2 border-transparent">
        <h3>All Messages</h3>
        <Link href="/messages" className="text-sm">
          Show All
        </Link>
      </section>
      <section className="flex flex-col gap-1 px-1">
        {messages.map((el) => (
          <MessagesContent.MessageItem el={el} />
        ))}
      </section>
    </>
  );
};

export default MessagesContent;

type Msg = (typeof messages)[number];
MessagesContent.MessageItem = ({ el }: { el: Msg }) => (
  <>
    <section key={el.time} className="hover-teal-soft p-2  rounded-lg">
      <div className="flex gap-3 mt-2 pl-2">
        <User />
        <div className="flex gap-2 flex-col leading-[1.2] text-sm">
          <span>{el.content}</span>
          <div className="text-sm underline text-teal">{el.senderName}</div>
        </div>
      </div>
    </section>
  </>
);
