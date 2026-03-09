"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-20 md:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative shrink-0"
          >
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl ring-4 ring-amber-500/20 shadow-xl md:h-52 md:w-52">
              <Image
                src="/profile.png"
                alt="Shaik Mohammad Abdullah"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 208px"
                priority
              />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-amber-500 dark:bg-amber-400"
              aria-hidden
            />
          </motion.div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <motion.h1
              id="hero-heading"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 md:text-5xl"
            >
              Shaik Mohammad Abdullah
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-2 text-lg font-medium text-amber-600 dark:text-amber-400"
            >
              Product Engineer · Full Stack
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 max-w-xl text-stone-600 dark:text-stone-400 leading-relaxed"
            >
              4+ years building scalable web platforms, SaaS products, and enterprise integrations.
              Strong in React, TypeScript, Node.js, GraphQL—and turning ideas into measurable impact.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-amber-600 hover:shadow-amber-500/25 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-stone-950"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
