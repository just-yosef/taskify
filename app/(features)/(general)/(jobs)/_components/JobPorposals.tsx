import { getProposalsByProject } from "@/app/(features)/(protected)/(dashboard)/(client)/service/project.service";
import { PorposalItem } from "./index";
import { Loader, TitleSection } from "@/app/(shared)/_components";
import { decodeUserFromToken } from "@/app/(shared)/helpers/server";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { isAccessToPostPorposal as checkIsValidToPost } from "../helpers/proposals";
const AddNewPorposals = dynamic(() => import("./AddNewPorposals"));
interface Props {
  projectId: string;
}
const JobPorposals = async ({ projectId }: Props) => {
  const currentUser = await decodeUserFromToken();
  const data = await getProposalsByProject(projectId);
  const isAccess = data.porposals[0]?.clientId === currentUser?._id || true;
  const isAccessToPostPorposal = checkIsValidToPost(
    data.porposals,
    currentUser?._id || ""
  );

  return (
    <>
      <TitleSection text={`Porposals (${data.porposals.length})`} />
      <section className="border-teal p-3 py-5 rounded-sm">
        {data.porposals.length ? (
          data.porposals.map((porposal) => (
            <PorposalItem
              isAccessActions={isAccess}
              content={porposal.coverLetter}
              author={porposal.freelancerId.fullName}
            />
          ))
        ) : (
          <h3 className="text-center text-teal">No Porposals Yet</h3>
        )}
      </section>
      {isAccessToPostPorposal && (
        <Suspense fallback={<Loader isChild />}>
          <AddNewPorposals projectId={projectId} />
        </Suspense>
      )}
    </>
  );
};

export default JobPorposals;
