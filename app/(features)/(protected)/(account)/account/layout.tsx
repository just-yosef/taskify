import React, { ReactNode } from "react";
import { Header } from "../_components";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export default layout;
