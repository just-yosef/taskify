import { NextRequest, NextResponse } from "next/server";
import { decodedUser, IsLoggedIn } from "./app/(shared)/helpers";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoggedin = await IsLoggedIn();
  // Protecting Routes
  if (!isLoggedin)
    return NextResponse.redirect(new URL("/signin", request.url));
  if (isLoggedin && pathname === "/signin")
    return NextResponse.redirect(new URL("/dashboard", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/account", "/signin"],
};
