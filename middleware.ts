import { NextResponse, type NextRequest } from "next/server";

// Discord began adding an `iss` parameter (RFC 9207) to the OAuth redirect back to us. openid-client (used by
// NextAuth) then demands a configured issuer and throws "issuer must be configured on the issuer", which shows
// up as error=OAuthCallback and a sign-in loop. Dropping `iss` (redirect to the same URL without it) fixes it.
// Same fix as the Shipment Board's middleware.ts.
export function middleware(req: NextRequest) {
  if (req.nextUrl.searchParams.has("iss")) {
    const url = req.nextUrl.clone();
    url.searchParams.delete("iss");
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/api/auth/callback/:path*"] };
