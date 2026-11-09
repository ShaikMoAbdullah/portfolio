"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

const experiences: Role[] = [
  {
    company: "Karya",
    role: "Senior Product Engineer",
    period: "Sep 2024 – Present",
    location: "Bengaluru",
    highlights: [
      "Rebuilt authorization as project-scoped RBAC and ReBAC across 100+ API routes, with a self-serve admin UI that cut provisioning from hours to seconds.",
      "Onboarded Google and OpenAI as clients and Anthropic and Microsoft as partners, from discovery through production.",
      "Designed a task Preview stage that validates every task end to end before it goes live, and shipped task health with 7 automated checks that link to each fix.",
    ],
  },
  {
    company: "Umrain",
    role: "Founder",
    period: "2024 – Present",
    location: "Bengaluru",
    highlights: [
      "Founded and solo-built a bootstrapped platform for planning Umrah without agents.",
      "Shipped self-serve, home-to-home itineraries shaped by budget, preferences, and schedule.",
    ],
  },
  {
    company: "ZopSmart",
    role: "Software Engineer",
    period: "Jan 2022 – Aug 2024",
    location: "Bengaluru",
    highlights: [
      "Kroger: redesigned homepage and category discovery, lifting click-through rate 3× and product sales 12%.",
      "EazyUpdates: built leave and payroll tracking plus GitHub and Google Calendar integrations, owning half the product.",
      "Smrize: shipped a mobile-first book-summary app with audio, growing traffic 20% with 24-minute average sessions.",
    ],
  },
  {
    company: "MountBlue Technologies",
    role: "Software Engineer",
    period: "Aug 2021 – Jan 2022",
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

const METRIC_SPLIT = /(\$\d[\d,]*K?|\d+\+|\d+%|\d+×|\d+x\b|hours to seconds)/g;
const METRIC_TEST = /^(\$\d[\d,]*K?|\d+\+|\d+%|\d+×|\d+x|hours to seconds)$/;

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
                  {exp.company}
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
