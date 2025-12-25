"use client";
import { Button } from "@/components/ui/button";
import { FormEvent, useCallback, useMemo, useTransition } from "react";
import { subscribePlan } from "../actions";
import { useSubscribtions } from "../(pricing)/(hooks)/useSubscriptions";
import { Loader } from "@/app/(shared)/_components";
import { ISubscription } from "../(pricing)/models/Subscription.model";
import { Check } from "lucide-react";
type PlanType = "basic" | "pro" | "premium";
export interface PricingPlan {
  id: PlanType;
  title: string;
  description: string;
  price: number;
  features: string[];
  href: string;
}

interface Props {
  plans: PricingPlan[];
}
export default function PricingSection({ plans }: Props) {
  const { data, isLoading } = useSubscribtions();
  const proSubs = useMemo(() => {
    return data?.filter((item) => item.plan === "pro");
  }, [data]);
  const premiumSubs = useMemo(
    () => data?.filter((item) => item.plan === "premium"),
    [data]
  );
  console.log(proSubs);
  return (
    <section className="py-5 font-[rubicMedium]">
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl text-center [&>p]:mx-auto [&>p]:max-w-xl">
          <h2 className="text-4xl/tight font-bold tracking-tight !font-[rubicBold]">
            Choose your plan
          </h2>
          <p className="text-muted-foreground mt-4 text-lg/8 leading-[20px]">
            Sed eu quam id quam tristique pharetra a at tortor veil dolarto.
            Suspendisse lorem odio sit amet libero facilisis.
          </p>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="mx-auto mt-12 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <PlanItem
                subscribtion={plan.id === "pro" ? proSubs : premiumSubs}
                key={plan.description}
                plan={plan}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function PlanItem({
  plan,
  subscribtion,
}: {
  plan: PricingPlan;
  subscribtion: ISubscription[] | undefined;
}) {
  const [isPending, startTransition] = useTransition();
  const subscribeaPlan = async () => {
    try {
      const form = new FormData();
      form.append("plan", plan.id);
      const url = (await subscribePlan(form))?.url!;
      location.assign(url);
    } catch (error) {
      console.log(error);
    }
  };
  const handelSubscription = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    startTransition(subscribeaPlan);
  }, []);
  return (
    <form
      onSubmit={handelSubscription}
      className="bg-card rounded-2xl border shadow-xs border-teal"
    >
      <input name="plan" type="hidden" value={plan.id} />
      <div className="p-8 pb-4 h-full flex flex-col justify-between">
        <section>
          <div className="space-y-2">
            <h3 className="text-xl/snug font-semibold tracking-tight text-teal">
              {plan.title}
            </h3>
            <p className="text-muted-foreground text-sm/6">
              {plan.description}
            </p>
          </div>
          <div className="mt-8">
            <span className="text-4xl font-bold sm:text-5xl text-teal">
              ${plan.price}
            </span>
            <span className="text-muted-foreground ml-1">/ month</span>
          </div>
          <PlanItem.FeaturesList list={plan.features} />
        </section>
        {plan.id === "basic" ? null : subscribtion?.filter(
            (item) => item.userId === localStorage.getItem("userId")
          ).length ? (
          <PlanItem.SubscribedButton />
        ) : (
          <Button
            onClick={handelSubscription}
            size="lg"
            disabled={isPending}
            variant="borderTeal"
            className="mt-4 w-full"
          >
            {isPending ? "Processing" : `Purchase ${plan.title}`}
          </Button>
        )}
      </div>
    </form>
  );
}

PlanItem.FeaturesList = function ({ list }: { list: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm">
      {list.map((feature, i) => (
        <li key={i} className="text-muted-foreground flex items-center">
          <Check
            className="mr-4 text-green-700 flex min-w-3 min-h-3"
            size={14}
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

PlanItem.SubscribedButton = function () {
  return (
    <div className="p-2 rounded-md text-center flex items-center justify-center mt-5  bg-green-100 text-green-600 gap-2">
      subscribed <Check />
    </div>
  );
};

PlanItem.SubmitionButton = function ({
  handelSubscription,
  isPending,
  plan,
}: SubmitionProps) {
  return (
    <>
      <Button
        onClick={handelSubscription}
        size="lg"
        disabled={isPending}
        variant="borderTeal"
        className="mt-4 w-full"
      >
        {isPending ? "Processing" : `Purchase ${plan.title}`}
      </Button>
    </>
  );
};
interface SubmitionProps {
  plan: PricingPlan;
  isPending: boolean;
  handelSubscription: (e: FormEvent<Element>) => Promise<void>;
}
