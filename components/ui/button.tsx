import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-sm font-medium transition-all font-[rubicRegular] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive capitalize mt-2",

  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "border-red-400 hover:bg-red-100 border-2 bg-red-50 text-red-600 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background border-muted-foreground shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        teal: "bg-[#008080] text-white hover:bg-[#006666]",
        borderTeal:
          "border-[#008080] border text-[#008080] hover:bg-[#006666] hover:text-white",
        sky: "bg-[#7da1f5] text-white hover:bg-[#6b90e6]",
        rose: "bg-[#db5461] text-white hover:bg-[#c0414e]",
        peach: "bg-[#fea271] text-white hover:bg-[#f68a4d]",
        emerald:
          "bg-[#38A3A5] text-white hover:bg-[#4C956C] focus-visible:ring-[#80ED99]/50",
        roseRed:
          "bg-[#CE4257] text-white hover:bg-[#b33a4c] active:bg-[#e6536b] focus-visible:ring-[#CE4257]/50",
        blue: "border-transparent bg-blue text-white hover:bg-[color-mix(in srgb, var(--color-blue), black 10%)]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
