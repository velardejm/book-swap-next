import express from "express";
import bcrypt from "bcrypt";
import { pool } from "../db.js";

import {
  queryGetUserDetails,
  queryCheckSignupAvailability,
} from "../utils/auth-queries.js";

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const result = await queryGetUserDetails(username);

  if (!result.success) {
    res.statusCode = 404;
    return res.json({ message: result.error });
  }

  if (await bcrypt.compare(password, result.data.password)) {
    res.statusCode = 200;
    return res.json({ message: "Login successful" });
  } else {
    res.statusCode = 401;
    return res.json({ message: "Incorrect password" });
  }
});

authRouter.post("/signup/p1", async (req, res) => {
  const { email, username } = req.body;
  const signupAvailabilityStatus = await queryCheckSignupAvailability(
    email,
    username
  );
  console.log(signupAvailabilityStatus);
  // return res.json(signupAvailabilityStatus);
  return res.json({ test: "Test" });
});

authRouter.post("/signup/p2", async (req, res) => {
  const { email, username, name, password } = req.body;
  const signupAvailabilityStatus = await queryCheckSignupAvailability(
    email,
    username
  );
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  console.log(req.body);
  return res.json(signupAvailabilityStatus);
});

export default authRouter;
