import todoData from "../../../todos.json";
export function GET() {
  console.log("running get route handler");

  return Response.json({ todoData });
  //   return new Response(
  //     JSON.stringify(data),
  //     {
  //         headers: {
  //             "Content-Type": "application/json"
  //         }
  //     }
  // );
}
