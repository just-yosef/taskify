import React, { ReactNode } from "react";
import { Header } from "../_components";
interface Props {
  children: ReactNode;
  client: ReactNode;
  freelancer: ReactNode;
}
const layout = ({ children, client, freelancer }: Props) => {
  const role = "client";
  return (
    <>
      {role === "client" ? client : freelancer}
      {children}
    </>
  );
};

export default layout;
