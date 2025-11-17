"use client";
import {
  FreelancerOverview,
  Porposals,
  Projects,
} from "@/app/(features)/(protected)/(dashboard)/(freelancer)/_components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const page = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <FreelancerOverview />
      <Projects />
      <Porposals />
    </QueryClientProvider>
  );
};

export default page;
