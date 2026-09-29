"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/cmplt/ui/card";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Slider } from "@/registry/cmplt/ui/slider";
import { Progress } from "@/registry/cmplt/ui/progress";
import { Switch } from "@/registry/cmplt/ui/switch";
import {
  Palette,
  Terminal,
  Zap,
  Layers,
  Sparkles,
  Lock,
  ArrowUpRight,
} from "lucide-react";

export function FeatureBentoBlock() {
  const [oklchChroma, setOklchChroma] = React.useState(75);
  const [fluidMotion, setFluidMotion] = React.useState(true);

  return (
    <section className="space-y-8 w-full">
      {/* Header */}
      <div className="space-y-3 max-w-2xl">
        <Badge variant="brand">
          <Sparkles className="size-3" /> Architecture &amp; Foundations
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
          Engineered for precision design systems.
        </h2>
        <p className="text-sm text-fg-secondary leading-relaxed">
          cmplt replaces arbitrary hex codes with calibrated OKLCH gamut calculations,
          headless Base UI accessibility, and instant shadcn CLI synchronisation.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Bento 1: Large feature card (Col span 2) */}
        <Card className="md:col-span-2 flex flex-col justify-between p-6 sm:p-8 bg-surface">
          <div>
            <div className="flex items-center justify-between pb-4">
              <div className="flex size-10 items-center justify-center rounded-cmplt-md bg-accent/10 text-accent">
                <Palette className="size-5" />
              </div>
              <Badge variant="mono" size="sm">
                OKLCH Gamut Tier 3
              </Badge>
            </div>
            <CardTitle className="text-xl">Perceptual Uniformity</CardTitle>
            <CardDescription className="mt-1.5 text-xs sm:text-sm">
              Colors scale along natural human vision lightness curves without unexpected hue shifting or contrast collapses.
            </CardDescription>
          </div>

          <div className="mt-8 space-y-4 rounded-cmplt-md border border-border-subtle bg-subtle/50 p-4">
            <Slider
              label="Chroma Saturation Gamut"
              showValue
              value={oklchChroma}
              onValueChange={(val) => setOklchChroma(val as number)}
              min={10}
              max={100}
            />
            <div className="flex items-center justify-between text-xs font-mono text-fg-muted">
              <span>Display-P3</span>
              <span className="text-accent font-semibold">oklch(0.65 0.18 {Math.round(oklchChroma * 3.6)})</span>
              <span>sRGB Guard</span>
            </div>
          </div>
        </Card>

        {/* Bento 2: Base UI Headless (Col span 1 or 2) */}
        <Card className="flex flex-col justify-between p-6 bg-surface">
          <div>
            <div className="flex size-10 items-center justify-center rounded-cmplt-md bg-subtle text-fg">
              <Layers className="size-5" />
            </div>
            <CardTitle className="mt-4 text-base">Headless Primitives</CardTitle>
            <CardDescription className="mt-1 text-xs">
              Powered by @base-ui/react with unstyled WAI-ARIA compliant foundations.
            </CardDescription>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-fg-secondary">Fluid Spring Physics</span>
              <Switch checked={fluidMotion} onCheckedChange={setFluidMotion} />
            </div>
            <Progress value={fluidMotion ? 88 : 40} label="Animation Fidelity" showValue />
          </div>
        </Card>

        {/* Bento 3: CLI Parity (Col span 1) */}
        <Card className="flex flex-col justify-between p-6 bg-surface">
          <div>
            <div className="flex size-10 items-center justify-center rounded-cmplt-md bg-subtle text-fg">
              <Terminal className="size-5" />
            </div>
            <CardTitle className="mt-4 text-base">shadcn CLI Native</CardTitle>
            <CardDescription className="mt-1 text-xs">
              Instantly installed via standard package managers directly to your code.
            </CardDescription>
          </div>
          <div className="mt-6 rounded-cmplt-sm bg-subtle/80 p-2.5 font-mono text-[11px] text-fg-primary flex items-center justify-between border border-border-subtle">
            <code>npx shadcn add @cmplt/ui</code>
            <ArrowUpRight className="size-3.5 text-fg-muted" />
          </div>
        </Card>

        {/* Bento 4: Accessible by default (Col span 1) */}
        <Card className="flex flex-col justify-between p-6 bg-surface">
          <div>
            <div className="flex size-10 items-center justify-center rounded-cmplt-md bg-subtle text-fg">
              <Lock className="size-5" />
            </div>
            <CardTitle className="mt-4 text-base">WCAG AAA Certified</CardTitle>
            <CardDescription className="mt-1 text-xs">
              Rigorous keyboard traps, roving tab indexes, and screen reader announcements.
            </CardDescription>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <Badge variant="success" size="sm">Focus Visible</Badge>
            <Badge variant="outline" size="sm">Aria 1.2</Badge>
          </div>
        </Card>

        {/* Bento 5: Ultra-fast performance (Col span 2) */}
        <Card className="md:col-span-2 lg:col-span-3 flex flex-col justify-between p-6 bg-surface">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Zap className="size-4 text-amber-500" />
                <CardTitle className="text-base">Zero Runtime Styling Overhead</CardTitle>
              </div>
              <CardDescription className="mt-1 text-xs sm:text-sm">
                Tailwind CSS v4 compile-time classes, pure CSS variables, and modern hardware-accelerated animations.
              </CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="font-mono text-xl font-bold text-fg">0.4 kB</div>
                <div className="text-[11px] text-fg-muted">Median Bundle / Component</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
