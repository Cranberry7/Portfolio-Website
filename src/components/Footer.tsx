"use client";

import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/data";
import { GithubIcon, LinkedinIcon, Mail } from "@/lib/icons";

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
      role="contentinfo"
    >
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="#hero"
              className="text-lg font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="text-sm text-[var(--color-text-tertiary)] mt-2 max-w-xs leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] mb-4">
              Navigation
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] mb-4">
              Connect
            </h4>
            <div className="space-y-2.5 mb-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
              >
                <Mail size={14} />
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--color-border)] mt-10 pt-6">
          <p className="text-xs text-[var(--color-text-tertiary)] text-center">
            © 2026 Shaurya Agrawal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
