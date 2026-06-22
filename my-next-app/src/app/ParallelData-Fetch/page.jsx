async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

async function getAllData() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    "https://jsonplaceholder.typicode.com/comments?_limit=5",
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
  ];

  return Promise.all(urls.map((url) => fetchData(url)));
}

export default async function Page() {
  const [posts, comments, todos] = await getAllData();

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Parallel Data Fetch</h1>
      <section>
        <h2>Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
