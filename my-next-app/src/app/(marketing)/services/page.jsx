import Link from "next/link";

export const metadata = {
  title: "Services",
};
export default function MyServices() {
  return (
    <div>
      <h1>My New Services</h1>
      <p>
        <Link href="/services/web-dev">Web Develop</Link>
      </p>
      <p>
        <Link href="/services/seo">SEO</Link>
      </p>
    </div>
  );
}
