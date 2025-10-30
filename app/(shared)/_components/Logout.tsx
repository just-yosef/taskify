"use client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
// import { useTranslations } from "next-intl";
import React from "react";
interface Props {
  isPending?: boolean;
  handelFn?: React.MouseEventHandler<HTMLButtonElement>;
}
const Logout = ({ isPending = false, handelFn }: Props) => {
  // const t = useTranslations("nav.logout");
  return (
    <Button onClick={handelFn} disabled={isPending} variant="destructive">
      <LogOut /> {isPending ? `${"Logging out.."}` : `Log out`}
    </Button>
  );
};

export default Logout;
