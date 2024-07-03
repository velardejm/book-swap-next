import { pool } from "@/app/api/db";
import { handlelQuery } from "./query-helpers.js";

export async function queryGetMyBooks(userId) {
  const queryFunction = async (userId) => {
    const queryString = "SELECT * FROM books WHERE owner_id = $1";
    const queryData = await pool.query(queryString, [userId]);
    return queryData.rows;
  };
  return await handlelQuery(queryFunction, userId);
}

export async function queryAddBook(bookData) {
  const queryFunction = async (bookData) => {
    const { ownerId, title, author, genre, condition } = bookData;
    console.log(bookData);
    // console.log(id, title, author, genre, condition);
    const queryString =
      "INSERT INTO books (title, author, genre, condition, owner_id) VALUES ($1, $2, $3, $4, $5)";
    const queryData = await pool.query(queryString, [
      title,
      author,
      genre,
      condition,
      ownerId,
    ]);
    return queryData.rows;
  };
  return await handlelQuery(queryFunction, bookData);
}

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

export async function queryUpdateBook(bookData) {
  const queryFunction = async (bookData) => {
    const { id, title, author, genre, condition } = bookData;
    console.log(id, title, author, genre, condition);
    const queryString =
      "UPDATE books SET title = $1, author = $2, genre = $3, condition = $4 WHERE id = $5";
    const queryData = await pool.query(queryString, [
      title,
      author,
      genre,
      condition,
      id,
    ]);
    return queryData.rows;
  };
  return await handlelQuery(queryFunction, bookData);
}
