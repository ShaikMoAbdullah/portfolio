"use client";

import { motion } from "framer-motion";

const certifications = [
  { issuer: "Microsoft", name: "Azure AI Fundamentals" },
  { issuer: "Google", name: "Analytics Individual Qualification" },
  { issuer: "University of Helsinki", name: "Elements of AI" },
  { issuer: "DataCamp", name: "Intermediate Python — Data Science" },
  { issuer: "DataCamp", name: "SQL: Introduction to SQL" },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="px-6 py-20 bg-stone-100/50 dark:bg-stone-900/30"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="certifications-heading"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-12"
        >
          Certifications
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap gap-4"
        >
          {certifications.map((cert, i) => (
            <motion.li
              key={`${cert.issuer}-${cert.name}`}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 px-5 py-4 shadow-sm"
            >
              <span className="font-medium text-stone-900 dark:text-stone-50">
                {cert.issuer}
              </span>
              <span className="text-stone-500 dark:text-stone-400"> — </span>
              <span className="text-stone-600 dark:text-stone-300">
                {cert.name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
