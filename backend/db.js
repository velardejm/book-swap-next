// const { Pool } = require("pg");

import pkg from "pg";

const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "bookswap",
  password: "wordpass8",
  port: 5432,
});

// module.exports = { pool };
