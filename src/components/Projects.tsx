"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import { X, ExternalLink, GithubIcon } from "@/lib/icons";
import {
  useReducedMotion,
  fadeInUp,
  staggerContainer,
  noMotion,
  noMotionContainer,
} from "@/lib/animations";

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={prefersReduced ? { opacity: 0 } : { opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} - Project details`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <motion.div
        initial={prefersReduced ? {} : { scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={prefersReduced ? {} : { scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors rounded-lg hover:bg-[var(--color-surface-hover)]"
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 pr-8">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
              Overview
            </h4>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
              Technical Impact
            </h4>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {project.impact}
            </p>
          </div>

          {/* Links — only render if URLs exist */}
          {(project.liveUrl || project.repoUrl) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !text-sm !py-2 !px-4"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !text-sm !py-2 !px-4"
                >
                  <GithubIcon size={16} />
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="card text-left cursor-pointer group w-full"
      aria-label={`View details for ${project.title}`}
    >
      {/* Tag accent bar */}
      <div className="w-10 h-1 rounded-full bg-[var(--color-accent)] mb-5 group-hover:w-16 transition-all duration-300" />

      <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
        {project.title}
      </h3>

      <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-bg)] text-[var(--color-text-tertiary)] border border-[var(--color-border)]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* View CTA */}
      <span className="text-sm text-[var(--color-accent)] font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
        View Case Study
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </button>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const prefersReduced = useReducedMotion();
  const itemVariant = prefersReduced ? noMotion : fadeInUp;
  const containerVariant = prefersReduced ? noMotionContainer : staggerContainer;

  return (
    <section id="projects" className="section-padding" aria-label="Selected projects">
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
          <span className="section-label">Projects</span>
          <h2 className="mt-2 mb-4">Selected Projects</h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl">
            Production-style systems built end-to-end — from architecture to testing to deployment.
          </p>
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariant}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
