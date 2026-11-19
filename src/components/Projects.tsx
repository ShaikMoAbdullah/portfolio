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
      "Partners needed one product to run audio, NLP, egocentric, and LLM-evaluation programs across languages and countries.",
    did: [
      "Owned the platform end to end. 30+ components so operations assemble a new program, including for low-bandwidth and low-literacy users, without a new build.",
      "Co-designed data pipelines with Google, IISc, Microsoft, and Anthropic and deployed them on the platform.",
      "Project Apollo: 100,000 hours across 22 languages, 60,000 workers, $2M in wages paid out.",
      "Project Vaani with Google and IISc: 6,000 hours, 24K+ speakers, 30 districts.",
    ],
    result: "65M+ tasks, 70+ languages, and 6 countries.",
    stack: ["Product", "AI data", "Partner scoping"],
    liveUrl: "https://platform.karya.in",
  },
  {
    name: "MahaVISTAAR",
    org: "Karya · Public sector",
    problem:
      "Farmers who speak low-resource languages could not use Maharashtra government apps, and agriculture data collection needed local scoping.",
    did: [
      "Ran scoping with ministers, officers, and local coordinators on collecting agriculture data.",
      "Scoped adding Marathi, Dehwali Bhili, Mavachi, and Pawari so those farmers could use the apps.",
      "Shipped language datasets for the Government of India and adolescent-health data with the Karnataka Health Promotion Trust.",
    ],
    result:
      "Government apps could serve farmers who speak those low-resource languages.",
    stack: ["Public sector", "Partner scoping", "Languages"],
  },
  {
    name: "LLM evaluation",
    org: "Karya",
    problem:
      "Public-service and frontier-lab models needed human evaluation of real queries, with a rubric the partner could iterate.",
    did: [
      "Designed the evaluation rubric with the AI teams and ran human evaluation of model output on the platform.",
      "Samiksha with Microsoft: 23,000+ real-world queries and 150,000+ human evaluations across public-service domains.",
      "Anthropic evaluation: 10,000 community queries, 30,000+ tasks, 7 languages. Scoped the tasks and reviewed results with the partner.",
    ],
    result: "Evaluation sets the partners could iterate.",
    stack: ["LLM evaluation", "Rubrics", "Human feedback"],
  },
  {
    name: "Task Preview",
    org: "Karya",
    problem:
      "Tasks reached workers before operations had checked them, and a test run could pay workers.",
    did: [
      "Wrote the PRD with user stories, acceptance criteria, and non-goals.",
      "Every task stays in Preview, payouts off, until operations approves it.",
      "Task Health adds 7 automated checks, each opening the screen that fixes the blocker.",
    ],
    result:
      "Task issues fell by close to 90%, and a data operation takes more than 50% less time.",
    stack: ["PRD", "TypeScript", "React", "PostgreSQL"],
  },
  {
    name: "Access and plain-English queries",
    org: "Karya",
    problem:
      "Access was edited in the database by hand, and operations could not pull live data without engineering.",
    did: [
      "Added an authorization layer and a user screen so teams manage access. 4 global and 5 project roles across 100+ API routes.",
      "Shipped an LLM-backed plain-English query tool over live PostgreSQL. Guardrail tests limit every generated query to allowed tables.",
    ],
    result:
      "Provisioning went from hours to seconds. Operations pull live data without waiting on engineering.",
    stack: ["PostgreSQL", "TypeScript", "LLM"],
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
