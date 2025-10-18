"use client";
import { logout } from "@/app/(features)/(protected)/(account)/account/(actions)";
import { Logout } from "@/app/(shared)/_components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LogOut, Settings, User2 } from "lucide-react";
import Link from "next/link";
import React, { useTransition } from "react";
const MyAccount = () => {
  const [isPending, transition] = useTransition();
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
      <Logout handelFn={() => transition(logout)} isPending={isPending} />
    </div>
  );
};

export default MyAccount;
