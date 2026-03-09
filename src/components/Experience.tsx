"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Karya",
    role: "Senior Software Engineer",
    period: "Sep 2024 – Present",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Integrated Permit.io for RBAC/ReBAC across 100+ API routes; configured role-based access for 5 user personas with instant access revocation",
      "Pitched and onboarded enterprise clients, led end-to-end technical discovery, scoped integration solutions, and oversaw seamless client-platform connections",
      "Built a conversational NLQ chat interface for querying databases in plain English—chat history, saved/reusable queries, auto-resizable data table",
      "Designed and built 25+ modular task components for data collection workflows (voice, touch, selection), improving accessibility in low-resource environments",
      "Implemented upload and date-range filters, resolved critical report re-rendering bugs for efficient payout management",
      "Added broadcast support for task distribution; integrated WhatsApp Business API for notifications",
      "Fixed OTP handling for test numbers and international phone formats, supporting multi-country expansion",
    ],
  },
  {
    company: "ZopSmart",
    role: "Software Engineer",
    period: "Jan 2022 – Aug 2024",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Kroger (US e-Commerce): Significant contributor to homepage for 2nd largest e-commerce SaaS in the USA. Improved UX/navigation—3x click-through rates, 12% increase in product sales. Stack: TypeScript, ReactJS, CSS, Jest, React Testing Library",
      "EazyUpdates (Task Management SaaS): Built leave management and payroll tracking module; integrated GitHub and Google Calendar APIs for real-time employee progress. Responsible for 50% of total product build. Stack: TypeScript, ReactJS, CSS, Jest, React Testing Library",
    ],
  },
  {
    company: "MountBlue Technologies",
    role: "Software Engineer",
    period: "Aug 2021 – Jan 2022",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Completed intensive full-stack bootcamp; built production-grade e-property listing marketplace with responsive, accessible UI and comprehensive test coverage",
      "Stack: ReactJS, Tailwind CSS, Bootstrap, CSS, Jest, React Testing Library",
    ],
  },
  {
    company: "Developer Student Clubs, REVA University",
    role: "Core Team Member",
    period: "Jun 2019 – Jun 2020",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Organized and managed technical events, workshops, and hackathons for the campus developer community; held multiple leadership roles",
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

export function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-20"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="experience-heading"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-12"
        >
          Experience
        </motion.h2>
        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.company}
              variants={item}
              className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-amber-500 dark:before:bg-amber-400"
            >
              <div className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
                    {exp.company}
                  </h3>
                  <span className="text-sm text-stone-500 dark:text-stone-400">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 font-medium text-amber-600 dark:text-amber-400">
                  {exp.role}
                </p>
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                  {exp.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-stone-600 dark:text-stone-300 text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-amber-500/60 dark:bg-amber-400/60" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
