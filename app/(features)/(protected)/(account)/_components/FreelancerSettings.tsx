import React from "react";
import { EditSection } from "./Settings";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Tag } from "lucide-react";
import { GridContainer, TitleSection } from "@/app/(shared)/_components";
import { PortfolioSection, Reviews } from "./index";

const FreelancerSettings = () => {
  return (
    <>
      <section className="pl-10">
        <TitleSection text="Account Information" />
        <GridContainer distance="sm">
          <EditSection>
            Name Is:<Badge variant="outline">ABCD AAAA</Badge>
          </EditSection>
          <EditSection>
            Role: <Badge variant="outline">Client</Badge>
          </EditSection>
          <EditSection>
            Job Title: <Badge variant="outline">Freelancer Web Developer</Badge>
          </EditSection>
          <EditSection>
            Hour Rate: <DollarSign size={18} className="text-green-500" />{" "}
            <b>10</b>
          </EditSection>
          <EditSection>
            Languges:
            <Badge variant="outline" className="mr-1">
              Ar
            </Badge>
            <Badge variant="outline">En</Badge>
          </EditSection>
          <EditSection>
            Skills:
            {["html", "css", "react", "nextjs", "node"].map((el) => (
              <Badge variant="outline" className="text-teal ml-1">
                <Tag /> {el}
              </Badge>
            ))}
          </EditSection>
        </GridContainer>
      </section>
      <PortfolioSection />
      <Reviews />
    </>
  );
};

export default FreelancerSettings;
