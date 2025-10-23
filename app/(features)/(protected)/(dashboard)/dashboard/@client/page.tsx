import { TitleSection } from "@/app/(shared)/_components";
import React from "react";
import {
  ClientMessages,
  ClientOffers,
} from "@/app/(features)/(protected)/(dashboard)/(client)/_components";
import { StatsGrid } from "@/app/(features)/(protected)/(dashboard)/(shared)/_components";
import { decodedUser } from "@/app/(shared)/helpers";
import { getProjectById } from "../../(client)/service";

const page = async () => {
  const user = await decodedUser();
  const clientProjects = await getProjectById(user._id);
  return (
    <>
      <TitleSection text="Overview" />
      <StatsGrid
        stats={{
          postedJobs: clientProjects.length,
          totalSpend: "10k$",
          freelancers: 3,
          newOffers: 3,
        }}
      />
      {/* <section>
        <TitleSection text="Open Projects" />
        <OpenProjects />
      </section> */}
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
