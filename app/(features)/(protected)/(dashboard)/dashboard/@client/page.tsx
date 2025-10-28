import { TitleSection } from "@/app/(shared)/_components";
import {
  ClientMessages,
  ClientOffers,
  OpenProjects,
} from "@/app/(features)/(protected)/(dashboard)/(client)/_components";
import { StatsGrid } from "@/app/(features)/(protected)/(dashboard)/(shared)/_components";
import { getProjectById } from "../../(client)/service";
import { getClientOffers } from "../../(client)/service/offers.service";
import { decodeUserFromToken } from "@/app/(shared)/helpers/decodeUser";

const page = async () => {
  // Will Be Minimize to one function
  const user = await decodeUserFromToken();
  const clientProjects = await getProjectById(user?._id);
  const clientOffers = await getClientOffers(user?._id);
  return (
    <>
      <TitleSection text="Overview" />
      <StatsGrid
        stats={{
          postedJobs: clientProjects.length,
          totalSpend: `${user?.totalSpend}$`,
          freelancers: 3,
          newOffers: clientOffers.data.proposals.length,
        }}
      />
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
    </>
  );
};

export default page;
