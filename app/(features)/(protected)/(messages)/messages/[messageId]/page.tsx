"use client";
import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { Loader } from "@/app/(shared)/_components";
const MessagePage = dynamic(() => import("../../_components/MessagePage"));
const page = () => {
  
  const qClient = new QueryClient();
  return (
    <QueryClientProvider client={qClient}>
      <Suspense fallback={<Loader />}>
        <MessagePage />
      </Suspense>
    </QueryClientProvider>
  );
};

export default page;
