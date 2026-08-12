"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { Mail, GithubIcon, LinkedinIcon, Download, ArrowRight } from "@/lib/icons";
import {
  useReducedMotion,
  fadeInUp,
  staggerContainer,
  noMotion,
  noMotionContainer,
} from "@/lib/animations";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const prefersReduced = useReducedMotion();
  const itemVariant = prefersReduced ? noMotion : fadeInUp;
  const containerVariant = prefersReduced ? noMotionContainer : staggerContainer;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    /*
     * TODO: Wire up to a real email service.
     * Options:
     *   - Formspree: action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
     *   - Resend: POST to /api/contact with the Resend SDK
     *   - EmailJS: Use emailjs.send() client-side
     *
     * For now, this simulates a successful submission and falls back
     * to a mailto link as a backup.
     */
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormState("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="section-padding" aria-label="Contact">
      <hr className="section-divider" />
      <div className="container-custom pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column — CTA and links */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={itemVariant}>
              <span className="section-label">Contact</span>
              <h2 className="mt-2 mb-4">Let&apos;s Talk</h2>
              <p className="text-[var(--color-text-secondary)] mb-8 max-w-md leading-relaxed">
                Open to AI/ML and data engineering roles — let&apos;s discuss how I can contribute
                to your team.
              </p>
            </motion.div>

            {/* Direct links */}
            <motion.div variants={itemVariant} className="space-y-4 mb-8">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-accent)] transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm">{siteConfig.email}</span>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-accent)] transition-colors">
                  <GithubIcon size={18} />
                </div>
                <span className="text-sm">GitHub</span>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-accent)] transition-colors">
                  <LinkedinIcon size={18} />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
            </motion.div>

            {/* Resume download */}
            <motion.div variants={itemVariant}>
              <a
                href={siteConfig.resumeUrl}
                download
                className="btn-secondary"
                aria-label="Download resume as PDF"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right column — Contact form */}
          <motion.div
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {formState === "sent" ? (
              <div className="card flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent-subtle)] border border-[rgba(59,130,246,0.15)] flex items-center justify-center mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-6">
                  Thanks — I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-sm text-[var(--color-accent)] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-5">
                <div>
                  <label htmlFor="contact-name" className="form-label">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="form-input"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="form-label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="form-input"
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="form-input resize-none"
                    placeholder="Tell me about the role or project..."
                  />
                </div>

                {formState === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email me directly at{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-[var(--color-accent)] underline"
                    >
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === "sending" ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray="60"
                          strokeLinecap="round"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Get in Touch
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
