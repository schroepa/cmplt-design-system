import * as React from "react";
import Link from "next/link";
import { Badge } from "@/registry/cmplt/ui/badge";
import { ExternalLink, Github, Globe } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-surface/60">
      <div className="cmplt-container py-16 md:py-20 lg:py-24 2xl:py-32">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 2xl:gap-16 items-start">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-4 2xl:col-span-5 space-y-4 max-w-md">
            <div className="flex items-center gap-2.5 font-semibold text-fg-primary">
              <span className="flex h-7 w-7 items-center justify-center rounded-cmplt-squircle bg-accent text-fg-on-accent font-mono text-xs font-bold shadow-cmplt-xs">
                c/
              </span>
              <span className="text-sm 2xl:text-base">cmplt design system</span>
            </div>
            <p className="text-xs sm:text-[13px] text-fg-muted leading-relaxed">
              Accessible headless primitives powered by{" "}
              <code className="font-mono text-fg-secondary">@base-ui/react</code>,
              styled with 3-tier W3C OKLCH tokens, distributed via the native{" "}
              <code className="font-mono text-fg-secondary">shadcn</code> registry.
            </p>
            <div className="rounded-cmplt-md border border-border-subtle bg-subtle/60 p-3.5 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-fg-muted">
                  Inventor &amp; Owner
                </span>
                <Badge variant="mono" size="sm" dot={false}>
                  ptrckschrdtr
                </Badge>
              </div>
              <div className="text-xs font-semibold text-fg-primary">
                Patrick Schrödter{" "}
                <span className="font-mono font-normal text-fg-muted">
                  (ptrckschrdtr)
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-0.5 text-xs">
                <a
                  href="https://ptrckschrdtr.de"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-fg-secondary hover:text-fg-accent transition-colors"
                >
                  <Globe className="h-3.5 w-3.5 text-fg-accent" />
                  ptrckschrdtr.de
                  <ExternalLink className="h-2.5 w-2.5 opacity-70" />
                </a>
                <span className="text-border-strong">·</span>
                <a
                  href="https://github.com/schroepa"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-fg-secondary hover:text-fg-accent transition-colors"
                >
                  <Github className="h-3.5 w-3.5 text-fg-accent" />
                  github: schroepa
                  <ExternalLink className="h-2.5 w-2.5 opacity-70" />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Badge variant="brand" size="sm">
                Base UI v1.8
              </Badge>
              <Badge variant="outline" size="sm">
                Tailwind v4
              </Badge>
              <Badge variant="mono" size="sm">
                W3C Tokens
              </Badge>
            </div>
          </div>

          {/* Link Columns (2-col on Mobile & Tablet, 4 cols total on Desktop/Desktop+) */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 md:col-span-1 lg:col-span-4 2xl:col-span-4">
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-fg-primary">
                Design System
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-fg-muted">
                <li>
                  <Link href="/docs" className="hover:text-fg-primary transition-colors">
                    Introduction & Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/docs/tokens" className="hover:text-fg-primary transition-colors">
                    3-Tier OKLCH Design Tokens
                  </Link>
                </li>
                <li>
                  <Link href="/docs/components/button" className="hover:text-fg-primary transition-colors">
                    Base UI Component Catalog
                  </Link>
                </li>
                <li>
                  <Link href="/r/index.json" className="hover:text-fg-primary transition-colors font-mono text-xs">
                    /r/index.json (Live Registry)
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-fg-primary">
                Product &amp; Owner
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-fg-muted">
                <li>
                  <Link href="/blocks" className="hover:text-fg-primary transition-colors">
                    cmplt Pro Blocks
                  </Link>
                </li>
                <li>
                  <Link href="/figma" className="hover:text-fg-primary transition-colors">
                    Figma Variables & UI Kit
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-fg-primary transition-colors">
                    Pricing & Team Licensing
                  </Link>
                </li>
                <li>
                  <a
                    href="https://ptrckschrdtr.de"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-fg-primary transition-colors inline-flex items-center gap-1"
                  >
                    ptrckschrdtr.de
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/schroepa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-fg-primary transition-colors inline-flex items-center gap-1 font-mono text-xs"
                  >
                    github.com/schroepa
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick CLI Install Column */}
          <div className="md:col-span-1 lg:col-span-4 2xl:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-fg-primary">
              Quick CLI Install
            </h4>
            <p className="text-xs sm:text-[13px] text-fg-muted leading-relaxed">
              Install any primitive or block directly into your repository:
            </p>
            <div className="rounded-cmplt-md border border-border-default bg-subtle px-4 py-3 font-mono text-xs text-fg-primary overflow-x-auto">
              <span className="select-none text-fg-muted mr-2">$</span>
              npx shadcn@latest add @cmplt/button
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-16 lg:mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-subtle pt-8 text-xs text-fg-muted">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>
              © {new Date().getFullYear()} cmplt design system. Invented &amp; owned by{" "}
              <a
                href="https://ptrckschrdtr.de"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-fg-primary hover:text-fg-accent transition-colors"
              >
                Patrick Schrödter (ptrckschrdtr)
              </a>
              .
            </span>
            <span className="hidden sm:inline text-border-strong">·</span>
            <a
              href="https://github.com/schroepa"
              target="_blank"
              rel="noreferrer"
              className="font-mono hover:text-fg-primary transition-colors"
            >
              github: schroepa
            </a>
          </div>
          <span className="font-mono">
            Code First → Figma Synced → Own Your UI
          </span>
        </div>
      </div>
    </footer>
  );
}
