import { pool } from "@/app/api/db";
import { handlelQuery } from "./query-helpers.js";

export async function queryGetUserName(userId) {
    const queryFunction = async (userId) => {
        const queryString = "SELECT name FROM usersinfo WHERE id = $1";
        const queryData = await pool.query(queryString, [userId]);
        return queryData.rows[0];
    };
    return await handlelQuery(queryFunction, userId);
}