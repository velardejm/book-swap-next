import express from "express";
import bcrypt from "bcrypt";
import { pool } from "../db.js";

import { queryGetUserDetails, queryCheckSignupAvailability } from "../utils/auth-queries.js";


const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const foundUser = await queryGetUserDetails(username);

    if (!foundUser) {
        res.statusCode = 404;
        return res.json({ message: "Username not found" });
    }

    if (await bcrypt.compare(password, foundUser.password)) {
        res.statusCode = 200;
        return res.json({ username: foundUser.username, userId: foundUser.id });
    } else {
        res.statusCode = 401;
        return res.json({ message: "Incorrect password" });
    }
});

authRouter.post("/signup", async (req, res) => {
    const { email, username } = req.body;
    const signupAvailabilityStatus = await queryCheckSignupAvailability(email, username);
    return res.json(signupAvailabilityStatus);
});


export default authRouter;