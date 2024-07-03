import { NextResponse } from "next/server";
import { authenticate } from "@/lib/auth";
import { queryGetRequests } from "@/utils/request-queries";
// import { queryAddBook } from "@/utils/dashboard-queries";

export async function GET(req) {
    const response = await authenticate();
    if (!response.success)
        return NextResponse.json({ message: response.error, status: 401 });
    const payload = response.data;
    // console.log(payload);
    // 1. Using the userId from the payload, Get swap requests from swap_requests table
    // console.log(getRequestResults);
    // 2. From the returned array above, Get requested book id then fetch the details
    // 3. From the returned array above, get offerred book 
    // 4. From the returned array above, get requestor details
    const result = await queryGetRequests(payload.userId);
    if (result.success) {
        return NextResponse.json({ data: result.data, status: 200 });
      } else {
        return NextResponse.json({ message: result.error, status: 400 });
      }
}