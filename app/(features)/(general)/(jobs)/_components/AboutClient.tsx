import { decodeUserFromToken } from "@/app/(shared)/helpers/server";
import { ProjectorIcon, User } from "lucide-react";
import React from "react";
import { getClientLevelBySpend } from "../../helpers";
import { Badge } from "@/components/ui/badge";
import { getUserById } from "@/app/(features)/(users)/(service)/userService";
interface Props {
  projectId: string;
}
const AboutClient = async ({ projectId }: Props) => {
  const client = await getUserById(projectId);
  // const user = await decodeUserFromToken();
  return (
    <section className="border-blue bg-blue-soft p-3 mt-4 rounded-lg">
      <h3 className="mt-3 font-semibold">About the Client</h3>
      <div className="p-5  border-t-solid border-t-gray-200 border-t mt-3">
        <section className="flex flex-row items-center gap-3">
          <span className="size-[50px] bg-sky-100 flex justify-center items-center rounded-full">
            <User className="text-sky-600" />
          </span>
          <div className="text-base text-gray-800 flex flex-col">
            <h3 className="font-semibold"> {client?.fullName} </h3>
            <Badge variant="outline" className="font-semibold text-sky-700">
              <ProjectorIcon />
            </Badge>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutClient;
