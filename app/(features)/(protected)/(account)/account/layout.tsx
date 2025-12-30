// "use client";
import { ReactNode } from "react";
// import "@/lib/i18n";
import AccountTabs from "../_components/AccountTabs";
import { Settings, UserInfo } from "../_components";

const layout = async ({
  children,
  client,
  freelancer,
  params,
}: LayoutProps<"/account">) => {
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
