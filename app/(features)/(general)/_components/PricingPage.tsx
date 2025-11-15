"use client";
import { Button } from "@/components/ui/button";
import { FormEvent, useCallback, useTransition } from "react";
import { subscribePlan } from "../actions";
export interface PricingPlan {
  id: "basic" | "pro" | "premium";
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
  return (
    <section className="py-5 font-[rubicMedium]">
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="mx-auto max-w-2xl text-center [&>p]:mx-auto [&>p]:max-w-xl">
          <h2 className="text-4xl/tight font-bold tracking-tight !font-[rubicBold]">
            Choose your plan
          </h2>
          <p className="text-muted-foreground mt-4 text-lg/8">
            Sed eu quam id quam tristique pharetra a at tortor veil dolarto.
            Suspendisse lorem odio sit amet libero facilisis.
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanItem key={plan.description} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlanItem({ plan }: { plan: PricingPlan }) {
  const [isPending, startTransition] = useTransition();
  const handelSubscription = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const form = new FormData();
        form.append("plan", plan.id);
        const url = (await subscribePlan(form))?.url!;
        location.assign(url);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return (
    <form
      onSubmit={handelSubscription}
      className="bg-card rounded-2xl border shadow-xs border-teal"
    >
      <input name="plan" type="hidden" value={plan.id} />
      <div className="p-8 h-full flex flex-col justify-between">
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
          <ul className="mt-8 space-y-4 text-sm">
            {plan.features.map((feature, i) => (
              <li key={i} className="text-muted-foreground flex items-center">
                <svg
                  className="mr-4 h-4 w-4 text-green-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
        {plan.id === "basic" ? null : (
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
