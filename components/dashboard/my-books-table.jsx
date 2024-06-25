"use client";

import { useState, lazy, Suspense } from "react";
import BookCard from "./book-card";
import EditBook from "./edit-book";
import AddBook from "./add-book";

const LazyEditBook = lazy(() => import("./edit-book"));

export default function MyBooksTable({ myBooks }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddBookOpen, setIsAddBookOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const closeEdit = () => {
    setIsEditOpen(false);
  };

  const openEdit = () => {
    setIsEditOpen(true);
  };

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
          {/* rows */}
          {/* {myBooks.map((book, index) => {
              return <BookCard key={index} book={book} />;
            })} */}

          {myBooks.map((book, index) => {
            return (
              <BookCard
                key={index}
                {...{
                  book,
                  openEdit,
                  closeEdit,
                  setSelectedBook,
                  selectedBook,
                }}
              />
            );
          })}
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>

      {isEditOpen && (
        // <Suspense fallback={<p>Loading...</p>}>
        <EditBook selectedBook={selectedBook} closeEdit={closeEdit} />
        // </Suspense>
      )}

      {isAddBookOpen && <AddBook />}
    </>
  );
}
