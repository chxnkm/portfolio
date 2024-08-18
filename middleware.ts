import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    frame-src 'self' https://open.spotify.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`
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
  const contentSecurityPolicyHeaderValue = cspHeader
  .replace(/\s{2,}/g, ' ')
  .trim()

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)

  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )

  return NextResponse.next();
}

export const config = {
  matcher: ['/img/:path*']
};
