import ErrorHandler from "@/app/(shared)/_components/ErrorHandlerComponent";
import React from "react";
import ErrorComponent from "@/app/(shared)/_components/ErrorComponent";
const layout = ({ children }: LayoutProps<"/projects/[id]">) => {
  return <ErrorHandler fallback={<ErrorComponent />}>{children}</ErrorHandler>;
};

export default layout;
