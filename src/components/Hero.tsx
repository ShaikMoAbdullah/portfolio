"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden px-6 py-20 md:py-28"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-80"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 0%, color-mix(in oklab, var(--accent-strong) 16%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative shrink-0"
          >
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl ring-4 ring-accent-strong/20 shadow-xl md:h-52 md:w-52">
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
              className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-accent-strong"
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
              className="mt-2 text-lg font-medium text-stone-700 dark:text-stone-300"
            >
              Product Owner
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 max-w-xl text-stone-600 dark:text-stone-400 leading-relaxed"
            >
              Owns the roadmap, backlog, and prioritization. 5+ years taking
              SaaS and task platforms from the PRD and user stories through
              launch, with operations, finance, support, and product in the
              room.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-accent-contrast shadow-lg transition-all hover:bg-accent-strong-hover hover:shadow-accent-strong/25 focus:outline-none focus:ring-2 focus:ring-accent-strong focus:ring-offset-2 dark:focus:ring-offset-stone-950"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
