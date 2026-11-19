"use client";

import { useState } from "react";
import { experiences } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  const [open, setOpen] = useState("Karya");

  return (
    <section id="experience" className="scroll-mt-24 px-6 py-20 md:py-28" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03 — Experience"
          id="experience-heading"
          title="Three chapters."
          lede="The detail lives in the case studies. This is the arc."
        />
        <div className="mt-12 divide-y divide-edge border-y border-edge">
          {experiences.map((job) => {
            const expanded = open === job.company;
            return (
              <div key={job.company}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? "" : job.company)}
                  className="flex w-full flex-col gap-2 py-6 text-left sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span>
                    <span className="block font-serif text-3xl tracking-tight">
                      {job.company}
                      {job.founder && (
                        <span className="ml-3 align-middle font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                          Founder
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {job.role} · {job.location}
                    </span>
                  </span>
                  <span className="text-sm text-faint">{job.period}</span>
                </button>
                {expanded && (
                  <div className="pb-8">
                    {job.summary && (
                      <p className="max-w-2xl text-sm leading-relaxed text-muted">{job.summary}</p>
                    )}
                    <ul className="mt-4 max-w-3xl space-y-2">
                      {job.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm leading-relaxed text-foreground">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    {job.url && (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-sm text-accent underline decoration-accent/30 underline-offset-4"
                      >
                        {job.url.replace("https://", "")}
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
