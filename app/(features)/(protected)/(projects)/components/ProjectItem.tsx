import Image from "next/image";
import React from "react";
import posterImg from "@/public/assets/imgs/brave_screenshot_dashboard10-.surge.sh (1).png";
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
      className="flex items-center gap-2 mt-3 p-5 bg-teal-soft rounded-lg"
    >
      <Image
        alt="poster"
        className="rounded-full object-cover"
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
