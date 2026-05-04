// components/BlogCard.jsx
import Link from "next/link";
import LikeButton from "./LikeButton";

export default function BlogCard({ post }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "10px",
      }}
    >
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 80)}...</p>

      <Link href={`/blog/${post.id}`}>
        <button>Read More</button>
      </Link>

      <div style={{ marginTop: "10px" }}>
        <LikeButton />
      </div>
    </div>
  );
}
