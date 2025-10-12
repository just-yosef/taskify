import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: "2025-09-30.clover",
});

export async function POST(request: Request) {
  try {
    const { payment_intent_id } = await request.json();
    const confirmed = await stripe.paymentIntents.confirm(payment_intent_id, {
      payment_method: "pm_card_visa",
      return_url: process.env.BASE_URL,
    });
    return NextResponse.json({ message: "Payment confirmed", data: confirmed });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
