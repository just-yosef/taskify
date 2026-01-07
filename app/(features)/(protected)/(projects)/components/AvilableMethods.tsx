import Image from "next/image";
interface PaymentMethod {
  data: {
    paymentId: number;
    name_en: string;
    name_ar: string;
    redirect: boolean;
    logo: string;
  }[];
}

const AvilableMethods = async () => {
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
  ).then((data) => data.json())) as PaymentMethod;
  return (
    <>
      <h3 className="font-semibold mt-4">Available Methods</h3>
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {methods.data.map((method) => (
          <div key={method.logo} className="flex items-center gap-2">
            <Image
              width={100}
              height={100}
              alt={`${method.name_en}_LOGO`}
              src={method.logo}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AvilableMethods;
