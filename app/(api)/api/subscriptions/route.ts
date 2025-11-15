import Subscription from "@/app/(features)/(general)/(pricing)/models/Subscription.model";
import { connectDB } from "@/lib";
import { NextRequest, NextResponse } from "next/server";
export const config = {
    api: {
        bodyParser: true,
    },
};

export async function GET(req: NextRequest) {
    await connectDB();

    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId");
        const planId = searchParams.get("planId");

        const filter: any = {};
        if (userId) filter.userId = userId;
        if (planId) filter.planId = planId;

        const subscriptions = await Subscription.find(filter);
        return NextResponse.json(subscriptions);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    await connectDB();

    try {
        const body = await req.json();

        const subscription = await Subscription.create({
            userId: body.userId,
            plan: body.plan,
            stripeSubscriptionId: body.stripeSubscriptionId,
            status: body.status || "active",
            currentPeriodStart: new Date(body.currentPeriodStart),
            currentPeriodEnd: new Date(body.currentPeriodEnd),
            cancelAtPeriodEnd: body.cancelAtPeriodEnd || false,
        });

        return NextResponse.json(subscription, { status: 201 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    await connectDB();

    try {
        const body = await req.json();
        const { id, ...updateData } = body;

        if (!id) {
            return NextResponse.json({ error: "Missing subscription ID" }, { status: 400 });
        }

        const updated = await Subscription.findByIdAndUpdate(id, updateData, { new: true });
        if (!updated) {
            return NextResponse.json({ error: "Subscription not found" }, { status: 404 });
        }

        return NextResponse.json(updated);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    await connectDB();

    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        if (!id) return NextResponse.json({ error: "Missing subscription ID" }, { status: 400 });

        const deleted = await Subscription.findByIdAndDelete(id);
        if (!deleted) return NextResponse.json({ error: "Subscription not found" }, { status: 404 });

        return NextResponse.json({ message: "Subscription deleted", id: deleted._id });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
