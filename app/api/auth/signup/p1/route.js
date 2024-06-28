import { NextResponse } from "next/server";
import { queryCheckSignupAvailability } from "@/utils/auth-queries";

export async function POST(req) {
  // GET REQUEST DATA
  const { email, username } = await req.json();
  // PROCESS QUERY RESULTS
  const result = await queryCheckSignupAvailability(email, username);
  // PROCESS QUERY RESULTS
  if (result.success) {
    return NextResponse.json(result.data);
  } else {
    return NextResponse.json({ message: result.error });
  }
}