import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    if (!token?.isMember) {
      return NextResponse.redirect(new URL("/not-authorized", req.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => Boolean(token),
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: ["/", "/api/board", "/api/board/:path*", "/api/template/:path*"],
};
