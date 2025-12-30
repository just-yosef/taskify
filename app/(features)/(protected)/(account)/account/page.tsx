"use client";
import { useRedirectRoute } from "@/app/(shared)/hooks/useCheckPathName";
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";
const page = () => {
  const { isNeedRedirect } = useRedirectRoute("account");
  if (isNeedRedirect) return redirect("/account/services");
  return <></>;
};
export default page;
