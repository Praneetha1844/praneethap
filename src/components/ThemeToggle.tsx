"use client";

import { useEffect, useState } from "react";
import { applyTheme, readTheme, type Theme } from "@/lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  function toggle() {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === "dark"}
      className="rounded-sm border border-rule px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <span className="sr-only">Dark theme</span>
      <span aria-hidden="true">{theme === "dark" ? "● dark" : "○ light"}</span>
    </button>
  );
}
