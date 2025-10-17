import { ProposalModel } from "@/app/(features)/(protected)/(dashboard)/(freelancer)/models/porposal.model";
import { connectDB } from "@/lib";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const proposals = await ProposalModel.find().populate(
      "projectId freelancerId"
    );
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
    return NextResponse.json(newProposal, { status: 201 });
  } catch (error) {
    console.error("Error creating proposal:", error);
    return NextResponse.json(
      { error: "Failed to create proposal" },
      { status: 500 }
    );
  }
}
