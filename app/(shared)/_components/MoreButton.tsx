import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
interface Vars {
  default: string;
  destructive: string;
  outline: string;
  secondary: string;
  ghost: string;
  link: string;
  teal: string;
  borderTeal: string;
  sky: string;
  rose: string;
  peach: string;
  emerald: string;
  roseRed: string;
  blue: string;
}
const MoreButton = ({
  children,
  variant = "borderTeal",
  variantContent = "teal",
}: {
  children: React.ReactNode;
  variant?: keyof Vars;
  variantContent?: Exclude<
    keyof Vars,
    "borderTeal" | "destructive" | "secondary" | "emerald"
  >;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(variant ? `border-${variant}` : "border-teal")}
        >
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={cn(
          "flex flex-col gap-1 z-10 relative min-w-[130px] bg-white p-2 border-blue rounded-lg",
          variantContent ? `border-${variantContent}` : "border-teal"
        )}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreButton;
