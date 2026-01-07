import {
  getProject,
  getProposalsByProject,
} from "@/app/(features)/(protected)/(dashboard)/(client)/service/project.service";
import { Loader, TitleSection } from "@/app/(shared)/_components";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, CircleStar, Clock, Tag } from "lucide-react";
import JobPorposals from "./JobPorposals";
import AboutClient from "./AboutClient";
import { calculcatePoints as calcPoints } from "../helpers/calculatePoints";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { decodeUserFromToken } from "@/app/(shared)/helpers/server";
import { isAccessToPostPorposal } from "../helpers/proposals";
interface Props {
  projectId: string;
}
const PaymentMethods = dynamic(
  () =>
    import("@/app/(features)/(protected)/(projects)/components/PaymentMethods")
);
const AvilableMethods = dynamic(
  () =>
    import("@/app/(features)/(protected)/(projects)/components/AvilableMethods")
);

const JobPage = async ({ projectId }: Props) => {
  const currentUser = await decodeUserFromToken();
  const data = await getProposalsByProject(projectId);

  const project = await getProject(projectId);
  const isAccessToPost = isAccessToPostPorposal(
    data.porposals,
    currentUser!._id
  );

  return (
    <>
      <div className="flex gap-5 max-sm:flex-col">
        <div className="sm:flex-2">
          <TitleSection text="Project" />
          <section className="bg-white p-3 border-teal rounded-md">
            <section className="flex items-center justify-between ">
              <h3 className="font-semibold">طلب: {project.title} </h3>
              <Badge variant="blue">{project.status} </Badge>
            </section>
            <Separator className="mt-3" />
            {/* Job Details */}
            <h4 className="mt-3">Details</h4>
            <section className="bg-teal-soft mt-2 p-2 sm:p-4">
              <p> {project.description} </p>
            </section>
            {/* Job Budget */}

            <h4 className="mt-3"> Budget </h4>
            <section className="bg-teal-soft mt-2 p-2 sm:p-4 gap-2 flex items-center">
              From <Badge variant="outline">{project.budgetMin}</Badge> to
              <Badge variant="outline"> {project.budgetMax}</Badge>
            </section>
            {/* Job Duration */}

            <h4 className="mt-3"> Duration </h4>
            <section className="bg-teal-soft mt-2 p-2 sm:p-4 gap-2 flex items-center">
              <Badge variant="outline">
                <Clock /> {project.duration || "Not specified"}
              </Badge>
            </section>
            {/* Job Points */}

            <h4 className="mt-3"> Points </h4>
            <section className="bg-teal-soft mt-2 p-2 sm:p-4 gap-2 flex items-center">
              {isAccessToPost ? (
                <div className="text-orange-500 p-2 flex gap-2 bg-orange-100 rounded-lg w-fit font-semibold">
                  <CircleStar />
                  apply for
                  {` ${calcPoints(
                    project.budgetMin,
                    project.budgetMax
                  )} points`}
                </div>
              ) : (
                <div className="text-white p-2 flex gap-2 bg-teal rounded-lg w-fit font-semibold text-sm">
                  You Has Already Applied For This Job <Check />
                </div>
              )}
            </section>
            {/* Job Category */}
            <h4 className="mt-3"> category </h4>
            <section className="bg-teal-soft mt-2 p-2 sm:p-4 gap-2 flex items-center">
              <Badge variant="outline">
                <Tag /> Web Development
              </Badge>
            </section>
          </section>
        </div>
        <div className="sm:flex-1">
          <Suspense fallback={<Loader isChild />}>
            <PaymentMethods />
            <AvilableMethods />
          </Suspense>
        </div>
      </div>
      <JobPorposals projectId={projectId} />
      {/* <AboutClient projectId={project.clientId} /> */}
    </>
  );
};

export default JobPage;
