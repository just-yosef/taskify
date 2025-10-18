"use client";
import Header from "../../(shared)/_components/Header";
const layout = ({
  children,
  client,
  freelancer,
}: {
  children: React.ReactNode;
  client: React.ReactNode;
  freelancer: React.ReactNode;
}) => {
  const mode: "client" | "freelancer" = localStorage.getItem("user-role") as
    | "client"
    | "freelancer";
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
