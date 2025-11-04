import React from "react";
import ChatPage from "../_components/ChatPage";
import { Metadata } from "next";
export const metadata: Metadata = { title: "All Messages" };
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ChatPage>{children}</ChatPage>
    </>
  );
};

export default layout;
