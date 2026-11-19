"use client";

import { useState } from "react";

export function TaskPreviewDemo({ compact = false }: { compact?: boolean }) {
  const [live, setLive] = useState(false);

  return (
    <div className="rounded-2xl border border-edge bg-page p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Task
          </p>
          <p className="mt-1 text-base font-medium text-foreground">
            Marathi crop-disease audio · 40 sec
          </p>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            live
              ? "bg-foreground text-page"
              : "bg-surface-2 text-foreground ring-1 ring-edge"
          }`}
        >
          {live ? "Live" : "Preview"}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Task status">
        <button
          type="button"
          aria-pressed={!live}
          onClick={() => setLive(false)}
          className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
            !live
              ? "bg-foreground text-page"
              : "text-muted ring-1 ring-edge hover:text-foreground"
          }`}
        >
          Preview · payouts off
        </button>
        <button
          type="button"
          aria-pressed={live}
          onClick={() => setLive(true)}
          className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
            live
              ? "bg-accent-strong text-accent-contrast"
              : "text-muted ring-1 ring-edge hover:text-foreground"
          }`}
        >
          Live · payouts on
        </button>
      </div>

      <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted">
        {live
          ? "Operations approved it. Workers are paid for accepted work."
          : "Workers can try the task. Nothing is paid until operations approves it."}
      </p>

      {!compact && (
        <dl className="mt-5 grid gap-4 border-t border-edge pt-4 sm:grid-cols-2">
          <div>
            <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-faint">
              Before
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-muted">
              A test run could pay workers, and issues showed up after the task was already live.
            </dd>
          </div>
          <div>
            <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-faint">
              After
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-foreground">
              Issues fell by close to 90%. A data operation takes more than 50% less time.
            </dd>
          </div>
        </dl>
      )}

      <p className="mt-4 text-xs text-faint">A sketch of the rule. Not a live task.</p>
    </div>
  );
}
