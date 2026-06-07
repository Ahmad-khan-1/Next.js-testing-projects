import Link from "next/link";

const blogs = [
  { slug: "next.js", title: "Next.js Basic" },
  { slug: "react.js", title: "React.js Basic" },
  { slug: "node", title: "Node Basic" },
];

export default function BlogPost() {
  return (
    <div>
      <h1>BlogPost</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
