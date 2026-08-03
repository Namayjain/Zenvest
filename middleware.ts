import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl

  if (url.pathname.startsWith('/admin') && !url.pathname.startsWith('/admin/login')) {
    const sessionCookie = req.cookies.get('admin_session')
    
    if (sessionCookie?.value !== 'authenticated') {
      const loginUrl = new URL('/admin/login', req.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
