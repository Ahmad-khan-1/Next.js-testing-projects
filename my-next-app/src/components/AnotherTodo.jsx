export default async function AnotherTodo() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_start=5&_limit=5",
    { next: { revalidate: 60 } },
  );

  const todos = await res.json();

  return (
    <div className="todo-container">
      <h2>More Todos</h2>

      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <input type="checkbox" checked={todo.completed} readOnly />
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
}
