import { getProposalsByProject } from "@/app/(features)/(protected)/(dashboard)/(client)/service/project.service";
import { PorposalItem } from "./index";
import { TitleSection } from "@/app/(shared)/_components";
import AddNewPorposals from "./AddNewPorposals";
import { groupProposalsByProjectId } from "../helpers";
import { decodeUserFromToken } from "@/app/(shared)/helpers/server";
interface Props {
  projectId: string;
}
const JobPorposals = async ({ projectId }: Props) => {
  const currentUser = await decodeUserFromToken();
  const data = await getProposalsByProject(projectId);
  const isAccess = data.porposals[0]?.clientId === currentUser?._id || true;
  const isAccessToPostPorposal = !data.porposals.length
    ? true
    : !data.porposals.some(
        (porposal) => porposal.freelancerId._id === currentUser!._id
      );
  console.log(isAccessToPostPorposal);

  return (
    <>
      <TitleSection text={`Porposals (${data.porposals.length})`} />
      <h4 className="mt-5 mb-3"> </h4>
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
      {isAccessToPostPorposal && <AddNewPorposals projectId={projectId} />}
    </>
  );
};

export default JobPorposals;
