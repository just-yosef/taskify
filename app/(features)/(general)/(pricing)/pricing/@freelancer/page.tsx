"use client";
import React from "react";
import PricingSection from "../../../_components/PricingPage";
import { freelancerPlans } from "../../../constants/pricing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const page = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PricingSection plans={freelancerPlans} />
    </QueryClientProvider>
  );
};

export default page;
