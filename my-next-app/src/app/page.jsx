import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>My Home Page </h1>
      <h2>All Sevices</h2>
      <p>
        <Link href="/services">Services</Link>
      </p>
      <p>
        <Link href="/services/web-dev">Web Develop</Link>
      </p>
      <p>
        <Link href="/services/seo">SEO</Link>
      </p>
    </>
  );
}

// console.log(localStorage);
