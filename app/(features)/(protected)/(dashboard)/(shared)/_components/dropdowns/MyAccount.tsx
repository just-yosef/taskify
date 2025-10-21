"use client";
import { logout } from "@/app/(features)/(protected)/(account)/(actions)";
import { Logout } from "@/app/(shared)/_components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Settings, User2 } from "lucide-react";
import Link from "next/link";
import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";
const MyAccount = () => {
  const [isPending, transition] = useTransition();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-1 text-sm py-1 px-2">
      <Button variant="ghost" className="text-teal justify-start" asChild>
        <Link href={{ pathname: "/account" }}>
          <User2 /> {t("nav.myAccount")}
        </Link>
      </Button>
      <Separator />
      <Button variant="ghost" className="justify-start text-teal">
        <Settings /> {t("nav.settings")}
      </Button>
      <Separator />
      <Logout handelFn={() => transition(logout)} isPending={isPending} />
    </div>
  );
};

export default MyAccount;
