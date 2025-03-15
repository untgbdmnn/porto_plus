import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (isDevelopment) {
    const url = request.nextUrl.clone();
    if (url.pathname !== '/development') {
      url.pathname = '/development';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  };