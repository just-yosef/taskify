import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";


export async function POST(req: NextRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET!, {
        apiVersion: "2025-12-15.clover",
    });
    const signature = req.headers.get("stripe-signature");

    if (!signature) return new NextResponse("Missing signature", { status: 400 });
    let event: Stripe.Event;
    try {
        const body = await req.text()
        event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_VERIFY_ACC_SECRET!)
    } catch (err: any) {
        console.error("Webhook error:", err.message);
        return new NextResponse(`Webhook Error: ${err.message}`, {
            status: 400,
        });
    }
    switch (event.type) {
        case "account.updated": {
            const account = event.data.object as Stripe.Account;
            const isActive =
                account.charges_enabled === true &&
                account.payouts_enabled === true &&
                (account.requirements?.currently_due?.length ?? 0) === 0;

            if (isActive) {
                console.log("✅ Account fully activated:", account.id);

                // 🔹 هنا تحدث الـ DB
                // await db.user.update({ stripeAccountStatus: "active" })
            } else {
                console.log("⏳ Account not ready yet:", {
                    accountId: account.id,
                    charges_enabled: account.charges_enabled,
                    payouts_enabled: account.payouts_enabled,
                    currently_due: account.requirements?.currently_due,
                });
            }
            break;
        }

        case "capability.updated": {
            const capability = event.data.object as Stripe.Capability;

            console.log(
                "🔄 Capability updated:",
                capability.id,
                capability.status
            );
            break;
        }

        default:
            console.log(`Unhandled event type ${event.type}`);
    }

}