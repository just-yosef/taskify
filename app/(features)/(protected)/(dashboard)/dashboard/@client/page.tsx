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
import { getTranslations } from "next-intl/server";

const page = async () => {
  // Will Be Minimize to one function
  const user = await decodeUserFromToken();
  const clientProjects = await getProjectById(user?._id);
  const clientOffers = await getClientOffers(user?._id);
  const t = await getTranslations("dashboard");
  return (
    <>
      <TitleSection text={t("overview")} />
      <StatsGrid
        stats={{
          postedJobs: clientProjects.length,
          totalSpend: `${user?.totalSpend}$`,
          freelancers: 3,
          newOffers: clientOffers.data.proposals.length,
        }}
      />
      <section>
        <TitleSection text={t("openProjects")} />
        <OpenProjects />
      </section>
      <section>
        <TitleSection text={t("newOffers")} />
        <ClientOffers />
      </section>
      <section>
        <TitleSection text={t("latestMessages")} />
        <ClientMessages />
      </section>
    </>
  );
};

export default page;
