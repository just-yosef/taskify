import { BodyContainer } from "@/app/(shared)/_components";
import Header from "../(client)/_components/Header";

const layout = ({
  children,
  client,
  freelancer,
}: {
  children: React.ReactNode;
  client: React.ReactNode;
  freelancer: React.ReactNode;
}) => {
  const mode = "client";
  return (
    <>
      <Header />
      <BodyContainer>
        {mode === "client" ? client : freelancer}
        {children}
      </BodyContainer>
    </>
  );
};

export default layout;
