import BookDetails from "@/components/books/book-details";
import { cookies } from "next/headers";

export default async function Books() {
  const session = cookies().get("session")?.value;
  const response = await fetch("http://localhost:8000/api/books", {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${session}`,
    },
  });
  const responseData = await response.json();
  if (responseData.status !== 200) return null;
  const books = responseData.data;

  return (
    <>
      <h2 className="text-center mt-10 mb-4 text-2xl font-bold">Book List</h2>
      <div className="overflow-x-auto mx-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Condition</th>
              <th>{/* <button className="btn btn-primary">Swap</button> */}</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return <BookDetails key={index} book={book} />;
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
}
