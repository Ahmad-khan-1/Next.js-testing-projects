async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function Blog() {
  const posts = await getPost();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded mb-2">
          <h3 className="text-lg font-semibold">{post.title}</h3>
        </div>
      ))}
    </div>
  );
}
