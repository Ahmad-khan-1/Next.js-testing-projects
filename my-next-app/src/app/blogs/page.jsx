import Link from "next/link";

const blogs = [
  { slug: "1", title: "Next.js Basic" },
  { slug: "2", title: "React.js Basic" },
  { slug: "3", title: "Node Basic" },
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
