async function getPost(slug) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`);
  return res.json();
}
export default async function BlogPost({ params }) {
  try {
    const post = await getPost(params.slug);
    if (!post || !post.name) {
      return (
        <div className="p-4 border rounded text-red-500">
          No post found for slug: {params.slug}
        </div>
      );
    }
    return (
      <div className="p-4 border rounded">
        <h2 className="text-xl font-bold mb-2">{post.name}</h2>
        <p>{post.email}</p>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-4 border rounded text-red-500">
        Error loading post: {String(error)}
      </div>
    );
  }
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();

  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}
