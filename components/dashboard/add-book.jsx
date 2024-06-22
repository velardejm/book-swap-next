"use client";

import { addBook } from "@/lib/actions";

export default function AddBook() {
  return (
    <button
      onClick={() => {
        alert("Test");
        addBook();
      }}
    >
      Add Book
    </button>
  );
}
