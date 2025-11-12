import { NextResponse } from "next/server";
import { connectDB } from "@/lib";
import { Chat } from "@/app/(features)/(protected)/(messages)/models/chat.model";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = params;
    const chat = await Chat.findById(id)
      .populate("members", "fullName email imgProfile")
      .populate("lastMessage");

    if (!chat) {
      return NextResponse.json({ message: "Chat not found" }, { status: 404 });
    }

    return NextResponse.json({ chat }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching chat:", error);
    return NextResponse.json(
      { error: "Failed to fetch chat" },
      { status: 500 }
    );
  }
}
