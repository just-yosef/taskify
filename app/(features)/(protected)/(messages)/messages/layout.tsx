"use client";
import React from "react";
import ChatPage from "../_components/ChatPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const layout = ({ children }: { children: React.ReactNode }) => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ChatPage>{children}</ChatPage>
    </QueryClientProvider>
  );
};

export default layout;
