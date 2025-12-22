"use client";
import { Logo, Logout, Messages } from "@/app/(shared)/_components";
import React from "react";
import {
  clientHeaderLinks,
  clientNavLinks,
} from "../../(dashboard)/(client)/constants";
import { HeaderItem } from "../../(dashboard)/(shared)/_components";
import { UserActions } from "../../(dashboard)/(client)/_components/index";
import { Bell, MessageCircle, User } from "lucide-react";
import { Notifications } from "../../(dashboard)/(freelancer)/_components";
import ToggleNavbarMobile from "@/app/(shared)/_components/ToggleNavbarMobile";
import { freelancerLinks } from "../../(dashboard)/(freelancer)/constants";
import ToggleLanguge from "./ToggleLanguge";

const Header = ({
  userType = "freelancer",
}: {
  userType: "client" | "freelancer";
}) => {
  const myMsgs = {
    label_en: "",
    component: <Messages />,
    icon: MessageCircle,
    notifications: 12,
    translationKey: "messages",
  };
  const notfs = {
    label_en: "",
    component: <Notifications />,
    icon: Bell,
    notifications: 0,
    translationKey: "notifications",
  };

  return (
    <header className="flex items-center sticky inset-0 bg-white border-teal justify-between !border-t-transparent !border-r-transparent !border-l-transparent z-[9999] py-3 container-body">
      <Logo />
      <section className="flex items-center gap-1 max-lg:hidden">
        {[...clientNavLinks].map((item) => (
          <HeaderItem item={item} key={item.label_en} />
        ))}
        <UserActions />
        <ToggleLanguge />
        <Logout />
      </section>
      <div className="flex items-center gap-1 lg:hidden">
        <ToggleLanguge />
        {[myMsgs, notfs].map((item) => (
          <HeaderItem hiddenMobile className="min-w-[200px]" item={item} />
        ))}
        <UserActions />
        <ToggleNavbarMobile
          links={
            userType === "freelancer" ? freelancerLinks : clientHeaderLinks
          }
        />
      </div>
    </header>
  );
};

export default Header;
