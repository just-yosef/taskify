import { decodedUser } from "@/app/(shared)/helpers";
import Header from "../../(shared)/_components/Header";
import { Metadata } from "next";
export const metadata: Metadata = { title: "لوحة التحكم" };
const layout = async ({
  children,
  client,
  freelancer,
}: {
  children: React.ReactNode;
  client: React.ReactNode;
  freelancer: React.ReactNode;
}) => {
  const mode: "client" | "freelancer" = (await decodedUser()).role!;
  return (
    <>
      <Header userType={mode} />
      <>
        {mode === "client" ? client : freelancer}
        {children}
      </>
    </>
  );
};

export default layout;
