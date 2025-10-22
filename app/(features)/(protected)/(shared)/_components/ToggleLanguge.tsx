"use client";
import { useDirection } from "@/app/(shared)/hooks";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Languages } from "lucide-react";
import { useCallback } from "react";

const ToggleLanguge = () => {
  const { dir, setDir } = useDirection();
  const handelToggleLanguges = useCallback((val: "ar" | "en") => {
    setDir(val === "ar" ? "rtl" : "ltr");
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="borderTeal">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3 border-teal">
        <DropdownMenuItem onClick={() => handelToggleLanguges("ar")}>
          Arabic {dir === "rtl" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handelToggleLanguges("en")}>
          English {dir === "ltr" && <Check />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleLanguge;
