"use client";
import { useState, useEffect } from "react";
import { updateBook } from "@/lib/actions";
import { updateForm } from "@/utils/helpers";

import { TextInputFocused } from "../common/form/form-input";

export default function EditBook({ selectedBook, setIsEditOpen }) {
  const [updatedBook, setUpdatedBook] = useState({
    title: selectedBook.title,
    author: selectedBook.author,
    genre: selectedBook.genre,
    condition: selectedBook.condition,
    id: selectedBook.id,
  });
  const { title, author, genre, condition, id } = updatedBook;
  const updateBookWithId = updateBook.bind(null, selectedBook.id);

  useEffect(() => {
    setUpdatedBook({
      title: selectedBook.title,
      id: selectedBook.id,
      genre: selectedBook.genre,
      condition: selectedBook.condition,
    });
  }, [selectedBook]);

  const handleSubmit = async (id, formData) => {
    const updateActionResult = await updateBookWithId(id, formData);
    if (updateActionResult) {
      setIsEditOpen(false);
    }
  };

  return (
    <>
      <form action={handleSubmit}>
        <td>
          <TextInputFocused
            name="title"
            value={title}
            handleInput={(e) => updateForm(e, setUpdatedBook)}
          />
        </td>
        <td>
          <TextInputFocused
            name="author"
            value={author}
            handleInput={(e) => updateForm(e, setUpdatedBook)}
          />
        </td>
        <td>
          <TextInputFocused
            name="genre"
            value={genre}
            handleInput={(e) => updateForm(e, setUpdatedBook)}
          />
        </td>
        <td>
          <TextInputFocused
            name="condition"
            value={condition}
            handleInput={(e) => updateForm(e, setUpdatedBook)}
          />
        </td>
        <td></td>
        <td></td>

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
