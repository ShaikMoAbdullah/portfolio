"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  index,
  title,
  id,
  align = "left",
  className = "",
}: {
  index?: string;
  title: string;
  id: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      {index && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
          {index}
        </p>
      )}
      <h2
        id={id}
        className={`${index ? "mt-2" : ""} text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50`}
      >
        {title}
      </h2>
    </motion.div>
  );
}
