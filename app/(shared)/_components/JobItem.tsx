import { ArrowUpRight, Crown } from "lucide-react";
import { ProjectItemProps } from "../types";
import { getProject } from "@/app/(features)/(protected)/(dashboard)/(client)/service/project.service";
const JobItem = ({ project, showButton = true }: ProjectItemProps) => {
  return (
    <div className="border-blue bg-white rounded-2xl shadow-sm pt-3">
      <div className="pb-2 p-0">
        <div className="flex items-center justify-between px-5">
          <h3
            className={`text-base font-semibold text-${
              project.variant || "blue-600"
            }`}
          >
            {project.title}
          </h3>
          {project.budgetMax! > 500 && (
            <span className="flex items-center gap-1 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
              <Crown className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>
        <div
          className={`h-[2px] bg-${project.variant || "blue-500"} w-full mt-2`}
        />
      </div>

      <div className="text-sm text-gray-500 space-y-1 px-5 py-3">
        <p>
          <span className="font-medium text-gray-700">By:</span>{" "}
          {project.clientName}
        </p>
        <p>{project.duration}</p>
      </div>

      {showButton && (
        <div className="px-5 pb-4 flex items-center gap-2 text-blue-600 font-medium cursor-pointer hover:underline">
          Apply For Job <ArrowUpRight className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

export default JobItem;
