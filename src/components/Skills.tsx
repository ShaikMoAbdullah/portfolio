import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 pb-8" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl border-t border-edge pt-10">
        <h2 id="skills-heading" className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted">
          Skills
        </h2>
        <dl className="mt-6 space-y-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-6">
              <dt className="text-sm text-muted">{group.title}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-surface px-3 py-1 text-sm text-foreground ring-1 ring-edge"
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
