"use client";
import { HeaderMobile, Logo } from "@/app/(shared)/_components";
import React, { JSX } from "react";
import { clientNavLinks } from "../constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container-body flex items-center sticky inset-0 bg-white border-teal justify-between !border-t-transparent !border-r-transparent !border-l-transparent">
      <Logo />
      <section className="flex items-center gap-2 max-sm:hidden">
        {clientNavLinks.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              asChild
              variant="borderTeal"
              size="sm"
              className="font-[rubicRegular]"
            >
              <Link href={{ pathname: item.url }}>
                {Icon ? <Icon size={18} /> : null}
                {item.label_en}
              </Link>
            </Button>
          );
        })}
      </section>
      <HeaderMobile links={clientNavLinks} />
    </header>
  );
};

export default Header;
