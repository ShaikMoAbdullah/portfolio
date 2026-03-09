"use client";

import { motion } from "framer-motion";

const education = [
  {
    school: "REVA University",
    degree: "Bachelor of Technology — Computer Science",
    period: "Jun 2017 – Jul 2021",
    location: "Bengaluru, India",
  },
  {
    school: "Sri Chaitanya Techno School",
    degree: "CBSE Class 10 — Mathematics and Computer Science",
    period: "May 2014 – Jul 2015",
    location: "Bengaluru, India",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="px-6 py-20"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="education-heading"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-12"
        >
          Education
        </motion.h2>
        <motion.ol
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {education.map((edu) => (
            <li
              key={edu.school}
              className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-5 shadow-sm"
            >
              <h3 className="font-semibold text-stone-900 dark:text-stone-50">
                {edu.school}
              </h3>
              <p className="mt-1 text-amber-600 dark:text-amber-400">{edu.degree}</p>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                {edu.period} · {edu.location}
              </p>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
