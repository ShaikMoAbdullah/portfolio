export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="absolute left-4 top-4 z-[100] -translate-y-16 rounded-md bg-accent-strong px-4 py-2 text-sm font-semibold text-accent-contrast opacity-0 transition focus:translate-y-0 focus:opacity-100 focus:outline-none print:hidden"
    >
      Skip to main content
    </a>
  );
}
