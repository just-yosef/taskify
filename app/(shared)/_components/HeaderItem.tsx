"use client";
import { Loader } from "@/app/(shared)/_components";
import { NavLink } from "@/app/(shared)/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import i18next from "i18next";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { Suspense } from "react";
interface Props {
  item: Partial<NavLink>;
  hiddenMobile?: boolean;
  className?: string;
}

const HeaderItem = ({ item, hiddenMobile, className }: Props) => {
  const t = useTranslations("nav");
  const local = useLocale();
  return (
    <Button
      key={item.label_en}
      asChild
      variant="borderTeal"
      size="sm"
      data-title={t(item.translationKey!)}
      className={cn(
        hiddenMobile ? "lg:hidden" : "",
        "font-[rubicRegular] text-teal",
        "font-[rubicRegular] relative",
        "after:absolute after:bg-[var(--color-teal-soft)] after:px-3 after:py-1 after:opacity-0 after:-bottom-10 after:rounded-md hover:after:opacity-[1] hover:after:-bottom-14 after:content-[attr(data-title)] after:h-fit after:pointer-events-none after:text-[var(--color-teal)] after:border after:border-teal "
      )}
    >
      {item.url ? (
        <Button asChild variant="borderTeal">
          <Link href={{ pathname: item.url }}>
            {item.icon ? <item.icon size={18} /> : null}
          </Link>
        </Button>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              data-title={t(item.translationKey!)}
              variant="borderTeal"
              className={cn(
                hiddenMobile ? "lg:hidden" : "",
                "font-[rubicRegular] relative",
                "after:absolute after:bg-[var(--color-teal-soft)] after:px-3 after:py-1 after:opacity-0 after:-bottom-10 after:rounded-md hover:after:opacity-[1] hover:after:-bottom-14 after:content-[attr(data-title)] after:h-fit after:pointer-events-none after:text-[var(--color-teal)] after:border after:border-teal",
                "max-sm:after:hidden"
              )}
            >
              {item.notifications ? (
                <span
                  className={cn(
                    "size-2.5 bg-teal flex rounded-full absolute",
                    i18next.language === "ar"
                      ? "-left-1 -top-1"
                      : "-right-1 -top-1"
                  )}
                />
              ) : null}
              {item.icon ? <item.icon className="text-teal" /> : null}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align={local === "ar" ? "start" : "end"}
            className={cn(
              "relative max-w-[350px] min-h-[100px] max-h-[350px] pt-0 pb-4 border-teal !border-[1px] px-0 mt-3",
              className
            )}
          >
            <Suspense fallback={<Loader />}>{item.component}</Suspense>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </Button>
  );
};

export default HeaderItem;
