import { getCookie } from "@/app/(api)/(helpers)";
import { User } from "@/app/(features)/(users)/models";


export async function decodeUserFromToken() {
  const user = (await getCookie("user")) as string;
  return JSON.parse(user) as User;
}
