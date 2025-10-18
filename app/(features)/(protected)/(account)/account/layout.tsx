import { getCookie } from "@/app/(api)/(helpers)";
import { IUser } from "@/app/(features)/(general)/types";
import React, { ReactNode } from "react";
import { Header } from "../../(shared)/_components";
interface Props {
  children: ReactNode;
  client: ReactNode;
  freelancer: ReactNode;
}
// @ts-ignore
const layout = async ({ children, client, freelancer }: Props) => {
  const role = await getCookie<IUser>("user");
  return (
    <>
      <Header userType={role?.role!} />
      {/* {role === "client" ? client : freelancer} */}
      {children}
    </>
  );
};

export default layout;
