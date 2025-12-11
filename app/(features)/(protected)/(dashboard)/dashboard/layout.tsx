import { decodedUser } from "@/app/(shared)/helpers/server";
import { Metadata } from "next";
export const metadata: Metadata = { title: "لوحة التحكم" };
interface Props<T = React.ReactNode> {
  children: T;
  client: T;
  freelancer: T;
}
const layout = async ({ children, client, freelancer }: Props) => {
  const mode: "client" | "freelancer" = (await decodedUser())?.role!;
  return (
    <>
      {mode === "client" ? client : freelancer}
      {children}
    </>
  );
};

export default layout;
