"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
interface Props {
  title: string;
  variant?: "peach" | "sky" | "teal";
  cardContent?: React.ReactNode;
  actions?: React.ReactNode;
  status?: "pending" | "accepted" | "rejected";
}
function GridItem({ title, variant, cardContent, actions, status }: Props) {
  return (
    <Card
      className={cn(
        `border-${variant} bg-white pt-3 ${
          status === "rejected"
            ? "pb-0 overflow-hidden opacity-50 cursor-no-drop"
            : ""
        }`
      )}
    >
      <CardHeader className="pb-2 px-0">
        <div className="flex items-center justify-between px-5">
          <CardTitle className={cn(`text-base text-${variant} font-semibold`)}>
            {title}
          </CardTitle>
          <Badge
            variant={
              status === "pending"
                ? "peach"
                : status === "accepted"
                ? "teal"
                : "destructive"
            }
            className="text-xs px-2 py-0.5"
          >
            {status}
          </Badge>
        </div>
        <Separator className={cn(`bg-${variant}`)} />
      </CardHeader>

      <CardContent className="text-sm text-gray-500 space-y-1">
        {cardContent}
      </CardContent>
      {status !== "rejected" ? (
        <>{actions && <CardFooter>{actions}</CardFooter>}</>
      ) : (
        <h5 className="p-5 text-red-500 font-semibold bg-red-100 text-sm font-[rubicRegular] ">
          This Porposal Has Been Rejected!
        </h5>
      )}
    </Card>
  );
}

export default GridItem;
