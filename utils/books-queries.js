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
    const queryGetListings = "SELECT * FROM books WHERE owner_id != $1";
    const queryGetUserBooks = "SELECT * FROM books WHERE owner_id = $1";
    const [listingsData, userBooksData] = await Promise.all([
      pool.query(queryGetListings, [userId]),
      pool.query(queryGetUserBooks, [userId]),
    ])
    // const listingsData = await pool.query(queryGetListings, [userId]);
    // const userBooksData = await pool.query(queryGetUserBooks, [userId]);
    // console.log(listingsData.rows);
    // console.log(userBooksData.rows);
    const data = {
      listingsData: listingsData.rows,
      userBooksData: userBooksData.rows
    }
    return data
  };
  return await handlelQuery(queryFunction, userId);
}



