import { getCookie } from "@/app/(api)/(helpers)";
import { User } from "@/app/(features)/(users)/models";

export async function decodeUserFromToken(): Promise<
  (User & { _id: string }) | null
> {
  const user = await getCookie("user");
  if (!user) return null;
  return JSON.parse(user);
}
