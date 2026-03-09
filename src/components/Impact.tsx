"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "3x", label: "Click-through rates" },
  { value: "12%", label: "Sales growth" },
  { value: "20%", label: "Traffic increase" },
  { value: "24 min", label: "Avg. daily engagement" },
];

export function Impact() {
  return (
    <section
      id="impact"
      className="px-6 py-16 border-y border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/30"
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
              className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 px-6 py-5 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-amber-600 dark:text-amber-400 sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
