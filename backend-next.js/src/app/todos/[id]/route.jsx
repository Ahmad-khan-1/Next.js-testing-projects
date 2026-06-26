import todos from "../../../../todos.json";
import { writeFile } from "node:fs/promises";

//? GET Request
export async function GET(_, { params }) {
  const { id } = await params;
  console.log("running get route handler");
  const todo = todos.find((todo) => id === todo.id.toString());

  if (!todo) {
    return Response.json(
      { error: "todo not found" },
      {
        status: 404,
      },
    );
  }
  return Response.json(todo);
}

//!PUT Request
export async function PUT(request, { params }) {
  const editTodoData = await request.json();
  const { id } = await params;
  const todoIndex = todos.findIndex((todo) => id === todo.id.toString());

  if (todoIndex === -1) {
    return Response.json(
      { error: "todo not found" },
      {
        status: 404,
      },
    );
  }

  const todo = todos[todoIndex];

  const editedTodo = { ...todo, ...editTodoData };

  todos[todoIndex] = editedTodo;
  await writeFile("todos.json", JSON.stringify(todos, null, 3));
  return Response.json(editedTodo);
}

//! Common Next.js PUT Route Syntax

// export async function PUT(request, { params }) {
//   // 1. Get the resource ID
//   const { id } = await params;

//   // 2. Read updated data from the request body
//   const updatedData = await request.json();

//   // 3. Find the existing record
//   // const record = ...

//   // 4. Update the record
//   // ...

//   // 5. Save changes
//   // ...

//   // 6. Return the updated record
//   return Response.json({
//     message: "Record updated successfully",
//   });
// }
//

//! DELETE Request
export async function DELETE(_, { params }) {
  const { id } = await params;

  const todoIndex = todos.findIndex((todo) => id === todo.id.toString());

  if (todoIndex === -1) {
    return Response.json({ error: "Todo not found" }, { status: 404 });
  }

  todos.splice(todoIndex, 1);

  await writeFile("todos.json", JSON.stringify(todos, null, 3));

  return new Response(null, {
    status: 204,
  });
}
