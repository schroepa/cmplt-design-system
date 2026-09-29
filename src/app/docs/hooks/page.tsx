"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Button } from "@/registry/cmplt/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/cmplt/ui/card";
import { CliInstallTabs } from "@/components/docs/cli-install-tabs";
import { useMousePosition } from "@/registry/cmplt/hooks/use-mouse-position";
import { useReducedMotion } from "@/registry/cmplt/hooks/use-reduced-motion";
import { useMediaQuery } from "@/registry/cmplt/hooks/use-media-query";
import {
  MousePointer2,
  Accessibility,
  Laptop,
  CheckCircle2,
  XCircle,
  Layers,
  ArrowRight,
  Terminal,
} from "lucide-react";

export default function HooksDocumentationPage() {
  const mouse = useMousePosition();
  const prefersReduced = useReducedMotion();

  // Test media queries
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isXl = useMediaQuery("(min-width: 1280px)");
  const isDarkSystem = useMediaQuery("(prefers-color-scheme: dark)");

  const [interactiveSimulateReduced, setInteractiveSimulateReduced] =
    React.useState(false);

  const effectiveReduced = prefersReduced || interactiveSimulateReduced;

  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24">
      {/* Header */}
      <div className="space-y-5 border-b border-border-subtle pb-10 md:pb-12">
        <div className="flex items-center gap-2">
          <Badge variant="brand">registry:hook · React 19</Badge>
          <Badge variant="outline">Client-Side</Badge>
        </div>
        <h1 className="cmplt-h1 text-fg-primary">cmplt React Hooks</h1>
        <p className="cmplt-lead text-fg-secondary">
          Composable, lightweight hooks powering cmplt&apos;s natural motion physics,
          WCAG 2.2 accessibility guardrails, and responsive layout subscriptions.
          Independently installable via the shadcn CLI.
        </p>
      </div>

      {/* Hook 1: useMousePosition */}
      <section id="use-mouse-position" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <MousePointer2 className="h-5 w-5 text-fg-accent" />
              <h2 className="cmplt-h3 text-fg-primary">useMousePosition()</h2>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Continuous, passive viewport mouse tracking with pixel and normalized coordinates.
            </p>
          </div>
          <Badge variant="mono">@cmplt/use-mouse-position</Badge>
        </div>

        {/* Live Interactive Playground */}
        <Card className="p-6 md:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
            <span className="text-xs font-semibold text-fg-primary uppercase tracking-wider">
              Live Coordinate Inspector
            </span>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <span className="text-fg-secondary">
                X: <strong className="text-fg-accent">{Math.round(mouse.x)}px</strong>
              </span>
              <span className="text-fg-secondary">
                Y: <strong className="text-fg-accent">{Math.round(mouse.y)}px</strong>
              </span>
              <span className="text-fg-secondary">
                normX: <strong className="text-fg-primary">{mouse.normalizedX.toFixed(3)}</strong>
              </span>
              <span className="text-fg-secondary">
                normY: <strong className="text-fg-primary">{mouse.normalizedY.toFixed(3)}</strong>
              </span>
            </div>
          </div>

          <div className="relative h-44 w-full rounded-cmplt-md border border-dashed border-border-default bg-subtle/50 flex items-center justify-center overflow-hidden">
            <div className="text-center text-xs text-fg-muted select-none pointer-events-none px-4">
              Move your mouse across the window to observe real-time tracking
            </div>
            <div
              className="absolute h-5 w-5 rounded-full border-2 border-border-accent bg-accent-subtle/60 pointer-events-none transition-all duration-75 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${mouse.normalizedX * 100}%`,
                top: `${mouse.normalizedY * 100}%`,
              }}
            />
          </div>

          <CliInstallTabs itemName="use-mouse-position" />
        </Card>
      </section>

      {/* Hook 2: useReducedMotion */}
      <section id="use-reduced-motion" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Accessibility className="h-5 w-5 text-status-success" />
              <h2 className="cmplt-h3 text-fg-primary">useReducedMotion()</h2>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              WCAG 2.2 compliant detection of system-level reduced motion preferences.
            </p>
          </div>
          <Badge variant="mono">@cmplt/use-reduced-motion</Badge>
        </div>

        <Card className="p-6 md:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
            <div>
              <span className="text-xs font-semibold text-fg-primary uppercase tracking-wider block">
                OS Motion Preference Status
              </span>
              <span className="text-xs text-fg-muted">
                (prefers-reduced-motion: reduce)
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Badge variant={effectiveReduced ? "brand" : "outline"} size="md">
                {effectiveReduced ? "Reduced Motion Active" : "Full Motion Active"}
              </Badge>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setInteractiveSimulateReduced((prev) => !prev)}
              >
                {interactiveSimulateReduced ? "Reset Simulation" : "Simulate Reduce"}
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-cmplt-md border border-border-subtle bg-subtle p-4 space-y-2">
              <span className="text-xs font-semibold text-fg-primary">
                WCAG 2.2 Success Criterion 2.3.3
              </span>
              <p className="cmplt-body-xs text-fg-muted leading-relaxed">
                When active, Three.js WebGL frame-tickers and continuous GSAP orbits are halted
                automatically to avoid vestibular trigger symptoms.
              </p>
            </div>
            <div className="rounded-cmplt-md border border-border-subtle bg-subtle p-4 space-y-2">
              <span className="text-xs font-semibold text-fg-primary">
                Hardware &amp; Battery Efficiency
              </span>
              <p className="cmplt-body-xs text-fg-muted leading-relaxed">
                Disabling high-refresh animation loops on laptops dramatically cuts GPU power
                consumption without degrading UI functionality.
              </p>
            </div>
          </div>

          <CliInstallTabs itemName="use-reduced-motion" />
        </Card>
      </section>

      {/* Hook 3: useMediaQuery */}
      <section id="use-media-query" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Laptop className="h-5 w-5 text-fg-accent" />
              <h2 className="cmplt-h3 text-fg-primary">useMediaQuery()</h2>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Reactive CSS media query subscription with clean listener cleanup.
            </p>
          </div>
          <Badge variant="mono">@cmplt/use-media-query</Badge>
        </div>

        <Card className="p-6 md:p-8 space-y-6">
          <div className="border-b border-border-subtle pb-4">
            <span className="text-xs font-semibold text-fg-primary uppercase tracking-wider block">
              Active Breakpoint Matrix (Resize window to test)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs">
            <div className="rounded-cmplt-md border border-border-subtle p-3 flex flex-col justify-between gap-2 bg-subtle/50">
              <span className="text-fg-muted">sm (≥ 640px)</span>
              <span className="flex items-center gap-1.5 font-semibold">
                {isSm ? (
                  <CheckCircle2 className="h-4 w-4 text-status-success" />
                ) : (
                  <XCircle className="h-4 w-4 text-fg-muted" />
                )}
                {isSm ? "MATCH" : "FALSE"}
              </span>
            </div>

            <div className="rounded-cmplt-md border border-border-subtle p-3 flex flex-col justify-between gap-2 bg-subtle/50">
              <span className="text-fg-muted">md (≥ 768px)</span>
              <span className="flex items-center gap-1.5 font-semibold">
                {isMd ? (
                  <CheckCircle2 className="h-4 w-4 text-status-success" />
                ) : (
                  <XCircle className="h-4 w-4 text-fg-muted" />
                )}
                {isMd ? "MATCH" : "FALSE"}
              </span>
            </div>

            <div className="rounded-cmplt-md border border-border-subtle p-3 flex flex-col justify-between gap-2 bg-subtle/50">
              <span className="text-fg-muted">lg (≥ 1024px)</span>
              <span className="flex items-center gap-1.5 font-semibold">
                {isLg ? (
                  <CheckCircle2 className="h-4 w-4 text-status-success" />
                ) : (
                  <XCircle className="h-4 w-4 text-fg-muted" />
                )}
                {isLg ? "MATCH" : "FALSE"}
              </span>
            </div>

            <div className="rounded-cmplt-md border border-border-subtle p-3 flex flex-col justify-between gap-2 bg-subtle/50">
              <span className="text-fg-muted">xl (≥ 1280px)</span>
              <span className="flex items-center gap-1.5 font-semibold">
                {isXl ? (
                  <CheckCircle2 className="h-4 w-4 text-status-success" />
                ) : (
                  <XCircle className="h-4 w-4 text-fg-muted" />
                )}
                {isXl ? "MATCH" : "FALSE"}
              </span>
            </div>

            <div className="rounded-cmplt-md border border-border-subtle p-3 flex flex-col justify-between gap-2 bg-subtle/50">
              <span className="text-fg-muted">dark-mode OS</span>
              <span className="flex items-center gap-1.5 font-semibold">
                {isDarkSystem ? (
                  <CheckCircle2 className="h-4 w-4 text-status-success" />
                ) : (
                  <XCircle className="h-4 w-4 text-fg-muted" />
                )}
                {isDarkSystem ? "DARK" : "LIGHT"}
              </span>
            </div>
          </div>

          <CliInstallTabs itemName="use-media-query" />
        </Card>
      </section>

      {/* Theme & Base Registry Items */}
      <section id="registry-base-theme" className="space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-fg-accent" />
            <h2 className="cmplt-h3 text-fg-primary">Theme &amp; Project Base</h2>
          </div>
          <p className="cmplt-body-sm text-fg-muted">
            Bootstrap full applications or inject OKLCH semantic variables with a single command.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="brand" size="sm">
                registry:base
              </Badge>
              <span className="text-xs font-mono text-fg-muted">@cmplt/base</span>
            </div>
            <CardTitle className="text-base">Full Project Initialization</CardTitle>
            <CardDescription className="cmplt-body-xs">
              Installs Base UI primitives, Lucide icons, Geist typography and OKLCH tokens into a clean Next.js project.
            </CardDescription>
            <pre className="rounded-cmplt-md border border-border-subtle bg-subtle p-3 font-mono text-xs text-fg-primary overflow-x-auto">
              npx shadcn@latest init https://cmplt.design/r/base.json
            </pre>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" size="sm">
                registry:theme
              </Badge>
              <span className="text-xs font-mono text-fg-muted">@cmplt/theme</span>
            </div>
            <CardTitle className="text-base">OKLCH Semantic Theme</CardTitle>
            <CardDescription className="cmplt-body-xs">
              Directly injects the 3-Tier OKLCH light and dark mode variable tokens into your Tailwind CSS v4 setup.
            </CardDescription>
            <CliInstallTabs itemName="theme" />
          </Card>
        </div>
      </section>
    </div>
  );
}
