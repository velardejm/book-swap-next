"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ label, formInput }) {
  const { pending } = useFormStatus();
  const { username, password } = formInput;

  return (
    <button
      className="btn btn-secondary block mx-auto mt-8 px-8"
      disabled={!(username && password) || pending}
      type="submit"
    >
      {label}
    </button>
  );
}
