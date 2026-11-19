"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { caseStudies, navLinks, profile } from "@/data/site";
import { useTheme } from "./ThemeProvider";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (!notice) return;
    const id = window.setTimeout(() => setNotice(""), 1800);
    return () => window.clearTimeout(id);
  }, [notice]);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setNotice("Email copied");
    } catch {
      setNotice(profile.email);
    }
    setOpen(false);
  }

  return (
    <>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Site menu"
        vimBindings={false}
        overlayClassName="fixed inset-0 z-[80] bg-foreground/30 backdrop-blur-[2px]"
        contentClassName="fixed left-1/2 top-[18vh] z-[81] w-[min(36rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-edge bg-surface text-foreground shadow-2xl"
      >
        <Command.Input placeholder="Jump to a section, a case study, or an action" />
        <Command.List>
          <Command.Empty>Nothing matches.</Command.Empty>
          <Command.Group heading="Go">
            {navLinks.map((link) => (
              <Command.Item key={link.id} value={`go ${link.label}`} onSelect={() => go(link.href)}>
                {link.label}
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Work">
            {caseStudies.map((study) => (
              <Command.Item
                key={study.slug}
                value={`work ${study.name} ${study.org}`}
                onSelect={() => go(`/work/${study.slug}`)}
              >
                <span>{study.name}</span>
                <span className="text-sm text-muted">{study.metric.value}</span>
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Actions">
            <Command.Item value="copy email" onSelect={() => void copyEmail()}>
              Copy email
            </Command.Item>
            <Command.Item
              value="whatsapp message"
              onSelect={() => {
                setOpen(false);
                window.open(profile.whatsapp, "_blank", "noopener,noreferrer");
              }}
            >
              WhatsApp
            </Command.Item>
            <Command.Item
              value="download resume"
              onSelect={() => {
                setOpen(false);
                window.open(profile.resume, "_blank", "noopener,noreferrer");
              }}
            >
              Resume
            </Command.Item>
            <Command.Item
              value="toggle theme color mode"
              onSelect={() => {
                toggleTheme();
                setOpen(false);
              }}
            >
              Switch to {theme === "light" ? "dark" : "light"}
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
      {notice && (
        <p
          role="status"
          className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-full border border-edge bg-surface px-4 py-2 text-sm shadow-lg"
        >
          {notice}
        </p>
      )}
    </>
  );
}
