"use client";

import { motion } from "framer-motion";

type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  impact?: string;
  highlights: string[];
};

const experiences: Role[] = [
  {
    company: "Umrain",
    role: "Founder",
    period: "2025 – 2026",
    location: "Bengaluru, Karnataka, India",
    impact: "~$40K first-year revenue · solo-built & bootstrapped",
    highlights: [
      "Founded a travel-tech startup enabling people to plan and book their Umrah independently and transparently — without relying on traditional agents — born from a poor personal agent-led Umrah experience in late 2024",
      "Built a self-serve platform that generates fully customised, end-to-end Umrah itineraries (home-to-home) tailored to each traveller's preferences, budget, and schedule",
      "Drove ~$40K in first-year revenue as a bootstrapped venture, owning product, technology, operations, vendor partnerships, and customer support end to end",
      "Gained deep, end-to-end knowledge of the Umrah travel industry — supplier and ground logistics, pricing, compliance, and building customer trust in a high-stakes journey",
    ],
  },
  {
    company: "Karya",
    role: "Senior Product Engineer",
    period: "Sep 2024 – Present",
    location: "Bengaluru, Karnataka, India",
    impact: "100+ API routes secured · access provisioning cut from hours to seconds",
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
    impact: "3× click-through rate & 12% sales lift on Kroger's US e-commerce",
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

const METRIC_SPLIT = /(\$\d[\d,]*K?|\d+\+|\d+%|\d+×|\d+x\b|hours to seconds)/g;
const METRIC_TEST = /^(\$\d[\d,]*K?|\d+\+|\d+%|\d+×|\d+x|hours to seconds)$/;

function emphasizeMetrics(text: string) {
  return text.split(METRIC_SPLIT).map((part, i) =>
    METRIC_TEST.test(part) ? (
      <strong
        key={i}
        className="font-semibold text-stone-900 dark:text-stone-100"
      >
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function TrendingUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

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
              className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-accent"
            >
              <div className="rounded-xl border border-edge bg-surface p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
                    {exp.company}
                  </h3>
                  <span className="text-sm text-stone-500 dark:text-stone-400">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 font-medium text-accent">
                  {exp.role}
                </p>
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                  {exp.location}
                </p>
                {exp.impact && (
                  <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent">
                    <TrendingUpIcon />
                    {exp.impact}
                  </div>
                )}
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-stone-600 dark:text-stone-300 text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-accent/60" />
                      <span>{emphasizeMetrics(h)}</span>
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
