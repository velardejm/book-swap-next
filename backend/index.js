import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

import { pool } from "./db.js";
// import { use } from "bcrypt/promises.js";

import authRouter from "./routes/auth.js";
import dashboardRouter from "./routes/dashboard.js";

const app = express();

app.use(cors());
app.use(bodyParser());

app.get("/test", (req, res) => {
  res.json({ name: "Test" });
});


app.post("/updatebook", async (req, res) => {
  const { id, title } = req.body;
  const sqlUpdateBook = "UPDATE books SET title = $1 WHERE id = $2";
  const queryResult = await pool.query(sqlUpdateBook, [title, id]);
  console.log('Book was updated');
  return res.json({ message: "Ok" })
})

app.use("/", authRouter);
app.use("/dashboard", dashboardRouter)

app.listen(3001, () => { });
