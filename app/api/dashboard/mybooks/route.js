import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { jwtVerify } from "jose";
import { queryGetMyBooks } from "@/utils/dashboard-queries";
import { authenticate } from "@/lib/auth";

export async function GET() {
  //   const authorization = headers().get("authorization");
  //   if (!authorization) {
  //     return NextResponse.json({
  //       success: false,
  //       error: "Not authorized to access data.",
  //     });
  //   }
  //   const token = authorization && authorization.split(" ")[1];
  //   const key = new TextEncoder().encode("SECRET");
  //   const { payload } = await jwtVerify(token, key);

  const response = await authenticate();
  if (!response.success)
    return NextResponse.json({ message: result.error, status: 401 });
  const payload = response.data;
  const result = await queryGetMyBooks(payload.userId);
  if (result.success) {
    return NextResponse.json({ data: result.data, status: 200 });
  } else {
    return NextResponse.json({ message: result.error, status: 400 });
  }
}

export async function POST() {
  if (!response.success)
    return NextResponse.json({ message: result.error, status: 401 });
  const payload = response.data;
  // perform query
}
