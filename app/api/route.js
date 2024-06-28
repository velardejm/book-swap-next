import { promises as fs } from "fs";
import { queryGetUserDetails } from "@/utils/auth-queries";

export async function GET() {
  const file = await fs.readFile(process.cwd() + "/public/books.json", "utf8");
  const data = JSON.parse(file);
  return Response.json(data);
}

export async function POST(req) {
  // GET REQUEST DATA
  const { username, password } = req.body;
  // RUN QUERY ON REQUEST DATA
  const result = await queryGetUserDetails(username);
  // PROCESS QUERY RESULTS
  if (!result.success) {
    // res.statusCode = 404;
    Response.statusCode = 404;
    return Response.json({ message: result.error });
  }
  if (await bcrypt.compare(password, result.data.password)) {
    Response.statusCode = 200;
    return Response.json({ message: "Login successful" });
  } else {
    Response.statusCode = 401;
    return Response.json({ message: "Incorrect password" });
  }
}

// authRouter.post("/login", async (req, res) => {});
