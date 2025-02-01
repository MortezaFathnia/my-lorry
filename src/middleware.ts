import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export default createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Example logic: Redirect if user is not authenticated
  const isAuthenticated = request.cookies.get('firebaseAuthToken'); // Assuming you store a token

  // Redirect if accessing a protected route
  if (
    !isAuthenticated &&
    (pathname.startsWith('/en/dashboard') || pathname.startsWith('/de/dashboard'))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}



export const config = {
  matcher: [
    '/(de|en)(/dashboard)?/:path*', // Localized and protected paths
  ],
};