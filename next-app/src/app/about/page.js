"use client";

import { useState } from "react";

export default function About() {
  const [fruits, setFruits] = useState(["Mango", "Banana", "Apple"]);
  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-bold">About us</h1>
      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => {
          setFruits(null);
        }}
      >
        Click me
      </button>
      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
}
