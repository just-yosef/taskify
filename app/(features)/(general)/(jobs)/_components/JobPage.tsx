import { TitleSection } from "@/app/(shared)/_components";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Tag } from "lucide-react";

const JobPage = () => {
  return (
    <>
      <TitleSection text="Project" />
      <section className="bg-[#fff] p-3 border-teal rounded-md">
        <section className="flex items-center justify-between ">
          <h3 className="font-semibold">طلب: برمجة موقع متجر إلكتروني</h3>
          <Badge variant="blue">open</Badge>
        </section>
        <Separator className="mt-3" />
        <h4 className="mt-3">Details</h4>
        <section className="bg-[#eee] mt-2 p-2 sm:p-4">
          <p>مطلوب بناء متجر إلكتروني متكامل</p>
        </section>
        <h4 className="mt-3"> Budget </h4>
        <section className="bg-[#eee] mt-2 p-2 sm:p-4 gap-2 flex items-center">
          From <Badge variant="outline">500</Badge> to
          <Badge variant="outline"> 1500</Badge>
        </section>
        <h4 className="mt-3"> Duration </h4>
        <section className="bg-[#eee] mt-2 p-2 sm:p-4 gap-2 flex items-center">
          <Badge variant="outline">
            <Clock /> 14 Days
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
