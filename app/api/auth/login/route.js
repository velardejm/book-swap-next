import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { queryGetUserDetails } from "@/utils/auth-queries";

export async function POST(req) {
  // GET REQUEST DATA
  const { username, password } = await req.json();
  // RUN QUERY ON REQUEST DATA
  const result = await queryGetUserDetails(username);
  // PROCESS QUERY RESULTS
  if (!result.success) {
    return NextResponse.json({
      message: result.error,
      status: 404,
    });
  }
  if (await bcrypt.compare(password, result.data.password)) {
    return NextResponse.json({
      message: "Login successful",
      status: 200,
    });
  } else {
    return NextResponse.json({
      message: "Incorrect password",
      status: 401,
    });
  }
}
