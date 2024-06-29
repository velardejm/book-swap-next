"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ label, ...args }) {
  const { pending } = useFormStatus();
  const { twclasses, type, isDisabled } = args;

  return (
    <button
      // className="btn btn-secondary block mx-auto mt-8 px-8"
      className={twclasses}
      disabled={pending}
      type={type}
    >
      {label}
    </button>
  );
}
