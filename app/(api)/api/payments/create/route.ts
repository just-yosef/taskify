import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: "2025-09-30.clover",
});
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const payment = await stripe.paymentIntents.create(
      {
        automatic_payment_methods: { enabled: true },
        amount: data.amount,
        currency: "usd",
        // confirm: true,
        // return_url: process.env.BASE_URL,
      },
      {
        stripeAccount: "acct_1SHr778OoQWyX7Zk",
      }
    );

    return NextResponse.json({
      message: "Payment created successfully",
      data: payment,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message: "Error creating payment",
      data: error,
    });
  }
}
