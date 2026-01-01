import { TitleSection } from "@/app/(shared)/_components";
import ErrorComponent from "@/app/(shared)/_components/ErrorComponent";
import ErrorHandler from "@/app/(shared)/_components/ErrorHandlerComponent";
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
    <ErrorHandler fallback={<ErrorComponent description="service has an error occur while render it" message="Happent Error" />}>
      <TitleSection text="Services" />
      <ServicesContainer />
    </ErrorHandler>
  );
};

export default page;
