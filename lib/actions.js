"use server";

import { redirect } from "next/navigation";
import { login } from "./lib";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function handleSubmit(prevState, anyFormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = { test: anyFormData.get("test") };
  if (isInvalidText(anyFormData.get("test"))) {
    return { message: "Invalid Input" };
  }
  return { message: "Ok" };
}

export async function handleLogin(formData) {
  const formInput = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formInput),
  });

  if (response) {
    const responseMessage = await response.json();
    if (response.status === 200) {
      login(formInput);
      redirect("/books");
    }
    return responseMessage.message;
  }
}

export async function signup(formData) {
  const formInput = {
    username: formData.get("username"),
    email: formData.get("email"),
  };

  await fetch("http://localhost:3001/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formInput),
  });
}
