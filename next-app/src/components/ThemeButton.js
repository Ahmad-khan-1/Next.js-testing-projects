"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/theme-provider";

export default function ThemeButton() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 16px",
        border: "1px solid #ccc",
        borderRadius: "999px",
        cursor: "pointer",
        background: dark ? "#111827" : "#f9fafb",
        color: dark ? "#f9fafb" : "#111827",
      }}
    >
      {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
