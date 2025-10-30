"use server";

import { cookies } from "next/headers";

export async function changeLanguge(lang: FormData) {
  const languge = lang.get("lang") as string;
  const Cookies = await cookies();
  Cookies.set("locale", languge);
}
