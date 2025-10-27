import { ProposalModel } from "@/app/(features)/(protected)/(dashboard)/(freelancer)/models/porposal.model";
import { UserModel } from "@/app/(features)/(users)/models";
import { User } from "@/app/(features)/(users)/models/user.model";
import { connectDB } from "@/lib";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const clientId = searchParams.get("clientId");
  try {
    await connectDB();
    const client = await UserModel.findById<User>(clientId);
    const [data] = await ProposalModel.aggregate([
      {
        $match: {
          clientId: new mongoose.Types.ObjectId(clientId?.toString()),
          status: "pending",
        },
      },
      {
        $facet: {
          proposals: [{ $sort: { createdAt: -1 } }],
          stats: [{ $count: "totalProposals" }],
        },
      },
    ]);
    return NextResponse.json({
      data,
    });
  } catch (error: any) {
    console.error("❌ Error fetching offers:", error);
    return NextResponse.json(
      { error: "Failed to fetch offers", details: error.message },
      { status: 500 }
    );
  }
}
