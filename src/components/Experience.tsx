"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import {
  useReducedMotion,
  fadeInUp,
  staggerContainerSlow,
  noMotion,
  noMotionContainer,
} from "@/lib/animations";

export function Experience() {
  const prefersReduced = useReducedMotion();
  const itemVariant = prefersReduced ? noMotion : fadeInUp;
  const containerVariant = prefersReduced ? noMotionContainer : staggerContainerSlow;

  return (
    <section id="experience" className="section-padding" aria-label="Work experience">
      <hr className="section-divider" />
      <div className="container-custom pt-16 md:pt-24">
        {/* Section heading */}
        <motion.div
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <span className="section-label">Experience</span>
          <h2 className="mt-2 mb-4">Where I&apos;ve Worked</h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl">
            Real-world engineering and security operations experience — not just coursework.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative pl-10 md:pl-14"
        >
          {/* Timeline line */}
          <div className="timeline-line" aria-hidden="true" />

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariant}
              className={`relative ${
                index < experience.length - 1 ? "pb-12" : "pb-0"
              }`}
            >
              {/* Timeline dot */}
              <div className="timeline-dot" aria-hidden="true" />

              {/* Card */}
              <div className="card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-[var(--color-accent)] font-medium text-sm">
                      {item.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[var(--color-text-tertiary)]">
                      {item.period}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-tertiary)]">
                      {item.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {item.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex gap-3"
                    >
                      <span
                        className="mt-2 w-1 h-1 rounded-full bg-[var(--color-accent)] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
