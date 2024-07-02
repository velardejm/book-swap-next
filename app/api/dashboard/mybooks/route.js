import { NextResponse } from "next/server";
import { queryGetMyBooks, queryUpdateBook } from "@/utils/dashboard-queries";
import { authenticate } from "@/lib/auth";

export async function GET() {
  const response = await authenticate();
  if (!response.success)
    return NextResponse.json({ message: response.error, status: 401 });
  const payload = response.data;
  const result = await queryGetMyBooks(payload.userId);
  if (result.success) {
    return NextResponse.json({ data: result.data, status: 200 });
  } else {
    return NextResponse.json({ message: result.error, status: 400 });
  }
}

export async function POST(req) {
  const bookData = await req.json();
  const response = await authenticate();
  if (!response.success)
    return NextResponse.json({ message: response.error, status: 401 });
  const result = await queryUpdateBook(bookData);
  console.log(result);
  if (result.success) {
    return NextResponse.json({ data: result.data, status: 200 });
  } else {
    return NextResponse.json({ message: result.error, status: 400 });
  }
}

