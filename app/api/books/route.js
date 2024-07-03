import { NextResponse } from "next/server";
import { queryGetBooks } from "@/utils/books-queries";
import { checkToken } from "@/lib/auth";

export async function GET() {
  const userId = await checkToken();
  const response = await queryGetBooks(userId);
  if (response.success) {
    return NextResponse.json({ data: response.data, status: 200 });
  } else {
    return NextResponse.json({ message: response.error, status: 400 });
  }
}
