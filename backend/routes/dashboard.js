import express from "express";

const dashboardRouter = express.Router();

dashboardRouter.get("/mybooks", async (req, res) => {
    const sqlGetAllBooks = "SELECT * FROM books";
    const books = await pool.query(sqlGetAllBooks);
    res.statusCode = 200;
    // console.log(books.rows);
    res.json(books.rows);
    // return res.json({ test: "Test" })
})

// app.get("/dashboard/mybooks", async (req, res) => {
//   const sqlGetAllBooks = "SELECT * FROM books";
//   const books = await pool.query(sqlGetAllBooks);
//   res.statusCode = 200;
//   // console.log(books.rows);
//   res.json(books.rows);
// });

export default dashboardRouter;