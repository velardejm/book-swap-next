"use client";

import { useState } from "react";
import SwapRequest from "./swap-request";

// import { books } from "@/public/dummydata";
import BookDetailsSwap from "./book-details-swap";

// const LazyEditBook = lazy(() => import("./edit-book"));

export default function ListingsTable({ books }) {
  const [isSwapRequestOpen, setIsSwapRequestOpen] = useState(false);
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
          {books.map((book, index) => {
            return (
              <BookDetailsSwap
                key={index}
                {...{
                  book,
                  setIsSwapRequestOpen,
                  setSelectedBook,
                }}
              />
            );
          })}
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>

      {isSwapRequestOpen && (
        <SwapRequest
          setIsSwapRequestOpen={setIsSwapRequestOpen}
          selectedBook={selectedBook}
        />
      )}
    </>
  );
}
