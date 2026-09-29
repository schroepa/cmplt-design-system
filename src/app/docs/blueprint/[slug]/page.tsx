import * as React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  SYSTEM_PILLARS,
  type PillarSlug,
} from "@/components/docs/living-blueprint-catalog";
import { DecisionRecordCard } from "@/components/docs/decision-record-card";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Button } from "@/registry/cmplt/ui/button";
import { Card } from "@/registry/cmplt/ui/card";
import { ArrowLeft, ArrowRight, Cpu, Eye, Palette } from "lucide-react";

export function generateStaticParams() {
  return SYSTEM_PILLARS.map((p) => ({
    slug: p.slug,
  }));
}

const PILLAR_ICONS: Record<PillarSlug, React.ReactNode> = {
  "visual-foundations": <Palette className="h-5 w-5 text-fg-accent" />,
  "interaction-ergonomics": <Eye className="h-5 w-5 text-fg-accent" />,
  "architecture-delivery": <Cpu className="h-5 w-5 text-fg-accent" />,
};

export default async function PillarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pillar = SYSTEM_PILLARS.find((p) => p.slug === slug);

  if (!pillar) {
    notFound();
  }

  const sisterPillars = SYSTEM_PILLARS.filter((p) => p.slug !== slug);

  return (
    <div className="space-y-12 max-w-4xl">
      {/* Navigation / Breadcrumb */}
      <div>
        <Link
          href="/docs/blueprint"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-fg-muted hover:text-fg-primary transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to System Blueprint
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-border-subtle pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="brand">Pillar {pillar.number}</Badge>
          <Badge variant="mono" size="sm" dot={false}>
            Replaces &ldquo;{pillar.legacyAcronym}&rdquo;
          </Badge>
          <Badge variant="outline" className="cmplt-tabular">
            {pillar.decisions.length} Decision Records
          </Badge>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-cmplt-squircle border border-border-subtle bg-subtle">
            {PILLAR_ICONS[pillar.slug]}
          </span>
          <h1 className="cmplt-h1 text-fg-primary">{pillar.fullTitle}</h1>
        </div>

        <p className="cmplt-lead">{pillar.tagline}</p>
        <p className="text-sm text-fg-secondary leading-relaxed">
          {pillar.summary}
        </p>

        {/* UI-Writing Rationale Note */}
        <div className="rounded-cmplt-md border border-border-subtle bg-subtle/50 p-4 space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-fg-accent">
            UI-Writing Rationale
          </div>
          <p className="text-xs text-fg-secondary leading-relaxed">
            {pillar.uiWritingRationale}
          </p>
        </div>
      </div>

      {/* Core Principles & Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-5 space-y-4">
          <h3 className="text-sm font-semibold text-fg-primary">
            Core Principles
          </h3>
          <div className="space-y-3">
            {pillar.corePrinciples.map((cp) => (
              <div key={cp.title} className="space-y-1">
                <div className="text-xs font-medium text-fg-primary">
                  {cp.title}
                </div>
                <p className="text-xs text-fg-secondary leading-relaxed">
                  {cp.description}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5 space-y-4">
          <h3 className="text-sm font-semibold text-fg-primary">
            Key Metrics &amp; Benchmarks
          </h3>
          <div className="space-y-3">
            {pillar.keyMetrics.map((km) => (
              <div
                key={km.label}
                className="rounded-cmplt-sm border border-border-subtle bg-subtle/40 p-3 space-y-1"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="text-fg-muted">{km.label}</span>
                  <span className="font-mono font-semibold text-fg-accent cmplt-tabular">
                    {km.value}
                  </span>
                </div>
                <p className="text-[11px] text-fg-secondary leading-relaxed">
                  {km.detail}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Granular Decision Records */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-fg-primary">
            Pillar Decision Records ({pillar.decisions.length})
          </h2>
          <p className="text-xs text-fg-muted mt-1">
            Authoritative Architectural Decision Records (ADRs) governing{" "}
            {pillar.shortTitle}.
          </p>
        </div>

        <div className="space-y-6">
          {pillar.decisions.map((decision, index) => (
            <DecisionRecordCard
              key={decision.id}
              decision={decision}
              defaultExpanded={index === 0}
            />
          ))}
        </div>
      </div>

      {/* Sister Pillars Footer */}
      <div className="border-t border-border-subtle pt-8 space-y-4">
        <h3 className="text-sm font-semibold text-fg-primary">
          Explore Other Pillars
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {sisterPillars.map((sp) => (
            <Link key={sp.slug} href={`/docs/blueprint/${sp.slug}`}>
              <Card
                variant="interactive"
                className="p-4 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-cmplt-sm border border-border-subtle bg-subtle">
                    {PILLAR_ICONS[sp.slug]}
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-fg-primary">
                      {sp.number}. {sp.shortTitle}
                    </div>
                    <div className="text-[11px] text-fg-muted">
                      {sp.decisions.length} Decisions
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-fg-accent" />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
