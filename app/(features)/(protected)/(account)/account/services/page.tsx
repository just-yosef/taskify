import { TitleSection } from "@/app/(shared)/_components";
import dynamic from "next/dynamic";
const ServicesContainer = dynamic(
  () => import("../../_components").then((mod) => mod.ServicesContainer),
  {
    loading(loadingProps) {
      return <>Loading..</>;
    },
  }
);

const page = () => {
  return (
    <>
      <TitleSection text="Services" />
      <ServicesContainer />
    </>
  );
};

export default page;
