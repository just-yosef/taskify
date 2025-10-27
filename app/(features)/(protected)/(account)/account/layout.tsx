"use client";
import { ReactNode } from "react";
import "@/lib/i18n";
interface Props {
  children: ReactNode;
  client: ReactNode;
  freelancer: ReactNode;
}
const layout = async ({ children, client, freelancer }: Props) => {
  return (
    <>
      {/* {role === "client" ? client : freelancer} */}
      {children}
    </>
  );
};

export default layout;
