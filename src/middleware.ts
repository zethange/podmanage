import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getSessionData } from "~/shared/lib";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const user = await getSessionData();
  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
};
