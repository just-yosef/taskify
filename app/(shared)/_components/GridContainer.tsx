import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  distance?: "sm" | "wd";
  children: React.ReactNode;
}
const GridContainer = ({ distance = "sm", children }: Props) => {
  return (
    <div
      className={cn(
        distance === "wd"
          ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          : "grid grid-cols-2 md:grid-cols-3 gap-4",
        "max-sm:grid-cols-1"
      )}
    >
      {children}
    </div>
  );
};

export default GridContainer;
