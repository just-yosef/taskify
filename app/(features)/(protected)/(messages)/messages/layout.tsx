import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  //   const mode: "client" | "freelancer" = (await decodedUser()).role!;
  return (
    <>
      {children}
    </>
  );
};

export default layout;
