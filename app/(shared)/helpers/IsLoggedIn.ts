import { cookies } from "next/headers";

export const IsLoggedIn = async () => !!(await cookies()).get("token")?.value;
