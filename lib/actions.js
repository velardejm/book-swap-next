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
  const user = { username: formData.get("username") };
  // console.log(user);
  login(user);
  redirect("/books");
}
