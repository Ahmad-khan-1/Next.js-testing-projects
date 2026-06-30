import { connectDB } from "@/lib/db";
import Todo from "@/models/todoModel";
import { cookies } from "next/headers";

export async function GET() {
  await connectDB();

  const allTodos = await Todo.find();
  const todos = allTodos.map((todo) => ({
    id: todo._id.toString(),
    text: todo.text,
    completed: todo.completed,
  }));

  return Response.json(todos, {
    headers: {
      "Set-Cookie": "userId=1234;path=/;httpOnly",
    },
  });
}

export async function POST(request) {
  await connectDB();

  const todo = await request.json();

  const { id, text, completed } = await Todo.create({
    text: todo.text,
  });

  return Response.json(
    {
      id,
      text,
      completed,
    },
    {
      status: 201,
    },
  );
}
