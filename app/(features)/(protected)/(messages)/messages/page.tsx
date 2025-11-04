import React, { Suspense } from "react";
const MessagePageContent = dynamic(
  () => import("../_components/MessagePageContent")
);
import dynamic from "next/dynamic";
const page = () => {
  return <></>;
};

export default page;
