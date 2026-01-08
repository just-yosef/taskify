import { cn } from "@/lib/utils";
import PaymentButton from "./PaymentButton";

export interface PaymentMethod {
  paymentId: number;
  name_en: string;
  name_ar: string;
  redirect: string;
  logo: string;
}
interface PaymentMethods {
  data: PaymentMethod[];
}
const PaymentMethods = async () => {
  const methods = (await fetch(
    "https://staging.fawaterk.com/api/v2/getPaymentmethods",
    {
      headers: {
        Authorization:
          "Bearer d83a5d07aaeb8442dcbe259e6dae80a3f2e21a3a581e1a5acd",
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    }
  ).then((data) => data.json())) as PaymentMethods;
  const redirectedMethods = methods.data.filter(
    (method) => method.redirect === "true"
  );
  return (
    <section className={cn("md:py-10")}>
      <div className="container max-w-2xl border-teal p-5 rounded-2xl">
        <div className="mb-6 flex items-center justify-between w-full">
          <div className="w-full">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Payment Methods
            </h3>
            <p className="mt-1 text-muted-foreground max-sm:text-xs">
              Manage your last payment methods
            </p>
          </div>
        </div>
        {redirectedMethods.map((method) => (
          <PaymentButton {...method} />
        ))}
      </div>
    </section>
  );
};

export default PaymentMethods;
