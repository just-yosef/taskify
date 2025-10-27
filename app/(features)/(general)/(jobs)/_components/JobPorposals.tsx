import { getProposalsByProject } from "@/app/(features)/(protected)/(dashboard)/(client)/service/project.service";
import { PorposalItem } from "./index";
import { Loader, TitleSection } from "@/app/(shared)/_components";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import AddNewPorposals from "./AddNewPorposals";
interface Props {
  projectId: string;
}
const JobPorposals = async ({ projectId }: Props) => {
  const data = await getProposalsByProject(projectId);
  return (
    <>
      <TitleSection text={`Porposals (${data.porposals.length})`} />
      <h4 className="mt-5 mb-3"> </h4>
      <section className="border-teal p-3 py-5 rounded-sm">
        {data.porposals.length ? (
          data.porposals.map(() => <PorposalItem />)
        ) : (
          <h3 className="text-center text-teal">No Porposals Yet</h3>
        )}
      </section>
      <AddNewPorposals
        projectId={projectId}
      />
    </>
  );
};

export default JobPorposals;
