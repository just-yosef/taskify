import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

export async function POST() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET!, {
      apiVersion: "2025-12-15.clover",
    });
    const account = await stripe.accounts.create({
      type: "express",
      email: "test@example.com",
      country: "US",
      business_type: "individual",
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
    });

    const accountLink = await stripe.accountLinks.create({
      account: "acct_1SHr778OoQWyX7Zk",
      refresh_url: process.env.BASE_URL + "/reauth",
      return_url: process.env.BASE_URL + "/success",
      type: "account_onboarding",
    });
    return NextResponse.json({
      accountId: account.id,
      onboardingUrl: accountLink.url,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
