import React, { Suspense } from "react";
const MessagePageContent = dynamic(
  () => import("../_components/MessagePageContent")
);
import dynamic from "next/dynamic";
import { Loader } from "@/app/(shared)/_components";
const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <MessagePageContent />
    </Suspense>
  );
};

export default page;
