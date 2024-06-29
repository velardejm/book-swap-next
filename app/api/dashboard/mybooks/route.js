
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { jwtVerify } from "jose";



export async function GET(req) {
    const authorization = headers().get('authorization')
    const token = authorization && authorization.split(" ")[1];
    const key = new TextEncoder().encode("SECRET");
    const sessionData = await jwtVerify(token, key)
    console.log(sessionData.payload);
    return NextResponse.json({ test: "Test" })
}