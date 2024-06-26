"use client";

import { handleLogin } from "@/lib/actions";
import { useState } from "react";
import { useFormStatus } from "react-dom";

import Alert from "../common/alert";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="btn btn-secondary block mx-auto mt-8 px-8"
      disabled={pending}
      type="submit"
    >
      Log In
    </button>
  );
};

export default function LoginModal() {
  const [errorMessage, setErrorMessage] = useState(null);

  const loginAction = async (formData) => {
    const response = await handleLogin(formData);
    // const responseData = await response;
    setErrorMessage(response);
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Log In</h3>

          {/* Log In Form */}
          <form className="mt-8 w-72 self-center" action={loginAction}>
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
                autoFocus="true"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
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
              />
            </label>
            <SubmitButton />
          </form>
          {errorMessage && <Alert message={errorMessage} />}
        </div>
      </dialog>
    </>
  );
}
