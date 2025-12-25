import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  distance?: "sm" | "wd";
  children: React.ReactNode;
  className?: string;
}
const GridContainer = ({ distance = "sm", children, className }: Props) => {
  return (
    <div
      className={cn(
        distance === "wd"
          ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:grid-cols-2"
          : "grid grid-cols-2 md:grid-cols-3 gap-4",
        "max-sm:grid-cols-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GridContainer;
