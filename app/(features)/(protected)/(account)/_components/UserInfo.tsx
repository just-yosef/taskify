import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, User2 } from "lucide-react";
import React from "react";

const UserInfo = () => {
  return (
    <>
      <Separator className="my-5" />
      <div className="min-h-[250px] flex items-center justify-center">
        <div className="flex flex-col gap-1 items-center">
          <User className="sm:size-24 size-20" opacity="30%" />
          <h4 className="font-semibold font-[rubicRegular]">ABCD AAAa</h4>
          <Badge variant="blue">
            <User2 size={25} />
            New Client
          </Badge>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default UserInfo;
