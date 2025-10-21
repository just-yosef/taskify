import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Info, LucideProps } from "lucide-react";
import React from "react";
interface Props {
  text: string;
  variant: "teal" | "sky" | "rose" | "peach" | "blue";
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}
const WraningMessage = ({ text, variant = "blue", icon: Icon }: Props) => {
  return (
    <h3
      className={cn(
        "p-3 font-[rubicMedium]  rounded-lg  font-semibold flex items-center gap-2",
        variant
          ? `bg-${variant}-soft border-${variant}-500 border-2 text-${variant}`
          : ""
      )}
    >
      {<Icon />} {text}
    </h3>
  );
};

export default WraningMessage;
