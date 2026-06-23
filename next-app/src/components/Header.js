"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blogs" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        background: "#111827",
        color: "#f9fafb",
        padding: "12px 24px",
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: 700,
          }}
        >
          My Next App
        </Link>

        <nav style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 600,
                  color: active ? "#a5b4fc" : "#e5e7eb",
                  background: active ? "rgba(99, 102, 241, 0.16)" : "transparent",
                  border: active ? "1px solid rgba(99, 102, 241, 0.4)" : "1px solid transparent",
                  transition: "all 150ms ease",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <ThemeButton />
      </div>
    </header>
  );
}
