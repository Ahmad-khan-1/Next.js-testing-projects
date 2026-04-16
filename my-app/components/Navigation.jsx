import Link from "next/link";

const Navigation = () => {
  return (
    <header className="bg-gray-800 text-white p-3">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/server-comp">server-comp</Link>
          </li>
          <li>
            <Link href="/client-comp">client-comp</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
