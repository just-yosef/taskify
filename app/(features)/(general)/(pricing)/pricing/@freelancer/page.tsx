import React from "react";
import PricingSection from "../../../_components/PricingPage";
import { freelancerPlans } from "../../../constants/pricing";

const page = () => {
  return <PricingSection plans={freelancerPlans} />;
};

export default page;
