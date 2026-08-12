"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, navLinks } from "@/lib/data";
import { Menu, X, Download } from "@/lib/icons";
import { useReducedMotion } from "@/lib/animations";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo / Name */}
        <Link
          href="#hero"
          className="text-[var(--color-text-primary)] font-semibold text-lg tracking-tight hover:text-[var(--color-accent)] transition-colors"
          onClick={handleNavClick}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden md:flex items-center">
          <a
            href={siteConfig.resumeUrl}
            download
            className="btn-primary !py-2 !px-5 !text-sm"
            aria-label="Download resume as PDF"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-b border-[var(--color-border)]"
            style={{ backgroundColor: "rgba(10, 10, 11, 0.95)", backdropFilter: "blur(16px)" }}
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={prefersReduced ? {} : { opacity: 0, x: -20 }}
                  animate={prefersReduced ? {} : { opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="block text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors py-1"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={prefersReduced ? {} : { opacity: 0, x: -20 }}
                animate={prefersReduced ? {} : { opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="pt-2"
              >
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="btn-primary w-full"
                  onClick={handleNavClick}
                  aria-label="Download resume as PDF"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
