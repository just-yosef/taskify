import { BodyContainer } from "@/app/(shared)/_components";
import React from "react";
import { Header, Settings, UserInfo } from "../_components";

const page = () => {
  return (
    <BodyContainer>
      <Header />
      <UserInfo />
      <Settings />
    </BodyContainer>
  );
};

export default page;
