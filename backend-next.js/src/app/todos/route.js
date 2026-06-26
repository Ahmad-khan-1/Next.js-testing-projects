import todos from "../../../todos.json";
import { writeFile } from "node:fs/promises";

//? GET request

export function GET() {
  console.log("running get route handler");

  return Response.json({ todos });
  //   return new Response(
  //     JSON.stringify(data),
  //     {
  //         headers: {
  //             "Content-Type": "application/json"
  //         }
  //     }
  // );
}

//!POST Request

export async function POST(request) {
  const todo = await request.json();
  const newTodo = {
    id: crypto.randomUUID(),
    text: todo.text,
    completed: false,
  };

  todos.push(newTodo);
  await writeFile("todos.json", JSON.stringify(todos, null, 3));
  return Response.json(newTodo, {
    status: 201,
  });
}
