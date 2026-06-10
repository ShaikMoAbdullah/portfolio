"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const chipClass =
  "rounded-full bg-stone-200 dark:bg-stone-800 px-3 py-1 text-xs font-medium text-stone-700 dark:text-stone-300";

const projects = [
  {
    name: "Umrain",
    org: "Founder · Startup",
    description:
      "Travel-tech platform helping people plan their Umrah independently and transparently — without agents. Generates fully customised, end-to-end itineraries (home-to-home) based on each traveller's preferences, budget, and schedule.",
    stack: ["Travel-Tech", "Product", "Operations", "Bootstrapped"],
    impact: "~$40K first-year revenue; end-to-end Umrah industry expertise.",
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
      className="mt-0.5 h-4 w-4 shrink-0"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function StackTags({ items }: { items: string[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const plusRef = useRef<HTMLSpanElement>(null);
  const [visibleCount, setVisibleCount] = useState(items.length);

  useEffect(() => {
    const wrap = wrapRef.current;
    const measure = measureRef.current;
    const plus = plusRef.current;
    if (!wrap || !measure || !plus) return;

    const GAP = 8; // matches gap-2 (0.5rem)

    const compute = () => {
      const available = wrap.clientWidth;
      const widths = Array.from(
        measure.querySelectorAll<HTMLElement>("[data-tag]"),
      ).map((el) => el.offsetWidth);
      const plusWidth = plus.offsetWidth;

      let used = 0;
      let count = 0;
      for (let i = 0; i < widths.length; i++) {
        const w = widths[i] + (i > 0 ? GAP : 0);
        const isLast = i === widths.length - 1;
        const reserve = isLast ? 0 : GAP + plusWidth;
        if (used + w + reserve <= available) {
          used += w;
          count = i + 1;
        } else {
          break;
        }
      }
      setVisibleCount(Math.max(1, count));
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [items]);

  const hiddenItems = items.slice(visibleCount);

  return (
    <div ref={wrapRef} className="relative mt-4">
      <div className="flex gap-2 overflow-hidden">
        {items.slice(0, visibleCount).map((tech) => (
          <span key={tech} className={`${chipClass} shrink-0 whitespace-nowrap`}>
            {tech}
          </span>
        ))}
        {hiddenItems.length > 0 && (
          <span className="group/more relative shrink-0">
            <button
              type="button"
              className={`${chipClass} cursor-default whitespace-nowrap`}
              aria-label={`${hiddenItems.length} more: ${hiddenItems.join(", ")}`}
            >
              +{hiddenItems.length}
            </button>
            <span
              role="tooltip"
              style={{ width: "max-content", maxWidth: "16rem" }}
              className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 hidden -translate-x-1/2 flex-wrap justify-center gap-1.5 rounded-lg border border-edge bg-surface p-2 shadow-lg group-hover/more:flex group-focus-within/more:flex"
            >
              {hiddenItems.map((tech) => (
                <span
                  key={tech}
                  className={`${chipClass} shrink-0 whitespace-nowrap`}
                >
                  {tech}
                </span>
              ))}
            </span>
          </span>
        )}
      </div>

      <div
        ref={measureRef}
        aria-hidden
        style={{ visibility: "hidden" }}
        className="pointer-events-none absolute left-0 top-0 flex gap-2 opacity-0"
      >
        {items.map((tech) => (
          <span key={tech} data-tag className={`${chipClass} whitespace-nowrap`}>
            {tech}
          </span>
        ))}
        <span ref={plusRef} className={`${chipClass} whitespace-nowrap`}>
          +{items.length}
        </span>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-20 bg-surface-2"
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
              className="group rounded-xl border border-edge bg-surface p-6 shadow-sm transition-all hover:shadow-lg hover:border-accent/40"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  {project.org}
                </p>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent hover:underline"
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
              <div className="mt-3 flex items-start gap-2 rounded-lg bg-accent/10 px-3 py-2 text-accent">
                <TrendingUpIcon />
                <p className="text-xs font-semibold leading-snug">
                  {project.impact}
                </p>
              </div>
              <StackTags items={project.stack} />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
