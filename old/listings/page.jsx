import { books } from "@/public/dummydata";
import ListingsTable from "@/components/swap/listings-table";

export default function BookListings() {
  return (
    <>
      <h2 className="text-center mt-10 mb-4 text-2xl font-bold">Book List</h2>
      <div className="overflow-x-auto mx-10">
        <ListingsTable books={books} />
      </div>
    </>
  );
}

{
  /* <>
  <h2 className="text-center mt-10 mb-4 text-2xl font-bold">My Books</h2>
  <div className="overflow-x-auto mx-10">
    <MyBooksTable myBooks={data} />
  </div>
  <DeleteBookModal />
</>; */
}
