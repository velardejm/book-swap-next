"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton2({ label }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="btn btn-secondary block mx-auto mt-8 px-8"
      disabled={pending}
      type="submit"
    >
      {label}
    </button>
  );
}
