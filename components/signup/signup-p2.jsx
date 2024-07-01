"use client";

import { signup2 } from "@/lib/actions";
import Alert from "../common/alert";
import { useState } from "react";
import SubmitButton from "../common/submit-button";
import {
  PasswordInputFocused,
  PasswordInputVerification,
} from "../common/form/form-input";

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
        <PasswordInputFocused />
        <PasswordInputVerification />

        <div className="flex justify-between mt-6">
          <button
            className="btn btn-sm btn-ghosts w-24 self-end"
            onClick={() => setPage(1)}
            type="button"
          >
            Back
          </button>

          <SubmitButton
            label={"Sign Up"}
            twclasses="btn btn-sm btn-secondary w-24 self-end"
            type="submit"
          />
        </div>
      </form>
      {error && <Alert message={error} />}
    </>
  );
}

{
  /* <button
            className="btn btn-sm btn-secondary w-24 self-end"
            // onClick={() => setPage(2)}
            type="submit"
          >
            Sign Up
          </button> */
}
