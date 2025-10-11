import { TitleSection } from "@/app/(shared)/_components";

import React from "react";
import {
  ClientMessages,
  ClientOffers,
  OpenProjects,
  StatsGrid,
} from "@/app/(features)/(protected)/(dashboard)/(client)/_components";
import { stats } from "@/app/(features)/(protected)/(dashboard)/(client)/constants";

const page = () => {
  return (
    <div>
      <TitleSection text="Overview" />
      <StatsGrid stats={stats} />

      <section>
        <TitleSection text="Open Projects" />
        <OpenProjects />
      </section>
      <section>
        <TitleSection text="New Offers" />
        <ClientOffers />
      </section>
      <section>
        <TitleSection text="Latest Messages" />
        <ClientMessages />
      </section>
    </div>
  );
};

export default page;
