"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Umrain",
    org: "Founder · Startup",
    description:
      "Travel-tech platform helping people plan their Umrah independently and transparently — without agents. Generates fully customised, end-to-end itineraries (home-to-home) based on each traveller's preferences, budget, and schedule.",
    stack: ["Travel-Tech", "Product", "Operations", "Bootstrapped"],
    impact: "~$400K first-year revenue; end-to-end Umrah industry expertise.",
    liveUrl: "https://umrain.in",
  },
  {
    name: "Karya Server & NLQ",
    org: "Karya",
    description:
      "Backend infrastructure and Natural Language Query system. Built a conversational interface for querying live PostgreSQL databases in plain English, with persistent chat history, reusable query templates, and auto-resizable data tables.",
    stack: [
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "LLM Integration",
      "TypeScript",
    ],
    impact: "Removed SQL dependency for non-technical stakeholders.",
    liveUrl: "https://karya.in",
    githubUrl: null,
  },
  {
    name: "HealthCheck",
    org: "ZopSmart",
    description:
      "Cross-service health monitoring dashboard surfacing real-time status, dependency health, and usage metrics across all backend services. Visualised inter-service relationships as a D3.js force-directed graph.",
    stack: ["ReactJS", "D3.js", "Node.js"],
    impact: "Reduced mean time to detect (MTTD) service degradations.",
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: "Confluence",
    org: "ZopSmart",
    description:
      "Content-creator monetisation and social hiring platform. Architected and built from the ground up with scalable GraphQL schemas and relational data models for creator-to-employer workflows.",
    stack: ["Next.js", "Tailwind CSS", "GraphQL", "Hasura", "PostgreSQL"],
    impact: "Full-stack platform for creators and hiring.",
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: "EazyUpdates",
    org: "ZopSmart",
    description:
      "Task management SaaS for HR teams. Built leave management and payroll tracking module; integrated GitHub and Google Calendar APIs for real-time employee progress tracking.",
    stack: [
      "TypeScript",
      "ReactJS",
      "GitHub API",
      "Google Calendar API",
      "Jest",
    ],
    impact: "50% of total product build; reduced manual HR effort.",
    liveUrl: "https://eazyupdates.com",
    githubUrl: null,
  },
  {
    name: "Kroger",
    org: "ZopSmart",
    description:
      "Homepage and navigation architecture for the 2nd-largest US grocery e-commerce SaaS. Core contributor; redesigned category discovery flows to improve product findability and conversion.",
    stack: ["TypeScript", "ReactJS", "CSS", "Jest", "React Testing Library"],
    impact: "3× click-through rate; 12% lift in product sales.",
    liveUrl: "https://www.kroger.com",
    githubUrl: null,
  },
  {
    name: "Road Accident Alert & Analysis System",
    org: "REVA University",
    description:
      "Published research: real-time road accident detection and analytics system to improve emergency response. Sensor-based alerting and accident trend analysis for public safety.",
    stack: ["Research", "IoT", "Analytics"],
    impact: "Published 2021.",
    liveUrl: null,
    githubUrl: null,
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
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-20 bg-stone-100/50 dark:bg-stone-900/30"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="projects-heading"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-12"
        >
          Projects
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={item}
              className="group rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-6 shadow-sm transition-all hover:shadow-lg hover:border-amber-500/30 dark:hover:border-amber-500/30"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-medium uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {project.org}
                </p>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    <ExternalLink />
                    Live
                  </a>
                )}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-stone-900 dark:text-stone-50">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                {project.description}
              </p>
              <p className="mt-3 text-xs font-medium text-stone-500 dark:text-stone-500">
                {project.impact}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-stone-200 dark:bg-stone-800 px-3 py-1 text-xs font-medium text-stone-700 dark:text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
