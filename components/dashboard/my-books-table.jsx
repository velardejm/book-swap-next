"use client";

import { useState, lazy, Suspense } from "react";
import MyBookDetails from "./my-book-details";
import EditBook from "./edit-book";
import AddBook from "./add-book";

const LazyEditBook = lazy(() => import("./edit-book"));

export default function MyBooksTable({ myBooks }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddBookOpen, setIsAddBookOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
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
          {myBooks.map((book, index) => {
            return (
              <MyBookDetails
                key={index}
                {...{
                  book,
                  setIsEditOpen,
                  setSelectedBook,
                }}
              />
            );
          })}
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>
      <button
        className="btn btn-primary"
        onClick={() => setIsAddBookOpen(true)}
      >
        Add Book
      </button>

      {isEditOpen && (
        // <Suspense fallback={<p>Loading...</p>}>
        <EditBook selectedBook={selectedBook} setIsEditOpen={setIsEditOpen} />
        // </Suspense>
      )}

      {isAddBookOpen && <AddBook setIsAddBookOpen={setIsAddBookOpen} />}
    </>
  );
}
