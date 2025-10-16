import { Loader } from "@/app/(shared)/_components";
import { NavLink } from "@/app/(shared)/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { Suspense } from "react";
interface Props {
  item: Partial<NavLink>;
  hiddenMobile?: boolean;
  className?: string;
}
const HeaderItem = ({ item, hiddenMobile, className }: Props) => {
  return (
    <Button
      key={item.label_en}
      asChild
      variant="borderTeal"
      size="sm"
      className={cn(hiddenMobile ? "lg:hidden" : "", "font-[rubicRegular]")}
    >
      {item.url ? (
        <Link href={{ pathname: item.url }}>
          {item.icon ? <item.icon size={18} /> : null}
          {item.label_en}
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="borderTeal"
              className={cn(
                hiddenMobile ? "lg:hidden" : "",
                "font-[rubicRegular]"
              )}
            >
              {item.icon ? <item.icon size={18} /> : null}
              {item.label_en}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
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
