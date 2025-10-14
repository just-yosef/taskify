import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET!, {
      apiVersion: "2025-09-30.clover",
    });
    // await stripe.accounts.update("acct_1SHqon7KyzWIYdjr", {
    //   external_account: "btok_us_verified",
    // });
  
    const { payment_intent_id } = await request.json();
    const confirmed = await stripe.paymentIntents.confirm(
      payment_intent_id,
      {
        payment_method: "pm_card_visa",
        return_url: process.env.BASE_URL + "/success",
      },
      {
        stripeAccount: "acct_1SHr778OoQWyX7Zk",
      }
    );
    return NextResponse.json({ message: "Payment confirmed", data: confirmed });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
