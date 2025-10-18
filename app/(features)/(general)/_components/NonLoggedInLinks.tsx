"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { UserActions } from "../../(protected)/(dashboard)/(client)/_components";

const NonLoggedInLinks = () => {
  const [open, setOpen] = useState(false);

  const publicLinks = [
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="relative">
      <section className="flex items-center gap-3 max-sm:hidden font-[rubicRegular] ">
        {publicLinks.map((lnk) => (
          <Link
            key={lnk.href}
            href={{ pathname: lnk.href }}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            {lnk.label}
          </Link>
        ))}
        <Button asChild variant="teal">
          <Link href="/signin">Login</Link>
        </Button>
      </section>
      <section className="flex gap-2">
        <Button
          size="icon"
          variant="borderTeal"
          className="sm:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </section>
      {open && (
        <div className="absolute right-0 mt-2 w-[calc(100vw-30px)] flex flex-col bg-white border rounded-lg shadow-md sm:hidden overflow-hidden border-teal">
          {publicLinks.map((lnk) => (
            <Link
              key={lnk.href}
              href={{ pathname: lnk.href }}
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {lnk.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NonLoggedInLinks;
