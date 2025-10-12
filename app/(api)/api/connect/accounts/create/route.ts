import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

export async function POST(req: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET!, {
      apiVersion: "2025-09-30.clover",
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
      account: "acct_1SHNaGQBNl9fqiDR",
      refresh_url: `http://localhost:3000/reauth`,
      return_url: `http://localhost:3000/onboarding-complete?account_id=${account.id}`,
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
