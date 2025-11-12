import { NextRequest, NextResponse } from "next/server";
import { IsLoggedIn } from "./app/(shared)/helpers/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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

  if (!pathname.startsWith("/api")) {
    let isLoggedin = false;
    try {
      isLoggedin = await IsLoggedIn();
    } catch (err) {
      console.error("IsLoggedIn error:", err);
    }

    if (isLoggedin && pathname === "/signin") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (!isLoggedin && pathname !== "/signin") {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  const response = NextResponse.next();

  if (pathname.startsWith("/api")) {
    const origin = request.headers.get("origin") || "*";
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Credentials", "true");
  }

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/account/:path*", "/api/:path*", "/signin", "/messages",],
};
