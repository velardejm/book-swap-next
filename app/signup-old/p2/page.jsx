"use client";

import { useSignupContext } from "@/context";

export default function SignupPage2() {
  const { signUpDetails, setSignUpDetails } = useSignupContext();
  const { username, email } = signUpDetails;

  return (
    <>
      <h1>Page 2</h1>
      <p>{email}</p>
      <p>{username}</p>
    </>
  );
}
