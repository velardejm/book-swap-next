import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

import { pool } from "./db.js";
import { use } from "bcrypt/promises.js";

const app = express();

app.use(cors());
app.use(bodyParser());

app.get("/test", (req, res) => {
  res.json({ name: "Test" });
});

app.get("/dashboard/mybooks", async (req, res) => {
  const sqlGetAllBooks = "SELECT * FROM books";
  const books = await pool.query(sqlGetAllBooks);
  res.statusCode = 200;
  // console.log(books.rows);
  res.json(books.rows);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const queryGetUser = "SELECT * FROM users WHERE username=$1";
  const queryGetUserResult = await pool.query(queryGetUser, [username]);
  const foundUser = queryGetUserResult.rows[0];

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

app.post("/signup", async (req, res) => {
  const { email, username } = req.body;
  const sqlCheckEmail =
    "SELECT EXISTS (SELECT 1 FROM users WHERE email = $1)";
  const sqlCheckUsername =
    "SELECT EXISTS (SELECT 1 FROM users WHERE username = $1)";
  const checkEmailResult = await pool.query(sqlCheckEmail, [email]);
  const checkUsernameResult = await pool.query(sqlCheckUsername, [username]);
  // console.log(checkEmailResult.rows[0].exists);
  // console.log(checkUsernameResult.rows[0].exists);

  return res.json({ emailExists: checkEmailResult.rows[0].exists, usernameExists: checkUsernameResult.rows[0].exists });
});

app.post("/updatebook", async (req, res) => {
  const { id, title } = req.body;
  const sqlUpdateBook = "UPDATE books SET title = $1 WHERE id = $2";
  const queryResult = await pool.query(sqlUpdateBook, [title, id]);
  console.log('Book was updated');
  // console.log(queryResult.rows);
  return res.json({ message: "Ok" })
})

app.listen(3001, () => { });
