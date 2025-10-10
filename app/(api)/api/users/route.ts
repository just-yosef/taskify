import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib";
import { UserModel } from "@/app/(features)/(users)/models";
import { IUser } from "@/app/(features)/(general)/types";

export async function POST(req: Request) {
    try {
        const data: IUser = await req.json();
        const { fullName, email, password, profile, } = data;
        await connectDB();
        const existing = await UserModel.findOne({ email });
        if (existing) {
            return NextResponse.json({ error: "Email already exists" }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            ...data,
            password: hashedPassword,
        });

        return NextResponse.json({ message: "User created", user: newUser }, { status: 201 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const users = await UserModel.find().select("-password")
        return NextResponse.json(users);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function DELETE() {
    try {
        await connectDB();
        const users = await UserModel.deleteMany()
        return NextResponse.json(users);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
