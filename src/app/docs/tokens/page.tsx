"use client";

import * as React from "react";
import tokensData from "@/registry/cmplt/tokens/tokens.json";
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/cmplt/ui/tabs";
import { Check, Copy, Layers, Palette } from "lucide-react";

export default function TokensDocPage() {
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);
  const [simulatedViewport, setSimulatedViewport] = React.useState<number>(1280);

  const copyText = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(val);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  const neutralSteps = Object.entries(tokensData.color.primitive.neutral);
  const brandSteps = Object.entries(tokensData.color.primitive.brand);
  const semanticTokens = Object.entries(tokensData.color.semantic);
  const radiusTokens = Object.entries(tokensData.radius);
  const liquidScaleEntries = Object.entries(tokensData.typography.liquidScale);
  const uiScaleEntries = Object.entries(tokensData.typography.uiScale);
  const measureEntries = Object.entries(tokensData.typography.measures);

  const interpolateSize = (minPx: number, maxPx: number, vw: number) => {
    const t = Math.max(0, Math.min(1, (vw - 360) / (1440 - 360)));
    return +(minPx + (maxPx - minPx) * t).toFixed(1);
  };

  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24">
      {/* Header */}
      <div className="space-y-5 border-b border-border-subtle pb-10 md:pb-12">
        <div className="flex items-center gap-2">
          <Badge variant="brand">3-Tier OKLCH Architecture · W3C DTCG</Badge>
        </div>
        <h1 className="cmplt-h1 text-fg-primary">
          Design Tokens, Liquid Typography &amp; Figma Schema
        </h1>
        <p className="cmplt-lead text-fg-secondary">
          All <strong className="text-fg-primary">cmplt</strong> components are styled
          exclusively through semantic CSS custom properties authored in perceptual{" "}
          <code className="font-mono text-xs text-fg-accent">OKLCH</code>. Because every
          token is simultaneously defined in{" "}
          <code className="font-mono text-xs text-fg-accent">tokens.json</code> with Figma
          Variable Scopes, your code and Figma libraries stay 100% synchronized.
        </p>
        <div className="max-w-3xl pt-2">
          <CliInstallTabs itemName="tokens" />
        </div>
      </div>

      {/* Tier 1: Primitive OKLCH Scales */}
      <section className="space-y-6 md:space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <Badge variant="mono" size="sm">
              Tier 1
            </Badge>
            <h2 className="cmplt-h3 text-fg-primary">
              Primitive OKLCH Color Ramps
            </h2>
          </div>
          <p className="cmplt-body-sm text-fg-muted">
            Click any swatch to copy its CSS variable name. Try switching the Theme Studio preset in the top navigation to see live brand ramp mutations!
          </p>
        </div>

        <Card className="p-6 md:p-8 2xl:p-10 space-y-8">
          <div>
            <div className="mb-4 flex items-center justify-between text-xs">
              <span className="font-semibold text-fg-primary">
                Neutral Scale (--cmplt-neutral-*)
              </span>
              <span className="font-mono text-fg-muted">15 Steps · Calibrated Warm Stone / Matte Graphite</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 2xl:grid-cols-15 gap-3">
              {neutralSteps.map(([step, info]) => {
                const cssVar = `--cmplt-neutral-${step}`;
                return (
                  <button
                    key={step}
                    type="button"
                    onClick={() => copyText(`var(${cssVar})`)}
                    className="group flex flex-col items-start gap-2 text-left cursor-pointer"
                  >
                    <div
                      className="h-12 w-full rounded-cmplt-sm border border-border-default shadow-cmplt-xs transition-transform group-hover:scale-105"
                      style={{ backgroundColor: `var(${cssVar})` }}
                    />
                    <span className="font-mono text-[11px] font-medium text-fg-primary">
                      {step}
                    </span>
                    <span className="font-mono text-[10px] text-fg-muted truncate w-full">
                      {copiedKey === `var(${cssVar})` ? "Copied!" : info.hexFallback}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border-t border-border-subtle pt-8">
            <div className="mb-4 flex items-center justify-between text-xs">
              <span className="font-semibold text-fg-primary">
                Brand Scale (--cmplt-brand-*)
              </span>
              <span className="font-mono text-fg-accent">
                10 Steps · Dynamic Preset Reactive
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3">
              {brandSteps.map(([step, info]) => {
                const cssVar = `--cmplt-brand-${step}`;
                return (
                  <button
                    key={step}
                    type="button"
                    onClick={() => copyText(`var(${cssVar})`)}
                    className="group flex flex-col items-start gap-2 text-left cursor-pointer"
                  >
                    <div
                      className="h-12 w-full rounded-cmplt-sm border border-border-subtle shadow-cmplt-xs transition-transform group-hover:scale-105"
                      style={{ backgroundColor: `var(${cssVar})` }}
                    />
                    <span className="font-mono text-[11px] font-medium text-fg-primary">
                      {step}
                    </span>
                    <span className="font-mono text-[10px] text-fg-muted truncate w-full">
                      {copiedKey === `var(${cssVar})` ? "Copied!" : info.hexFallback}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Card>
      </section>

      {/* Tier 2: Semantic Role Tokens */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <Badge variant="brand" size="sm">
              Tier 2
            </Badge>
            <h2 className="cmplt-h3 text-fg-primary">
              Semantic Role Tokens (Code ↔ Figma Mapped)
            </h2>
          </div>
          <p className="text-xs text-fg-muted">
            Semantic tokens automatically adapt between <code className="font-mono text-fg-primary">:root</code> (Light) and <code className="font-mono text-fg-primary">.dark</code> (Dark) modes.
          </p>
        </div>

        <div className="overflow-hidden rounded-cmplt-lg border border-border-subtle bg-surface">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border-subtle bg-subtle/60 text-fg-muted uppercase text-[11px]">
              <tr>
                <th className="py-3 px-4">Preview & Token</th>
                <th className="py-3 px-4">Tailwind v4 Class</th>
                <th className="py-3 px-4 hidden sm:table-cell">Figma Scope</th>
                <th className="py-3 px-4">Role Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {semanticTokens.map(([key, token]) => (
                <tr key={key} className="hover:bg-subtle/35 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-5 w-5 shrink-0 rounded-cmplt-xs border border-border-default shadow-cmplt-xs"
                        style={{ backgroundColor: `var(${token.cssVar})` }}
                      />
                      <button
                        type="button"
                        onClick={() => copyText(`var(${token.cssVar})`)}
                        className="font-mono font-semibold text-fg-primary hover:text-fg-accent cursor-pointer"
                      >
                        {token.cssVar}
                      </button>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-mono text-fg-accent">
                    {token.tailwindClass}
                  </td>
                  <td className="py-3 px-4 hidden sm:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {token.figmaScope.map((s: string) => (
                        <Badge key={s} variant="mono" size="sm">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-fg-secondary">
                    {token.$description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Typography, Dual-Scale Utopia & Readability Guardrails */}
      <section className="space-y-5">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="brand" size="sm">
              Typography System
            </Badge>
            <Badge variant="mono" size="sm">
              Geist Variable + Geist Mono
            </Badge>
            <Badge variant="outline" size="sm">
              Dual-Scale Utopia (1.200 → 1.333)
            </Badge>
          </div>
          <h2 className="text-lg font-semibold text-fg-primary">
            Liquid Type Scale (<code className="font-mono text-fg-accent">clamp()</code>) &amp; Optimal Reading Measure (<code className="font-mono text-fg-accent">ch</code>)
          </h2>
          <p className="text-xs text-fg-muted">
            Editorial display, headings, and body copy interpolate smoothly between a compact <strong className="text-fg-primary">1.200 Minor Third</strong> scale at <code className="font-mono">360px</code> and an expressive <strong className="text-fg-primary">1.333 Perfect Fourth</strong> scale at <code className="font-mono">1440px</code>, while dense App UI controls remain locked to pixel-aligned <code className="font-mono">rem</code> steps.
          </p>
        </div>

        {/* Interactive Liquid Scale Viewport Simulator */}
        <Card className="p-5 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
            <div className="space-y-0.5">
              <div className="text-xs font-semibold text-fg-primary">
                Interactive Liquid Viewport Simulator
              </div>
              <p className="text-[11px] text-fg-muted">
                Drag the viewport slider (<code className="font-mono">360px → 1440px</code>) to inspect exact <code className="font-mono">clamp()</code> interpolation across the Dual-Scale ramp.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={360}
                max={1440}
                step={10}
                value={simulatedViewport}
                onChange={(e) => setSimulatedViewport(Number(e.target.value))}
                aria-label="Simulated viewport width in pixels"
                className="w-36 sm:w-44 accent-[var(--bg-accent)] cursor-pointer"
              />
              <span className="inline-flex min-w-[4.5rem] justify-center rounded-cmplt-sm border border-border-default bg-subtle px-2 py-1 font-mono text-xs font-semibold text-fg-accent cmplt-tabular">
                {simulatedViewport}px
              </span>
            </div>
          </div>

          <div className="divide-y divide-border-subtle">
            {liquidScaleEntries.map(([key, item]) => {
              const livePx = interpolateSize(item.minPx, item.maxPx, simulatedViewport);
              return (
                <div
                  key={key}
                  className="py-3.5 first:pt-0 last:pb-0 grid gap-3 md:grid-cols-[210px_minmax(0,1fr)] items-baseline"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => copyText(`var(${item.cssVar})`)}
                        className="font-mono text-xs font-semibold text-fg-primary hover:text-fg-accent cursor-pointer"
                      >
                        .{item.roleClass}
                      </button>
                      <Badge variant="mono" size="sm">
                        {item.measure}
                      </Badge>
                    </div>
                    <div className="font-mono text-[11px] text-fg-muted cmplt-tabular">
                      {item.minPx}px → {item.maxPx}px · Now:{" "}
                      <strong className="text-fg-accent">{livePx}px</strong>
                    </div>
                    <div className="font-mono text-[10px] text-fg-muted">
                      LH {item.lineHeight} · Track {item.tracking}
                    </div>
                  </div>

                  <div className="min-w-0 overflow-hidden">
                    <div
                      className="text-fg-primary truncate transition-[font-size] duration-75"
                      style={{
                        fontSize: `${livePx}px`,
                        lineHeight: item.lineHeight,
                        letterSpacing: item.tracking,
                        fontWeight: key === "body" || key === "lead" ? 400 : 600,
                      }}
                    >
                      {key.startsWith("display")
                        ? "Swiss Precision in Geist."
                        : key === "body" || key === "lead"
                        ? "Optimal 65ch line length and calibrated dark-mode variable weight (wght 380) keep long-form technical documentation effortless to read."
                        : "Typographic Hierarchy & Liquid Scale"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Hybrid Separation: Static UI Control Scale + ch Measure Guardrails */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-fg-primary">
                Static App UI Control Scale (Pixel-Aligned)
              </span>
              <Badge variant="outline" size="sm">
                Fixed rem
              </Badge>
            </div>
            <p className="text-[11px] text-fg-muted">
              Buttons, inputs, badges, and dense tables bypass <code className="font-mono">clamp()</code> so 1px borders and icon alignments remain razor-sharp.
            </p>
            <div className="divide-y divide-border-subtle pt-1">
              {uiScaleEntries.map(([key, item]) => (
                <div
                  key={key}
                  className="py-2 flex items-center justify-between gap-2 text-xs"
                >
                  <button
                    type="button"
                    onClick={() => copyText(item.tailwindClass)}
                    className="font-mono font-semibold text-fg-accent hover:underline cursor-pointer"
                  >
                    .{item.tailwindClass}
                  </button>
                  <span className="font-mono text-[11px] text-fg-primary cmplt-tabular">
                    {item.px} ({item.rem})
                  </span>
                  <span className="text-[11px] text-fg-muted truncate max-w-[160px]">
                    {item.usage}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-fg-primary">
                Readability Measure Guardrails (ch Units)
              </span>
              <Badge variant="brand" size="sm">
                Bringhurst Standard
              </Badge>
            </div>
            <p className="text-[11px] text-fg-muted">
              Automatic <code className="font-mono">max-width</code> constraints in character units (<code className="font-mono">ch</code>) prevent eye fatigue on wide monitors.
            </p>
            <div className="divide-y divide-border-subtle pt-1">
              {measureEntries.map(([key, item]) => (
                <div
                  key={key}
                  className="py-2 flex items-center justify-between gap-2 text-xs"
                >
                  <button
                    type="button"
                    onClick={() => copyText(item.tailwindClass)}
                    className="font-mono font-semibold text-fg-primary hover:text-fg-accent cursor-pointer"
                  >
                    .{item.tailwindClass}
                  </button>
                  <Badge variant="mono" size="sm">
                    {item.value}
                  </Badge>
                  <span className="text-[11px] text-fg-muted truncate max-w-[160px]">
                    {item.usage}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Radius & W3C JSON Export */}
      <section className="space-y-4">
        <Tabs defaultValue="radius">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-fg-primary">
              Geometry & W3C DTCG JSON Source
            </h2>
            <TabsList>
              <TabsTrigger value="radius">Radius Scale</TabsTrigger>
              <TabsTrigger value="json">W3C tokens.json</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="radius" className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-6 pt-2">
              {radiusTokens.map(([key, item]) => (
                <Card key={key} className="p-4 flex flex-col items-center gap-3">
                  <div
                    className="h-14 w-14 border-2 border-border-accent bg-accent-subtle"
                    style={{ borderRadius: `var(${item.cssVar})` }}
                  />
                  <div className="text-center">
                    <div className="font-mono text-xs font-semibold text-fg-primary">
                      rounded-cmplt-{key}
                    </div>
                    <div className="font-mono text-[11px] text-fg-muted">
                      {item.px}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Concentric Corner Geometry Law */}
            <Card className="p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-fg-primary">
                    Concentric Corner Geometry (R_inner = R_outer − padding)
                  </h3>
                  <p className="text-xs text-fg-muted">
                    Nested containers automatically subtract their parent&apos;s padding so corner curvature centers align and frame thickness remains uniform.
                  </p>
                </div>
                <Badge variant="brand" size="sm" className="font-mono">
                  calc(var(--cmplt-radius-*) - d)
                </Badge>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {/* Pair 1: Outer Shell 24px -> Inner Panel 14px */}
                <div className="rounded-cmplt-xl border border-border-default bg-surface p-2.5 shadow-cmplt-xs">
                  <div className="rounded-cmplt-xl-inner border border-border-accent/60 bg-elevated p-3 space-y-1">
                    <div className="font-mono text-[11px] font-semibold text-fg-primary">
                      Shell → Elevated Panel
                    </div>
                    <div className="font-mono text-[10px] text-fg-muted">
                      Outer 24px − 10px (p-2.5) = <strong className="text-fg-accent">14px</strong>
                    </div>
                    <div className="font-mono text-[10px] text-fg-secondary">
                      .rounded-cmplt-xl-inner
                    </div>
                  </div>
                </div>

                {/* Pair 2: Primary Card 20px -> Preview Stage 12px */}
                <div className="rounded-cmplt-lg border border-border-default bg-surface p-2 shadow-cmplt-xs">
                  <div className="rounded-cmplt-lg-inner-sm border border-border-accent/60 bg-subtle p-3 space-y-1">
                    <div className="font-mono text-[11px] font-semibold text-fg-primary">
                      Card → Inset Stage
                    </div>
                    <div className="font-mono text-[10px] text-fg-muted">
                      Outer 20px − 8px (p-2) = <strong className="text-fg-accent">12px</strong>
                    </div>
                    <div className="font-mono text-[10px] text-fg-secondary">
                      .rounded-cmplt-lg-inner-sm
                    </div>
                  </div>
                </div>

                {/* Pair 3: Select/Popover Popup 14px -> Menu Item 8px */}
                <div className="rounded-cmplt-panel border border-border-default bg-elevated p-1.5 shadow-cmplt-xs">
                  <div className="rounded-cmplt-sm border border-border-accent/60 bg-subtle p-3.5 space-y-1">
                    <div className="font-mono text-[11px] font-semibold text-fg-primary">
                      Popup → Menu Item
                    </div>
                    <div className="font-mono text-[10px] text-fg-muted">
                      Outer 14px − 6px (p-1.5) = <strong className="text-fg-accent">8px</strong>
                    </div>
                    <div className="font-mono text-[10px] text-fg-secondary">
                      .rounded-cmplt-panel → .rounded-cmplt-sm
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="json">
            <Card className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-xs text-fg-muted">
                  src/registry/cmplt/tokens/tokens.json
                </span>
                <Button
                  variant="secondary"
                  size="xs"
                  onClick={() =>
                    copyText(JSON.stringify(tokensData, null, 2))
                  }
                >
                  {copiedKey === JSON.stringify(tokensData, null, 2) ? (
                    <>
                      <Check className="h-3 w-3 text-status-success" /> Copied W3C JSON
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" /> Copy W3C JSON
                    </>
                  )}
                </Button>
              </div>
              <pre className="max-h-96 overflow-auto rounded-cmplt-md bg-subtle p-4 font-mono text-xs text-fg-primary">
                {JSON.stringify(tokensData, null, 2)}
              </pre>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
