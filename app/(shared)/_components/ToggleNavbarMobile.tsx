"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
type link = { href: string | undefined; label: string };
interface Props<T extends link, K extends object> {
  links: (T & K)[];
}
function ToggleNavbarMobile<A extends {}>({ links }: Props<link, A>) {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="borderTeal"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-2 w-[450px] mr-2 lg:hidden border-teal !border-[1px] ">
        {links.map((lnk) => (
          <Link
            key={lnk.href}
            href={{ pathname: lnk.href }}
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            {lnk.label}
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ToggleNavbarMobile;
