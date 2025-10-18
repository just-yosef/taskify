import React from "react";
import { getProjectById } from "../../../(dashboard)/(client)/service";
import {
  JobPage,
  JobPorposals,
} from "@/app/(features)/(general)/(jobs)/_components";
import { IsLoggedIn } from "@/app/(shared)/helpers";
interface Props {
  params: Promise<{ id: string }>;
}
import { Header as NonLoggedInHeader } from "@/app/(features)/(general)/_components";
import { Header } from "@/app/(features)/(protected)/(shared)/_components";
import { getCookie } from "@/app/(api)/(helpers)";
import { IUser } from "@/app/(features)/(general)/types";
const page = async ({ params }: Props) => {
  const { id } = await params;
  //   const data = await getProjectById(id);
  const isLoggedIn = await IsLoggedIn();
  const user: IUser = JSON.parse(await getCookie<string>("user"));
  console.log(isLoggedIn, user);
  return (
    <>
      {isLoggedIn ? (
        <Header userType={user?.role!} />
      ) : (
        <NonLoggedInHeader />
      )}
      <JobPage />
      <JobPorposals />
    </>
  );
};

export default page;
