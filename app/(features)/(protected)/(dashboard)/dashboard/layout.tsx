import { decodedUser } from "@/app/(shared)/helpers";
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
      {mode === "client" ? client : freelancer}
      {children}
    </>
  );
};

export default layout;
