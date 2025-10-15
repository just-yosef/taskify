import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React from "react";
interface Props {
  isChild?: boolean;
  size?: number;
}

const Loader = ({ isChild = true, size }: Props) => {
  return (
    <Loader2
      size={size}
      className={cn(
        isChild ? "absolute top-1/2 left-1/2 -translate-x-1/2" : "",
        "animate-spin"
      )}
    />
  );
};

export default Loader;
