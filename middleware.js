import { NextResponse, NextRequest } from "next/server";
import { checkSession } from "./lib/auth";
import { authenticate2 } from "./lib/auth";
import { cookies } from "next/headers";

export async function middleware(request) {
  const session = await checkSession();
  if (!session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// export async function middleware(request) {
//   const userId = await authenticate2();
//   if (!userId) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
//   request.cookies.set('userId', userId)
//   // const cookie = request.cookies.get("userId");
//   // console.log(cookie);
//   const newHeaders = new Headers(request.headers);
//   const response = NextResponse.next();
//   response.cookies.set({
//     name: 'userId', value: "test", httpOnly: true
//   });
//   return response;
// }

export const config = {
  matcher: "/dashboard",
};
