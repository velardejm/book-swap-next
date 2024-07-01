"use client";

import { handleLogin } from "@/lib/actions";
import { useState } from "react";

import Alert from "../common/alert";
import { PasswordInput, TextInputFocused } from "../common/form/form-input";
import SubmitButton from "../common/form/form-submit";

import { updateForm } from "@/utils/helpers";

export default function LoginModal() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [formInput, setFormInput] = useState({
    username: null,
    password: null,
  });
  const { username, password } = formInput;

  const loginAction = async (formData) => {
    const response = await handleLogin(formData);
    setErrorMessage(response);
  };

  const usernameIcon = {
    src: "username-icon.svg",
    alt: "username icon",
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
            <TextInputFocused
              name="username"
              placeholder="Username"
              value={username}
              inputIcon={usernameIcon}
              handleInput={(e) => updateForm(e, setFormInput)}
            />
            <PasswordInput value={password} handleInput={(e) => updateForm(e, setFormInput)} />
            <SubmitButton label="Log In" formInput={formInput} />
          </form>
          {errorMessage && <Alert message={errorMessage} />}
        </div>
      </dialog>
    </>
  );
}
