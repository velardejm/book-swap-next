"use client";

import { signup2 } from "@/lib/actions";
import Alert from "../common/alert";
import { useState } from "react";

export default function SignupP2({ setPage, formData }) {
  const signupWithP1Data = signup2.bind(null, formData);
  const [error, setError] = useState(null);

  const handleSubmit = async (page1Data, page2Data) => {
    const isSignupSuccessful = await signupWithP1Data(page1Data, page2Data);
    if (isSignupSuccessful) {
      alert("Signed up successfully");
      // redirect to dashboard
    } else {
      setError("Passwords doesn't match");
    }
  };

  return (
    <>
      <form className="mt-4 w-72 self-center" action={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 mt-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            name="password"
            autoFocus="true"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Verify Password"
            name="password-verification"
          />
        </label>

        <div className="flex justify-between mt-6">
          <button
            className="btn btn-sm btn-ghosts w-24 self-end"
            onClick={() => setPage(1)}
            type="button"
          >
            Back
          </button>

          <button
            className="btn btn-sm btn-secondary w-24 self-end"
            // onClick={() => setPage(2)}
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
      {error && <Alert message={error} />}
    </>
  );
}
