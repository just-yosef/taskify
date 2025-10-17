import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";
import React from "react";

const PorposalItem = () => {
  return (
    <>
      <div className="flex gap-4">
        <User />
        <section className="flex flex-col w-full gap-1">
          <div className="flex flex-col">
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
            <div className="text-teal">Ahmed A</div>
          </div>
          <section className="flex justify-end gap-1">
            <Button variant="emerald">Accept</Button>
            <Button variant="destructive">Reject</Button>
          </section>
        </section>
      </div>
      <Separator className="mt-2 mb-4" />
    </>
  );
};

export default PorposalItem;
