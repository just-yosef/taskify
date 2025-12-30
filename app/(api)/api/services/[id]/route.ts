import { Service } from "@/app/(features)/(protected)/(services)/models/services.model";
import { connectDB } from "@/lib";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();

        const { id } = params;

        if (!Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                { message: "Invalid service id" },
                { status: 400 }
            );
        }

        const service = await Service.findById(id);
        if (!service) {
            return NextResponse.json(
                { message: "Service not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { service },
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
