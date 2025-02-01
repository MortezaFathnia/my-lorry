import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Example logic: Redirect if user is not authenticated
  const isAuthenticated = request.cookies.get('firebaseAuthToken'); // Assuming you store a token

  // Redirect if accessing a protected route
  if (!isAuthenticated && pathname.startsWith('/dashboard')) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Match specific routes
};