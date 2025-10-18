import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib";
import { ProposalModel } from "@/app/(features)/(protected)/(dashboard)/(freelancer)/models/porposal.model";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = context.params;
    const proposal = await ProposalModel.findById(id).populate(
      "projectId freelancerId"
    );

    if (!proposal)
      return NextResponse.json(
        { error: "Proposal not found" },
        { status: 404 }
      );

    return NextResponse.json(proposal, { status: 200 });
  } catch (error) {
    console.error("Error fetching proposal:", error);
    return NextResponse.json(
      { error: "Failed to fetch proposal" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = context.params;
    const body = await req.json();

    const updatedProposal = await ProposalModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedProposal)
      return NextResponse.json(
        { error: "Proposal not found" },
        { status: 404 }
      );

    return NextResponse.json(updatedProposal, { status: 200 });
  } catch (error) {
    console.error("Error updating proposal:", error);
    return NextResponse.json(
      { error: "Failed to update proposal" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = context.params;

    const deletedProposal = await ProposalModel.findByIdAndDelete(id);
    if (!deletedProposal)
      return NextResponse.json(
        { error: "Proposal not found" },
        { status: 404 }
      );

    return NextResponse.json(
      { message: "Proposal deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting proposal:", error);
    return NextResponse.json(
      { error: "Failed to delete proposal" },
      { status: 500 }
    );
  }
}
