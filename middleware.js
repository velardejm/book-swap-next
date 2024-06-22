import { NextResponse } from "next/server";
import { checkSession } from "./lib/auth";

export async function middleware(request) {
  const session = await checkSession();
  if (!session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // if (await checkSession()) {
  //   return NextResponse.next();
  // } else NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/dashboard",
};
