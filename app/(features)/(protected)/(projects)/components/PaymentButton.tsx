"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useCallback, useTransition } from "react";
import { type PaymentMethod } from "./PaymentMethods";
import { processPayment } from "../(actions)/processPayment";
import { Banknote } from "lucide-react";
import { CreatePaymentPayload } from "../_types";
interface Props {
  payment: PaymentMethod;
  label?: string;
  paymentDetails?: Partial<CreatePaymentPayload>;
}
const PaymentButton = ({ payment, label, paymentDetails }: Props) => {
  const [isPending, startTransitions] = useTransition();
  const handelPay = useCallback(
    async () =>
      startTransitions(async () => {
        const data = await processPayment({
          ...payment,
          cartTotal: paymentDetails?.cartTotal || "2000",
          cartItems: paymentDetails?.cartItems || [
            { name: "a", price: "1000", quantity: "2" },
          ],
          customer: paymentDetails?.customer || {
            first_name: "test",
            last_name: "test",
            email: "test@test.test",
            phone: "01000000000",
            address: "test address",
          },
          payment_method_id: payment.paymentId,
        });
        location.assign(data.data.payment_data.redirectTo);
      }),
    [payment.paymentId]
  );
  return (
    <Button
      onClick={handelPay}
      disabled={isPending}
      variant="borderTeal"
      className="flex gap-2 w-full"
    >
      {!payment.logo ? (
        <Banknote size={30} />
      ) : (
        <Image
          src={payment.logo}
          width={50}
          height={50}
          alt={payment.name_en + "logo"}
        />
      )}
      {isPending
        ? "processing.."
        : label
        ? label
        : `Pay With ${payment.name_en}`}
    </Button>
  );
};

export default PaymentButton;
