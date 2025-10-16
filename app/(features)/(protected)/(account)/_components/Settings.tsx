import { GridContainer, TitleSection } from "@/app/(shared)/_components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import React from "react";
const Settings = () => {
  return (
    <>
      <TitleSection text="Settings" />
      <GridContainer distance="sm">
        <EditSection>
          Name Is:<Badge variant="outline">ABCD AAAA</Badge>
        </EditSection>
        <EditSection>
          Role: <Badge variant="outline">Client</Badge>
        </EditSection>
        <EditSection>
          Verify Email:<Badge variant="outline">Click To Verify</Badge>
        </EditSection>
        <EditSection>
          Phone Number: <Badge variant="outline">+20111-111-111</Badge>
        </EditSection>
      </GridContainer>
    </>
  );
};

export default Settings;

export function EditSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2 border-teal !border-[1px] rounded-lg mb-2 flex items-center justify-between">
      {children}
      <Button className="ml-auto" variant="borderTeal">
        <Edit />
      </Button>
    </div>
  );
}
