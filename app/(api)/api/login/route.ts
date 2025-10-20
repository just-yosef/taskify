import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib";
import { UserModel } from "@/app/(features)/(users)/models";
import { NextRequest, NextResponse } from "next/server";
import { setCookie } from "../../(helpers)";
import { IUser } from "@/app/(features)/(general)/types";
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    await connectDB();
    const user = await UserModel.findOne<IUser>({ email }).select("+password");
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 }
      );
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 }
      );
    }

    const response = NextResponse.json({
      message: "Login successful",
      user,
    });
    return response;
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
