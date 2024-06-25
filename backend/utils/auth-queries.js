import { pool } from "../db.js";



async function handlelQuery(query, ...queryParams) {
    try {
        const result = await query(...queryParams)
        return { success: true, data: result }
    } catch (error) {
        return { success: false, error: error.message }
    }

}

export async function queryGetUserDetails(username) {
    const queryFunction = async () => {
        const queryString = "SELECT * FROM users WHERE username=$1";
        const queryResult = await pool.query(queryString, [username]);
        return queryResult;
    }

    return await handlelQuery(queryFunction);
}


// QUERIES FOR DEVELOPMENT/TESTING

// export async function queryGetUserDetails(username) {
//     const queryGetUser = "SELECT * FROM users WHERE username=$1";

//     try {
//         const queryResult = await pool.query(queryGetUser, [username]);
//         const queryData = queryResult.rows[0];
//         if (!queryData) {
//             throw new Error(`User not found`);
//         }
//         return { success: true, data: queryData };
//     } catch (error) {
//         return { success: false, error: error.message };
//     }
// }

export async function queryCheckSignupAvailability(email, username) {
    const sqlCheckEmail =
        "SELECT EXISTS (SELECT 1 FROM users WHERE email = $1)";
    const sqlCheckUsername =
        "SELECT EXISTS (SELECT 1 FROM users WHERE username = $1)";


    try {
        const checkEmailResult = await pool.query(sqlCheckEmail, [email]);
        const checkUsernameResult = await pool.query(sqlCheckUsername, [username]);
        const queryData = { emailExists: checkEmailResult.rows[0].exists, usernameExists: checkUsernameResult.rows[0].exists };
        return { success: true, data: queryData }
    } catch (error) {
        return { success: false, error: error.message }
    }
}