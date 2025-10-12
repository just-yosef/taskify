import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const payment = await new Stripe(process.env.STRIPE_SECRET!, {
      apiVersion: "2025-09-30.clover",
    }).paymentIntents.create(
      {
        automatic_payment_methods: { enabled: true },
        amount: data.amount,
        currency: "usd",
        // confirm: true,
        // return_url: process.env.BASE_URL,
      },
      {
        stripeAccount: "acct_1SHNkk7fF9CQ7Q6B",
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
