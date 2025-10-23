import { cookies } from "next/headers";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse } from "next/server";

export const getCookie = async <T = string>(key: string) =>
  (await cookies()).get(key)?.value as T;
export const delCookie = async (key: string) => (await cookies()).delete(key);
interface Props {
  key: string;
  value: string;
  options?: Partial<ResponseCookie>;
  response: NextResponse;
}
export const setCookie = ({ key, value, options, response }: Props) =>
  response.cookies.set(key, value, options);
