"use client";
import React, { ReactNode } from "react";
import "@/lib/i18n";
interface Props {
  children: ReactNode;
  client: ReactNode;
  freelancer: ReactNode;
}
const layout = async ({ children, client, freelancer }: Props) => {
  // const { role } = await getCookie<IUser>("user");

  return (
    <>
      {/* {role === "client" ? client : freelancer} */}
      {children}
    </>
  );
};

export default layout;
