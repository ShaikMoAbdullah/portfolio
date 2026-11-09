const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "GraphQL", "Hasura", "REST APIs", "PostgreSQL"],
  },
  {
    title: "AI & NLP",
    items: ["Conversational Interfaces", "LLM Integration"],
  },
  {
    title: "Testing",
    items: ["Jest", "React Testing Library", "Unit & Integration Testing"],
  },
  {
    title: "Tools",
    items: ["GitHub API", "Google Calendar API", "Git", "Linux"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-surface-2 px-6 pt-10 pb-20"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-4xl border-t border-edge/70 pt-10">
        <h2
          id="skills-heading"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400"
        >
          Skills
        </h2>
        <dl className="mt-5 space-y-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <dt className="w-36 shrink-0 text-sm font-medium text-stone-700 dark:text-stone-300">
                {group.title}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-surface px-2.5 py-1 text-sm text-stone-600 ring-1 ring-edge dark:text-stone-300"
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
