import React from "react";
import { EditSection } from "./Settings";
import { Badge } from "@/components/ui/badge";
import { GridContainer } from "@/app/(shared)/_components";

const ClientSettings = () => {
  return (
    <GridContainer>
      <EditSection>
        Name Is:<Badge variant="outline">ABCD AAAA</Badge>
      </EditSection>
      <EditSection>
        Role: <Badge variant="outline">Client</Badge>
      </EditSection>
      <EditSection>
        Passowrd: <Badge variant="outline">********</Badge>
      </EditSection>
      <EditSection>
        Who can see my profile: <Badge variant="outline">All</Badge>
      </EditSection>
      <EditSection>
        Verify Email:<Badge variant="outline">Click To Verify</Badge>
      </EditSection>
      <EditSection>
        Push Notifications:
        <Badge variant="outline" className="text-teal">
          Enable
        </Badge>
      </EditSection>
      <EditSection>
        Phone Number: <Badge variant="outline">+20111-111-111</Badge>
      </EditSection>
    </GridContainer>
  );
};

export default ClientSettings;
