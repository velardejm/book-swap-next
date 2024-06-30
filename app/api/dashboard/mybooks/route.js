
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { jwtVerify } from "jose";
import { queryGetMyBooks } from "@/utils/dashboard-queries";


export async function GET() {
    const authorization = headers().get('authorization');
    if (!authorization) {
        return NextResponse.json({ success: false, error: "Not authorized to access data." })
    }
    const token = authorization && authorization.split(" ")[1];
    const key = new TextEncoder().encode("SECRET");
    const { payload } = await jwtVerify(token, key);
    const result = await queryGetMyBooks(payload.userId);
    if (result.success) {
        return NextResponse.json({ data: result.data, status: 200 })
    } else {
        return NextResponse.json({ message: result.error, status: 400 })
    }
}