"use client"; // ⚠️ client component

import { useActionState } from "react";
import { submitForm } from "./actions/submitForm";

export default function Home() {
  // 👇 hook setup
  const [state, formAction, isPending] = useActionState(submitForm, {
    message: "",
  });

  return (
    <div style={{ padding: "40px" }}>
      <h1>Simple Form</h1>

      {/* 👇 form directly server action se connect */}
      <form action={formAction}>
        <input type="text" name="name" placeholder="Enter your name" required />

        <br />
        <br />

        <button type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>

      <div style={{ marginTop: "40px" }}>
        <a href="/gender" style={{ color: "blue", textDecoration: "underline" }}>
          👉 Go to Gender Predictor App
        </a>
      </div>

      <br />
      
      {/* 👇 result show */}
      {state.message && <p>{state.message}</p>}
    </div>
  );
}
