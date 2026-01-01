// "use client";
// import "@/lib/i18n";
import AccountTabs from "../_components/AccountTabs";
import { UserInfo } from "../_components";

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
