"use client";
import { logout } from "@/app/(features)/(protected)/(account)/(actions)";
import { Logout } from "@/app/(shared)/_components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Settings, User2 } from "lucide-react";
// import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useTransition } from "react";
const MyAccount = () => {
  const [isPending, transition] = useTransition();
  // const t = useTranslations("nav");

  return (
    <div className="flex flex-col text-sm px-2">
      <Button variant="ghost" className="text-teal justify-start mb-1" asChild>
        <Link href={{ pathname: "/account" }}>
          <User2 />
          {/* {t("myAccount")} */}
          Account
        </Link>
      </Button>
      <Separator />
      <Button variant="ghost" className="justify-start text-teal">
        <Settings />
        Settings
        {/* {t("settings")} */}
      </Button>
      <Separator />
      <Logout handelFn={() => transition(logout)} isPending={isPending} />
    </div>
  );
};

export default MyAccount;
