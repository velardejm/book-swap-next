import { NextResponse, NextRequest } from "next/server";
import {
  queryGetMyBooks,
  queryAddBook,
  queryUpdateBook,
} from "@/utils/dashboard-queries";
import { authenticate } from "@/lib/auth";
import { headers } from "next/headers";
import { cookies } from "next/headers";

export async function GET(request) {
  // const cookie = request.cookies.get("userId");
  // console.log('cookie: ', cookie);
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

// booksRouter.post("/new", authenticateToken, async (req, res) => {
//   try {
//     await pool.query("BEGIN");

//     const { title, author, genre, condition } = req.body;

//     const sqlAddBook =
//       "INSERT INTO books (title, author, genre, condition, owner_id) VALUES ($1, $2, $3, $4, $5) RETURNING id";

//     const sqlAssignBook =
//       "INSERT INTO ownedbooks (user_id, book_id) VALUES ($1, $2)";

//     const result = await pool.query(sqlAddBook, [
//       title,
//       author,
//       genre,
//       condition,
//       req.user.userId
//     ]);

//     await pool.query(sqlAssignBook, [req.user.userId, result.rows[0].id]);

//     const books = await queryGetBooks(req.user.userId);

//     pool.query("COMMIT");
//     res.status(200).json({ data: books });
//   } catch (err) {
//     console.log(err);

//     res.status(400).json({ message: "Add book request failed." });

//     pool.query("ROLLBACK");
//   }
// });

export async function POST(req) {
  const bookData = await req.json();
  // console.log(bookData);
  const response = await authenticate();
  if (!response.success)
    return NextResponse.json({ message: response.error, status: 401 });
  const payload = response.data;

  console.log(payload);

  const bookDataWithOwnerId = {
    ownerId: payload.userId,
    ...bookData,
  };

  const result = await queryAddBook(bookDataWithOwnerId);
  console.log(result);
  if (result.success) {
    return NextResponse.json({ data: result.data, status: 200 });
  } else {
    return NextResponse.json({ message: result.error, status: 400 });
  }
}

export async function PUT(req) {
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
