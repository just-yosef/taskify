import {
  FreelancerOverview,
  Porposals,
  Projects,
} from "@/app/(features)/(protected)/(dashboard)/(freelancer)/_components";

const page = () => {
  return (
    <>
      <FreelancerOverview />
      <Projects />
      <Porposals />
    </>
  );
};

export default page;
