import { NextRequest, NextResponse } from "next/server";
import { Types } from "mongoose";
import { Service } from "@/app/(features)/(protected)/(services)/models/services.model";
import { connectDB } from "@/lib";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const body = await req.json();
        const { userId, title, slug, description, category, pricing, deliveryTime, status } = body;
        if (!userId || !title || !description || !category || !pricing || !deliveryTime) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }
        const service = await Service.create({
            userId,
            title,
            slug,
            description,
            category,
            pricing: {
                type: pricing.type,
                basePrice: pricing.basePrice || 0,
            },
            deliveryTime,
            status: status || "draft",
        });

        return NextResponse.json({ service }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function GET(req: NextRequest) {
    try {
        await connectDB();

        const userId = req.nextUrl.searchParams.get("userId");

        if (userId && Types.ObjectId.isValid(userId)) {
            const services = await Service.find({ userId });

            return NextResponse.json(
                { services, count: services.length },
                { status: 200 }
            );
        }

        const services = await Service.find();
        return NextResponse.json(
            {
                services,
                count: services.length,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
