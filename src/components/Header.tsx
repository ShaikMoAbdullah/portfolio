"use client";

import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, profile } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection();
  const pathname = usePathname();
  const current = pathname.startsWith("/work") ? "work" : activeId;

  return (
    <header className="sticky top-0 z-50 border-b border-edge/80 bg-page/80 backdrop-blur-md print:hidden">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5"
        aria-label="Main navigation"
      >
        <Link href="/#about" className="font-serif text-2xl tracking-tight text-foreground">
          Abdullah
        </Link>
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = current === link.id;
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-sm transition-colors ${
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-palette"))}
            className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
            aria-label="Open search. Command K or Control K."
          >
            <Search className="h-4 w-4" />
            <kbd className="hidden font-sans text-xs text-faint sm:inline">⌘K</kbd>
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-3 py-2 text-sm text-foreground transition-colors hover:bg-surface-2 sm:inline"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <ul className="border-t border-edge px-6 py-3 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-sm text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2.5 text-sm text-foreground"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
