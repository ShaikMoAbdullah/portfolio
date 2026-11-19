import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/data/site";
import { QueryToolDemo } from "./demos/QueryToolDemo";
import { TaskHealthDemo } from "./demos/TaskHealthDemo";
import { TaskPreviewDemo } from "./demos/TaskPreviewDemo";

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">{label}</h2>
      <div className="mt-3 text-base leading-relaxed text-foreground">{children}</div>
    </section>
  );
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  const others = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3);

  return (
    <main id="main-content" className="px-6 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
        <article>
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            All work
          </Link>
          <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
            {study.org}
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-[1.02] tracking-tight md:text-6xl">
            {study.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{study.summary}</p>

          <Block label="Problem">
            <p>{study.problem}</p>
          </Block>
          <Block label="Context">
            <p>{study.context}</p>
          </Block>
          <Block label="What I did">
            <ul className="space-y-3">
              {study.did.map((point) => (
                <li key={point} className="text-muted">
                  {point}
                </li>
              ))}
            </ul>
          </Block>
          <Block label="The call">
            <p>{study.decision}</p>
            <p className="mt-3 text-muted">{study.call}</p>
          </Block>

          {study.demo === "preview" && (
            <div className="mt-10 space-y-4">
              <TaskPreviewDemo />
              <TaskHealthDemo />
            </div>
          )}
          {study.demo === "query" && (
            <div className="mt-10">
              <QueryToolDemo />
            </div>
          )}

          <Block label="Result">
            <p className="font-medium text-metric">{study.result}</p>
          </Block>
          <ul className="mt-8 flex flex-wrap gap-2">
            {study.stack.map((item) => (
              <li key={item} className="rounded-full bg-surface px-3 py-1 text-sm ring-1 ring-edge">
                {item}
              </li>
            ))}
          </ul>
          {study.liveUrl && (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm text-accent underline decoration-accent/30 underline-offset-4"
            >
              {study.liveUrl.replace("https://", "")}
            </a>
          )}
        </article>

        <aside className="h-fit lg:sticky lg:top-28">
          <p className="font-serif text-6xl tracking-tight text-metric">{study.metric.value}</p>
          <p className="mt-2 text-sm text-muted">{study.metric.label}</p>
        </aside>
      </div>

      <div className="mx-auto mt-20 max-w-6xl border-t border-edge pt-10">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">More work</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {others.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/work/${item.slug}`}
                className="block rounded-2xl border border-edge bg-surface p-5 transition-colors hover:bg-surface-2"
              >
                <span className="text-xs uppercase tracking-[0.16em] text-muted">{item.org}</span>
                <span className="mt-2 block font-serif text-2xl">{item.name}</span>
                <span className="mt-3 block text-sm text-metric">{item.metric.value}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
