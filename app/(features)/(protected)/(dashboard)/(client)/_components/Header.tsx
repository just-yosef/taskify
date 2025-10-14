"use client";
import { HeaderMobile, Loader, Logo } from "@/app/(shared)/_components";
import React, { lazy, Suspense } from "react";
import { clientNavLinks, messages } from "../constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ userType }: { userType: "client" | "freelancer" }) => {
  return (
    <header className="container-body flex items-center sticky inset-0 bg-white border-teal justify-between !border-t-transparent !border-r-transparent !border-l-transparent">
      <Logo />
      <section className="flex items-center gap-2 max-lg:hidden">
        {clientNavLinks
          .slice(0, userType !== "client" ? -1 : undefined)
          .map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.label_en}
                asChild
                variant="borderTeal"
                size="sm"
                className="font-[rubicRegular]"
              >
                {item.url ? (
                  <Link href={{ pathname: item.url }}>
                    {Icon ? <Icon size={18} /> : null}
                    {item.label_en}
                  </Link>
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="borderTeal">
                        {Icon ? <Icon size={18} /> : null}
                        {item.label_en}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-[350px] relative min-h-[180px] max-h-[350px] pt-0 pb-4 border-teal px-0"
                    >
                      <Suspense fallback={<Loader />}>
                        {item.component}
                      </Suspense>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </Button>
            );
          })}
      </section>
      <HeaderMobile links={clientNavLinks} />
    </header>
  );
};

export default Header;
