import express from "express";
import bcrypt from "bcrypt";

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
  // GET REQUEST DATA
  const { username, password } = req.body;
  // RUN QUERY ON REQUEST DATA
  const result = await queryGetUserDetails(username);
  // PROCESS QUERY RESULTS
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
  // GET REQUEST DATA
  const { email, username } = req.body;
  // PROCESS QUERY RESULTS
  const result = await queryCheckSignupAvailability(
    email,
    username
  );
  // PROCESS QUERY RESULTS
  if (result.success) {
    return res.json(result.data);
  } else {
    return res.json({ message: result.error });
  }
});

authRouter.post("/signup/p2", async (req, res) => {
  const { email, username, name, password } = req.body;
  const signupAvailabilityStatus = await queryCheckSignupAvailability(
    email,
    username
  );
  const hashedPassword = await bcrypt.hash(password, 10);
  return res.json(signupAvailabilityStatus);
});

export default authRouter;
