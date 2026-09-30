"use client";

import * as React from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "@/components/theme-provider";
import { EngagementPanelBlock } from "@/registry/cmplt/blocks/engagement-panel-block";
import { AppManagerBlock } from "@/registry/cmplt/blocks/app-manager-block";
import { AiDeploymentCard } from "@/registry/cmplt/blocks/ai-deployment-card";
import { TokenSyncInspectorBlock } from "@/registry/cmplt/blocks/token-sync-inspector";
import { CliInstallTabs } from "@/components/docs/cli-install-tabs";
import { Button } from "@/registry/cmplt/ui/button";
import dynamic from "next/dynamic";
import { AnimatedCtaButton } from "@/registry/cmplt/ui/animated-cta-button";
import { HighlightInput } from "@/registry/cmplt/ui/highlight-input";
import { MotionSurface } from "@/registry/cmplt/ui/motion-surface";
import { Badge } from "@/registry/cmplt/ui/badge";

const InteractiveDotField = dynamic(
  () =>
    import("@/registry/cmplt/ui/interactive-dot-field").then(
      (m) => m.InteractiveDotField
    ),
  { ssr: false }
);
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/registry/cmplt/ui/card";
import { Field, FieldLabel, FieldDescription } from "@/registry/cmplt/ui/field";
import { Checkbox } from "@/registry/cmplt/ui/checkbox";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/cmplt/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/cmplt/ui/accordion";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/registry/cmplt/ui/tooltip";
import {
  ArrowRight,
  Sparkles,
  Terminal,
  Figma,
  ShieldCheck,
  ExternalLink,
  Sun,
  Moon,
} from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}


const HERO_PRIMARY_WORDS = ["The", "Complete", "Design", "System."];
const HERO_ACCENT_WORDS = ["Engineered", "in", "Code,", "Synced", "to", "Figma."];

export default function HomePage() {
  const { mode, setMode } = useTheme();
  const [installComponent, setInstallComponent] = React.useState(
    "interactive-dot-field"
  );
  const [cliCopied, setCliCopied] = React.useState(false);
  const [configCopied, setConfigCopied] = React.useState(false);

  const heroRef = React.useRef<HTMLElement>(null);

  const handleCliCopy = () => {
    navigator.clipboard.writeText("npx shadcn@latest add @cmplt/button");
    setCliCopied(true);
    setTimeout(() => setCliCopied(false), 2000);
  };

  const handleConfigCopy = () => {
    navigator.clipboard.writeText("npx shadcn@latest add @cmplt/config");
    setConfigCopied(true);
    setTimeout(() => setConfigCopied(false), 2000);
  };

  useGSAP(
    () => {
      const hero = heroRef.current;
      if (!hero) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      // Staggered, organic Hero entrance choreography
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        "[data-hero-badge]",
        { y: 14, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.75 }
      )
        .fromTo(
          "[data-hero-word]",
          {
            y: 26,
            opacity: 0,
            rotateX: -24,
            filter: "blur(6px)",
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.042,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-lead]",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75 },
          "-=0.55"
        )
        .fromTo(
          "[data-hero-ctas]",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.52"
        )
        .fromTo(
          "[data-hero-search]",
          { y: 14, opacity: 0, scale: 0.985 },
          { y: 0, opacity: 1, scale: 1, duration: 0.75 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-switcher]",
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          "-=0.48"
        );
    },
    { scope: heroRef }
  );

  return (
    <div className="relative overflow-hidden">
      {/* =====================================================================
          SECTION 1: HERO STAGE + THREE.JS INTERACTIVE DOT FIELD + GSAP PHYSICS
          Dedicated high-breathing-room hero stage across Mobile, Tablet, Desktop & Desktop+
         ===================================================================== */}
      <section
        ref={heroRef}
        className="relative border-b border-border-subtle py-12 sm:py-20 md:py-28 lg:py-36 2xl:py-44 overflow-hidden"
      >
        {/* Three.js WebGL Interactive Dot Matrix Field */}
        <InteractiveDotField />

        {/* Soft radial vignette so center typography retains crisp contrast while dots breathe around */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 34%, color-mix(in oklch, var(--bg-canvas) 68%, transparent) 0%, transparent 56%, color-mix(in oklch, var(--bg-canvas) 82%, transparent) 100%)",
          }}
        />

        <div className="cmplt-container relative z-10">
          {/* Hero Central Editorial Stack with Generous Vertical Rhythm */}
          <div className="mx-auto max-w-4xl 2xl:max-w-5xl text-center space-y-6 sm:space-y-8 md:space-y-10 2xl:space-y-12">
            <div
              data-hero-badge
              className="inline-flex items-center gap-2 rounded-full border border-border-default bg-surface/90 backdrop-blur-sm px-3.5 py-1.5 shadow-xs"
            >
              <Badge variant="success" size="sm">v1.5</Badge>
              <span className="text-xs text-fg-secondary">
                Headless primitives · W3C OKLCH tokens · shadcn registry
              </span>
            </div>

            <h1
              className="cmplt-display-xl mx-auto text-fg-primary"
              style={{ perspective: "900px" }}
            >
              {HERO_PRIMARY_WORDS.map((word, idx) => (
                <React.Fragment key={`p-${idx}`}>
                  <span
                    data-hero-word
                    className="inline-block will-change-transform"
                  >
                    {word}
                  </span>{" "}
                </React.Fragment>
              ))}
              <span className="relative inline">
                <span className="relative text-fg-brand">
                  {HERO_ACCENT_WORDS.map((word, idx) => (
                    <React.Fragment key={`a-${idx}`}>
                      <span
                        data-hero-word
                        className="inline-block will-change-transform"
                      >
                        {word}
                      </span>
                      {idx < HERO_ACCENT_WORDS.length - 1 ? " " : ""}
                    </React.Fragment>
                  ))}
                </span>
              </span>
            </h1>

            <p data-hero-lead className="cmplt-lead mx-auto">
              Stop gluing together headless primitives, custom Tailwind configs,
              and disconnected Figma files.{" "}
              <strong className="text-fg-primary">cmplt</strong> ships a production-ready
              design system with{" "}
              <strong className="text-fg-primary">Base UI accessibility</strong>,{" "}
              <strong className="text-fg-primary">W3C OKLCH tokens</strong>, and a{" "}
              <strong className="text-fg-primary">native shadcn registry</strong> — installed
              in one command.
            </p>

            {/* 2 Primary CTAs */}
            <div
              data-hero-ctas
              className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 w-full max-w-sm sm:max-w-none mx-auto"
            >
              <Link href="/docs" className="w-full sm:w-auto">
                <AnimatedCtaButton variant="accent-beam" size="lg" className="w-full sm:w-auto min-h-[44px]">
                  Explore Documentation
                  <ArrowRight className="h-4 w-4" />
                </AnimatedCtaButton>
              </Link>
              <Link href="/blocks" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" shape="pill" className="w-full sm:w-auto min-h-[44px]">
                  <Sparkles className="h-4 w-4 text-fg-brand" />
                  Browse UI Blocks
                </Button>
              </Link>
            </div>

            {/* CLI Quick-Copy Bar */}
            <div data-hero-search className="mx-auto max-w-md 2xl:max-w-lg pt-2 w-full">
              <button
                type="button"
                onClick={handleCliCopy}
                className="group flex w-full items-center gap-2.5 sm:gap-3 rounded-full border border-border-default bg-surface/90 backdrop-blur-sm px-3.5 sm:px-4 py-2.5 shadow-xs transition-colors hover:border-border-brand hover:bg-surface cursor-pointer min-h-[42px]"
                aria-label="Copy CLI install command"
              >
                <span className="text-fg-muted font-mono text-xs select-none">$</span>
                <span className="flex-1 text-left font-mono text-[11px] sm:text-xs text-fg-primary truncate min-w-0">
                  npx shadcn@latest add @cmplt/button
                </span>
                <span className={cn(
                  "shrink-0 text-[11px] font-medium transition-colors",
                  cliCopied ? "text-status-success" : "text-fg-muted group-hover:text-fg-brand"
                )}>
                  {cliCopied ? "Copied!" : "Copy"}
                </span>
              </button>
            </div>

            {/* Interactive Mode Switcher */}
            <div
              data-hero-switcher
              className="mx-auto pt-2 inline-flex items-center gap-1 rounded-full border border-border-default bg-surface/90 backdrop-blur-sm p-1 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setMode("light")}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-medium transition-all cursor-pointer min-h-[34px]",
                  mode === "light"
                    ? "bg-surface text-fg-primary shadow-xs"
                    : "text-fg-muted hover:text-fg-primary"
                )}
              >
                <Sun className="h-3.5 w-3.5 text-[var(--brand-500)]" />
                Light
              </button>
              <button
                type="button"
                onClick={() => setMode("dark")}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-medium transition-all cursor-pointer min-h-[34px]",
                  mode === "dark"
                    ? "bg-surface text-fg-primary shadow-xs"
                    : "text-fg-muted hover:text-fg-primary"
                )}
              >
                <Moon className="h-3.5 w-3.5 text-[var(--success-400)]" />
                Dark
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: CALIBRATED MULTI-SURFACE REFERENCE ARCHITECTURE
          Dedicated full-width architectural showcase stage with generous breathing room
         ===================================================================== */}
      <section className="cmplt-section border-b border-border-subtle">
        <div className="cmplt-container space-y-8 sm:space-y-12 md:space-y-16 2xl:space-y-20">
          <Tabs defaultValue="engagement" className="w-full space-y-6 sm:space-y-10 md:space-y-12 2xl:space-y-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 pb-2 border-b border-border-subtle/80">
              <div className="space-y-2 sm:space-y-3 max-w-2xl">
                <Badge variant="brand">4-Step Surface Hierarchy</Badge>
                <h2 className="cmplt-h2 text-fg-primary">
                  Calibrated Multi-Surface Reference Architecture
                </h2>
                <p className="cmplt-body text-fg-secondary">
                  Inspect how our 4-step surface hierarchy (<strong className="text-fg-primary">Canvas → Shell → Elevated Panel → Inset Group</strong>) maintains tactile depth in both Matte Graphite and Warm Alabaster.
                </p>
              </div>
              <TabsList variant="segmented" className="w-full sm:w-auto overflow-x-auto max-w-full justify-start self-start lg:self-auto">
                <TabsTrigger value="both" className="whitespace-nowrap">
                  <span className="sm:hidden">Overview</span>
                  <span className="hidden sm:inline">Split Overview</span>
                </TabsTrigger>
                <TabsTrigger value="engagement" className="whitespace-nowrap">
                  <span>Engagement</span>
                  <span className="hidden sm:inline"> Shell (Dark Ref)</span>
                </TabsTrigger>
                <TabsTrigger value="apps" className="whitespace-nowrap">
                  <span>App Manager</span>
                  <span className="hidden sm:inline"> (Light Ref)</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="both">
              <div className="space-y-12 md:space-y-16 lg:space-y-20 2xl:space-y-24">
                <div className="cmplt-stage bg-cmplt-dots">
                  <EngagementPanelBlock />
                </div>
                <div className="cmplt-stage bg-cmplt-dots">
                  <AppManagerBlock />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="engagement">
              <div className="cmplt-stage bg-cmplt-dots">
                <EngagementPanelBlock />
              </div>
            </TabsContent>

            <TabsContent value="apps">
              <div className="cmplt-stage bg-cmplt-dots">
                <AppManagerBlock />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: INTERACTIVE CONTROL SURFACES & TELEMETRY
          Separated from the Hero & Reference Shells to eliminate visual overload.
          Tailored per viewport:
          - Mobile: 1-column stack with 32px gap
          - Tablet (md): 2-column balanced grid
          - Desktop (lg/xl): 2-row spacious 12-col architectural grid (6+6 top, 7+5 bottom)
          - Desktop+ (2xl): Panoramic 12-col 3-zone gallery (5 cols AI + 4 cols Token + 3 cols Key)
         ===================================================================== */}
      <section className="cmplt-section border-b border-border-subtle bg-surface/35">
        <div className="cmplt-container space-y-12 md:space-y-16 2xl:space-y-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <Badge variant="mono">Interactive Control Surfaces</Badge>
              <h2 className="cmplt-h2 text-fg-primary">
                Live Telemetry, Token Parity &amp; Hierarchy Controls
              </h2>
              <p className="cmplt-body text-fg-secondary">
                Every primitive and block is engineered with generous internal padding, concentric inner radii, and responsive grid alignment across Mobile, Tablet, Desktop, and Desktop+.
              </p>
            </div>
            <Link href="/blocks" className="self-start lg:self-auto">
              <Button variant="outline" size="md">
                Explore All 5 Registry Blocks
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-10 2xl:gap-12 items-start">
            {/* Block 1: AI Edge Deployment Card */}
            <div className="md:col-span-2 lg:col-span-6 2xl:col-span-5">
              <AiDeploymentCard />
            </div>

            {/* Block 2: Token Sync Inspector */}
            <div className="md:col-span-2 lg:col-span-6 2xl:col-span-4">
              <TokenSyncInspectorBlock />
            </div>

            {/* Block 3: Registry Access Key & Live Endpoints */}
            <div className="md:col-span-2 lg:col-span-12 2xl:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 2xl:grid-cols-1 gap-8 md:gap-10 2xl:gap-8">
              <Card variant="default" className="md:col-span-1 lg:col-span-7 2xl:col-span-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-base">Registry Access Key</CardTitle>
                    <Badge variant="mono" size="sm" dot={false}>
                      GSAP + Base UI
                    </Badge>
                  </div>
                  <CardDescription>
                    Elevated in hierarchy via GSAP HighlightInput &amp; AnimatedCtaButton.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <Field>
                    <FieldLabel>Highlighted Namespace Scope</FieldLabel>
                    <HighlightInput
                      shape="rounded"
                      highlightMode="ambient"
                      defaultValue="@cmplt/blocks"
                    />
                    <FieldDescription>
                      GSAP border light elevates key inputs in the hierarchy.
                    </FieldDescription>
                  </Field>

                  <div className="space-y-2.5 pt-1">
                    <label className="flex items-center gap-2.5 text-xs text-fg-secondary cursor-pointer">
                      <Checkbox defaultChecked />
                      <span>Include W3C Figma Tokens</span>
                    </label>
                    <label className="flex items-center gap-2.5 text-xs text-fg-secondary cursor-pointer">
                      <Checkbox defaultChecked />
                      <span>Enable GSAP Natural Motion</span>
                    </label>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border-subtle pt-5">
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <AnimatedCtaButton
                          variant="accent-beam"
                          size="sm"
                          className="w-full"
                          onClick={handleConfigCopy}
                        >
                          <Terminal className="h-3.5 w-3.5" />
                          {configCopied ? "Copied @cmplt config!" : "Generate CLI Config"}
                        </AnimatedCtaButton>
                      }
                    />
                    <TooltipContent>
                      Copies @cmplt registry config to clipboard
                    </TooltipContent>
                  </Tooltip>
                </CardFooter>
              </Card>

              <Card
                variant="subtle"
                className="md:col-span-1 lg:col-span-5 2xl:col-span-1 p-6 md:p-7 2xl:p-8 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-semibold text-fg-primary">
                      26 Live Registry Endpoints
                    </span>
                    <Badge variant="success" size="sm">
                      Online
                    </Badge>
                  </div>
                  <p className="cmplt-body-sm text-fg-muted leading-relaxed">
                    Every component, GSAP motion primitive, and reference shell is served live under{" "}
                    <code className="font-mono text-fg-primary">/r/[name].json</code> with automatic dependency resolution.
                  </p>
                </div>
                <a
                  href="/r/index.json"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg-brand hover:underline pt-2"
                >
                  Inspect /r/index.json <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: THE 3 PILLARS OF CMPLT (ARCHITECTURAL BENTO)
          - Mobile: 1 col
          - Tablet (md): 2 cols (Card 3 spans full width horizontally)
          - Desktop (lg) & Desktop+ (2xl): 3 equal columns with generous padding
         ===================================================================== */}
      <section className="cmplt-section border-b border-border-subtle">
        <div className="cmplt-container space-y-12 md:space-y-16 2xl:space-y-20">
          <div className="max-w-3xl space-y-4">
            <Badge variant="brand">Why cmplt design system?</Badge>
            <h2 className="cmplt-h2 text-fg-primary">
              Three architectural breakthroughs in one cohesive system.
            </h2>
            <p className="cmplt-body text-fg-secondary">
              Most teams waste months gluing together headless primitives, custom
              Tailwind configs, and disconnected Figma files.{" "}
              <strong className="text-fg-primary">cmplt</strong> unifies all three.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 2xl:gap-12">
            <MotionSurface delay={0.05} className="md:col-span-1">
              <Card
                variant="interactive"
                className="h-full p-7 md:p-8 2xl:p-10 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-squircle bg-subtle border border-border-subtle text-fg-brand">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <Badge variant="mono" size="sm" dot={false}>
                    Pillar 01 — @base-ui/react
                  </Badge>
                  <h3 className="cmplt-h4 text-fg-primary">
                    Uncompromising Base UI Accessibility
                  </h3>
                  <p className="cmplt-body-sm text-fg-secondary">
                    Built on <code className="font-mono text-fg-primary">@base-ui/react</code> by the engineers behind Radix, Floating UI, and MUI. Declarative{" "}
                    <code className="font-mono text-fg-brand">data-[open]</code>,{" "}
                    <code className="font-mono text-fg-brand">data-[highlighted]</code>, and{" "}
                    <code className="font-mono text-fg-brand">data-[checked]</code> selectors make styling effortless.
                  </p>
                </div>
                <div className="mt-8 border-t border-border-subtle pt-5">
                  <Link
                    href="/docs/components/dialog"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg-brand hover:underline"
                  >
                    Explore Base UI Primitives <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            </MotionSurface>

            <MotionSurface delay={0.12} className="md:col-span-1">
              <Card
                variant="interactive"
                className="h-full p-7 md:p-8 2xl:p-10 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-squircle bg-subtle border border-border-subtle text-fg-brand">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <Badge variant="mono" size="sm" dot={false}>
                    Pillar 02 — shadcn Registry
                  </Badge>
                  <h3 className="cmplt-h4 text-fg-primary">
                    Zero Lock-in via Native Registry CLI
                  </h3>
                  <p className="cmplt-body-sm text-fg-secondary">
                    No opaque node_modules CSS bundles. Every primitive, token sheet, and UI block is served as a schema-validated JSON artifact under{" "}
                    <code className="font-mono text-fg-brand">/r/[name].json</code>. Install with{" "}
                    <code className="font-mono text-fg-primary">npx shadcn add @cmplt/*</code> and own 100% of your code.
                  </p>
                </div>
                <div className="mt-8 border-t border-border-subtle pt-5">
                  <Link
                    href="/docs#registry"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg-brand hover:underline"
                  >
                    See Registry Architecture <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            </MotionSurface>

            <MotionSurface
              delay={0.19}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card
                variant="interactive"
                className="h-full p-7 md:p-8 2xl:p-10 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-squircle bg-subtle border border-border-subtle text-fg-brand">
                    <Figma className="h-5 w-5" />
                  </div>
                  <Badge variant="mono" size="sm" dot={false}>
                    Pillar 03 — W3C DTCG + OKLCH
                  </Badge>
                  <h3 className="cmplt-h4 text-fg-primary">
                    Code-First, Figma-Synced Token DNA
                  </h3>
                  <p className="cmplt-body-sm text-fg-secondary">
                    Our 3-tier token hierarchy (Primitive → Semantic → Component) is authored in calibrated OKLCH and mirrored in W3C DTCG JSON with explicit Figma Variable Scopes (<code className="font-mono text-fg-brand">FRAME_FILL</code>, <code className="font-mono text-fg-brand">TEXT_FILL</code>).
                  </p>
                </div>
                <div className="mt-8 border-t border-border-subtle pt-5">
                  <Link
                    href="/figma"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg-brand hover:underline"
                  >
                    Inspect Code ↔ Figma Bridge <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            </MotionSurface>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: INTERACTIVE SHADCN REGISTRY EXPLORER
         ===================================================================== */}
      <section className="cmplt-section border-b border-border-subtle bg-surface/40">
        <div className="cmplt-container">
          <div className="grid gap-10 md:gap-12 lg:gap-16 2xl:gap-24 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="brand">Native Registry Distribution</Badge>
              <h2 className="cmplt-h2 text-fg-primary">
                One CLI command. Tokens, GSAP motion, or multi-surface shells.
              </h2>
              <p className="cmplt-body text-fg-secondary">
                Select any registry item below to generate its live{" "}
                <code className="font-mono text-fg-primary">shadcn</code> CLI installation command and inspect its compiled JSON endpoint.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "liquid-tabs",
                  "liquid-switch",
                  "liquid-button",
                  "interactive-dot-field",
                  "animated-cta-button",
                  "highlight-input",
                  "motion-surface",
                  "engagement-panel-block",
                  "app-manager-block",
                  "tokens",
                  "button",
                ].map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setInstallComponent(name)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 font-mono text-xs transition-all cursor-pointer",
                      installComponent === name
                        ? "border-border-brand bg-brand-subtle text-fg-brand font-semibold"
                        : "border-border-subtle bg-surface text-fg-secondary hover:border-border-default hover:text-fg-primary"
                    )}
                  >
                    @cmplt/{name}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <CliInstallTabs itemName={installComponent} />
              <Card className="p-6 md:p-7 2xl:p-8 bg-subtle/50 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-fg-muted">
                    Automatic Dependency Resolution
                  </span>
                  <Badge variant="success" size="sm">
                    Schema Validated
                  </Badge>
                </div>
                <p className="cmplt-body-sm text-fg-secondary">
                  When you run{" "}
                  <code className="font-mono text-fg-primary">
                    npx shadcn@latest add @cmplt/{installComponent}
                  </code>
                  , the CLI automatically installs{" "}
                  <code className="font-mono text-fg-brand">@base-ui/react</code>, resolves internal{" "}
                  <code className="font-mono text-fg-brand">registryDependencies</code>, and places the TypeScript source into your project.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: ARCHITECTURAL FAQ (Built with @cmplt/accordion)
          - Mobile & Tablet: Stacked header + Accordion card
          - Desktop & Desktop+: Asymmetric 12-column split (4 cols sticky intro + 8 cols Accordion)
         ===================================================================== */}
      <section className="cmplt-section">
        <div className="cmplt-container">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-12 lg:gap-16 2xl:gap-24 items-start">
            <div className="lg:col-span-4 space-y-4">
              <Badge variant="outline">FAQ</Badge>
              <h2 className="cmplt-h2 text-fg-primary">
                Frequently Asked Questions
              </h2>
              <p className="cmplt-body text-fg-secondary">
                Everything you need to know about our calibrated luminance scale, the native{" "}
                <code className="font-mono text-fg-primary">shadcn</code> registry, and W3C Figma Variables synchronization.
              </p>
            </div>

            <div className="lg:col-span-8">
              <Card className="p-6 sm:p-8 2xl:p-10">
                <Accordion defaultValue={["faq-1"]}>
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>
                      Why does cmplt avoid pure #FFFFFF white and #000000 black?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="cmplt-prose">
                        Extreme luminance poles cause halation and eye strain in data-dense interfaces, and leave no room for subtle surface elevation. Our Light Mode uses warm stone/alabaster (<code className="font-mono text-fg-primary">#EEEEEC</code> → <code className="font-mono text-fg-primary">#FBFBF9</code>) while Dark Mode uses matte graphite (<code className="font-mono text-fg-primary">#1F1F1E</code> → <code className="font-mono text-fg-primary">#262625</code> → <code className="font-mono text-fg-primary">#2E2E2D</code>), allowing nested panels and grouped key-value boxes to separate naturally.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger>
                      How does the @cmplt shadcn registry work under the hood?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="cmplt-prose">
                        Our repository contains a central <code className="font-mono text-fg-primary">registry.json</code> manifest and a build script that packages every Base UI component, token sheet, and block into static JSON endpoints under <code className="font-mono text-fg-primary">/r/[name].json</code>. Any developer can install them with the standard <code className="font-mono text-fg-primary">shadcn</code> CLI.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>
                      How are the Code Design Tokens transferred to Figma later?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="cmplt-prose">
                        Every token in <code className="font-mono text-fg-primary">src/styles/tokens.css</code> has a 1:1 counterpart in <code className="font-mono text-fg-primary">src/registry/cmplt/tokens/tokens.json</code> following the W3C Design Tokens Community Group (DTCG) specification. You can import this JSON directly into Figma Variables via Tokens Studio or the Figma REST API.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
