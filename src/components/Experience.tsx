"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  summary?: string;
  url?: string;
};

const experiences: Role[] = [
  {
    company: "Karya",
    url: "https://karya.in",
    role: "Senior Product Engineer (Product Owner)",
    period: "2024 – Present",
    location: "Bengaluru",
    summary:
      "Product owner for Platform by Karya, an AI data and evaluation platform. Led client discovery, scoping, and delivery with AI engineers, software engineers, and operations coordinators, from the partner problem through deployment.",
    highlights: [
      "Platform: Owned Platform by Karya end to end: audio, NLP, egocentric data, and LLM-evaluation tasks. 65M+ tasks, 70+ languages, 6 countries. 30+ components so operations assemble a new program, including for low-bandwidth and low-literacy users, without a new build.",
      "Partners: Co-designed data pipelines with Google, IISc, Microsoft, and Anthropic and deployed them on the platform. Project Apollo: 100,000 hours across 22 languages, 60,000 workers, $2M in wages paid out. Project Vaani with Google and IISc: 6,000 hours, 24K+ speakers, 30 districts. Gave bi-weekly progress updates to partner leads and Karya leadership, including client talks in Maharashtra, Africa, and Indonesia.",
      "Public sector: For MahaVISTAAR (Maharashtra), ran scoping with ministers, officers, and local coordinators on collecting agriculture data and adding Marathi, Dehwali Bhili, Mavachi, and Pawari to government apps, so farmers who speak the low-resource languages could use them. Also shipped language datasets for the Government of India and adolescent-health data with the Karnataka Health Promotion Trust.",
      "Evaluation: Designed the evaluation rubric with the AI teams and ran human evaluation of model output on the platform. Samiksha with Microsoft: 23,000+ real-world queries and 150,000+ human evaluations across public-service domains. An Anthropic evaluation: 10,000 community queries, 30,000+ tasks, 7 languages. Scoped the tasks and reviewed results with the partner so the set could be iterated.",
      "Operations: Owned Task Preview from the problem through launch. Wrote the PRD with user stories, acceptance criteria, and non-goals. Every task stays in Preview, payouts off, until operations approves it. Task issues fell by close to 90%, and a data operation takes more than 50% less time. Task Health adds 7 automated checks, each opening the screen that fixes the blocker.",
      "Access: Data privacy comes first for internal PMs and operations and for external data workers and clients. Added an authorization layer that admits only authorized users, and a user screen so teams manage access on the platform. 4 global and 5 project roles across 100+ API routes; provisioning went from hours to seconds.",
      "AI application: Enabled operations teams to pull live data without waiting on engineering, through an LLM-backed plain-English query tool over live PostgreSQL. Guardrail tests limit every generated query to allowed tables. Worked with PMs, ops, and delivery managers on requirements and rollout.",
    ],
  },
  {
    company: "Umrain",
    url: "https://umrain.in",
    role: "Founder",
    period: "2023 – 2025",
    location: "Bengaluru",
    highlights: [
      "Solo-founded a bootstrapped product for planning and booking Umrah without agents. Drove $43K revenue over the period. Stopped in 2025: operations could not scale past IATA certification and Saudi Arabia travel regulations.",
      "Self-serve flow from preferences, budget, and schedule to a home-to-home itinerary, with a written, itemised quote before booking.",
    ],
  },
  {
    company: "ZopSmart",
    url: "https://zopsmart.com",
    role: "Product Engineer",
    period: "2021 – 2024",
    location: "Bengaluru",
    summary:
      "Product scope on grocery and HR SaaS. Worked closely with the CTO, prioritized with stakeholders, and shipped from the backlog through launch.",
    highlights: [
      "Kroger (US grocery e-commerce): shipped the homepage and category-discovery redesign on the 2nd-largest US grocery e-commerce SaaS. Click-through rose 3× and product sales rose 12%.",
      "EazyUpdates (task-management SaaS): owned 50% of the product, including leave and payroll tracking for HR stakeholders.",
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
              {exp.summary && (
                <p className="mt-3 text-sm leading-relaxed text-stone-600 italic dark:text-stone-300">
                  {exp.summary}
                </p>
              )}
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
