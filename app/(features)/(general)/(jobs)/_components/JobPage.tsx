import { getProject } from "@/app/(features)/(protected)/(dashboard)/(client)/service/project.service";
import { TitleSection } from "@/app/(shared)/_components";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Tag } from "lucide-react";
interface Props {
  projectId: string;
}
const JobPage = async ({ projectId }: Props) => {
  const project = await getProject(projectId);
  return (
    <>
      <TitleSection text="Project" />
      <section className="bg-[#fff] p-3 border-teal rounded-md">
        <section className="flex items-center justify-between ">
          <h3 className="font-semibold">طلب: {project.title} </h3>
          <Badge variant="blue">{project.status} </Badge>
        </section>
        <Separator className="mt-3" />
        <h4 className="mt-3">Details</h4>
        <section className="bg-[#eee] mt-2 p-2 sm:p-4">
          <p> {project.description} </p>
        </section>
        <h4 className="mt-3"> Budget </h4>
        <section className="bg-[#eee] mt-2 p-2 sm:p-4 gap-2 flex items-center">
          From <Badge variant="outline">{project.budgetMin}</Badge> to
          <Badge variant="outline"> {project.budgetMax}</Badge>
        </section>
        <h4 className="mt-3"> Duration </h4>
        <section className="bg-[#eee] mt-2 p-2 sm:p-4 gap-2 flex items-center">
          <Badge variant="outline">
            <Clock /> {project.duration || "Not specified"}
          </Badge>
        </section>
        <h4 className="mt-3"> category </h4>
        <section className="bg-[#eee] mt-2 p-2 sm:p-4 gap-2 flex items-center">
          <Badge variant="outline">
            <Tag /> Web Development
          </Badge>
        </section>
      </section>
    </>
  );
};

export default JobPage;
