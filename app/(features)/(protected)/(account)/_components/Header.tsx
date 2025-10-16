"use client";
import { Logo } from "@/app/(shared)/_components";
import HeaderItem from "@/app/(shared)/_components/HeaderItem";
import React, { lazy, useMemo } from "react";
import { headerLinks } from "../constants";
import {
  AddNewProject,
  UserActions,
} from "../../(dashboard)/(client)/_components";
import ToggleNavbarMobile from "@/app/(shared)/_components/ToggleNavbarMobile";
import { Bell, MessageCircle } from "lucide-react";
import { Notifications } from "../../(dashboard)/(freelancer)/_components";
const Messages = lazy(
  () => import("@/app/(shared)/_components/dropdowns/Messages")
);
const Header = () => {
  const links = useMemo(
    () =>
      headerLinks.map((item) => {
        return { href: item?.url, label: item.label_en, ...item };
      }),
    []
  );

  return (
    <header className="flex items-center justify-between relative">
      <Logo />
      <section className="flex items-center gap-1 max-lg:hidden">
        {headerLinks.map((item) => (
          <HeaderItem item={item} />
        ))}
        <AddNewProject />
      </section>
      <div className="flex items-center gap-1 lg:hidden">
        <HeaderItem
          hiddenMobile
          className="min-w-[200px]"
          item={{
            label_en: "",
            component: <Messages />,
            icon: MessageCircle,
          }}
        />
        <HeaderItem
          hiddenMobile
          className="min-w-[200px]"
          item={{
            label_en: "",
            component: <Notifications />,
            icon: Bell,
          }}
        />
        <UserActions />
        <ToggleNavbarMobile links={links} />
      </div>
    </header>
  );
};

export default Header;
