"use server";

import { connectDB } from "@/lib/db";
import Contact from "@/models/contactModel";
import { redirect } from "next/navigation";

export const contactAction = async (fullName, email, message) => {
  try {
    await connectDB();

    const newContact = new Contact({
      fullName,
      email,
      message,
    });

    await newContact.save();

    return { success: true, message: "form submitted successfully" };
  } catch (error) {
    if (error.message === "NEXT_REDIRECT") throw error;
    console.error("Contact form error:", error);
    return { success: false, message: "error while submitting" };
  }
};
