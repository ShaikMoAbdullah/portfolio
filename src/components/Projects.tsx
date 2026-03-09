"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Karya Server & NLQ",
    org: "Karya",
    description:
      "Backend infrastructure and Natural Language Query system. Built a conversational chat interface for querying databases in plain English, with chat history, saved/reusable queries, and auto-resizable data tables.",
    stack: ["Node.js", "GraphQL", "PostgreSQL", "LLM Integration", "TypeScript"],
    impact: "Enables non-technical users to explore data through natural language.",
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: "Confluence",
    org: "ZopSmart",
    description:
      "Content creator monetization and social hiring platform. Architected and built from the ground up with scalable GraphQL schemas and data models.",
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
    stack: ["TypeScript", "ReactJS", "GitHub API", "Google Calendar API", "Jest"],
    impact: "50% of total product build; reduced manual HR effort.",
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: "Smrize",
    org: "ZopSmart",
    description:
      "Mobile-first book-summarization platform with audio playback. Optimized for mobile users.",
    stack: ["JavaScript", "Next.js", "Tailwind CSS"],
    impact: "20% traffic increase; 24 min average daily engagement per user.",
    liveUrl: null,
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
              <p className="text-xs font-medium uppercase tracking-wider text-amber-600 dark:text-amber-400">
                {project.org}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-stone-900 dark:text-stone-50">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                {project.description}
              </p>
              <p className="mt-3 text-xs font-medium text-stone-500 dark:text-stone-500">
                {project.impact}
              </p>
              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 dark:text-amber-400 hover:underline"
                    >
                      <ExternalLink />
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 dark:text-amber-400 hover:underline"
                    >
                      <GitHubIcon />
                      GitHub
                    </a>
                  )}
                </div>
              )}
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
