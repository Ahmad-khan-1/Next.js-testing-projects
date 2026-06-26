"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const icon = mounted ? (
    resolvedTheme === "dark" ? (
      <SunIcon className="h-5 w-5" />
    ) : (
      <MoonIcon className="h-5 w-5" />
    )
  ) : (
    <span className="inline-block h-5 w-5" />
  );

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-slate-100 text-slate-900 shadow-sm transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
      aria-label="Toggle theme"
    >
      {icon}
    </button>
  );
}
