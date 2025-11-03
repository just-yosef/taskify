import { NextResponse } from "next/server";
import { connectDB } from "@/lib";
import { Chat } from "@/app/(features)/(protected)/(messages)/models/chat.model";
import { Message } from "@/app/(features)/(protected)/(messages)/models/message.model";
export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "userId is required" },
        { status: 400 }
      );
    }

    const chats = await Chat.find({ members: userId })
      .populate("members", "name email imgProfile")
      .populate("lastMessage")
      .sort({ updatedAt: -1 });

    return NextResponse.json({ chats }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching chats:", error);
    return NextResponse.json(
      { error: "Failed to fetch chats" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, members, isGroup, groupAdmin } = await req.json();

    if (!members || members.length < 2) {
      return NextResponse.json(
        { error: "At least 2 members are required" },
        { status: 400 }
      );
    }

    if (!isGroup) {
      const existingChat = await Chat.findOne({
        isGroup: false,
        members: { $all: members, $size: 2 },
      });

      if (existingChat) {
        return NextResponse.json({ chat: existingChat }, { status: 200 });
      }
    }

    const chat = await Chat.create({
      name: isGroup ? name : undefined,
      isGroup,
      members,
      groupAdmin: isGroup ? groupAdmin : undefined,
    });

    const populatedChat = await chat.populate(
      "members",
      "name email imgProfile"
    );

    return NextResponse.json({ chat: populatedChat }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating chat:", error);
    return NextResponse.json(
      { error: "Failed to create chat" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const chatId = searchParams.get("chatId");
    const { name, members } = await req.json();

    if (!chatId) {
      return NextResponse.json(
        { error: "chatId is required" },
        { status: 400 }
      );
    }

    const updatedChat = await Chat.findByIdAndUpdate(
      chatId,
      { $set: { name, members } },
      { new: true }
    ).populate("members", "name email imgProfile");

    if (!updatedChat) {
      return NextResponse.json({ error: "Chat not found" }, { status: 404 });
    }

    return NextResponse.json({ chat: updatedChat }, { status: 200 });
  } catch (error: any) {
    console.error("Error updating chat:", error);
    return NextResponse.json(
      { error: "Failed to update chat" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const chatId = searchParams.get("chatId");

    if (!chatId) {
      return NextResponse.json(
        { error: "chatId is required" },
        { status: 400 }
      );
    }

    await Chat.findByIdAndDelete(chatId);
    await Message.deleteMany({ chat: chatId });

    return NextResponse.json(
      { message: "Chat deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting chat:", error);
    return NextResponse.json(
      { error: "Failed to delete chat" },
      { status: 500 }
    );
  }
}
