import { NextRequest, NextResponse } from "next/server";
import { IsLoggedIn } from "./app/(shared)/helpers";
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // @ts-ignore

  if (request.method === "OPTIONS") {
    const res = new NextResponse(null, { status: 204 });
    res.headers.set(
      "Access-Control-Allow-Origin",
      request.headers.get("origin") || "*"
    );
    res.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.headers.set("Access-Control-Allow-Credentials", "true");
    return res;
  }

  const response = NextResponse.next();

  const origin = request.headers.get("origin") || "*";
  response.headers.set("Access-Control-Allow-Origin", origin);
  response.headers.set("Access-Control-Allow-Credentials", "true");

  if (!pathname.startsWith("/api")) {
    const isLoggedin = await IsLoggedIn();

    if (!isLoggedin && pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }

    if (isLoggedin && pathname === "/signin") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/account/:path*", "/api/:path*", "/signin"],
};
