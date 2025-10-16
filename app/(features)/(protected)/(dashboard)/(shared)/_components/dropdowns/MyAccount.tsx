import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LogOut, Settings, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const MyAccount = () => {
  return (
    <div className="flex flex-col gap-1 text-sm py-1 px-2">
      <Button variant="ghost" className="text-teal" asChild>
        <Link href={{ pathname: "/account" }}>
          <User2 /> My Account
        </Link>
      </Button>
      <Separator />
      <Button variant="ghost" className="justify-start text-teal">
        <Settings /> Settings
      </Button>
      <Separator />
      <Button variant="destructive" className="justify-start mt-1">
        <LogOut /> Logout
      </Button>
    </div>
  );
};

export default MyAccount;
