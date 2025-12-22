import Image from "next/image";
import React from "react";
import posterImg from "@/public/assets/imgs/poster.jpeg";
import Link from "next/link";
import { TimerIcon } from "lucide-react";
import { timeAgo } from "@/app/(shared)/helpers";
interface ProjectItemProps {
  projectId: string;
  title: string;
  userName: string;
  time: string;
  avatar?: string;
}
const ProjectItem = ({
  time,
  projectId,
  title,
  userName,
}: ProjectItemProps) => {
  // let userName = "aaaa";
  return (
    <Link
      href={`/projects/${projectId}`}
      className="flex items-center gap-2 mt-3 p-5 bg-[#f7f7f7] rounded-lg"
    >
      <Image
        alt="poster"
        className="rounded-full"
        width={60}
        height={60}
        src={posterImg}
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-teal">{title}</h3>
        <div className="flex gap-2 [&>*]:text-gray-600">
          <Link href={`/users/${userName}`}>{userName}</Link>
          <p className="flex gap-1">
            <TimerIcon />
            {timeAgo(time)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
