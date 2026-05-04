// components/BlogList.jsx
import { getPosts } from "@/lib/api";
import BlogCard from "./BlogCard";

export default async function BlogList() {
  const posts = await getPosts();

  return (
    <div style={{ display: "grid", gap: "20px" }}>
      {posts.slice(0, 6).map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
