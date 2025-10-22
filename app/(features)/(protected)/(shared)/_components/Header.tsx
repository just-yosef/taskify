import { Logo, Logout, Messages } from "@/app/(shared)/_components";
import React from "react";
import {
  clientHeaderLinks,
  clientNavLinks,
} from "../../(dashboard)/(client)/constants";
import { HeaderItem } from "../../(dashboard)/(shared)/_components";
import { UserActions } from "../../(dashboard)/(client)/_components/index";
import { Bell, MessageCircle } from "lucide-react";
import { Notifications } from "../../(dashboard)/(freelancer)/_components";
import ToggleNavbarMobile from "@/app/(shared)/_components/ToggleNavbarMobile";
import { freelancerLinks } from "../../(dashboard)/(freelancer)/constants";
import ToggleLanguge from "./ToggleLanguge";

const Header = ({
  userType = "freelancer",
}: {
  userType: "client" | "freelancer";
}) => {
  return (
    <header className="flex items-center sticky inset-0 bg-white border-teal justify-between !border-t-transparent !border-r-transparent !border-l-transparent z-[9999] py-3 container-body">
      <Logo />
      <section className="flex items-center gap-2 max-lg:hidden">
        {clientNavLinks.slice(0, -1).map((item) => (
          <HeaderItem item={item} key={item.label_en} />
        ))}
        <UserActions />
        <ToggleLanguge />
        <Logout />
      </section>
      <div className="flex items-center gap-1 lg:hidden">
        <ToggleLanguge />
        <HeaderItem
          hiddenMobile
          className="min-w-[200px]"
          item={{
            label_en: "",
            component: <Messages />,
            icon: MessageCircle,
            notifications: 12,
          }}
        />
        <HeaderItem
          hiddenMobile
          className="min-w-[200px]"
          item={{
            label_en: "",
            component: <Notifications />,
            icon: Bell,
            notifications: 0,
          }}
        />
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
