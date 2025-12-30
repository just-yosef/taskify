"use client";
import { isActiveLink as _isActiveLink } from "@/app/(shared)/helpers/IsActiveLink";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback } from "react";
const AccountTabs = () => {
  const pathname = usePathname();
  const isActiveLink = useCallback(_isActiveLink, [pathname]);
  const tabs = [
    { title: "Settings", path: "/settings" },
    { title: "Services", path: "/services" },
  ];
  return (
    <div className="flex items-center gap-2">
      {tabs.map((el) => {
        const isActiveLinkK = isActiveLink(
          el.path.split("/").slice(-1)[0],
          pathname.split("/").slice(-1)[0]
        );
        return (
          <Button
            variant="borderTeal"
            className={cn(isActiveLinkK ? "bg-teal text-white" : "")}
          >
            <Link href={{ pathname: "/account" + el.path }}> {el.title} </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default AccountTabs;
