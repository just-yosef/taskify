"use client";
import { GridContainer, GridItem } from "../../(shared)/_components";
import { Loader, TitleSection } from "@/app/(shared)/_components";
import { BadgeDollarSign, Clock2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetPorposals } from "../hooks/useGetPorposals";
import { useDeleteProposal } from "../hooks/useDeletePorposal";
import { IProposal } from "../models/porposal.model";

const Porposals = () => {
  const { data: proposals, isLoading } = useGetPorposals();
  return (
    <>
      <TitleSection text="Porposals" />
      {isLoading && <Loader isChild={false} />}
      <GridContainer distance="wd">
        {proposals?.map((porposal) => (
          <PorposalItem {...porposal} />
        ))}
      </GridContainer>
    </>
  );
};

export default Porposals;
export function PorposalItem({
  projectId,
  status,
  coverLetter,
  amount,
  duration,
  _id,
  createdAt,
}: Pick<
  IProposal,
  | "projectId"
  | "status"
  | "coverLetter"
  | "amount"
  | "duration"
  | "_id"
  | "createdAt"
>) {
  const { mutate, isPending } = useDeleteProposal(_id as string);
  return (
    <GridItem
      actions={
        <section className="flex gap-2">
          <Button
            disabled={isPending}
            onClick={() => mutate()}
            variant="destructive"
            size="sm"
          >
            {isPending ? "Deleting" : "Delete"}
          </Button>
          <Button variant="emerald" size="sm" className="ml-1">
            Edit
          </Button>
        </section>
      }
      title={projectId?.title}
      status={status}
      cardContent={
        <>
          <p> {coverLetter} </p>
          <div className="mt-4">
            <p className="text-sm text-gray-500 flex gap-2">
              <BadgeDollarSign size={24} className="text-green-600" />
              Budget: <b>{amount}$</b>
            </p>
            <span className="text-sm text-gray-500 flex gap-2 mt-1 ml-0">
              <Clock2 className="text-peach" size={22} />
              Duration: <b>{duration} Days</b>
            </span>
          </div>
          <p>
            تم التقديم يوم
            <b className="mx-2">{createdAt.toString()}</b>
          </p>
        </>
      }
      variant="sky"
      key={projectId?._id}
    />
  );
}
