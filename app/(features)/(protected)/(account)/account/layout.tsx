"use client";
import { ReactNode } from "react";
import "@/lib/i18n";
interface Props {
  children: ReactNode;
  client: ReactNode;
  freelancer: ReactNode;
}
const layout = ({ children, client, freelancer }: Props) => {
  return (
    <>
      <head>
        <title>حسابي</title>
      </head>
      {/* {role === "client" ? client : freelancer} */}
      {children}
    </>
  );
};

export default layout;
