import { pool } from "../db.js";


// QUERIES FOR DEVELOPMENT/TESTING

export async function queryGetUserDetails(username) {
    const queryGetUser = "SELECT * FROM users WHERE username=$1";
    const queryGetUserResult = await pool.query(queryGetUser, [username]);
    const foundUser = queryGetUserResult.rows[0];
    return foundUser;
}

export async function queryCheckSignupAvailability(email, username) {
    const sqlCheckEmail =
        "SELECT EXISTS (SELECT 1 FROM users WHERE email = $1)";
    const sqlCheckUsername =
        "SELECT EXISTS (SELECT 1 FROM users WHERE username = $1)";
    const checkEmailResult = await pool.query(sqlCheckEmail, [email]);
    const checkUsernameResult = await pool.query(sqlCheckUsername, [username]);

    return { emailExists: checkEmailResult.rows[0].exists, usernameExists: checkUsernameResult.rows[0].exists };
}