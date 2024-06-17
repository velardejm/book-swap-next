export async function GET() {
  const file = await fs.readFile(process.cwd() + "/public/books.json", "utf8");
  const data = JSON.parse(file);
  return Response.json(data);
}
