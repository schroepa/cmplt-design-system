"use client";

import * as React from "react";
import { AnimatedCtaButton } from "@/registry/cmplt/ui/animated-cta-button";
import { HighlightInput } from "@/registry/cmplt/ui/highlight-input";
import {
  Sparkles,
  Check,
  ChevronDown,
  Search,
  SlidersHorizontal,
  X,
  ArrowRight,
  Droplets,
} from "lucide-react";

export function ComponentThumbnail({ slug }: { slug: string }) {
  switch (slug) {
    case "liquid-tabs":
      return (
        <div className="relative inline-flex h-8 items-center rounded-full bg-subtle p-1 border border-border-subtle">
          <div className="relative z-10 flex items-center gap-1 px-1">
            <span className="rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-semibold text-fg-primary shadow-xs">
              Fluid
            </span>
            <span className="px-2 py-0.5 text-[10px] font-medium text-fg-muted">
              Elastic
            </span>
          </div>
          <span className="absolute left-6 h-3 w-5 rounded-full bg-surface/70 blur-[1px]" />
        </div>
      );

    case "liquid-switch":
      return (
        <div className="relative inline-flex h-5 w-10 items-center rounded-full border border-brand bg-brand p-0.5 shadow-xs">
          <span className="absolute left-1.5 h-3 w-4 rounded-full bg-fg-on-brand/60 blur-[0.5px]" />
          <span className="block h-3.5 w-3.5 translate-x-5 rounded-full bg-fg-on-brand shadow-xs" />
        </div>
      );

    case "liquid-button":
      return (
        <div className="relative inline-flex h-8 items-center gap-1.5 rounded-full bg-brand px-3.5 text-[11px] font-medium text-fg-on-brand shadow-xs overflow-hidden">
          <span className="absolute -left-1 top-1 h-5 w-5 rounded-full bg-brand-hover blur-[1px]" />
          <span className="absolute right-2 bottom-0 h-4 w-4 rounded-full bg-brand-hover blur-[1px]" />
          <Droplets className="relative z-10 h-3 w-3" />
          <span className="relative z-10 font-medium">Liquid Action</span>
        </div>
      );

    case "liquid-filter":
      return (
        <div className="relative flex items-center justify-center gap-1">
          <span className="h-4 w-4 rounded-full bg-brand" />
          <span className="h-2 w-3 rounded-full bg-brand -ml-2 -mr-2" />
          <span className="h-4 w-4 rounded-full bg-brand" />
          <span className="ml-2 font-mono text-[9px] text-fg-muted">SVG Goo</span>
        </div>
      );

    case "liquid-toggle-group":
      return (
        <div className="relative inline-flex h-8 items-center rounded-full bg-subtle p-1 border border-border-subtle">
          <span className="rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-semibold text-fg-primary shadow-xs">
            Align
          </span>
          <span className="px-2 py-0.5 text-[10px] text-fg-muted">Center</span>
          <span className="absolute left-7 h-3 w-4 rounded-full bg-surface/60 blur-[1px]" />
        </div>
      );

    case "liquid-pagination":
      return (
        <div className="relative inline-flex h-8 items-center gap-1 rounded-full bg-subtle p-1 border border-border-subtle">
          <span className="h-6 w-6 rounded-full text-[10px] flex items-center justify-center text-fg-muted">1</span>
          <span className="h-6 w-6 rounded-full bg-surface text-[10px] font-bold flex items-center justify-center text-fg-primary shadow-xs">2</span>
          <span className="h-6 w-6 rounded-full text-[10px] flex items-center justify-center text-fg-muted">3</span>
          <span className="absolute left-8 h-3.5 w-5 rounded-full bg-surface/60 blur-[1px]" />
        </div>
      );

    case "liquid-radio-group":
      return (
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-4 w-4 items-center justify-center rounded-full border border-brand bg-surface">
              <span className="h-2 w-2 rounded-full bg-brand" />
            </span>
            <span className="text-[10px] font-medium text-fg-primary">Liquid Select</span>
          </div>
        </div>
      );

    case "liquid-avatar-group":
      return (
        <div className="flex items-center -space-x-2">
          <span className="h-7 w-7 rounded-full border-2 border-surface bg-brand text-[9px] font-bold text-fg-on-brand flex items-center justify-center shadow-xs">A</span>
          <span className="h-7 w-7 rounded-full border-2 border-surface bg-fg-primary text-[9px] font-bold text-surface flex items-center justify-center shadow-xs">B</span>
          <span className="h-7 w-7 rounded-full border-2 border-surface bg-subtle text-[9px] font-bold text-fg-secondary flex items-center justify-center shadow-xs">+3</span>
        </div>
      );

    case "liquid-dock":
      return (
        <div className="relative inline-flex h-9 items-center gap-1 rounded-full border border-border-default bg-surface/90 px-2 shadow-xs">
          <span className="h-6 w-6 rounded-full bg-subtle flex items-center justify-center text-fg-primary text-[10px]">✦</span>
          <span className="h-6 w-6 rounded-full flex items-center justify-center text-fg-muted text-[10px]">●</span>
          <span className="h-6 w-6 rounded-full flex items-center justify-center text-fg-muted text-[10px]">▲</span>
          <span className="absolute left-2 top-1.5 h-6 w-6 rounded-full bg-subtle/80 blur-[0.5px]" />
        </div>
      );
    case "typography":
      return (
        <div className="w-48 space-y-1.5 text-left pointer-events-none">
          <div className="flex items-baseline justify-between border-b border-border-subtle pb-1">
            <span className="font-sans text-base font-semibold tracking-tight text-fg-primary">
              Geist Aa
            </span>
            <span className="font-mono text-[10px] text-fg-brand">
              1.20→1.333
            </span>
          </div>
          <p className="text-[10px] leading-relaxed text-fg-secondary">
            Dual-scale liquid <code className="font-mono text-fg-primary">clamp()</code>{" "}
            &amp; <code className="font-mono text-fg-primary">65ch</code> measure.
          </p>
        </div>
      );

    case "interactive-dot-field":
      return (
        <div className="relative h-20 w-44 overflow-hidden rounded-lg border border-border-default bg-surface p-2.5 shadow-xs">
          <div className="grid grid-cols-9 gap-2 place-items-center h-full">
            {Array.from({ length: 27 }).map((_, i) => {
              const isHighlighted = [12, 13, 14, 22].includes(i);
              const isNear = [3, 4, 5, 11, 15, 21, 23].includes(i);
              return (
                <span
                  key={i}
                  className={
                    isHighlighted
                      ? "h-1.5 w-1.5 rounded-full bg-fg-brand scale-125 transition-transform"
                      : isNear
                      ? "h-1 w-1 rounded-full bg-fg-brand/55"
                      : "h-1 w-1 rounded-full bg-fg-muted/35"
                  }
                />
              );
            })}
          </div>
          <span className="absolute bottom-1.5 right-2 rounded-2xs bg-elevated/90 border border-border-subtle px-1.5 py-0.5 font-mono text-[8px] text-fg-brand">
            Three.js + GSAP
          </span>
        </div>
      );

    case "animated-cta-button":
      return (
        <div className="flex items-center justify-center gap-2">
          <AnimatedCtaButton
            variant="accent-beam"
            size="sm"
            tabIndex={-1}
            className="pointer-events-none"
          >
            <Sparkles className="h-3 w-3" />
            Deploy CTA
            <ArrowRight className="h-3 w-3" />
          </AnimatedCtaButton>
        </div>
      );

    case "highlight-input":
      return (
        <div className="w-48 space-y-2 pointer-events-none">
          <HighlightInput
            shape="pill"
            highlightMode="ambient"
            leadingIcon={<Search />}
            defaultValue="Search @cmplt..."
            readOnly
            tabIndex={-1}
            className="text-[10px]"
          />
        </div>
      );

    case "button":
      return (
        <div className="flex items-center justify-center gap-2.5">
          <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-brand px-4 text-[11px] font-medium text-fg-on-brand shadow-xs">
            <Sparkles className="h-3 w-3" />
            Primary Pill
          </span>
          <span className="inline-flex h-8 items-center rounded-md border border-border-default bg-surface px-3 text-[11px] font-medium text-fg-primary">
            Secondary
          </span>
        </div>
      );

    case "dialog":
      return (
        <div className="w-48 rounded-lg border border-border-default bg-elevated p-3 shadow-md space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-fg-primary">
              Confirm Sync
            </span>
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-subtle text-fg-muted">
              <X className="h-2.5 w-2.5" />
            </span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-full rounded-full bg-muted" />
            <div className="h-1.5 w-2/3 rounded-full bg-muted/70" />
          </div>
          <div className="flex justify-end gap-1.5 pt-1">
            <span className="rounded-sm border border-border-subtle bg-surface px-2 py-0.5 text-[9px] text-fg-secondary">
              Cancel
            </span>
            <span className="rounded-full bg-brand px-2.5 py-0.5 text-[9px] font-medium text-fg-on-brand">
              Accept
            </span>
          </div>
        </div>
      );

    case "select":
      return (
        <div className="w-44 space-y-1.5">
          <div className="flex h-7 items-center justify-between rounded-sm border border-border-default bg-surface px-2.5 text-[10px] font-medium text-fg-primary">
            <span>Frankfurt (eu-1)</span>
            <ChevronDown className="h-3 w-3 text-fg-muted" />
          </div>
          <div className="rounded-md border border-border-subtle bg-elevated p-1 shadow-md space-y-0.5">
            <div className="flex items-center justify-between rounded-xs bg-subtle px-2 py-1 text-[10px] font-medium text-fg-primary">
              <span>Frankfurt (eu-1)</span>
              <Check className="h-2.5 w-2.5 text-fg-brand" />
            </div>
            <div className="px-2 py-1 text-[10px] text-fg-muted">
              Virginia (us-east)
            </div>
          </div>
        </div>
      );

    case "tabs":
      return (
        <div className="w-48 space-y-2">
          <div className="grid grid-cols-3 rounded-full border border-border-subtle bg-subtle p-0.5 text-center text-[10px]">
            <span className="rounded-full bg-surface py-0.5 font-medium text-fg-primary shadow-xs">
              Tokens
            </span>
            <span className="py-0.5 text-fg-muted">CLI</span>
            <span className="py-0.5 text-fg-muted">Figma</span>
          </div>
          <div className="rounded-md border border-border-subtle bg-surface p-2.5 flex items-center justify-between">
            <span className="text-[10px] text-fg-muted">Active Mode</span>
            <span className="font-mono text-[10px] font-medium text-fg-primary">
              OKLCH v1.2
            </span>
          </div>
        </div>
      );

    case "accordion":
      return (
        <div className="w-48 rounded-md border border-border-default bg-surface divide-y divide-border-subtle px-3 py-1">
          <div className="py-1.5 space-y-1">
            <div className="flex items-center justify-between text-[10px] font-medium text-fg-primary">
              <span>Why Base UI?</span>
              <ChevronDown className="h-3 w-3 rotate-180 text-fg-brand" />
            </div>
            <div className="h-1.5 w-4/5 rounded-full bg-muted" />
          </div>
          <div className="flex items-center justify-between py-1.5 text-[10px] text-fg-secondary">
            <span>W3C Figma Sync</span>
            <ChevronDown className="h-3 w-3 text-fg-muted" />
          </div>
        </div>
      );

    case "popover":
      return (
        <div className="flex flex-col items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full border border-border-default bg-surface px-2.5 py-1 text-[10px] font-medium text-fg-primary">
            <SlidersHorizontal className="h-2.5 w-2.5 text-fg-brand" />
            Theme Studio
          </span>
          {/* Concentric: 14px Popup - 8px p-2 = 6px inner swatches */}
          <div className="w-44 rounded-panel border border-border-subtle bg-elevated p-2 shadow-md space-y-1.5">
            <div className="flex items-center justify-between px-0.5 text-[10px]">
              <span className="font-medium text-fg-primary">Surface Preset</span>
              <span className="font-mono text-[9px] text-fg-brand">Warm</span>
            </div>
            <div className="flex gap-1">
              <span className="h-3.5 flex-1 rounded-xs bg-[var(--brand-500)]" />
              <span className="h-3.5 flex-1 rounded-xs bg-[var(--success-500)]" />
              <span className="h-3.5 flex-1 rounded-xs bg-[var(--info-500)]" />
            </div>
          </div>
        </div>
      );

    case "switch":
      return (
        <div className="w-44 space-y-2 rounded-md border border-border-subtle bg-surface p-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-fg-primary">
              Edge Cache
            </span>
            <span className="flex h-4 w-7 items-center rounded-full bg-brand p-0.5 justify-end">
              <span className="h-3 w-3 rounded-full bg-fg-on-brand shadow-xs" />
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-border-subtle pt-1.5">
            <span className="text-[10px] text-fg-muted">Zero Retention</span>
            <span className="flex h-4 w-7 items-center rounded-full bg-muted p-0.5 justify-start">
              <span className="h-3 w-3 rounded-full bg-surface shadow-xs" />
            </span>
          </div>
        </div>
      );

    case "checkbox":
      return (
        <div className="w-44 space-y-1.5 rounded-md border border-border-subtle bg-surface p-2.5">
          <div className="flex items-center gap-2 text-[10px] font-medium text-fg-primary">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[4px] bg-brand text-fg-on-brand">
              <Check className="h-2.5 w-2.5 stroke-[2.75]" />
            </span>
            <span>Export tokens.json</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-fg-secondary">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[4px] border border-border-default bg-subtle" />
            <span>Strict AAA Audit</span>
          </div>
        </div>
      );

    case "input":
      return (
        <div className="w-48 space-y-2">
          <div className="flex h-7 items-center gap-1.5 rounded-full border border-border-default bg-surface px-3 text-[10px] text-fg-muted">
            <Search className="h-3 w-3" />
            <span>Search Apps...</span>
          </div>
          <div className="flex h-7 items-center justify-between rounded-sm border border-border-brand bg-surface px-2.5 text-[10px] font-mono text-fg-primary">
            <span>@cmplt/ui</span>
            <span className="h-3 w-[1.5px] bg-fg-brand animate-pulse" />
          </div>
        </div>
      );

    case "card":
      return (
        <div className="w-48 rounded-lg border border-border-default bg-surface p-1.5 shadow-xs space-y-1.5">
          {/* Concentric media well */}
          <div className="flex h-11 items-center justify-between rounded-md border border-border-subtle bg-subtle px-2.5">
            <span className="rounded-full bg-brand/15 px-2 py-0.5 font-mono text-[8.5px] font-medium text-fg-brand">
              Blog · Shop · KPI
            </span>
            <span className="cmplt-metric text-[11px] text-fg-primary">$349</span>
          </div>
          <div className="flex items-center justify-between px-1.5 pb-0.5">
            <div className="space-y-0.5">
              <div className="text-[10px] font-semibold text-fg-primary leading-tight">
                7 Domain Presets
              </div>
              <div className="text-[9px] text-fg-muted">Concentric Surface</div>
            </div>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand text-fg-on-brand">
              <ArrowRight className="h-2.5 w-2.5" />
            </span>
          </div>
        </div>
      );

    case "badge":
      return (
        <div className="flex flex-wrap items-center justify-center gap-1.5 px-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border-default bg-surface px-2.5 py-1 text-[10px] font-medium text-fg-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-status-success" />
            Operational
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border-default bg-surface px-2.5 py-1 text-[10px] font-medium text-fg-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-fg-brand" />
            W3C Synced
          </span>
          <span className="inline-flex items-center rounded-full border border-border-subtle bg-subtle px-2.5 py-0.5 font-mono text-[10px] text-fg-secondary">
            v1.2.0
          </span>
        </div>
      );

    case "tooltip":
      return (
        <div className="flex flex-col items-center gap-1.5">
          <div className="rounded-sm border border-border-default bg-elevated px-2.5 py-1 text-[10px] font-medium text-fg-primary shadow-md">
            Install via npx shadcn add
          </div>
          <span className="inline-flex h-7 items-center rounded-full border border-border-default bg-surface px-3 text-[10px] text-fg-secondary">
            Hover Target
          </span>
        </div>
      );

    case "progress":
    default:
      return (
        <div className="w-44 space-y-2 rounded-md border border-border-subtle bg-surface p-3">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-medium text-fg-primary">Token Sync</span>
            <span className="font-mono text-fg-muted cmplt-tabular">84%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-subtle border border-border-subtle">
            <div className="h-full w-[84%] rounded-full bg-brand" />
          </div>
        </div>
      );
  }
}
