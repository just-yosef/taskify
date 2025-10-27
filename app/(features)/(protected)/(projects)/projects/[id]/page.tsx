import {
  JobPage,
  JobPorposals,
} from "@/app/(features)/(general)/(jobs)/_components";
const page = async ({ params }: PageProps<"/projects/[id]">) => {
  const { id } = await params;
  return (
    <>
      <JobPage projectId={id} />
      <JobPorposals projectId={id}  />
    </>
  );
};

export default page;
