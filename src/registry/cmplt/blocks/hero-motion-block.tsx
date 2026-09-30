"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { AnimatedCtaButton } from "@/registry/cmplt/ui/animated-cta-button";
import { LiquidButton } from "@/registry/cmplt/ui/liquid-button";
import { Badge } from "@/registry/cmplt/ui/badge";

const InteractiveDotField = dynamic(
  () =>
    import("@/registry/cmplt/ui/interactive-dot-field").then(
      (m) => m.InteractiveDotField
    ),
  { ssr: false }
);
import { Heading, Text } from "@/registry/cmplt/ui/typography";
import { ArrowRight, Terminal, Sparkles, ShieldCheck, Zap } from "lucide-react";

export function HeroMotionBlock() {
  return (
    <section className="relative overflow-hidden rounded-cmplt-2xl border border-border-default bg-canvas/80 p-8 sm:p-12 md:p-16 lg:p-20 shadow-cmplt-lg">
      {/* Three.js + GSAP Interactive Background */}
      <InteractiveDotField
        spacing={26}
        interactionRadius={210}
        maxDisplacement={8}
        dotSize={2.4}
        className="opacity-70 dark:opacity-60"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center space-y-8">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2">
          <Badge variant="brand" size="md" className="backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>cmplt Design System v1.2</span>
          </Badge>
          <Badge variant="outline" size="md" className="hidden sm:inline-flex backdrop-blur-md">
            Base UI · OKLCH · shadcn Registry
          </Badge>
        </div>

        {/* Liquid Utopia Typography */}
        <div className="space-y-4">
          <Heading size="h1" as="h1" className="text-balance tracking-tight">
            Design Engineering with{" "}
            <span className="text-fg-accent underline decoration-border-accent/40 decoration-wavy decoration-2 underline-offset-8">
              Parity &amp; Polish
            </span>
          </Heading>
          <Text
            variant="lead"
            measure="lead"
            className="mx-auto text-fg-secondary text-balance"
          >
            Unstyled WAI-ARIA compliant primitives, mathematical 3-tier OKLCH token scales,
            and organic natural-motion physics — installed directly into your repository.
          </Text>
        </div>

        {/* Action Pair */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <AnimatedCtaButton
            variant="accent-beam"
            size="lg"
            className="min-w-[170px]"
            onClick={() => window.location.href = "/docs"}
          >
            Start Exploring
            <ArrowRight className="h-4 w-4 ml-1" />
          </AnimatedCtaButton>

          <LiquidButton
            variant="surface"
            size="lg"
            className="min-w-[160px]"
            onClick={() => window.location.href = "/blocks"}
          >
            Browse Pro Blocks
          </LiquidButton>
        </div>

        {/* CLI Terminal Pill */}
        <div className="pt-4 flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-cmplt-full border border-border-default/80 bg-surface/85 px-4 py-2 font-mono text-xs text-fg-secondary backdrop-blur-md shadow-cmplt-xs">
            <Terminal className="h-3.5 w-3.5 text-fg-accent" />
            <span className="text-fg-muted">Run</span>
            <span className="text-fg-primary font-semibold">npx shadcn@latest add @cmplt/base</span>
          </div>
        </div>

        {/* Trust & Architecture Metrics */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-border-subtle/80 text-left">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-fg-primary">
              <ShieldCheck className="h-4 w-4 text-status-success" />
              <span>WCAG 2.2 AAA</span>
            </div>
            <p className="cmplt-body-xs text-fg-muted">
              Auto reduced-motion fallbacks &amp; full ARIA semantics.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-fg-primary">
              <Zap className="h-4 w-4 text-fg-accent" />
              <span>Tailwind v4 Native</span>
            </div>
            <p className="cmplt-body-xs text-fg-muted">
              3-tier OKLCH @theme tokens with zero runtime CSS overhead.
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-fg-primary">
              <Sparkles className="h-4 w-4 text-accent" />
              <span>Figma DTCG Sync</span>
            </div>
            <p className="cmplt-body-xs text-fg-muted">
              1:1 variable parity between tokens.json and Figma Dev Mode.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
