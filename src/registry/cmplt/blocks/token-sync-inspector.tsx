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
import { Button } from "@/registry/cmplt/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
} from "@/registry/cmplt/ui/popover";
import { Layers, ArrowRightLeft, Copy, Check } from "lucide-react";

const TOKEN_PAIRS = [
  {
    name: "bg.surface",
    cssVar: "--bg-surface",
    figmaVar: "color/bg/surface",
    tier1: "--cmplt-neutral-0 / --cmplt-neutral-900",
    swatchClass: "bg-surface border-border-default",
    scope: "FRAME_FILL",
  },
  {
    name: "bg.accent",
    cssVar: "--bg-accent",
    figmaVar: "color/bg/accent",
    tier1: "--cmplt-brand-600 / --cmplt-brand-500",
    swatchClass: "bg-accent border-transparent",
    scope: "FRAME_FILL, SHAPE_FILL",
  },
  {
    name: "fg.primary",
    cssVar: "--fg-primary",
    figmaVar: "color/fg/primary",
    tier1: "--cmplt-neutral-950 / --cmplt-neutral-50",
    swatchClass: "bg-fg-primary border-transparent",
    scope: "TEXT_FILL",
  },
  {
    name: "border.subtle",
    cssVar: "--border-subtle",
    figmaVar: "color/border/subtle",
    tier1: "--cmplt-neutral-200 / oklch(0.24 0.012 260)",
    swatchClass: "bg-border-subtle border-border-strong",
    scope: "STROKE_COLOR",
  },
];

export function TokenSyncInspectorBlock() {
  const [copiedToken, setCopiedToken] = React.useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 1600);
  };

  return (
    <Card className="w-full h-full flex flex-col justify-between">
      <div>
        <CardHeader className="border-b border-border-subtle pb-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-cmplt-squircle bg-subtle text-fg-primary border border-border-subtle">
                <Layers className="h-4 w-4 text-fg-accent" />
              </span>
              <div>
                <CardTitle className="text-sm sm:text-[15px]">
                  Code ↔ Figma Token Parity Inspector
                </CardTitle>
                <CardDescription className="text-xs">
                  Click any semantic token to inspect its 3-tier resolution & Figma Variable Scope
                </CardDescription>
              </div>
            </div>
            <Badge variant="brand" size="sm">
              W3C DTCG
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-3.5">
          {TOKEN_PAIRS.map((token) => (
            <div
              key={token.name}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-cmplt-lg-inner-sm border border-border-subtle bg-subtle/40 p-3 sm:p-3.5 transition-colors hover:border-border-default"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Concentric Swatch: Row (12px) - Padding (6.5px) = 5.5px */}
                <span
                  className={`h-7 w-7 shrink-0 rounded-[5.5px] border ${token.swatchClass} shadow-cmplt-xs`}
                />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-fg-primary">
                      {token.cssVar}
                    </span>
                    <ArrowRightLeft className="h-3 w-3 text-fg-muted shrink-0" />
                    <span className="font-mono text-xs text-fg-accent truncate">
                      {token.figmaVar}
                    </span>
                  </div>
                  <div className="mt-0.5 text-[11px] text-fg-muted truncate">
                    Resolves: {token.tier1}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 shrink-0">
                <Popover>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="xs"
                        className="rounded-cmplt-xs px-2.5"
                      >
                        Inspect
                      </Button>
                    }
                  />
                  <PopoverContent align="end" className="w-80 p-4">
                    <PopoverTitle className="font-mono text-xs">
                      {token.name}
                    </PopoverTitle>
                    <PopoverDescription>
                      Mapped automatically between Tailwind CSS v4 (`@theme inline`) and Figma Variables REST API.
                    </PopoverDescription>
                    {/* Concentric Inner Box: Popover (20px) - p-4 (12px effective corner inset) = 8px (rounded-cmplt-sm) */}
                    <div className="mt-3 space-y-1.5 rounded-cmplt-sm bg-subtle p-2.5 font-mono text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-fg-muted">CSS Variable:</span>
                        <span className="text-fg-primary">{token.cssVar}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-fg-muted">Figma Path:</span>
                        <span className="text-fg-accent">{token.figmaVar}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-fg-muted">Figma Scope:</span>
                        <span className="text-fg-secondary">{token.scope}</span>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <Button
                  variant="secondary"
                  size="xs"
                  className="rounded-cmplt-xs px-2.5"
                  onClick={() => handleCopy(`var(${token.cssVar})`)}
                  aria-label={`Copy ${token.cssVar}`}
                >
                  {copiedToken === `var(${token.cssVar})` ? (
                    <Check className="h-3 w-3 text-status-success" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </div>
    </Card>
  );
}
