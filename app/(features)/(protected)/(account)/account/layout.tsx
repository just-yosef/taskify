// "use client";
import { ReactNode } from "react";
// import "@/lib/i18n";
import AccountTabs from "../_components/AccountTabs";
import { Settings, UserInfo } from "../_components";
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
      <UserInfo />
      {/* {role === "client" ? client : freelancer} */}
      <AccountTabs />
      {children}
    </>
  );
};

export default layout;
