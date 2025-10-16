import { HeaderMobile, Logo } from "@/app/(shared)/_components";
import React, { lazy } from "react";
import { clientNavLinks } from "../constants";
import { User } from "lucide-react";
import { HeaderItem } from "../../(shared)/_components";
import { UserActions } from "./index";
const MyAccount = lazy(
  () => import("../../(shared)/_components/dropdowns/MyAccount")
);
const Header = ({ userType }: { userType: "client" | "freelancer" }) => {
  return (
    <header className="container-body flex items-center sticky inset-0 bg-white border-teal justify-between !border-t-transparent !border-r-transparent !border-l-transparent z-[9999]">
      <Logo />
      <section className="flex items-center gap-2 max-lg:hidden">
        {clientNavLinks.map((item) => (
          <HeaderItem item={item} key={item.label_en} />
        ))}
        <UserActions />
      </section>
      <HeaderMobile links={clientNavLinks} />
    </header>
  );
};

export default Header;
