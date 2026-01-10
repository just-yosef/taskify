import PaymentButton from "@/app/(features)/(protected)/(projects)/components/PaymentButton";
import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$100",
    points: "50 Points",
    features: ["Apply to 10 projects", "Basic support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$250",
    points: "150 Points",
    features: [
      "Unlimited project proposals",
      "Priority support",
      "Featured profile",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "$500",
    points: "400 Points",
    features: ["All Pro features", "Account manager", "Advanced reports"],
    popular: false,
  },
];

const PointsPricing = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 font-[rubicMedium]">
      <h2 className="text-3xl font-bold text-center mb-10">Points Plans</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between ${
              plan.popular ? "border-teal-500 scale-105" : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <span className="text-sm text-teal-600 font-semibold mb-2">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-1">{plan.price}</p>
              <p className="text-gray-500 mb-4">{plan.points}</p>

              <ul className="space-y-1 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-teal-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <PaymentButton
              payment={{
                paymentId: 2,
                name_en: "Visa-Mastercard",
                name_ar: "فيزا -ماستر كارد",
                redirect: "true",
              }}
              paymentDetails={{
                cartTotal: plan.price.slice(1),
                cartItems: [
                  {
                    name: plan.name,
                    price: plan.price.slice(1),
                    quantity: "1",
                  },
                ],
              }}
              label="Buy This Plan"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PointsPricing;
