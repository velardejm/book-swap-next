import MyBooksTable from "@/components/dashboard/my-books-table";
import DeleteBookModal from "@/components/dashboard/delete-book-modal";

export default async function MyBooks() {
  const response = await fetch("http://localhost:3001/dashboard/mybooks", {
    next: { tags: ["mybooks"] },
  });

  let myBooks = await response.json();

  let toDeleteId = null;

  const deleteBook = (id) => {
    toDeleteId = id;
  };

  return (
    <>
      <h2 className="text-center mt-10 mb-4 text-2xl font-bold">My Books</h2>
      <div className="overflow-x-auto mx-10">
        <MyBooksTable myBooks={myBooks} />
      </div>
      <DeleteBookModal />
    </>
  );
}
