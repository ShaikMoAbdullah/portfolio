import Image from "next/image";
import { heroMetrics, profile } from "@/data/site";

export function Hero() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-6 pb-16 pt-16 md:pb-24 md:pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-4xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted">
            {profile.role}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            I take a partner&apos;s problem and <em className="italic">ship the product.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            5+ years from client scoping through delivery, the last two on LLM
            evaluation, training data, and AI tools with governments and frontier labs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-opacity hover:opacity-90"
            >
              See the work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full px-5 py-2.5 text-sm font-medium text-foreground ring-1 ring-edge transition-colors hover:bg-surface"
            >
              Email me
            </a>
          </div>
        </div>
        <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl md:h-44 md:w-36">
          <Image
            src="/profile.png"
            alt="Shaik Mohammad Abdullah"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 96px, 144px"
            priority
          />
        </div>
      </div>

      <dl className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 border-t border-edge pt-8 sm:grid-cols-3">
        {heroMetrics.map((metric) => (
          <div key={metric.label}>
            <dt className="font-serif text-5xl tracking-tight text-metric md:text-6xl">
              {"prefix" in metric ? metric.prefix : ""}
              {metric.target}
              {metric.suffix}
            </dt>
            <dd className="mt-2 text-sm text-foreground">{metric.label}</dd>
            <dd className="text-xs text-faint">{metric.context}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
