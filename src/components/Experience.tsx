"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  url?: string;
};

const experiences: Role[] = [
  {
    company: "Karya",
    url: "https://karya.in",
    role: "Senior Product Engineer",
    period: "2024 – Present",
    location: "Bengaluru",
    highlights: [
      "Owned Platform by Karya end to end: 65M+ tasks deployed, 70+ languages, and 6 countries across the Global South.",
      "Programs on the platform include Project Vaani (6,000 hours, 24K+ speakers), Project Apollo (100,000 hours, 60,000 workers, $2M disbursed), Samiksha (23,000+ queries, 150,000+ human evaluations), and an Anthropic evaluation (10,000 queries, 30,000+ tasks).",
      "Owned Task Preview from the PRD through launch. Every new task starts in Preview, payouts stay off during testing, and promotion to Live runs in one transaction.",
      "Shipped task health with 7 automated checks and 30+ configurable task components, so operations can launch and repair tasks without an engineer.",
      "Rebuilt authorization as project-scoped roles across 100+ API routes, with a self-serve UI that cut provisioning from hours to seconds.",
    ],
  },
  {
    company: "ZopSmart",
    url: "https://zopsmart.com",
    role: "Product Engineer",
    period: "2022 – 2024",
    location: "Bengaluru",
    highlights: [
      "Kroger: shipped the homepage and category-discovery redesign, lifting click-through rate 3× and product sales 12%.",
      "EazyUpdates: built leave and payroll tracking plus GitHub and Google Calendar integrations, owning half the product.",
      "Smrize: shipped a mobile-first book-summary app with audio, growing traffic 20% with 24-minute average sessions.",
    ],
  },
  {
    company: "MountBlue Technologies",
    url: "https://mountblue.io",
    role: "Software Engineer",
    period: "2021 – 2022",
    location: "Bengaluru",
    highlights: [
      "Shipped a property-listing marketplace with a responsive UI and unit plus integration tests.",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const METRIC_SPLIT =
  /(\$\d[\d,]*(?:\.\d+)?[KMB]?|\d[\d,]*(?:\.\d+)?[KMB]?\+|\d{1,3}(?:,\d{3})+|\d+%|\d+×|\d+x\b|hours to seconds)/g;
const METRIC_TEST =
  /^(\$\d[\d,]*(?:\.\d+)?[KMB]?|\d[\d,]*(?:\.\d+)?[KMB]?\+|\d{1,3}(?:,\d{3})+|\d+%|\d+×|\d+x|hours to seconds)$/;

function emphasizeMetrics(text: string) {
  return text.split(METRIC_SPLIT).map((part, i) =>
    METRIC_TEST.test(part) ? (
      <strong key={i} className="font-semibold text-metric">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 px-6 py-20"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="01"
          id="experience-heading"
          title="Experience"
          className="mb-12"
        />
        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="relative ml-1.5 border-l border-edge"
        >
          {experiences.map((exp) => (
            <motion.li
              key={exp.company}
              variants={item}
              className="relative pb-12 pl-8 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-accent-strong ring-4 ring-page"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-950"
                    >
                      {exp.company}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                <span className="text-sm text-stone-500 dark:text-stone-400">
                  {exp.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-stone-700 dark:text-stone-300">
                {exp.role}
                <span className="text-stone-400 dark:text-stone-500"> · </span>
                <span className="font-normal text-stone-500 dark:text-stone-400">
                  {exp.location}
                </span>
              </p>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-400 dark:bg-stone-500" />
                    <span>{emphasizeMetrics(highlight)}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
