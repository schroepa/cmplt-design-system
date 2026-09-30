"use client";

import * as React from "react";
import { HeroMotionBlock } from "@/registry/cmplt/blocks/hero-motion-block";
import { TokenSyncInspectorBlock } from "@/registry/cmplt/blocks/token-sync-inspector";
import { PricingTierBlock } from "@/registry/cmplt/blocks/pricing-tier-block";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Heading, Text } from "@/registry/cmplt/ui/typography";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/cmplt/ui/card";
import { Sparkles, Layers, ShieldCheck, Terminal } from "lucide-react";

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-canvas text-fg-primary py-12 md:py-20 lg:py-24 space-y-24 md:space-y-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
        {/* 1. Interactive Hero Motion Block */}
        <HeroMotionBlock />

        {/* 2. Feature Matrix */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="brand">Architecture Pillars</Badge>
            <Heading size="h2" as="h2">Engineered for Scalable Craft</Heading>
            <Text tone="muted">
              Three fundamental design engineering decisions powering cmplt.
            </Text>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card variant="subtle" className="p-6 space-y-3">
              <div className="h-10 w-10 rounded-md bg-brand-subtle flex items-center justify-center text-fg-brand">
                <Layers className="h-5 w-5" />
              </div>
              <CardTitle className="text-base">3-Tier OKLCH Scales</CardTitle>
              <CardDescription className="cmplt-body-xs leading-relaxed">
                Calibrated low-chroma Warm Stone and Matte Graphite palettes ensuring balanced
                contrast ratios without blinding whites or muddy grays.
              </CardDescription>
            </Card>

            <Card variant="subtle" className="p-6 space-y-3">
              <div className="h-10 w-10 rounded-md bg-brand-subtle flex items-center justify-center text-fg-brand">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <CardTitle className="text-base">WAI-ARIA Accessibility</CardTitle>
              <CardDescription className="cmplt-body-xs leading-relaxed">
                Powered by @base-ui/react unstyled state machines. Full keyboard ergonomics,
                screen reader announcements, and automatic reduced-motion fallbacks.
              </CardDescription>
            </Card>

            <Card variant="subtle" className="p-6 space-y-3">
              <div className="h-10 w-10 rounded-md bg-brand-subtle flex items-center justify-center text-fg-brand">
                <Sparkles className="h-5 w-5" />
              </div>
              <CardTitle className="text-base">Natural Motion Physics</CardTitle>
              <CardDescription className="cmplt-body-xs leading-relaxed">
                Interactive Three.js particle fields and GSAP gooey liquid filters that react
                naturally to pointer velocity and proximity.
              </CardDescription>
            </Card>
          </div>
        </section>

        {/* 3. Live Token Sync Inspector Block */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-border-subtle pb-4">
            <div>
              <Heading size="h3" as="h3">Live Token Architecture</Heading>
              <Text tone="muted" className="text-xs">
                Inspect 3-tier semantic token resolution and gamut-mapped OKLCH values in real time.
              </Text>
            </div>
            <Badge variant="mono">@cmplt/token-sync-inspector</Badge>
          </div>
          <TokenSyncInspectorBlock />
        </section>

        {/* 4. Complete Pricing Tier Block */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-border-subtle pb-4">
            <div>
              <Heading size="h3" as="h3">Tiered Commercial Elevation</Heading>
              <Text tone="muted" className="text-xs">
                Production-grade pricing matrix demonstrating Bringhurst typography measures and badge accents.
              </Text>
            </div>
            <Badge variant="mono">@cmplt/pricing-tier-block</Badge>
          </div>
          <PricingTierBlock />
        </section>
      </div>
    </main>
  );
}
