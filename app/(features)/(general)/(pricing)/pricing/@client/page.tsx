import PricingSection from "../../../_components/PricingPage";
import { clientPlans } from "../../../constants/pricing";

const page = () => {
  return <PricingSection plans={clientPlans} />;
};

export default page;
