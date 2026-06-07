import Link from "next/link";

export default function ProductsIndex() {
  return (
    <div>
      <h1>Products</h1>
      <p>Open a product to view a dummy post fetched from jsonplaceholder:</p>
      <ul>
        <li>
          <Link href="/products/1">Product 1</Link>
        </li>
        <li>
          <Link href="/products/2">Product 2</Link>
        </li>
        <li>
          <Link href="/products/3">Product 3</Link>
        </li>
      </ul>
    </div>
  );
}
