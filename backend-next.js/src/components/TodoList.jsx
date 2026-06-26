"use client";

import { useState } from "react";

export default function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
  updateTodo,
}) {
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const saveEdit = (id) => {
    const trimmed = editingText.trim();
    if (trimmed) {
      updateTodo(id, trimmed);
    }
    setEditingId(null);
    setEditingText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="space-y-4">
      {todos.length === 0 ? (
        <p className="text-center text-slate-500">No todos yet.</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="h-5 w-5 rounded border-slate-300 text-blue-600"
                />
                {editingId === todo.id ? (
                  <input
                    value={editingText}
                    onChange={(event) => setEditingText(event.target.value)}
                    className="flex-1 rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <span
                    className={
                      todo.completed
                        ? "line-through text-slate-400"
                        : "text-slate-900"
                    }
                  >
                    {todo.text}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {editingId === todo.id ? (
                  <>
                    <button
                      type="button"
                      onClick={() => saveEdit(todo.id)}
                      className="rounded-md border border-blue-600 bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="rounded-md border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => startEdit(todo)}
                      className="rounded-md border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-100"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteTodo(todo.id)}
                      className="rounded-md bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
