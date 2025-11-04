import { TitleSection } from "@/app/(shared)/_components";
import React from "react";
import ChatPage from "./ChatPage";
const MessagePageContent = () => {
  return (
    <section>
      {/* <NewChatDialog /> */}
      <TitleSection text="All Messages" />
      <ChatPage />
    </section>
  );
};

export default MessagePageContent;
