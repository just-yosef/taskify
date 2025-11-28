"use client";
import { changeLanguge } from "@/app/(features)/(general)/(localization)/(actions)";
import { useLanguageStore } from "@/app/(features)/(general)/(localization)/_store";
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
  const handelToggleLanguges = useCallback(async (val: "ar" | "en") => {
    const data = new FormData();
    data.append("lang", val);
    await changeLanguge(data);
    location.reload();
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
        <DropdownMenuItem
          className="hover-teal-soft"
          onClick={() => handelToggleLanguges("ar")}
        >
          Arabic {langugeStore.language === "ar" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover-teal-soft"
          onClick={() => handelToggleLanguges("en")}
        >
          English {langugeStore.language === "en" && <Check />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleLanguge;
