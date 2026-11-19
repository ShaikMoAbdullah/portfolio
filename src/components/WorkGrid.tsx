"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { MouseEvent } from "react";
import { caseStudies, type CaseStudy } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

function spot(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
}

function Card({ study }: { study: CaseStudy }) {
  const wide = study.featured || study.founder;

  return (
    <article
      onMouseMove={spot}
      className={`group relative overflow-hidden rounded-3xl border p-6 md:p-8 ${
        wide ? "md:col-span-2" : ""
      } ${
        study.founder
          ? "border-foreground bg-foreground text-page"
          : "border-edge bg-surface"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 0%), color-mix(in oklab, var(--accent-strong) 18%, transparent), transparent 45%)",
        }}
      />
      <Link
        href={`/work/${study.slug}`}
        className="absolute inset-0 z-10 rounded-3xl"
        aria-label={`${study.name}. ${study.summary}`}
      />
      <div
        className={`pointer-events-none relative grid gap-8 ${
          wide ? "md:grid-cols-[1.4fr_0.7fr] md:items-end" : ""
        }`}
      >
        <div>
          <p className={`text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${study.founder ? "opacity-70" : "text-muted"}`}>
            {study.org}
            {study.featured ? " · Featured" : ""}
          </p>
          <h3
            className={`mt-3 font-serif tracking-tight ${
              wide ? "text-4xl md:text-5xl" : "text-3xl"
            } ${study.founder ? "italic" : ""}`}
          >
            {study.founder ? "I shut it down." : study.name}
          </h3>
          <p className={`mt-4 max-w-xl text-sm leading-relaxed ${study.founder ? "opacity-80" : "text-muted"}`}>
            {study.summary}
          </p>
          <p className="mt-6 inline-flex items-center gap-1 text-sm">
            Read the story
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </p>
        </div>
        <p className={study.founder ? "" : "text-metric"}>
          <span className="block font-serif text-5xl tracking-tight">{study.metric.value}</span>
          <span className={`mt-1 block text-sm ${study.founder ? "opacity-70" : "text-muted"}`}>
            {study.metric.label}
          </span>
        </p>
      </div>
      {study.liveUrl && (
        <a
          href={study.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative z-20 mt-6 inline-flex text-xs uppercase tracking-[0.16em] underline decoration-transparent underline-offset-4 hover:decoration-current ${
            study.founder ? "opacity-80" : "text-muted"
          }`}
        >
          {study.liveUrl.replace("https://", "")}
        </a>
      )}
    </article>
  );
}

export function WorkGrid() {
  return (
    <section id="work" className="scroll-mt-24 px-6 py-20 md:py-28" aria-labelledby="work-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01 — Work"
          id="work-heading"
          title="Programs, not feature lists."
          lede="Open a story. Each one is the problem, the call I made, and the result."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Card key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
