import todos from "../../../../todos.json";
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
