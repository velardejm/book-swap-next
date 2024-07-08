"use client";

import { useState } from "react";
import SwapRequest from "./swap-request";
import BookDetailsSwap from "./book-details-swap";

export default function ListingsTable({ listings, userBooks }) {
  const [isSwapRequestOpen, setIsSwapRequestOpen] = useState(false);
  const [requestedBook, setRequestedBook] = useState(null);
  const [offeredBook, setOfferredBook] = useState(null);

  const submitSwapRequest = () => {
    const { id: requestedBookId, owner_id: requestedBookOwnerId } =
      requestedBook;
    const { id: offerredBookId, owner_id: offerredBookOwnerId } = offeredBook;
  };

  return (
    <>
      <h1>{offeredBook?.title}</h1>
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
          {listings.map((book, index) => {
            return (
              <BookDetailsSwap
                key={index}
                {...{
                  book,
                  setIsSwapRequestOpen,
                  setRequestedBook,
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
          requestedBook={requestedBook}
          userBooks={userBooks}
          offeredBook={offeredBook}
          setOfferredBook={setOfferredBook}
          submitSwapRequest={submitSwapRequest}
        />
      )}
    </>
  );
}
