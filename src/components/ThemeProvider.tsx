"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { MotionConfig } from "framer-motion";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

function applyTheme(theme: Theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
  listeners.forEach((listener) => listener());
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => applyTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
