import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib";
import { UserModel } from "@/app/(features)/(users)/models";
import { IUser } from "@/app/(features)/(general)/types";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const data: IUser = await req.json();
    const existingUser = await UserModel.findOne({ email: data.email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await UserModel.create({ ...data, password: hashedPassword });
    return NextResponse.json({ message: "User created", userId: user._id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
