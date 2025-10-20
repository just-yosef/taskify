"use server";
import { login } from "@/app/(features)/(users)/(service)";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export async function loginAction(formData: FormData) {
  try {
    const email = formData.get("email")! as string;
    const password = formData.get("password")! as string;
    console.log({ email, password });
    const res = await login({ email, password });
    const token = jwt.sign(
      { id: res.user._id, role: res.user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );
    (await cookies()).set("user", JSON.stringify(res.user));
    (await cookies()).set("token", token);
  } catch (error: any) {
    console.log(error.message);
  }
}
