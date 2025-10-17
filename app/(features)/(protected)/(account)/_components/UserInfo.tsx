"use client";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Edit, Locate, Star, User, User2 } from "lucide-react";
import React, { useMemo } from "react";
import { fakeReviews } from "../constants";
import { Button } from "@/components/ui/button";

const UserInfo = () => {
  const avgRating = useMemo(
    () =>
      fakeReviews.reduce((ac, el) => +ac.toString() + el.rating, 1) /
      fakeReviews.length,
    []
  );
  return (
    <>
      <Separator className="my-5" />
      <div className="min-h-[250px] flex items-center justify-center">
        <div className="flex flex-col gap-0.5 items-center">
          <User className="sm:size-24 size-20" opacity="30%" />
          <h4 className="font-semibold font-[rubicRegular]">ABCD AAAa</h4>
          <div className="flex gap-1">
            <Badge variant="blue">
              <User2 size={25} />
              New Client
            </Badge>
            <Badge variant="outline">
              <Locate />
              Egypt
            </Badge>
            <Badge variant="outline" className="bg-yellow-300">
              <Star />
              Rating
              {avgRating}
            </Badge>
            <Badge variant="outline" className="bg-green-700 text-white">
              <Check size={22} />
              Verifyed
            </Badge>
          </div>
          <p className="text-muted-foreground">
            no bio yet
            <Button size="icon-sm" variant="outline" className="m-2">
              <Edit size={8} />
            </Button>
          </p>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default UserInfo;
