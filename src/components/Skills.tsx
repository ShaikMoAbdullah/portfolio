"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    items: ["ReactJS", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive / Mobile-First"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "GraphQL", "Hasura", "REST APIs"],
  },
  {
    title: "Authorization & Security",
    items: ["Permit.io", "RBAC", "ReBAC", "OTP Authentication"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "AI & NLP",
    items: ["Natural Language Query (NLQ)", "Chat Interfaces", "LLM Integration"],
  },
  {
    title: "Testing",
    items: ["Jest", "React Testing Library", "Unit & Integration Testing"],
  },
  {
    title: "Integrations",
    items: ["GitHub API", "Google Calendar API", "WhatsApp Business API"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Linux", "Azure AI", "Google Analytics"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { y: 12, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-20"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="skills-heading"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-12"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={item}
              className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-5 shadow-sm"
            >
              <h3 className="font-semibold text-amber-600 dark:text-amber-400">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-stone-100 dark:bg-stone-800 px-2.5 py-1 text-sm text-stone-700 dark:text-stone-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
