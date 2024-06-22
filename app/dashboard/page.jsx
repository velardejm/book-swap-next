import AddBook from "@/components/dashboard/add-book";
import BookCard from "@/components/dashboard/book-card";
import DeleteBookModal from "@/components/dashboard/delete-book-modal";

export default async function MyBooks() {
  const response = await fetch("http://localhost:8000/api", {
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
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Owner</th>
              <th>Condition</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {myBooks.map((book, index) => {
              return <BookCard key={index} book={book} />;
            })}
          </tbody>
          {/* foot */}
          <tfoot></tfoot>
        </table>
      </div>
      <AddBook />
      <DeleteBookModal />
    </>
  );
}
