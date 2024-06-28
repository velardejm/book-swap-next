"use client";

import { signup1 } from "@/lib/actions";
import Link from "next/link";

import Alert from "../common/alert";
import { useState } from "react";

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
      setError("Username or email already taken")
    } else {
      setPage(2);
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
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInput}
            autoFocus="true"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleInput}
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
          />
        </label>

        <button
          className="btn btn-sm btn-outline w-24 self-end mt-6"
          type="submit"
          onClick={() => {
            //   alert("test");
            // setPage(2);
          }}
          disabled={username && email && name ? false : true}
        >
          Next
        </button>

        <Link href="/signup/p2">To Page 2</Link>
      </form>
      {error && <Alert message={error} />}
    </>
  );
}
