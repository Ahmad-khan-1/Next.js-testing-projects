"use client";

import { useState, useEffect } from "react";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    if (!response.ok) {
      console.error("Failed to fetch todos", response.statusText);
      return;
    }

    const todosData = await response.json();
    setTodos(Array.isArray(todosData) ? todosData : (todosData.todos ?? []));
  };

  // Add new todo
  const addTodo = async (text) => {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      console.error(await response.text());
      return;
    }

    const newTodo = await response.json();
    setTodos([newTodo, ...todos]);
  };

  // Delete todo
  const deleteTodo = async (id) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });

    if (response.status === 204) {
      fetchTodos();
    }
  };

  // Toggle todo completion
  const toggleTodo = async (id) => {
    const todo = todos.find((todo) => todo.id === id);

    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !todo.completed }),
    });

    if (response.status === 200) {
      fetchTodos();
    }
  };

  // Update todo text
  const updateTodo = async (id, newtext) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newtext }),
    });

    if (response.status === 200) {
      fetchTodos();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-lg">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Todo App
          </h1>
          <ThemeToggle />
        </header>

        <TodoForm addTodo={addTodo} />

        <main className="mt-6">
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        </main>
      </div>
    </div>
  );
}
