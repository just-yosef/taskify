"use client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
interface Props {
  isPending?: boolean;
  handelFn?: React.MouseEventHandler<HTMLButtonElement>;
  //    Promise<void>;
}
const Logout = ({ isPending = false, handelFn }: Props) => {
  const { t } = useTranslation();

  return (
    <Button onClick={handelFn} disabled={isPending} variant="destructive">
      <LogOut /> {isPending ? `${t("nav.loggingout")}` : `${t("nav.logout")}`}
    </Button>
  );
};

export default Logout;
