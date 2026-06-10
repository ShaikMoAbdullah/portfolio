"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "$40K", label: "First-year revenue", context: "Umrain (founder)" },
  { value: "100+", label: "API routes secured", context: "Karya zero-trust authz" },
  { value: "3×", label: "Click-through rate", context: "Kroger homepage" },
  { value: "12%", label: "Product sales lift", context: "Kroger e-commerce" },
];

export function Impact() {
  return (
    <section
      id="impact"
      className="px-6 py-16 border-y border-edge bg-surface-2"
      aria-labelledby="impact-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="impact-heading"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center text-2xl font-bold text-stone-900 dark:text-stone-50 mb-10"
        >
          Measurable impact across shipped products
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-edge bg-surface px-6 py-5 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-metric sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-1 text-sm font-medium text-stone-700 dark:text-stone-300">
                {metric.label}
              </p>
              <p className="mt-0.5 text-xs text-stone-500 dark:text-stone-500">
                {metric.context}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
