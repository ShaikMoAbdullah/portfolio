"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Karya",
    role: "Senior Product Engineer",
    period: "Sep 2024 – Present",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Designed and delivered a zero-trust authorization system using Permit.io RBAC/ReBAC across 100+ API routes, enforcing fine-grained access for 5 user personas; built a self-serve role management UI that cut access provisioning from hours to seconds and eliminated all manual database privilege changes",
      "Spearheaded enterprise client onboarding for Karya's PaaS platform; led end-to-end technical discovery, scoped integration architectures, and managed production deployments — bridging sales and engineering to accelerate client time-to-value",
      "Designed and shipped a Natural Language Query (NLQ) conversational interface letting non-technical stakeholders query live PostgreSQL databases in plain English — persistent chat history, reusable query templates, and a responsive auto-resizable data table",
      "Built 25+ modular, accessible task components for structured data-collection pipelines (voice, touch, selection), improving field accessibility for workers in low-bandwidth, low-literacy environments",
      "Engineered upload and date-range filtering in the payments module and resolved critical report re-rendering defects, enabling faster, more accurate worker payout management",
      "Integrated WhatsApp Business API for broadcast task distribution and automated assignment notifications, extending task delivery to large worker pools via a high-engagement channel",
      "Resolved OTP authentication for test accounts and international phone formats (e.g., Ethiopian country codes), ensuring reliable verification and enabling multi-country expansion",
    ],
  },
  {
    company: "ZopSmart",
    role: "Software Engineer",
    period: "Jan 2022 – Aug 2024",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Kroger (US Grocery e-Commerce): Core contributor to homepage and navigation architecture for the 2nd-largest US grocery e-commerce SaaS; redesigned category discovery flows, driving a 3× click-through lift and 12% increase in product sales. Stack: TypeScript, ReactJS, CSS, Jest, React Testing Library",
      "EazyUpdates (Task Management SaaS): Engineered a leave management and payroll tracking module for HR teams, substantially reducing manual overhead; integrated GitHub and Google Calendar APIs for real-time employee progress. Owned 50% of the total product build. Stack: TypeScript, ReactJS, CSS, Jest",
      "HealthCheck (Internal DevOps Tool): Architected a cross-service health monitoring dashboard surfacing real-time status, dependency health, and usage metrics; visualised inter-service relationships as a D3.js force-directed graph, reducing mean time to detect degradations. Stack: ReactJS, D3.js, Node.js",
    ],
  },
  {
    company: "MountBlue Technologies",
    role: "Software Engineer",
    period: "Aug 2021 – Jan 2022",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Completed an intensive full-stack engineering programme covering component architecture, frontend best practices, test-driven development (TDD), and production deployment pipelines",
      "Shipped a production-grade e-property listing marketplace enabling landlords to list properties and tenants to browse and enquire — fully responsive, accessible UI with comprehensive unit and integration test coverage. Stack: ReactJS, Tailwind CSS, Bootstrap, Jest, React Testing Library",
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
