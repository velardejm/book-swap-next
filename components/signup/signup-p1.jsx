"use client";

import { signup1 } from "@/lib/actions";
import Link from "next/link";
import Alert from "../common/alert";
import { useState } from "react";
import SubmitButton from "../common/submit-button";
import { updateForm, validateEmail } from "@/utils/helpers";
import { TextInput, EmailInputFocused } from "../common/form/form-input";

export default function SignupP1({ setPage, formData, setFormData }) {
  const { username, email, name } = formData;
  const [error, setError] = useState(null);

  const handleSubmit = async (formInput) => {
    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    }
    const availabilityStatus = await signup1(formInput);
    const { emailExists, usernameExists } = availabilityStatus;
    if (emailExists || usernameExists) {
      setError("Username or email already taken");
    } else {
      setPage(2);
    }
  };

  const usernameIcon = {
    src: "username-icon.svg",
    alt: "username icon",
  };

  return (
    <>
      <form className="mt-4 w-72 self-center" action={handleSubmit}>
        <EmailInputFocused
          value={email}
          handleInput={(e) => updateForm(e, setFormData)}
        />

        <TextInput
          name="username"
          placeholder="Username"
          value={username}
          inputIcon={usernameIcon}
          handleInput={(e) => updateForm(e, setFormData)}
        />

        <TextInput
          name="name"
          placeholder="Name"
          value={name}
          // inputIcon={nameIcon}
          handleInput={(e) => updateForm(e, setFormData)}
        />

        <SubmitButton
          label={"Next"}
          twclasses="btn btn-sm btn-outline w-24 self-end mt-6"
          type="submit"
        />

        <Link href="/signup/p2">To Page 2</Link>
      </form>
      {error && <Alert message={error} />}
    </>
  );
}
