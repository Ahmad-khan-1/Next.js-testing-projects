"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  const router = useRouter();

  function handleRetry() {
    reset();
  }

  return (
    <div>
      <h1>Something went wrong In Client Side</h1>
      <p>{error.message}</p>

      <button onClick={handleRetry}>Try Again</button>
    </div>
  );
}
