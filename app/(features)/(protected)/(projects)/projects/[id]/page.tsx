import React from "react";
import { getProjectById } from "../../../(dashboard)/(client)/service";
import { JobPage, JobPorposals } from "@/app/(features)/(general)/(jobs)/_components";
interface Props {
  params: Promise<{ id: string }>;
}
const page = async ({ params }: Props) => {
  const { id } = await params;
  //   const data = await getProjectById(id);
  //   console.log(data);

  return (
    <>
      <JobPage />
      <JobPorposals />
    </>
  );
};

export default page;
