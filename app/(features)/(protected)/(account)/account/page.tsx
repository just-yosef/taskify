import React from "react";
import { Settings, UserInfo } from "../_components";
import { Header } from "../../(shared)/_components";

const page = () => {
  return (
    <>
      <Header userType="client" />
      <UserInfo />
      <Settings />
    </>
  );
};
export default page;
