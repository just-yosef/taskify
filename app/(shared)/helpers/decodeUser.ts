import { getCookie } from "@/app/(api)/(helpers)";
import { User } from "@/app/(features)/(users)/models";

export async function decodeUserFromToken(): Promise<
  (User & { _id: string }) | null
> {
  const user = await getCookie("user");
  return user ? JSON.parse(user) : null;
}
