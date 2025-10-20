import { TitleSection } from "@/app/(shared)/_components";
import React from "react";
import { Message } from ".";
import { messages } from "../constants";
const MessagePageContent = () => {
  return (
    <>
      <TitleSection text="All Messages" />
      {messages.map((item) => (
        <Message
          key={item.senderName}
          createdAt={item.createdAt}
          senderName={item.senderName}
          title={item.title}
        />
      ))}
    </>
  );
};

export default MessagePageContent;
