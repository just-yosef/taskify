import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
// { children }: { children: React.ReactNode }
const AccountTabs = () => {
  const tabs = [
    { title: "Settings", path: "/settings" },
    { title: "Services", path: "/services" },
  ];
  return (
    <div className="flex items-center gap-2">
      {tabs.map((el) => (
        <Button variant="borderTeal" asChild>
          <Link href={{ pathname: "/account" + el.path }}> {el.title} </Link>
        </Button>
      ))}
    </div>
  );
};

export default AccountTabs;
