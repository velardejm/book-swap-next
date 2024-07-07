import { pool } from "@/app/api/db";
import { handlelQuery } from "./query-helpers.js";

export async function queryGetBooks(userId) {
  const queryFunction = async (userId) => {
    const queryString = "SELECT * FROM BOOKS";
    const queryData = await pool.query(queryString);
    return queryData.rows;
  };
  return await handlelQuery(queryFunction, userId);
}

export async function queryGetBookListings(userId) {
  const queryFunction = async (userId) => {
    const queryString = "SELECT * FROM books WHERE owner_id != $1";
    const queryData = await pool.query(queryString, [userId]);
    return queryData.rows;
  };
  return await handlelQuery(queryFunction, userId);
}


