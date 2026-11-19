"use client";

import { useState } from "react";

const examples = [
  {
    id: "marathi",
    ask: "Marathi tasks completed this month",
    allowed: true,
    body: `SELECT COUNT(*) AS tasks
FROM tasks
WHERE language = 'marathi'
  AND completed_at >= DATE_TRUNC('month', NOW());`,
  },
  {
    id: "apollo",
    ask: "Wages paid on Project Apollo",
    allowed: true,
    body: `SELECT SUM(amount) AS wages_paid
FROM payouts
WHERE project = 'apollo';`,
  },
  {
    id: "phones",
    ask: "Export worker phone numbers",
    allowed: false,
    body: "That table is outside the allow-list. The guardrail stops the query before it runs.",
  },
] as const;

export function QueryToolDemo() {
  const [active, setActive] = useState<(typeof examples)[number] | null>(null);

  return (
    <div className="rounded-2xl border border-edge bg-page p-5 md:p-6">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
        Plain-English query
      </p>
      <p className="mt-1 text-sm text-muted">
        Pick a question operations might ask. These are scripted examples, not a live database.
      </p>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Example questions">
        {examples.map((example) => {
          const selected = active?.id === example.id;
          return (
            <button
              key={example.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(example)}
              className={`rounded-full px-3.5 py-1.5 text-left text-sm transition-colors ${
                selected
                  ? "bg-foreground text-page"
                  : "text-muted ring-1 ring-edge hover:text-foreground"
              }`}
            >
              {example.ask}
            </button>
          );
        })}
      </div>
      <div className="mt-4 min-h-28 rounded-xl bg-surface-2 p-4" aria-live="polite">
        {!active && (
          <p className="text-sm text-faint">The generated query shows up here.</p>
        )}
        {active?.allowed && (
          <pre className="overflow-x-auto font-mono text-[0.8rem] leading-relaxed text-foreground">
            {active.body}
          </pre>
        )}
        {active && !active.allowed && (
          <p className="text-sm leading-relaxed text-accent">{active.body}</p>
        )}
      </div>
    </div>
  );
}
