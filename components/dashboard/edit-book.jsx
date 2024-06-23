"use client";
import { useState, useEffect } from "react";

import { updateBook } from "@/lib/actions";

export default function EditBook({ selectedBook, closeEdit }) {
  const { title, id } = selectedBook;
  const [bookTitle, setBookTitle] = useState(title);
  const updateBookWithId = updateBook.bind(null, id);

  useEffect(() => {
    setBookTitle(selectedBook.title);
  }, [selectedBook]);

  const handleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const handleSubmit = async (id, formData) => {
    const updateActionResult = await updateBookWithId(id, formData);
    if (updateActionResult) {
      closeEdit();
    }
  };

  return (
    <>
      <form action={handleSubmit}>
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
        <button
          className="btn btn-secondary block mx-auto mt-8 px-8"
          type="submit"
        >
          Update
        </button>
      </form>
    </>
  );
}
