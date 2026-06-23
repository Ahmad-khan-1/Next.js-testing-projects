"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  const router = useRouter();

  function handleRetry() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>

      <button onClick={handleRetry}>Try Again</button>
    </div>
  );
}
