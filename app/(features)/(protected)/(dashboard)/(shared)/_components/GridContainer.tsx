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
        distance === "sm"
          ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          : "grid grid-cols-2 sm:grid-cols-3 gap-4"
      )}
    >
      {children}
    </div>
  );
};

export default GridContainer;
