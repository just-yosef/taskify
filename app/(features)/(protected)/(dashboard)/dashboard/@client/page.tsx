import { TitleSection } from "@/app/(shared)/_components";

import React from "react";
import {
  ClientMessages,
  ClientOffers,
  OpenProjects,
} from "@/app/(features)/(protected)/(dashboard)/(client)/_components";
import { StatsGrid } from "@/app/(features)/(protected)/(dashboard)/(shared)/_components";

import { stats } from "@/app/(features)/(protected)/(dashboard)/(client)/constants";

const page = () => {
  return (
    <>
      <TitleSection text="Overview" />
      <StatsGrid stats={stats} />
      <section>
        <TitleSection text="Open Projects" />
        {/* <OpenProjects /> */}
      </section>
      <section>
        <TitleSection text="New Offers" />
        <ClientOffers />
      </section>
      <section>
        <TitleSection text="Latest Messages" />
        <ClientMessages />
      </section>
    </>
  );
};

export default page;
