import { NextResponse } from "next/server";
import { connectDB } from "@/lib";
import { ProposalModel } from "@/app/(features)/(protected)/(dashboard)/(freelancer)/models/porposal.model";
import mongoose from "mongoose";

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get("projectId");

    if (!projectId) {
      return NextResponse.json(
        { error: "projectId is required" },
        { status: 400 }
      );
    }

    const porposals = await ProposalModel.find({
      projectId,
    })
      .populate("freelancerId", "fullName email profile")
      .sort({ createdAt: -1 });

    return NextResponse.json({ porposals }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Error fetching proposals:", error);
    return NextResponse.json(
      { error: "Failed to fetch proposals", details: error.message },
      { status: 500 }
    );
  }
}
