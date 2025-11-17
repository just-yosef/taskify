import { ProposalModel } from "@/app/(features)/(protected)/(dashboard)/(freelancer)/models/porposal.model";
import { connectDB } from "@/lib";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    const filter: any = {};

    if (userId) {
      filter.freelancerId = userId;
    }

    const proposals = await ProposalModel.find(filter)
      .populate("freelancerId")
      .populate("projectId");

    return NextResponse.json(proposals, { status: 200 });
  } catch (error) {
    console.error("Error fetching proposals:", error);
    return NextResponse.json(
      { error: "Failed to fetch proposals" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const newProposal = await ProposalModel.create(body);
    console.log(body, newProposal);
    return NextResponse.json(newProposal, { status: 201 });
  } catch (error) {
    console.error("Error creating proposal:", error);
    return NextResponse.json(
      { error: "Failed to create proposal" },
      { status: 500 }
    );
  }
}
