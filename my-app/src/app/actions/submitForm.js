"use server";

import { usersDB } from "../db";

export async function submitForm(prevState, formData) {
  // 👇 form se data lena
  const name = formData.get("name");

  // 👇 delay (loading dikhane ke liye)
  await new Promise((res) => setTimeout(res, 2000));

  // 👇 DB me save
  usersDB.push({ name });

  // 👇 response return
  return {
    message: `Your form is submitted, ${name}`,
  };
}
