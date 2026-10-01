"use client";

import * as React from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
} from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const HERO_WORDS = ["THE", "COMPLETE", "DESIGNSYSTEM."];

export default function HomePage() {
  const [installComponent, setInstallComponent] = React.useState(
    "interactive-dot-field"
  );
  const [configCopied, setConfigCopied] = React.useState(false);
  const heroRef = React.useRef<HTMLElement>(null);

  // Enable CSS scroll-snap on html while on HomePage
  React.useEffect(() => {
    document.documentElement.classList.add("snap-y", "snap-mandatory");
    return () => {
      document.documentElement.classList.remove("snap-y", "snap-mandatory");
    };
  }, []);

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
            stagger: 0.06,
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
        );
    },
    { scope: heroRef }
  );

  return (
    <div className="relative">
      {/* =====================================================================
          SECTION 1: HERO STAGE (Paper Design 11-0)
          Min 100vh height, snap-start, uppercase headline, glowing CTA
         ===================================================================== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center snap-start snap-always py-20 sm:py-28 md:py-36 overflow-hidden"
      >
        {/* Three.js WebGL Interactive Dot Matrix Field */}
        <InteractiveDotField />

        {/* Soft radial vignette as calibrated in Paper design */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(circle at 50% 34%, color-mix(in oklch, var(--bg-canvas) 68%, transparent) 0%, transparent 56%, color-mix(in oklch, var(--bg-canvas) 82%, transparent) 100%)",
          }}
        />

        <div className="cmplt-container relative z-10 my-auto">
          <div className="mx-auto max-w-4xl 2xl:max-w-5xl text-center space-y-8 sm:space-y-10 md:space-y-12">
            {/* Version Badge from Paper */}
            <div
              data-hero-badge
              className="inline-flex items-center gap-2 rounded-full bg-subtle px-3.5 py-1.5 shadow-none"
            >
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface text-xs font-mono font-medium text-fg-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-status-success inline-block shrink-0" />
                v1.5
              </div>
              <span className="text-xs text-fg-secondary">
                Headless primitives · W3C OKLCH tokens · shadcn registry
              </span>
            </div>

            {/* Uppercase Hero Headline in Brand Accent */}
            <h1
              className="mx-auto text-center font-black uppercase tracking-[-0.035em] text-fg-brand text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.04] text-balance"
              style={{ perspective: "900px" }}
            >
              {HERO_WORDS.map((word, idx) => (
                <span
                  key={idx}
                  data-hero-word
                  className="inline-block will-change-transform mr-[0.25em] last:mr-0"
                >
                  {word}
                </span>
              ))}
            </h1>

            <p data-hero-lead className="cmplt-lead mx-auto text-fg-secondary max-w-3xl text-balance">
              Stop gluing together headless primitives, custom Tailwind configs,
              and disconnected Figma files. <strong className="text-fg-primary">cmplt</strong> ships a production-ready
              design system with <strong className="text-fg-primary">Base UI accessibility</strong>,{" "}
              <strong className="text-fg-primary">W3C OKLCH tokens</strong>, and a{" "}
              <strong className="text-fg-primary">native shadcn registry</strong> — installed
              in one command.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div
              data-hero-ctas
              className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 w-full max-w-sm sm:max-w-none mx-auto"
            >
              <Link href="/docs" className="w-full sm:w-auto">
                <AnimatedCtaButton
                  variant="accent-beam"
                  size="lg"
                  className="w-full sm:w-auto min-h-[44px] rounded-full border-0 shadow-none px-6"
                >
                  Explore Documentation
                  <ArrowRight className="h-4 w-4" />
                </AnimatedCtaButton>
              </Link>
              <Link href="/blocks" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  shape="pill"
                  className="w-full sm:w-auto min-h-[44px] border-0 shadow-none bg-surface text-fg-primary hover:bg-subtle px-6"
                >
                  <Sparkles className="h-4 w-4 text-fg-brand" />
                  Browse UI Blocks
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 222px Soft Edge Fade to Canvas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 inset-x-0 h-[222px] bg-gradient-to-b from-transparent to-canvas z-10"
        />
      </section>

      {/* =====================================================================
          SECTION 2: LIVE TELEMETRY, TOKEN PARITY & HIERARCHY CONTROLS (Paper Design 5J-0)
          Min 100vh height, snap-start, uppercase heading, borderless cards
         ===================================================================== */}
      <section className="relative min-h-screen flex flex-col justify-center snap-start snap-always py-20 sm:py-28 md:py-36 overflow-hidden [&_.cmplt-card]:border-0 [&_.cmplt-card]:shadow-none [&_.cmplt-card]:rounded-[20px]">
        <div className="cmplt-container relative z-10 my-auto space-y-10 sm:space-y-14 md:space-y-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <Badge variant="mono" className="border-0 shadow-none bg-subtle text-fg-secondary">
                INTERACTIVE CONTROL SURFACES
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-0.035em] text-fg-primary leading-tight text-balance">
                Live Telemetry, Token Parity &amp; Hierarchy Controls
              </h2>
              <p className="cmplt-body text-fg-secondary">
                Every primitive and block is engineered with generous internal padding, concentric inner radii, and responsive grid alignment across Mobile, Tablet, Desktop, and Desktop+.
              </p>
            </div>
            <Link href="/blocks" className="self-start lg:self-auto shrink-0">
              <Button variant="outline" size="md" shape="pill" className="border-0 shadow-none bg-surface text-fg-primary hover:bg-subtle">
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
              <Card variant="default" className="md:col-span-1 lg:col-span-7 2xl:col-span-1 rounded-[20px] bg-surface border-0 shadow-none">
                <CardHeader className="pb-3 border-b border-border-subtle/40">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-base">Registry Access Key</CardTitle>
                    <Badge variant="mono" size="sm" dot={false} className="border-0 bg-subtle">
                      GSAP + Base UI
                    </Badge>
                  </div>
                  <CardDescription>
                    Elevated in hierarchy via GSAP HighlightInput &amp; AnimatedCtaButton.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5 pt-4">
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
                <CardFooter className="pt-4">
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <AnimatedCtaButton
                          variant="accent-beam"
                          size="sm"
                          className="w-full border-0 shadow-none rounded-full"
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
                className="md:col-span-1 lg:col-span-5 2xl:col-span-1 p-6 md:p-7 2xl:p-8 flex flex-col justify-between space-y-4 rounded-[20px] bg-surface border-0 shadow-none"
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

        {/* 222px Soft Edge Fade to Canvas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 inset-x-0 h-[222px] bg-gradient-to-b from-transparent to-canvas z-10"
        />
      </section>

      {/* =====================================================================
          SECTION 3: THE 3 PILLARS OF CMPLT (Paper Design DI-0)
          Min 100vh height, snap-start, uppercase heading, borderless cards
         ===================================================================== */}
      <section className="relative min-h-screen flex flex-col justify-center snap-start snap-always py-20 sm:py-28 md:py-36 overflow-hidden [&_.cmplt-card]:border-0 [&_.cmplt-card]:shadow-none [&_.cmplt-card]:rounded-[20px]">
        <div className="cmplt-container relative z-10 my-auto space-y-10 sm:space-y-14 md:space-y-16">
          <div className="max-w-3xl space-y-4">
            <Badge variant="brand" className="border-0 shadow-none bg-subtle text-fg-secondary">
              WHY CMPLT DESIGN SYSTEM?
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-0.035em] text-fg-primary leading-tight text-balance">
              Three architectural breakthroughs in one cohesive system
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
                className="h-full p-7 md:p-8 2xl:p-10 flex flex-col justify-between rounded-[20px] bg-surface border-0 shadow-none hover:bg-subtle/80"
              >
                <div className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-subtle text-fg-brand">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <Badge variant="mono" size="sm" dot={false} className="border-0 bg-subtle">
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
                <div className="mt-8 pt-5">
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
                className="h-full p-7 md:p-8 2xl:p-10 flex flex-col justify-between rounded-[20px] bg-surface border-0 shadow-none hover:bg-subtle/80"
              >
                <div className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-subtle text-fg-brand">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <Badge variant="mono" size="sm" dot={false} className="border-0 bg-subtle">
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
                <div className="mt-8 pt-5">
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
                className="h-full p-7 md:p-8 2xl:p-10 flex flex-col justify-between rounded-[20px] bg-surface border-0 shadow-none hover:bg-subtle/80"
              >
                <div className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-subtle text-fg-brand">
                    <Figma className="h-5 w-5" />
                  </div>
                  <Badge variant="mono" size="sm" dot={false} className="border-0 bg-subtle">
                    Pillar 03 — W3C DTCG + OKLCH
                  </Badge>
                  <h3 className="cmplt-h4 text-fg-primary">
                    Code-First, Figma-Synced Token DNA
                  </h3>
                  <p className="cmplt-body-sm text-fg-secondary">
                    Our 3-tier token hierarchy (Primitive → Semantic → Component) is authored in calibrated OKLCH and mirrored in W3C DTCG JSON with explicit Figma Variable Scopes (<code className="font-mono text-fg-brand">FRAME_FILL</code>, <code className="font-mono text-fg-brand">TEXT_FILL</code>).
                  </p>
                </div>
                <div className="mt-8 pt-5">
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

        {/* 222px Soft Edge Fade to Canvas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 inset-x-0 h-[222px] bg-gradient-to-b from-transparent to-canvas z-10"
        />
      </section>

      {/* =====================================================================
          SECTION 4: INTERACTIVE SHADCN REGISTRY EXPLORER (Paper Design FB-0)
          Min 100vh height, snap-start, uppercase heading, borderless cards
         ===================================================================== */}
      <section className="relative min-h-screen flex flex-col justify-center snap-start snap-always py-20 sm:py-28 md:py-36 overflow-hidden [&_.cmplt-card]:border-0 [&_.cmplt-card]:shadow-none [&_.cmplt-card]:rounded-[20px]">
        <div className="cmplt-container relative z-10 my-auto">
          <div className="grid gap-10 md:gap-12 lg:gap-16 2xl:gap-24 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="brand" className="border-0 shadow-none bg-subtle text-fg-secondary">
                NATIVE REGISTRY DISTRIBUTION
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-0.035em] text-fg-primary leading-tight text-balance">
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
                      "rounded-full px-3.5 py-1.5 font-mono text-xs transition-all cursor-pointer border-0 shadow-none",
                      installComponent === name
                        ? "bg-brand/15 text-fg-brand font-semibold"
                        : "bg-surface text-fg-secondary hover:text-fg-primary hover:bg-subtle"
                    )}
                  >
                    @cmplt/{name}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <CliInstallTabs itemName={installComponent} />
              <Card className="p-6 md:p-7 2xl:p-8 bg-surface rounded-[20px] border-0 shadow-none space-y-2.5">
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

        {/* 222px Soft Edge Fade to Canvas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 inset-x-0 h-[222px] bg-gradient-to-b from-transparent to-canvas z-10"
        />
      </section>

      {/* =====================================================================
          SECTION 5: ARCHITECTURAL FAQ (Paper Design H6-0)
          Min 100vh height, snap-start, uppercase heading, borderless cards
         ===================================================================== */}
      <section className="relative min-h-screen flex flex-col justify-center snap-start snap-always py-20 sm:py-28 md:py-36 overflow-hidden [&_.cmplt-card]:border-0 [&_.cmplt-card]:shadow-none [&_.cmplt-card]:rounded-[20px]">
        <div className="cmplt-container relative z-10 my-auto">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-12 lg:gap-16 2xl:gap-24 items-start">
            <div className="lg:col-span-4 space-y-4">
              <Badge variant="outline" className="border-0 shadow-none bg-subtle text-fg-secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-0.035em] text-fg-primary leading-tight text-balance">
                Frequently Asked Questions
              </h2>
              <p className="cmplt-body text-fg-secondary">
                Everything you need to know about our calibrated luminance scale, the native{" "}
                <code className="font-mono text-fg-primary">shadcn</code> registry, and W3C Figma Variables synchronization.
              </p>
            </div>

            <div className="lg:col-span-8">
              <Card className="p-6 sm:p-8 2xl:p-10 rounded-[20px] bg-surface border-0 shadow-none">
                <Accordion defaultValue={["faq-1"]}>
                  <AccordionItem value="faq-1" className="border-border-subtle/40">
                    <AccordionTrigger>
                      Why does cmplt avoid pure #FFFFFF white and #000000 black?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="cmplt-prose">
                        Extreme luminance poles cause halation and eye strain in data-dense interfaces, and leave no room for subtle surface elevation. Our Light Mode uses warm stone/alabaster (<code className="font-mono text-fg-primary">#EEEEEC</code> → <code className="font-mono text-fg-primary">#FBFBF9</code>) while Dark Mode uses matte graphite (<code className="font-mono text-fg-primary">#1F1F1E</code> → <code className="font-mono text-fg-primary">#262625</code> → <code className="font-mono text-fg-primary">#2E2E2D</code>), allowing nested panels and grouped key-value boxes to separate naturally.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2" className="border-border-subtle/40">
                    <AccordionTrigger>
                      How does the @cmplt shadcn registry work under the hood?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="cmplt-prose">
                        Our repository contains a central <code className="font-mono text-fg-primary">registry.json</code> manifest and a build script that packages every Base UI component, token sheet, and block into static JSON endpoints under <code className="font-mono text-fg-primary">/r/[name].json</code>. Any developer can install them with the standard <code className="font-mono text-fg-primary">shadcn</code> CLI.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3" className="border-border-subtle/40">
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

        {/* 222px Soft Edge Fade to Canvas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 inset-x-0 h-[222px] bg-gradient-to-b from-transparent to-canvas z-10"
        />
      </section>
    </div>
  );
}
