import { decodedUser } from "@/app/(shared)/helpers";
import React from "react";
import { Header } from "../../(shared)/_components";

const layout = async ({ children }: { children: React.ReactNode }) => {
  //   const mode: "client" | "freelancer" = (await decodedUser()).role!;
  return (
    <>
      <Header userType="client" />
      {children}
    </>
  );
};

export default layout;
