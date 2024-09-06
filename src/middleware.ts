import { NextRequest, NextResponse } from "next/server"

const allowedOrigins = [`${process.env.URL}`]

const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin") ?? ""
  const isAllowedOrigin = allowedOrigins.includes(origin)

  if (!isAllowedOrigin) {
    return NextResponse.json({ message: "Origin not allowed" }, { status: 403 })
  }

  const response = NextResponse.next()
  response.headers.set("Access-Control-Allow-Origin", origin)

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  return response
}

export const config = {
  matcher: "/api/:path*",
}
