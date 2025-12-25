import { Review } from "@/app/(features)/(protected)/(services)/models/rating.model";
import { Service } from "@/app/(features)/(protected)/(services)/models/services.model";
import { connectDB } from "@/lib";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const body = await req.json();
        const { serviceId, userId, rating, comment } = body;

        if (!serviceId || !userId || !rating) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }
        const review = await Review.create({
            serviceId,
            userId,
            rating,
            comment,
        });
        await Service.findByIdAndUpdate(serviceId, {
            $addToSet: { rating: review._id },
        });
        return NextResponse.json({ review }, { status: 201 });

    } catch (err) {

    }
}