import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { api } from "@/app/(features)/(general)/constants";

export async function POST(req: NextRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET!, {
        apiVersion: "2025-10-29.clover",
    });

    let event;
    const body = await req.text();

    try {
        const signature = req.headers.get("stripe-signature")!;
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err: any) {
        console.error("Webhook Error:", err);
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const stripeSubscriptionId = session.subscription as string;
        const userId = session.client_reference_id;
        const planId = session.metadata?.plan;
        if (!stripeSubscriptionId || !userId || !planId) {
            console.error("Missing important data in the session object.");
            return new NextResponse("Missing data", { status: 400 });
        }

        try {
            const stripeSub = (await stripe.subscriptions.retrieve(stripeSubscriptionId));
            // update customer id in user db if not found
            console.log(stripeSubscriptionId, userId, planId);

            await api.post("/subscriptions", {
                userId,
                plan: planId,
                stripeSubscriptionId,
                currentPeriodStart: stripeSub.items.data[0].current_period_start,
                currentPeriodEnd: stripeSub.items.data[0].current_period_end
            });
        } catch (error) {
            console.error("Error posting subscription:", error);
            return new NextResponse("Error posting subscription", { status: 500 });
        }
    }

    return NextResponse.json({ received: true }, { status: 200 });
}