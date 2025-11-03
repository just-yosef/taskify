import { MoreButton } from "@/app/(shared)/_components";
import { Button } from "@/components/ui/button";
import { Check, Clock, Trash } from "lucide-react";
import { MessageContent } from "../types";
import Link from "next/link";

const Message = ({ senderName, title, createdAt, _id }: MessageContent) => {
  return (
    <Link
      href={`/messages/${_id}`}
      className="flex gap-3 p-4 hover:bg-muted rounded-b-none rounded-lg border-transparent border-[1px] border-b-accent"
    >
      <span className="size-8 rounded-full bg-blue" />
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <h3 className="text-blue font-semibold hover:underline">
            {senderName}
          </h3>
          <h4>{title}</h4>
          <span
            className="text-sm flex gap-1 items-center"
            title={createdAt.toISOString()}
          >
            <Clock size={14} /> 2 horus ago
          </span>
        </div>
        <div>
          <MoreButton variant="blue" variantContent="blue">
            <Button variant="outline">
              <Check /> Mark As Read
            </Button>
            <Button variant="destructive" className="justify-start">
              <Trash /> Delete
            </Button>
          </MoreButton>
        </div>
      </div>
    </Link>
  );
};

export default Message;
