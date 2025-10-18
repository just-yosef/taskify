"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Header } from "./(account)/_components";
import { BodyContainer } from "@/app/(shared)/_components";

export default function layout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BodyContainer>
        {/* <Header /> */}
        {children}
      </BodyContainer>
    </QueryClientProvider>
  );
}
