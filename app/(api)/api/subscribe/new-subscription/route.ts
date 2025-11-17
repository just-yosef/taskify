import { NextResponse } from "next/server";
import Stripe from "stripe";
import axios from "axios";
import { api } from "@/app/(features)/(general)/constants";

export const config = {
    api: {
        bodyParser: false,
    },
};
export async function POST(req: Request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET!, {
        apiVersion: "2025-10-29.clover",
    });
    let event;
    let body;

    try {
        body = await req.text();
        const signature = req.headers.get("stripe-signature") as any;
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
        const stripeSubscriptionId = session.subscription;
        const userId = session.client_reference_id;
        const planId = session.metadata?.plan;

        try {
            await api.post(
                "/subscriptions",
                {
                    userId,
                    plan: planId,
                    stripeSubscriptionId,
                }
            );
        } catch (error) {
            console.error("Error posting subscription:", error);
        }
    }

    return NextResponse.json({ received: true }, { status: 200 });
}
