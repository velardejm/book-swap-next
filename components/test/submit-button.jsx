"use client";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className="btn" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
