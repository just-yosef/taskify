"use client";
import Link from "next/link";
import { useState } from "react";
import { TopBarLinksArray } from "../types/ui";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface Props {
  links: TopBarLinksArray;
}

const HeaderMobile = ({ links }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        size="icon"
        variant="borderTeal"
        className="lg:hidden border-teal"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open && (
        <div className="absolute top-full right-1 mt-2 w-[calc(100vw-10px)] flex flex-col bg-white border rounded-lg shadow-md sm:hidden overflow-hidden border-teal">
          {links.map((lnk) => {
            const Icon = lnk.icon;
            return (
              <Link
                key={lnk.url}
                href={{ pathname: lnk.url }}
                onClick={() => setOpen(false)}
                className="px-4 py-2 flex items-center gap-2 text-gray-700 hover:bg-gray-100"
              >
                {Icon && <Icon size={18} />}
                {lnk.label_en}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default HeaderMobile;
