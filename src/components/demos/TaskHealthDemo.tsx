"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const checks = [
  ["Assignments", "Opens the assignment screen"],
  ["Microtasks", "Opens microtask setup"],
  ["Completion policy", "Opens the policy"],
  ["Upstream tasks", "Opens dependencies"],
  ["Avatar linking", "Opens the avatar link"],
  ["Rejected work", "Opens the review queue"],
  ["Boxes", "Opens box setup"],
] as const;

export function TaskHealthDemo() {
  const reduced = usePrefersReducedMotion();
  const [done, setDone] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || reduced) return;
    if (done >= checks.length) return;
    const id = window.setTimeout(() => setDone((count) => count + 1), 260);
    return () => window.clearTimeout(id);
  }, [running, done, reduced]);

  function run() {
    if (reduced) {
      setDone(checks.length);
      setRunning(true);
      return;
    }
    setDone(0);
    setRunning(true);
  }

  const finished = done >= checks.length;

  return (
    <div className="rounded-2xl border border-edge bg-page p-5 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Task Health
          </p>
          <p className="mt-1 text-sm text-muted">
            Seven checks. Each one opens the screen that fixes the blocker.
          </p>
        </div>
        <button
          type="button"
          onClick={run}
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-page transition-opacity hover:opacity-90"
        >
          {finished ? "Run again" : "Run checks"}
        </button>
      </div>
      <ol className="mt-5 divide-y divide-edge">
        {checks.map(([name, action], index) => {
          const complete = index < done;
          return (
            <li key={name} className="flex items-center justify-between gap-4 py-2.5">
              <span className="flex items-center gap-3 text-sm">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    complete
                      ? "border-accent-strong bg-accent-strong text-accent-contrast"
                      : "border-edge text-transparent"
                  }`}
                  aria-hidden
                >
                  <Check className="h-3 w-3" />
                </span>
                <span className={complete ? "text-foreground" : "text-muted"}>{name}</span>
              </span>
              <span className="hidden text-xs text-faint sm:inline">{action}</span>
            </li>
          );
        })}
      </ol>
      <p className="sr-only" role="status">
        {done === 0 ? "Checks not started." : `${done} of ${checks.length} checks complete.`}
      </p>
    </div>
  );
}
