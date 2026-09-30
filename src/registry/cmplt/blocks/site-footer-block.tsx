"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Github, Twitter, Disc as Discord } from "lucide-react";

export function SiteFooterBlock() {
  const sections = [
    {
      title: "Design System",
      links: [
        { label: "Component Catalog", href: "/docs" },
        { label: "Pro UI Blocks", href: "/blocks" },
        { label: "Design Blueprint", href: "/docs/blueprint" },
        { label: "Token Inspector", href: "/docs/tokens" },
        { label: "Pricing & Passes", href: "/pricing" },
      ],
    },
    {
      title: "Foundations",
      links: [
        { label: "OKLCH Color Gamut", href: "/docs/blueprint/visual-foundations" },
        { label: "Bringhurst Typography", href: "/docs/blueprint/interaction-ergonomics" },
        { label: "Base UI Primitives", href: "https://base-ui.com" },
        { label: "shadcn CLI Integration", href: "https://ui.shadcn.com" },
      ],
    },
    {
      title: "Community & Code",
      links: [
        { label: "GitHub Repository", href: "https://github.com" },
        { label: "Figma Community Kit", href: "/figma" },
        { label: "Releases & Changelog", href: "/showcase" },
        { label: "MIT License", href: "/pricing" },
      ],
    },
  ];

  return (
    <footer className="w-full border-t border-border-subtle bg-surface/50 text-xs">
      <div className="cmplt-container py-12 sm:py-16 space-y-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex size-7 items-center justify-center rounded-sm bg-brand text-brand-fg">
                <span className="font-mono text-xs font-bold">c/</span>
              </div>
              <span className="font-semibold text-fg text-base tracking-tight">
                cmplt<span className="text-brand">.</span>
              </span>
            </Link>
            <p className="text-fg-secondary leading-relaxed max-w-sm">
              The next-generation design system engineered with Base UI headless primitives,
              3-tier OKLCH tokens, and fluid motion physics.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="flex size-2 rounded-full bg-status-success animate-pulse" />
              <span className="font-mono text-fg-muted text-[11px]">
                Registry v1.2 · All systems operational
              </span>
            </div>
          </div>

          {/* Nav Columns */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-xs font-semibold text-fg tracking-wider uppercase">
                {section.title}
              </h4>
              <ul className="space-y-2 text-fg-secondary">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-fg hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border-subtle text-fg-muted">
          <p>© {new Date().getFullYear()} cmplt design system. Released under MIT License.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-fg transition-colors" aria-label="GitHub">
              <Github className="size-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-fg transition-colors" aria-label="Twitter">
              <Twitter className="size-4" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-fg transition-colors" aria-label="Discord">
              <Discord className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
