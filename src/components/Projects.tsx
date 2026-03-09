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
  },
  {
    name: "Confluence",
    org: "ZopSmart",
    description:
      "Content creator monetization and social hiring platform. Architected and built from the ground up with scalable GraphQL schemas and data models.",
    stack: ["Next.js", "Tailwind CSS", "GraphQL", "Hasura", "PostgreSQL"],
    impact: "Full-stack platform for creators and hiring.",
  },
  {
    name: "EazyUpdates",
    org: "ZopSmart",
    description:
      "Task management SaaS for HR teams. Built leave management and payroll tracking module; integrated GitHub and Google Calendar APIs for real-time employee progress tracking.",
    stack: ["TypeScript", "ReactJS", "GitHub API", "Google Calendar API", "Jest"],
    impact: "50% of total product build; reduced manual HR effort.",
  },
  {
    name: "Smrize",
    org: "ZopSmart",
    description:
      "Mobile-first book-summarization platform with audio playback. Optimized for mobile users.",
    stack: ["JavaScript", "Next.js", "Tailwind CSS"],
    impact: "20% traffic increase; 24 min average daily engagement per user.",
  },
  {
    name: "Road Accident Alert & Analysis System",
    org: "REVA University",
    description:
      "Published research: real-time road accident detection and analytics system to improve emergency response. Sensor-based alerting and accident trend analysis for public safety.",
    stack: ["Research", "IoT", "Analytics"],
    impact: "Published 2021.",
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
