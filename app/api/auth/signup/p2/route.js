import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import {
  queryCheckSignupAvailability,
  querySignup,
} from "@/utils/auth-queries";

export async function POST(req) {
  // GET REQUEST DATA
  const { email, username, name, password } = await req.json();
  // PROCESS QUERY RESULTS
  const signupAvailabilityStatus = await queryCheckSignupAvailability(
    email,
    username
  );
  // PROCESS QUERY RESULTS

  if (signupAvailabilityStatus.success) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await querySignup(username, hashedPassword, name, email);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Registration successful.",
        hashedPassword: hashedPassword,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Registration failed. Please try again later.",
        hashedPassword: null,
      });
    }
  } else {
    return NextResponse.json({
      success: false,
      message: "Username or email is not available.",
      hashedPassword: null,
    });
  }
}
