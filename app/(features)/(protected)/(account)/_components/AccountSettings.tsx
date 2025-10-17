import React from "react";
import { GridContainer } from "@/app/(shared)/_components";
import { ClientSettings, FreelancerSettings } from "./index";
interface Props {
  role: "client" | "freelancer";
}
const AccountSettings = ({ role }: Props) => {
  return <>{role === "client" ? <ClientSettings /> : <FreelancerSettings />}</>;
};

export default AccountSettings;
