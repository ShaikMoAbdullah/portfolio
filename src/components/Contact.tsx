"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04 — Contact"
          id="contact-heading"
          title="Tell me about the product."
          lede="Email and WhatsApp are the fastest way to reach me."
        />
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm text-foreground ring-1 ring-edge transition-colors hover:bg-surface"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy email"}
          </button>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm text-foreground ring-1 ring-edge transition-colors hover:bg-surface"
          >
            WhatsApp · {profile.phoneDisplay}
          </a>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <li>
            <a className="hover:text-foreground" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={profile.x} target="_blank" rel="noopener noreferrer">
              X
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={profile.resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
        <p className="sr-only" role="status">
          {copied ? "Email copied." : ""}
        </p>
      </div>
    </section>
  );
}
