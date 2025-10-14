import React from "react";
import { messages } from "../../(client)/constants";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";

const MessagesContent = () => {
  return (
    <>
      <h3 className="border-b-solid sticky -top-0 left-0 z-[999] bg-white p-3 py-1 font-[rubicMedium] border-b-teal-500 border-2 border-transparent mb-3 pb-2">
        All Messages
      </h3>
      <section className="flex flex-col gap-1 px-1">
        {messages.map((el, i, a) => (
          <>
            <div className="flex gap-3 mt-2 pl-2">
              <User />
              <div className="flex gap-2 flex-col leading-[1.2] text-sm">
                <span>{el.content}</span>
                <div className="text-sm underline text-teal">
                  {el.senderName}
                </div>
              </div>
            </div>
            {i < a.length - 1 && <Separator className="my-2" />}
          </>
        ))}
      </section>
    </>
  );
};

export default MessagesContent;
