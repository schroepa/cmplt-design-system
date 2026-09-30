"use client";

import * as React from "react";
import Link from "next/link";
import { COMPONENT_DOCS } from "@/components/docs/component-catalog";
import { ComponentThumbnail } from "@/components/docs/component-thumbnails";
import { CliInstallTabs } from "@/components/docs/cli-install-tabs";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Button } from "@/registry/cmplt/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/cmplt/ui/card";
import {
  ArrowRight,
  Layers,
  Terminal,
  Sparkles,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function DocsOverviewPage() {
  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24">
      {/* Hero Header */}
      <div className="space-y-5 border-b border-border-subtle pb-10 md:pb-12">
        <div className="flex items-center gap-2">
          <Badge variant="brand">Base UI v1.8 · shadcn Registry</Badge>
        </div>
        <h1 className="cmplt-h1 text-fg-primary">
          cmplt Design System &amp; Registry
        </h1>
        <p className="cmplt-lead text-fg-secondary">
          <strong className="text-fg-primary">cmplt</strong> is not a black-box npm
          component library. It combines unstyled, WAI-ARIA compliant{" "}
          <code className="font-mono text-xs text-fg-brand">@base-ui/react</code>{" "}
          primitives with a 3-tier W3C/OKLCH token system — distributed directly into
          your codebase via our native{" "}
          <code className="font-mono text-xs text-fg-brand">shadcn</code> registry.
        </p>
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          <Link href="/docs/tokens">
            <Button variant="primary" size="md">
              <Layers className="h-3.5 w-3.5" />
              Explore 3-Tier Tokens
            </Button>
          </Link>
          <Link href="/docs/components/button">
            <Button variant="secondary" size="md">
              Browse Components
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
          <Link href="/docs/hooks">
            <Button variant="secondary" size="md">
              <Sparkles className="h-3.5 w-3.5" />
              React Hooks
            </Button>
          </Link>
          <a href="/r/index.json" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="md" className="font-mono text-xs">
              View /r/index.json
              <ExternalLink className="h-3 w-3" />
            </Button>
          </a>
        </div>
      </div>

      {/* Why Base UI + shadcn Registry */}
      <section className="space-y-6 md:space-y-8">
        <h2 className="cmplt-h3 text-fg-primary">
          Architecture: Why Base UI + shadcn Registry?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:gap-8">
          <Card variant="subtle">
            <CardHeader className="p-6 md:p-7 2xl:p-8 space-y-2.5">
              <Badge variant="brand" size="sm" className="w-fit mb-1">
                1. Headless Core
              </Badge>
              <CardTitle className="text-base">@base-ui/react Engine</CardTitle>
              <CardDescription className="cmplt-body-sm">
                Built by the creators of Radix, Floating UI &amp; MUI. Zero runtime style overhead, declarative{" "}
                <code className="font-mono text-fg-primary">data-[open]</code> /{" "}
                <code className="font-mono text-fg-primary">data-[checked]</code>{" "}
                hooks, and React 19 native ergonomics.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card variant="subtle">
            <CardHeader className="p-6 md:p-7 2xl:p-8 space-y-2.5">
              <Badge variant="brand" size="sm" className="w-fit mb-1">
                2. Registry Delivery
              </Badge>
              <CardTitle className="text-base">Own Your Code via CLI</CardTitle>
              <CardDescription className="cmplt-body-sm">
                Every component and UI block is compiled into{" "}
                <code className="font-mono text-fg-primary">/r/[name].json</code>.
                Install with a single{" "}
                <code className="font-mono text-fg-primary">npx shadcn add</code>{" "}
                command and customize without version lock-in.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card variant="subtle" className="md:col-span-2 xl:col-span-1">
            <CardHeader className="p-6 md:p-7 2xl:p-8 space-y-2.5">
              <Badge variant="brand" size="sm" className="w-fit mb-1">
                3. Code ↔ Figma
              </Badge>
              <CardTitle className="text-base">W3C OKLCH Token Parity</CardTitle>
              <CardDescription className="cmplt-body-sm">
                3-tier tokens (Primitive → Semantic → Component) authored in perceptual OKLCH and exported as W3C DTCG JSON for 1:1 Figma Variables sync.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Step-by-step Registry Setup */}
      <section id="registry" className="space-y-6 md:space-y-8">
        <div className="space-y-2">
          <h2 className="cmplt-h3 text-fg-primary">
            Quickstart: Using the @cmplt Registry
          </h2>
          <p className="cmplt-body text-fg-muted">
            Add the <code className="font-mono text-fg-primary">@cmplt</code>{" "}
            namespace to your project&apos;s <code className="font-mono text-fg-primary">components.json</code>{" "}
            or install any endpoint directly by URL.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 xl:grid-cols-2 items-start">
          <Card className="p-6 md:p-7 2xl:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-fg-primary flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-status-success" />
                Step 1: Configure components.json
              </span>
              <Badge variant="mono" size="sm">
                components.json
              </Badge>
            </div>
            <pre className="rounded-md border border-border-subtle bg-subtle p-4 font-mono text-xs text-fg-primary overflow-x-auto leading-relaxed">
{`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "registries": {
    "@cmplt": "https://cmplt.design/r/{name}.json"
  }
}`}
            </pre>
          </Card>

          <div className="space-y-4">
            <div className="text-xs font-semibold text-fg-primary flex items-center gap-2">
              <Terminal className="h-4 w-4 text-fg-brand" />
              Step 2: Install Tokens &amp; Primitives
            </div>
            <CliInstallTabs itemName="tokens" />
            <CliInstallTabs itemName="button" />
          </div>
        </div>
      </section>

      {/* Registry Capabilities & Types */}
      <section className="space-y-6 md:space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="brand">Multi-Tier Delivery</Badge>
          </div>
          <h2 className="cmplt-h3 text-fg-primary">
            Diverse Registry Types in Action
          </h2>
          <p className="cmplt-body text-fg-muted">
            The cmplt registry supports modern shadcn schemas across atomic primitives, hooks, themes, blocks, and project bootstrapping.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-5 space-y-3">
            <Badge variant="mono" size="sm">registry:ui</Badge>
            <h3 className="text-sm font-semibold text-fg-primary">Atomic Primitives</h3>
            <p className="cmplt-body-xs text-fg-muted">
              WAI-ARIA accessible Base UI components (Button, Dialog, Select, Tabs) with 3-tier tokens.
            </p>
            <div className="pt-2 text-xs font-mono text-fg-brand">
              npx shadcn add @cmplt/button
            </div>
          </Card>

          <Card className="p-5 space-y-3">
            <Badge variant="mono" size="sm">registry:hook</Badge>
            <h3 className="text-sm font-semibold text-fg-primary">Reusable Hooks</h3>
            <p className="cmplt-body-xs text-fg-muted">
              Hardware-accelerated tracking, reduced motion a11y, and reactive media query subscriptions.
            </p>
            <div className="pt-2">
              <Link href="/docs/hooks" className="text-xs font-semibold text-fg-brand hover:underline flex items-center gap-1">
                Explore Hooks <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </Card>

          <Card className="p-5 space-y-3">
            <Badge variant="mono" size="sm">registry:theme</Badge>
            <h3 className="text-sm font-semibold text-fg-primary">OKLCH Theme</h3>
            <p className="cmplt-body-xs text-fg-muted">
              Pre-calibrated semantic OKLCH CSS variables for Tailwind v4 @theme integration.
            </p>
            <div className="pt-2 text-xs font-mono text-fg-brand">
              npx shadcn add @cmplt/theme
            </div>
          </Card>

          <Card className="p-5 space-y-3">
            <Badge variant="mono" size="sm">registry:base</Badge>
            <h3 className="text-sm font-semibold text-fg-primary">Project Bootstrap</h3>
            <p className="cmplt-body-xs text-fg-muted">
              Initialize a complete cmplt workspace with base configs, fonts, and icons in 1 step.
            </p>
            <div className="pt-2 text-xs font-mono text-fg-brand">
              npx shadcn init @cmplt/base
            </div>
          </Card>
        </div>
      </section>

      {/* Interactive Component Directory (like ui.shadcn.com/docs/components) */}
      <section className="space-y-6 md:space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="cmplt-h3 text-fg-primary">
              Component Directory ({COMPONENT_DOCS.length} Primitives)
            </h2>
            <p className="cmplt-body text-fg-muted">
              Click any component to inspect live interactive examples, Base UI data attributes, and CLI commands.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-7">
          {COMPONENT_DOCS.map((comp) => (
            <Link key={comp.slug} href={`/docs/components/${comp.slug}`}>
              <Card
                variant="interactive"
                className="h-full flex flex-col justify-between overflow-hidden p-2.5 group"
              >
                <div>
                  {/* Visual Component Preview Stage */}
                  <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg-inner-sm border border-border-subtle bg-subtle/75 bg-cmplt-dots p-5 transition-transform duration-200 group-hover:bg-subtle">
                    <div className="transition-transform duration-200 group-hover:scale-[1.03]">
                      <ComponentThumbnail slug={comp.slug} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="space-y-2.5 px-3.5 pt-5 pb-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-fg-primary group-hover:text-fg-brand transition-colors">
                        {comp.title}
                      </span>
                      <Badge variant="mono" size="sm" dot={false}>
                        @cmplt/{comp.slug}
                      </Badge>
                    </div>
                    <p className="text-xs text-fg-muted line-clamp-2 leading-relaxed">
                      {comp.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-border-subtle mx-3.5 pt-3.5 pb-2.5 text-[11px] text-fg-secondary">
                  <span className="font-mono truncate max-w-[170px]">
                    {comp.baseUiPackage}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-fg-brand">
                    Docs <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
