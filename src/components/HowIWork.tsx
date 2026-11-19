"use client";

import { useRef, useState } from "react";
import { principles } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { TaskHealthDemo } from "./demos/TaskHealthDemo";
import { TaskPreviewDemo } from "./demos/TaskPreviewDemo";

export function HowIWork() {
  const [current, setCurrent] = useState(principles[0].id);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = principles.find((item) => item.id === current) ?? principles[0];
  const index = principles.findIndex((item) => item.id === active.id);

  function move(next: number) {
    const wrapped = (next + principles.length) % principles.length;
    setCurrent(principles[wrapped].id);
    tabs.current[wrapped]?.focus();
  }

  return (
    <section
      id="approach"
      className="scroll-mt-24 border-t border-edge bg-surface-2 px-6 py-20 md:py-28"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02 — Approach"
          id="approach-heading"
          title="Discover, scope, ship, measure."
          lede="The same loop on a state program, a frontier-lab evaluation, and an internal tool."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
          <div
            role="tablist"
            aria-label="How I work"
            className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1"
            onKeyDown={(event) => {
              if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                event.preventDefault();
                move(index + 1);
              }
              if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                event.preventDefault();
                move(index - 1);
              }
            }}
          >
            {principles.map((item, itemIndex) => {
              const selected = item.id === active.id;
              return (
                <button
                  key={item.id}
                  ref={(node) => {
                    tabs.current[itemIndex] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setCurrent(item.id)}
                  className={`rounded-full px-4 py-2 text-left text-sm transition-colors lg:rounded-xl lg:px-4 lg:py-3 ${
                    selected
                      ? "bg-foreground text-page"
                      : "text-muted hover:bg-surface hover:text-foreground"
                  }`}
                >
                  <span className="mr-2 font-serif text-base">{String(itemIndex + 1).padStart(2, "0")}</span>
                  {item.label}
                </button>
              );
            })}
          </div>
          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className="min-w-0"
          >
            <h3 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              {active.title}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{active.body}</p>
            <p className="mt-4 text-sm font-medium text-metric">{active.proof}</p>
            {active.demo === "preview" && (
              <div className="mt-8">
                <TaskPreviewDemo compact />
              </div>
            )}
            {active.demo === "health" && (
              <div className="mt-8">
                <TaskHealthDemo />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
