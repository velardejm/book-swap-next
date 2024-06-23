"use server";

import { redirect } from "next/navigation";
import { login } from "./auth";
import { revalidateTag } from "next/cache";

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

  await new Promise((resolve) => setTimeout(resolve, 1000));

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
      redirect("/dashboard");
    }
    return responseMessage.message;
  }
}

export async function signup1(formInput) {
  const response = await fetch("http://localhost:3001/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: formInput.get("username"),
      email: formInput.get("email"),
    }),
  });

  const availabilityStatus = await response.json();
  return availabilityStatus;
}

export async function signup2(formData, formInput) {
  const password = formInput.get("password");
  const passwordVerification = formInput.get("password-verification");

  if (password === passwordVerification) {
    // signup logic
    return true;
  } else {
    return false;
  }
}

export async function updateBook(id, formData) {
  const newTitle = await formData.get("title");
  console.log(id);
  // console.log(newTitle);
  // console.log("Add book action");

  const requestData = {
    id: id,
    title: newTitle
  }

  const response = await fetch("http://localhost:3001/updatebook", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  const responseData = await response.json();

  if (responseData) {
    revalidateTag("mybooks");
    return true;
  }

  // const responseData = await response.json();
  // console.log(responseData);
  // revalidateTag("mybooks");
}
