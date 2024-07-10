"use client";

import { useState } from "react";
import SwapRequest from "./swap-request";
import BookDetailsSwap from "./book-details-swap";
import { sendSwapRequest } from "@/lib/actions";

export default function ListingsTable({ listings, userBooks }) {
  const [isSwapRequestOpen, setIsSwapRequestOpen] = useState(false);
  const [requestedBook, setRequestedBook] = useState(null);
  const [offerredBook, setOfferredBook] = useState(null);

  const submitSwapRequest = () => {
    sendSwapRequest(requestedBook, offerredBook);
  };

  return (
    <>
      <h1>{offerredBook?.title}</h1>
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
          offerredBook={offerredBook}
          setOfferredBook={setOfferredBook}
          submitSwapRequest={submitSwapRequest}
        />
      )}
    </>
  );
}
