import React from "react";
import { PorposalItem } from "./index";
import { TitleSection } from "@/app/(shared)/_components";

const JobPorposals = () => {
  return (
    <>
      <TitleSection text="Porposals (4)" />
      <h4 className="mt-5 mb-3"> </h4>
      <section className="border-teal p-3 py-5 rounded-sm">
        <PorposalItem />
        <PorposalItem />
        <PorposalItem />
        <PorposalItem />
      </section>
    </>
  );
};

export default JobPorposals;
