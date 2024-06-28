"use client";

import { useEffect, useState } from "react";

import SignupP1 from "@/components/signup/signup-p1";
import SignupP2 from "@/components/signup/signup-p2";

export default function SignupPage1() {
  const [formData, setFormData] = useState({ email: "", username: "", name: "" });
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="modal-box flex flex-col">
          <h3 className="font-bold text-lg mb-8">Sign Up</h3>

          {page === 1 ? (
            <SignupP1 {...{ setPage, formData, setFormData }} />
          ) : (
            <SignupP2 setPage={setPage} formData={formData} />
          )}
        </div>
      </div>
    </>
  );
}
