"use server";

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
