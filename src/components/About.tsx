"use client";

import { motion } from "framer-motion";
import { aboutData, skillCategories } from "@/lib/data";
import { Code2, Brain, Server, Layers } from "@/lib/icons";
import {
  useReducedMotion,
  fadeInUp,
  staggerContainer,
  noMotion,
  noMotionContainer,
} from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Brain: <Brain size={20} />,
  Server: <Server size={20} />,
  Layers: <Layers size={20} />,
};

export function About() {
  const prefersReduced = useReducedMotion();
  const itemVariant = prefersReduced ? noMotion : fadeInUp;
  const containerVariant = prefersReduced ? noMotionContainer : staggerContainer;

  return (
    <section id="about" className="section-padding" aria-label="About me">
      <hr className="section-divider" />
      <div className="container-custom pt-16 md:pt-24">
        {/* Section Label */}
        <motion.div
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="section-label">About</span>
        </motion.div>

        {/* Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mt-6">
          <motion.div
            className="lg:col-span-2"
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Profile placeholder */}
            <div className="mb-8">
              {/* TODO: Replace with your profile photo using next/image
                   Example:
                   <Image src="/profile.jpg" alt="Shaurya Agrawal" width={200} height={200}
                          className="rounded-2xl border border-[var(--color-border)]" /> */}
              <div
                className="w-40 h-40 rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center"
                aria-label="Profile photo placeholder"
              >
                <span className="text-4xl font-bold text-[var(--color-accent)]">SA</span>
              </div>
            </div>

            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {aboutData.bio}
            </p>
            <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed">
              {aboutData.ieeeNote}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="lg:col-span-3"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <motion.div
                  key={category.title}
                  variants={itemVariant}
                  className="card !p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[var(--color-accent-subtle)] border border-[rgba(59,130,246,0.1)] flex items-center justify-center text-[var(--color-accent)]">
                      {iconMap[category.icon]}
                    </div>
                    <h3 className="text-base font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
