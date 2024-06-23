"use client";
import { useState } from "react";

import { addBook } from "@/lib/actions";

const SubmitButton = () => {
  return (
    <button className="btn btn-secondary block mx-auto mt-8 px-8" type="submit">
      Log In
    </button>
  );
};

export default function EditBook({ selectedBook }) {
  const { title, id } = selectedBook;
  const [bookTitle, setBookTitle] = useState(title);

  const addBookWithId = addBook.bind(null, id)

  const handleChange = (e) => {
    setBookTitle(e.target.value);
  };

  return (
    <>
      <form action={addBookWithId}>
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input
            type="text"
            className="grow"
            placeholder="Username"
            name="title"
            autoFocus="true"
            value={bookTitle}
            onChange={handleChange}
          />
        </label>
        <SubmitButton />
      </form>
    </>
  );
}
