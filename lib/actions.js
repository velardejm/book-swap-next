"use server";

import { redirect } from "next/navigation";
import { login } from "./auth";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

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
  // await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch("http://localhost:8000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formInput),
    cache: "no-store",
  });
  const responseData = await response.json();
  if (responseData.status === 200) {
    login({ userId: responseData.data });
    redirect("/dashboard");
  } else {
    return responseData.message;
  }
}

export async function signup1(formInput) {

  const response = await fetch("http://localhost:8000/api/auth/signup/p1", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: formInput.get("username"),
      email: formInput.get("email"),
    }),
  });
  return await response.json();
}

export async function signup2(page1Data, page2Data) {
  const password = page2Data.get("password");
  const passwordVerification = page2Data.get("password-verification");
  const { username, email, name } = page1Data;
  if (password === passwordVerification) {
    const signupData = { name, username, email, password };

    const response = await fetch("http://localhost:8000/api/auth/signup/p2", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signupData),
    });
    const { success, message, hashedPassword } = await response.json();
    if (success) {
      login({
        username: username,
        password: hashedPassword,
      });
      redirect("/dashboard");
    }
  } else {
    return false;
  }
}

export async function addBook(formData) {
  const session = cookies().get("session")?.value;
  const newTitle = await formData.get("title");
  const newAuthor = await formData.get("author");
  const newGenre = await formData.get("genre");
  const newCondition = await formData.get("condition");
  const requestData = {
    title: newTitle,
    author: newAuthor,
    genre: newGenre,
    condition: newCondition
  };

  const response = await fetch("http://localhost:8000/api/dashboard/mybooks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${session}`
    },
    body: JSON.stringify(requestData),
  });
  const responseData = await response.json();
  if (responseData) {
    revalidateTag("mybooks");
    return true;
  }
}


export async function updateBook(id, formData) {
  const session = cookies().get("session")?.value;
  const newTitle = await formData.get("title");
  const newAuthor = await formData.get("author");
  const newGenre = await formData.get("genre");
  const newCondition = await formData.get("condition");
  const requestData = {
    id: id,
    title: newTitle,
    author: newAuthor,
    genre: newGenre,
    condition: newCondition
  };

  const response = await fetch("http://localhost:8000/api/dashboard/mybooks", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${session}`
    },
    body: JSON.stringify(requestData),
  });
  const responseData = await response.json();
  if (responseData) {
    revalidateTag("mybooks");
    return true;
  }
}
