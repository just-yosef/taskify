"use client";
import { Separator } from "@/components/ui/separator";
import { messages } from "../../(client)/constants";
import { Bell, Edit, MoreHorizontal, Trash } from "lucide-react";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
// import arJson from "@/app/(lang)/ar.json";
// import { translateKeys } from "@/app/(shared)/helpers/translateWords";
// import { useTranslations } from "next-intl";
type detectNestedKeys<T> = keyof T;
const Notifications = () => {
  // const t = useTranslations("nav");
  return (
    <>
      <h3 className="border-b-solid sticky -top-0 left-0 z-[999] bg-white p-3 py-1 font-[rubicMedium] border-b-teal-500 border-2 border-transparent mb-3 pb-2">
        {/* {t("notifications")} */}
        notifications
        <span className="float-end">({messages.length})</span>
      </h3>
      <section className="flex flex-col gap-1 px-1">
        {messages.map((el, i, a) => (
          <section key={el.time}>
            <div className="flex gap-3 mt-2 pl-2">
              <Bell />
              <div className="flex gap-2 flex-col relative leading-[1.2] text-sm pr-8">
                <span>{el.content}</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <span className="float-end absolute top-0 right-2 z-1 ">
                      <MoreHorizontal />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="flex flex-col gap-1 z-10 relative w-[130px] bg-white p-2 border-teal rounded-lg"
                  >
                    <Button size="sm" variant="ghost">
                      <Edit /> Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Trash /> Delete
                    </Button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            {i < a.length - 1 && <Separator className="my-2" />}
          </section>
        ))}
      </section>
    </>
  );
};

export default Notifications;
