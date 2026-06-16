export default async function SuspenseBlog() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  );

  const todos = await res.json();

  return (
    <div className="todo-container">
      <h1>Todos</h1>

      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <input type="checkbox" checked={todo.completed} readOnly />
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
}
