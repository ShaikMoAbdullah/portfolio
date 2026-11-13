"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const metrics = [
  { value: "100+", label: "API routes secured", context: "Karya authorization" },
  { value: "3×", label: "Click-through rate", context: "Kroger homepage" },
  { value: "12%", label: "Product sales lift", context: "Kroger e-commerce" },
];

export function Impact() {
  return (
    <section
      id="impact"
      className="scroll-mt-20 bg-surface-2 px-6 py-16"
      aria-labelledby="impact-heading"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          id="impact-heading"
          title="Impact"
          align="center"
          className="mb-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-3"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-2 py-2 text-center"
            >
              <p className="text-3xl font-bold text-metric sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-1 text-sm font-medium text-stone-700 dark:text-stone-300">
                {metric.label}
              </p>
              <p className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">
                {metric.context}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
