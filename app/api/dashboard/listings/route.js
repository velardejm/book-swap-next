import { NextResponse } from "next/server";
import { queryGetBookListings } from "@/utils/books-queries";
import { authenticate } from "@/lib/auth";

export async function GET() {
    const response = await authenticate();
    if (!response.success)
        return NextResponse.json({ message: response.error, status: 401 });
    const payload = response.data;
    const result = await queryGetBookListings(payload.userId);
    if (result.success) {
        return NextResponse.json({ data: result.data, status: 200 });
    } else {
        return NextResponse.json({ message: result.error, status: 400 });
    }
}