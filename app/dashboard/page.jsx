import { cookies } from "next/headers";
import MyBooksTable from "@/components/dashboard/my-books-table";
import DeleteBookModal from "@/components/dashboard/delete-book-modal";
import { authorizedFetch } from "@/lib/actions";
// import { getSessionData } from "@/lib/auth";

export default async function MyBooks() {
  // const cookie = cookies().get("userId");
  // console.log(cookie);

  const response = await authorizedFetch(
    "http://localhost:8000/api/dashboard/mybooks",
    "no-store",
    ["mybooks"]
  );

  const books = response.status === 200 ? response.data : [];

  return (
    <>
      <h2 className="text-center mt-10 mb-4 text-2xl font-bold">My Books</h2>
      <div className="overflow-x-auto mx-10">
        <MyBooksTable myBooks={books} />
      </div>
      <DeleteBookModal />
    </>
  );
}
