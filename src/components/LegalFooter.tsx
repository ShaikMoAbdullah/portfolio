export function LegalFooter() {
  return (
    <footer className="border-t border-edge px-6 py-8 print:hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Shaik Mohammad Abdullah</p>
        <p>B.Tech, Computer Science · REVA University</p>
        <p className="text-faint">
          <kbd className="font-sans">⌘K</kbd> to search
        </p>
      </div>
    </footer>
  );
}
