import { TitleSection } from "@/app/(shared)/_components";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import React from "react";
import { AccountSettings } from "./index";
const Settings = () => {
  return (
    <>
      <TitleSection text="Settings" />
      <AccountSettings role="freelancer" />
    </>
  );
};

export default Settings;

export function EditSection({
  children,
  isEdited = true,
}: {
  children: React.ReactNode;
  isEdited?: boolean;
}) {
  return (
    <div className="p-2 border-teal !border-[1px] rounded-lg mb-2 flex items-center justify-between flex-wrap">
      {children}
      {isEdited && (
        <Button className="ml-auto" variant="borderTeal">
          <Edit />
        </Button>
      )}
    </div>
  );
}
