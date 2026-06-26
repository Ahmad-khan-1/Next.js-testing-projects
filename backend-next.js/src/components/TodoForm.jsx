"use client";

import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Add a todo"
        className="flex-1 rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}
