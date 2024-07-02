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

export async function queryUpdateBook(bookData) {
  const queryFunction = async (bookData) => {
    const { id, title, author, genre, condition } = bookData
    console.log(id, title, author, genre, condition);
    const queryString = "UPDATE books SET title = $1, author = $2, genre = $3, condition = $4 WHERE id = $5";
    const queryData = await pool.query(queryString, [title, author, genre, condition, id]);
    return queryData.rows;
  };
  return await handlelQuery(queryFunction, bookData);
}
