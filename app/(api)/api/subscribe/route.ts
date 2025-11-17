import { NextResponse } from "next/server";
import { createNewSubscription } from "../../(controller)/subscription";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { priceId, userId, plan } = body;
    if (!priceId || !userId || !plan) {
      return NextResponse.json(
        { err: "please provide required properties" },
        { status: 400 }
      );
    }
    const subscription = await createNewSubscription({ priceId, userId, plan });
    return NextResponse.json(subscription, { status: 201 });
  } catch (error) {
    console.error("Subscription Error:", error);
    return NextResponse.json(
      { err: "Internal server error" },
      { status: 500 }
    );
  }
}
