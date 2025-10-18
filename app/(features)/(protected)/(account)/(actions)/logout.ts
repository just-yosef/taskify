"use server";
import { delCookie } from "@/app/(api)/(helpers)";
import { redirect } from "next/navigation";
export async function logout() {
  await delCookie("token");
  await delCookie("user");
  redirect("/signin");
}
