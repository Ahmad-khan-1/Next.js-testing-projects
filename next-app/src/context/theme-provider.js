"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setDark(shouldBeDark);
    document.body.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    setDark((prevDark) => {
      const nextDark = !prevDark;
      document.body.classList.toggle("dark", nextDark);
      localStorage.setItem("theme", nextDark ? "dark" : "light");
      return nextDark;
    });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
