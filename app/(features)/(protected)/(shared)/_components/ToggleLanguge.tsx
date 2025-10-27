"use client";
import { useLanguageStore } from "@/app/(features)/(general)/(localization)/_store";
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
  const langugeStore = useLanguageStore();
  const handelToggleLanguges = useCallback((val: "ar" | "en") => {
    langugeStore.setLanguage(val);
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
          Arabic {langugeStore.language === "ar" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handelToggleLanguges("en")}>
          English {langugeStore.language === "en" && <Check />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleLanguge;
