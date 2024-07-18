import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the request path starts with /img
  if (request.nextUrl.pathname.startsWith('/img'))  {
    // Get the referer and host headers
    const referer = request.headers.get('referer') ?? '';
    const host = request.headers.get('host') ?? '';

    // Allow requests from the same site
    if (referer.includes(host)) {
      return NextResponse.next();
    }

    // Redirect or return a 403 page for other requests
    return NextResponse.redirect(new URL('/403', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/img/:path*']
};
