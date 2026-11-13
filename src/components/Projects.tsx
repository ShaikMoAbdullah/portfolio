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
    name: "Platform by Karya",
    org: "Karya",
    featured: true,
    problem:
      "Organisations needed one product to create, customise, and deploy data tasks across languages and countries.",
    did: [
      "Owned the product end to end: audio, NLP, computer vision, RLHF, and LLM-evaluation tasks, with in-app preview and a human-and-AI validation loop.",
      "Project Vaani, with Google and IISc: 6,000 hours of voice data, 24K+ speakers, 30 districts.",
      "Project Apollo: 100,000 hours of conversational speech across 22 languages, 60,000 workers, $2M disbursed.",
      "Samiksha, with Microsoft: 23,000+ real-world queries and 150,000+ human evaluations.",
      "Anthropic evaluation: 10,000 community queries and 30,000+ tasks across 7 languages.",
    ],
    result:
      "65M+ tasks deployed, 70+ languages, and 6 countries across the Global South.",
    stack: ["Platform by Karya"],
    liveUrl: "https://platform.karya.in",
  },
  {
    name: "Task Preview: nothing goes live untested",
    org: "Karya",
    problem:
      "Data-collection tasks reached workers before anyone had checked them, and a test run could pay workers.",
    did: [
      "Wrote the PRD: user stories, locked decisions, and non-goals. Every task is created in Preview. Promotion to Live is one database transaction. Payouts, ledger updates, and payments stay off until the task is Live.",
      "Aligned operations, finance, support, and product on that rule, then ran it through sprint planning and grooming in Jira.",
      "Shipped Task Health on the same page: 7 checks, each linking to the screen that fixes the issue, so a coordinator can see why a task is blocked.",
    ],
    result:
      "Every new task is validated before workers see it, and test runs do not pay workers.",
    stack: ["PRD", "Jira", "TypeScript", "React", "PostgreSQL"],
  },
  {
    name: "Access control & plain-English queries",
    org: "Karya",
    problem:
      "Changing access meant editing the database by hand, and non-technical teams could not look at live data without SQL.",
    did: [
      "Designed project-scoped RBAC and ReBAC across 100+ API routes, with 4 global and 5 project roles, plus a self-serve UI to assign and revoke roles.",
      "Shipped a conversational interface over live PostgreSQL, with chat history, reusable templates, and resizable tables.",
    ],
    result:
      "Provisioning dropped from hours to seconds. Stakeholders query data in plain English.",
    stack: ["Node.js", "GraphQL", "PostgreSQL", "TypeScript", "LLM"],
    liveUrl: "https://karya.in",
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
