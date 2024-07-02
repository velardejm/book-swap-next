import { pool } from "@/app/api/db";
import { handlelQuery } from "./query-helpers.js";

export async function queryGetRequests(userId) {
    const queryFunction = async (userId) => {
        // const queryString = "SELECT * FROM swaprequests WHERE requestee_id = $1 AND status = $2";
        const queryString = "SELECT * FROM swaprequests WHERE requestee_id = $1";
        const queryData = await pool.query(queryString, [userId]);
        return queryData.rows;
    };
    return await handlelQuery(queryFunction, userId);
}
