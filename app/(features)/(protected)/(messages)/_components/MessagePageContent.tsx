import { TitleSection } from "@/app/(shared)/_components";
import React from "react";
import { Message } from ".";
import { messages } from "../constants";
import NewChatDialog from "./AddNewChat";
const MessagePageContent = () => {
  return (
    <section>
      <NewChatDialog />
      <TitleSection text="All Messages" />
      {messages.map((item, i) => (
        <Message
          key={item.senderName}
          createdAt={item.createdAt}
          senderName={item.senderName}
          title={item.title}
          _id={i + 1 + ""}
        />
      ))}
    </section>
  );
};

export default MessagePageContent;
