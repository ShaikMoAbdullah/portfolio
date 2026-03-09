"use client";

export function SkipToContent() {
  return (
    <a
      href="#about"
      className="absolute left-4 top-4 z-[100] -translate-y-16 rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white opacity-0 transition focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-stone-950 print:hidden"
    >
      Skip to main content
    </a>
  );
}
