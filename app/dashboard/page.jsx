import { cookies } from "next/headers";
import MyBooksTable from "@/components/dashboard/my-books-table";
import DeleteBookModal from "@/components/dashboard/delete-book-modal";
import { headers } from "next/headers";
// import { getSessionData } from "@/lib/auth";

export default async function MyBooks() {
  const cookie = cookies().get("userId");
  // console.log(cookie);
  const session = cookies().get("session")?.value;
  const response = await fetch("http://localhost:8000/api/dashboard/mybooks", {
    next: { tags: ["mybooks"] },
    headers: { Authorization: `Bearer ${session}` },
    cache: "no-store",
  });
  let { data } = await response.json();

  return (
    <>
      <h2 className="text-center mt-10 mb-4 text-2xl font-bold">My Books</h2>
      <div className="overflow-x-auto mx-10">
        <MyBooksTable myBooks={data} />
      </div>
      <DeleteBookModal />
    </>
  );
}
