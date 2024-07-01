"use client";

import { useState } from "react";
import { TextInputFocused, TextInput } from "../common/form/form-input";
import SubmitButton2 from "../common/form/form-submit-2";

import { updateForm } from "@/utils/helpers";

export default function AddBook({ setIsAddBookOpen }) {
  const [formInput, setFormInput] = useState({
    title: "",
    author: "",
    genre: "",
    condition: "",
  });
  const { title, author, genre, condition } = formInput;

  const handleSubmit = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => setIsAddBookOpen(false)}
        >
          ✕
        </button>
        <h3 className="text-lg font-bold">Add Book</h3>
        <div className="flex flex-cold justify-center">
          <form className="mt-8 w-72 self-center" action={handleSubmit}>
            <TextInputFocused
              name="title"
              placeholder="Title"
              value={title}
              handleInput={(e) => updateForm(e, setFormInput)}
            />

            <TextInput
              name="author"
              placeholder="Author"
              value={author}
              handleInput={(e) => updateForm(e, setFormInput)}
            />

            <TextInput
              name="genre"
              placeholder="Genre"
              value={genre}
              handleInput={(e) => updateForm(e, setFormInput)}
            />

            <TextInput
              name="condition"
              placeholder="Condition"
              value={condition}
              handleInput={(e) => updateForm(e, setFormInput)}
            />

            <div className="modal-action">
              <SubmitButton2 label="Add Book" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
