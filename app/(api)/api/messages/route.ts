import { Message } from "@/app/(features)/(protected)/(messages)/models/message.model";
import { connectDB } from "@/lib";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { chatId, senderId, receiverId, content, attachments } = body;
    if (!chatId || !senderId || !content) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const message = await Message.create({
      chat: chatId,
      sender: senderId,
      receiver: receiverId,
      content,
      attachments,
    });

    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    console.error("Error while creating message:", error);
    return NextResponse.json(
      { message: "Server error occurred" },
      { status: 500 }
    );
  }
}
export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const chatId = searchParams.get("chatId");

    let query = {};
    if (chatId) {
      query = { chat: chatId };
    }

    const messages = await Message.find(query)
      .populate("sender", "fullName email")
      .populate("receiver", "fullName email")
      .sort({ createdAt: 1 });

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error while fetching messages:", error);
    return NextResponse.json(
      { message: "Server error occurred" },
      { status: 500 }
    );
  }
}


export async function PATCH(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { messageId, senderId, newContent, isDeleted } = body;
    console.log(body);

    if (!messageId || !senderId) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const message = await Message.findById(messageId);
    if (!message) {
      return NextResponse.json(
        { message: "Message not found" },
        { status: 404 }
      );
    }

    if (message.sender.toString() !== senderId) {
      return NextResponse.json(
        { message: "Not authorized to edit this message" },
        { status: 403 }
      );
    }

    if (newContent !== undefined) message.content = newContent;

    if (isDeleted !== undefined) message.isDeleted = isDeleted;

    message.updatedAt = new Date();
    await message.save();

    return NextResponse.json(
      { message: "Message updated successfully", updatedMessage: message },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while updating message:", error);
    return NextResponse.json(
      { message: "Server error occurred" },
      { status: 500 }
    );
  }
}
