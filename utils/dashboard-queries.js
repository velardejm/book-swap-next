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
