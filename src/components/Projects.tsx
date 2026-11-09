"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const chipClass =
  "rounded-full bg-stone-200 px-3 py-1 text-xs font-medium text-stone-700 dark:bg-stone-800 dark:text-stone-300";

type CaseStudy = {
  name: string;
  org: string;
  featured?: boolean;
  problem: string;
  did: string[];
  result: string;
  stack: string[];
  liveUrl?: string;
};

const caseStudies: CaseStudy[] = [
  {
    name: "Umrain",
    org: "Founder",
    featured: true,
    problem:
      "Planning Umrah usually means going through agents, with opaque pricing and little say in the itinerary.",
    did: [
      "Built a self-serve platform that generates home-to-home itineraries from each traveller's budget, preferences, and schedule.",
      "Ran product, engineering, vendor partnerships, pricing, and customer support as a solo founder.",
    ],
    result: "~$40K revenue in the first year, bootstrapped.",
    stack: ["Product", "Travel-tech", "Operations"],
    liveUrl: "https://umrain.in",
  },
  {
    name: "Access control & plain-English queries",
    org: "Karya",
    problem:
      "Changing access meant editing the database by hand, and non-technical teams could not look at live data without SQL.",
    did: [
      "Designed RBAC and ReBAC across 100+ API routes for four personas, plus a self-serve UI to assign and revoke roles.",
      "Shipped a conversational interface over live PostgreSQL, with chat history, reusable templates, and resizable tables.",
    ],
    result:
      "Provisioning dropped from hours to seconds. Stakeholders query data in plain English.",
    stack: ["Node.js", "GraphQL", "PostgreSQL", "TypeScript", "LLM"],
    liveUrl: "https://karya.in",
  },
  {
    name: "Homepage & category discovery",
    org: "Kroger · ZopSmart",
    problem:
      "Shoppers had trouble finding products through the homepage and category navigation of a major US grocery site.",
    did: [
      "Contributed to the homepage and navigation architecture of the 2nd-largest US grocery e-commerce platform.",
      "Redesigned category-discovery flows so products were easier to find.",
    ],
    result: "3× click-through rate and a 12% lift in product sales.",
    stack: ["TypeScript", "React", "Jest"],
    liveUrl: "https://www.kroger.com",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function ExternalLink() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4 shrink-0"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article
      className="h-full rounded-2xl border border-edge bg-surface p-6 shadow-sm md:p-8"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
          {study.org}
          {study.featured && (
            <span className="text-stone-400 dark:text-stone-500"> · Featured</span>
          )}
        </p>
        {study.liveUrl && (
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            <ExternalLink />
            Live
          </a>
        )}
      </div>
      <h3
        className={`mt-2 font-semibold text-stone-900 dark:text-stone-50 ${
          study.featured ? "text-2xl" : "text-lg"
        }`}
      >
        {study.name}
      </h3>
      <dl className="mt-6 space-y-5">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Problem
          </dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
            {study.problem}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            What I did
          </dt>
          <dd className="mt-1.5">
            <ul className="space-y-2">
              {study.did.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-400 dark:bg-stone-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Result
          </dt>
          <dd className="mt-1.5 text-sm font-semibold leading-relaxed text-metric">
            {study.result}
          </dd>
        </div>
      </dl>
      <ul className="mt-6 flex flex-wrap gap-2">
        {study.stack.map((tech) => (
          <li key={tech} className={chipClass}>
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-surface-2 px-6 pt-20 pb-6"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="02"
          id="projects-heading"
          title="Selected work"
          className="mb-12"
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.name}
              variants={item}
              className={study.featured ? "md:col-span-2" : "h-full"}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
