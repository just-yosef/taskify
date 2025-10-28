import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";
import React from "react";

const PorposalItem = ({
  isAccessActions,
  content,
  author,
}: {
  isAccessActions: boolean;
  content: string;
  author: string;
}) => {
  return (
    <>
      <div className="flex gap-4">
        <User />
        <section className="flex flex-col w-full gap-1">
          <div className="flex flex-col">
            <div> {content} </div>
            <div className="text-teal">{author}</div>
          </div>
          {isAccessActions && (
            <section className="flex justify-end gap-1">
              <Button variant="emerald">Accept</Button>
              <Button variant="destructive">Reject</Button>
            </section>
          )}
        </section>
      </div>
    </>
  );
};

export default PorposalItem;
