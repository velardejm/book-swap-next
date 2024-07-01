"use client";

import { signup1 } from "@/lib/actions";
import Link from "next/link";
import Alert from "../common/alert";
import { useState } from "react";
import SubmitButton from "../common/submit-button";

export default function SignupP1({ setPage, formData, setFormData }) {
  const { username, email, name } = formData;
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    setFormData((prev) => {
      const { name, value } = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
    // console.log(signUpDetails);
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (formInput) => {
    if (!validateEmail()) {
      // alert("Invalid e-mail");
      setError("Invalid email");
      return;
    }
    const availabilityStatus = await signup1(formInput);
    const { emailExists, usernameExists } = availabilityStatus;
    if (emailExists || usernameExists) {
      // alert("Username or email already taken.");
      setError("Username or email already taken");
    } else {
      setPage(2);
    }
  };

  return (
    <>
      <form className="mt-4 w-72 self-center" action={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 mt-4 mb-4">
          <img
            src="email-icon.svg"
            alt="Email Icon"
            className="w-4 h-4 opacity-70"
          />
          <input
            type="text"
            className="grow"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInput}
            autoFocus="true"
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <img
            src="username-icon.svg"
            alt="Username Icon"
            className="w-4 h-4 opacity-70"
          />
          <input
            type="text"
            className="grow"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleInput}
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-8">
          <input
            type="text"
            className="grow"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleInput}
            required
          />
        </label>
        {/* <button
          className="btn btn-sm btn-outline w-24 self-end mt-6"
          type="submit"
          onClick={() => {
            //   alert("test");
            // setPage(2);
          }}
          disabled={username && email && name ? false : true}
        >
          Next
        </button> */}

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
