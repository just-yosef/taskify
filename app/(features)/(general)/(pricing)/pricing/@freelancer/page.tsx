"use client";
import React, { Suspense } from "react";
import PricingSection from "../../../_components/PricingPage";
import { freelancerPlans } from "../../../constants/pricing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { Loader } from "@/app/(shared)/_components";
// import PointsPricing from "../../../(jobs)/_components/PointsPricing";
const PointsPricing = dynamic(
  () => import("../../../(jobs)/_components/PointsPricing")
);
const page = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PricingSection plans={freelancerPlans} />
      <Suspense fallback={<Loader />}>
        <PointsPricing />
      </Suspense>
    </QueryClientProvider>
  );
};

export default page;
