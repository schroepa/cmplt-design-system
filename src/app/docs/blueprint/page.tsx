"use client";

import * as React from "react";
import Link from "next/link";
import {
  LIVING_DOC_META,
  UI_WRITING_TAXONOMY,
  SYSTEM_PILLARS,
  REGISTRY_INVENTORY_MATRIX,
  DECISION_CHANGELOG,
  getAllDecisions,
  type PillarSlug,
} from "@/components/docs/living-blueprint-catalog";
import { DecisionRecordCard } from "@/components/docs/decision-record-card";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Button } from "@/registry/cmplt/ui/button";
import {
  Card,
} from "@/registry/cmplt/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/cmplt/ui/tabs";
import { cn } from "@/registry/cmplt/lib/utils";
import {
  ArrowRight,
  Cpu,
  Eye,
  GitCommit,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function LivingBlueprintPage() {
  const [selectedPillar, setSelectedPillar] = React.useState<
    "all" | PillarSlug
  >("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [allExpanded, setAllExpanded] = React.useState<boolean | null>(null);

  const allDecisions = React.useMemo(() => getAllDecisions(), []);

  const filteredDecisions = React.useMemo(() => {
    return allDecisions.filter((d) => {
      const matchesPillar =
        selectedPillar === "all" || d.pillar === selectedPillar;
      if (!matchesPillar) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        d.id.toLowerCase().includes(q) ||
        d.title.toLowerCase().includes(q) ||
        d.summary.toLowerCase().includes(q) ||
        d.rationale.toLowerCase().includes(q) ||
        d.sourceFiles.some((f) => f.toLowerCase().includes(q)) ||
        d.granularSpec.some(
          (s) =>
            s.parameter.toLowerCase().includes(q) ||
            s.value.toLowerCase().includes(q) ||
            s.detail.toLowerCase().includes(q)
        )
      );
    });
  }, [allDecisions, selectedPillar, searchQuery]);

  const pillarIcons: Record<PillarSlug, React.ReactNode> = {
    "visual-foundations": <Palette className="h-4 w-4 text-fg-accent" />,
    "interaction-ergonomics": <Eye className="h-4 w-4 text-fg-accent" />,
    "architecture-delivery": <Cpu className="h-4 w-4 text-fg-accent" />,
  };

  return (
    <div className="space-y-14 max-w-4xl">
      {/* =====================================================================
          HERO HEADER: LIVING SYSTEM BLUEPRINT
         ===================================================================== */}
      <div className="space-y-4 border-b border-border-subtle pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="brand">Living System Blueprint · v{LIVING_DOC_META.version}</Badge>
          <span className="text-xs font-mono text-fg-muted cmplt-tabular">
            Synced {LIVING_DOC_META.lastUpdated} · {allDecisions.length} Decisions
          </span>
        </div>

        <h1 className="cmplt-h1 text-fg-primary">{LIVING_DOC_META.title}</h1>

        <p className="cmplt-lead">{LIVING_DOC_META.mandate}</p>

        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {SYSTEM_PILLARS.map((p) => (
            <Button
              key={p.slug}
              variant="secondary"
              size="sm"
              onClick={() => {
                setSelectedPillar(p.slug);
                document.getElementById("decisions")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer"
            >
              {pillarIcons[p.slug]}
              <span>
                {p.number}. {p.shortTitle}
              </span>
              <Badge variant="mono" size="sm" dot={false}>
                {p.legacyAcronym}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* =====================================================================
          SECTION 1: THE 3 PILLARS & UI-WRITING NAMING ARCHITECTURE
         ===================================================================== */}
      <section className="space-y-6">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="brand" size="sm">
              Information Architecture
            </Badge>
            <Badge variant="mono" size="sm">
              UI-Writing Compliant Taxonomy
            </Badge>
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-fg-primary">
            Three System Pillars: Why We Replaced Raw &ldquo;UI / UX / Tech&rdquo; Labels
          </h2>
          <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed max-w-measure-body">
            Following modern UI-writing guidelines, navigation and specification
            headings avoid ambiguous two-letter acronyms (<code className="cmplt-code">UI</code>,{" "}
            <code className="cmplt-code">UX</code>) and informal shorthand (<code className="cmplt-code">Tech</code>).
            Instead, <strong className="text-fg-primary">cmplt</strong> organizes
            every decision into three self-explanatory, outcome-oriented pillars:
          </p>
        </div>

        {/* 3 Pillar Overview Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {SYSTEM_PILLARS.map((pillar) => (
            <Card
              key={pillar.slug}
              variant="interactive"
              className="flex flex-col justify-between p-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-cmplt-squircle border border-border-subtle bg-subtle">
                    {pillarIcons[pillar.slug]}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Badge variant="mono" size="sm" dot={false}>
                      Replaces &ldquo;{pillar.legacyAcronym}&rdquo;
                    </Badge>
                    <Badge variant="brand" size="sm" dot={false} className="cmplt-tabular">
                      {pillar.decisions.length} ADRs
                    </Badge>
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[11px] text-fg-muted">
                    Pillar {pillar.number}
                  </div>
                  <h3 className="text-base font-semibold text-fg-primary mt-0.5">
                    {pillar.fullTitle}
                  </h3>
                </div>

                <p className="text-xs text-fg-secondary leading-relaxed">
                  {pillar.tagline}
                </p>

                <div className="rounded-cmplt-sm border border-border-subtle bg-subtle/50 p-2.5 space-y-1">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-fg-accent">
                    UI-Writing Rationale
                  </div>
                  <p className="text-[11px] text-fg-muted leading-relaxed">
                    {pillar.uiWritingRationale}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-border-subtle pt-3.5 flex items-center justify-between">
                <span className="font-mono text-[11px] text-fg-muted">
                  {pillar.decisions[0]?.id} –{" "}
                  {pillar.decisions[pillar.decisions.length - 1]?.id}
                </span>
                <Link
                  href={`/docs/blueprint/${pillar.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-fg-accent hover:underline"
                >
                  Deep Dive <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* UI-Writing Guidelines Table */}
        <div className="overflow-hidden rounded-cmplt-lg border border-border-subtle bg-surface">
          <div className="border-b border-border-subtle bg-subtle/50 px-4 py-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-fg-primary">
              Enforced UI-Writing & Terminology Rules (UW-01 – UW-05)
            </span>
            <Badge variant="mono" size="sm">
              Terminology Standard
            </Badge>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border-subtle bg-subtle/30 text-fg-muted uppercase text-[10.5px]">
                <tr>
                  <th className="py-2.5 px-4">ID & Rule</th>
                  <th className="py-2.5 px-4">Avoid (Ambiguous)</th>
                  <th className="py-2.5 px-4">Use (cmplt Standard)</th>
                  <th className="py-2.5 px-4">UI-Writing Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {UI_WRITING_TAXONOMY.map((item) => (
                  <tr key={item.id} className="hover:bg-subtle/25">
                    <td className="py-2.5 px-4 align-top">
                      <span className="font-mono font-semibold text-fg-accent">
                        {item.id}
                      </span>
                      <div className="font-medium text-fg-primary mt-0.5">
                        {item.rule}
                      </div>
                    </td>
                    <td className="py-2.5 px-4 font-mono text-fg-muted line-through align-top">
                      {item.insteadOf}
                    </td>
                    <td className="py-2.5 px-4 font-mono font-semibold text-fg-primary align-top">
                      {item.usePreferred}
                    </td>
                    <td className="py-2.5 px-4 text-fg-secondary leading-relaxed align-top">
                      {item.rationale}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: LIVING DOCUMENT GOVERNANCE & MANDATORY UPDATE PROTOCOL
         ===================================================================== */}
      <section className="space-y-4">
        <Card variant="elevated" className="p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-status-success" />
                <h2 className="text-base font-semibold text-fg-primary">
                  Living Document Governance: Mandatory Continuous Update Protocol
                </h2>
              </div>
              <p className="text-xs text-fg-muted">
                Synchronized across <code className="font-mono text-fg-primary">/docs/blueprint</code>,{" "}
                <code className="font-mono text-fg-primary">docs/*.md</code>, and{" "}
                <code className="font-mono text-fg-primary">AGENTS.md</code>.
              </p>
            </div>
            <Badge variant="success" size="sm">
              Enforced in AGENTS.md
            </Badge>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {LIVING_DOC_META.updateProtocol.map((step) => (
              <div
                key={step.step}
                className="rounded-cmplt-md border border-border-subtle bg-subtle/55 p-3.5 space-y-1.5"
              >
                <div className="font-mono text-xs font-semibold text-fg-accent">
                  {step.step}
                </div>
                <p className="text-xs text-fg-secondary leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* =====================================================================
          SECTION 3: INTERACTIVE GRANULAR DECISION EXPLORER (ALL 24 ADRs)
         ===================================================================== */}
      <section id="decisions" className="space-y-6 scroll-mt-20">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-fg-primary">
                Granular Decision Registry ({filteredDecisions.length} of{" "}
                {allDecisions.length} Records)
              </h2>
              <p className="text-xs sm:text-sm text-fg-muted">
                Filter by domain pillar or search any token, formula, component,
                or Decision ID (<code className="font-mono text-fg-primary">VF-01</code>,{" "}
                <code className="font-mono text-fg-primary">IE-04</code>,{" "}
                <code className="font-mono text-fg-primary">AD-02</code>).
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="xs"
                onClick={() => setAllExpanded((prev) => (prev ? false : true))}
                className="cursor-pointer font-mono text-xs"
              >
                {allExpanded ? "Collapse All Records" : "Expand All Records"}
              </Button>
            </div>
          </div>

          {/* Search + Pillar Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedPillar("all")}
                className={cn(
                  "rounded-cmplt-full border px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer cmplt-tabular",
                  selectedPillar === "all"
                    ? "border-border-accent bg-accent-subtle text-fg-accent font-semibold"
                    : "border-border-subtle bg-surface text-fg-secondary hover:bg-subtle hover:text-fg-primary"
                )}
              >
                All Pillars ({allDecisions.length})
              </button>
              {SYSTEM_PILLARS.map((p) => (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => setSelectedPillar(p.slug)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-cmplt-full border px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer cmplt-tabular",
                    selectedPillar === p.slug
                      ? "border-border-accent bg-accent-subtle text-fg-accent font-semibold"
                      : "border-border-subtle bg-surface text-fg-secondary hover:bg-subtle hover:text-fg-primary"
                  )}
                >
                  <span>{p.shortTitle}</span>
                  <span className="font-mono text-[10px] opacity-75">
                    ({p.decisions.length})
                  </span>
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-fg-muted" />
              <input
                type="search"
                placeholder="Filter decisions (e.g. OKLCH, GSAP)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border-subtle bg-surface py-2 pl-8 pr-16 text-xs text-fg-primary placeholder:text-fg-muted focus:border-border-accent focus:outline-none focus:ring-1 focus:ring-border-accent transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-fg-muted hover:text-fg-primary cursor-pointer"
                >
                  Clear
                </button>
              )}
              {!searchQuery && (
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-fg-muted border border-border-default rounded px-1 bg-subtle">
                  ADR
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Decision Record Cards List */}
        {filteredDecisions.length === 0 ? (
          <Card className="p-8 text-center space-y-2">
            <div className="text-sm font-semibold text-fg-primary">
              No Decision Records matched &ldquo;{searchQuery}&rdquo;
            </div>
            <p className="text-xs text-fg-muted">
              Try searching for <code className="font-mono">OKLCH</code>,{" "}
              <code className="font-mono">clamp</code>,{" "}
              <code className="font-mono">GSAP</code>,{" "}
              <code className="font-mono">concentric</code>, or{" "}
              <code className="font-mono">Figma</code>.
            </p>
            <div className="pt-2">
              <Button
                variant="secondary"
                size="xs"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedPillar("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            {filteredDecisions.map((decision, index) => (
              <DecisionRecordCard
                key={decision.id}
                decision={decision}
                showPillarLink
                defaultExpanded={index === 0}
                expanded={allExpanded !== null ? allExpanded : undefined}
                onToggle={() => setAllExpanded(null)}
              />
            ))}
          </div>
        )}
      </section>

      {/* =====================================================================
          SECTION 4: 26-ARTIFACT REGISTRY MATRIX & LIVING CHANGELOG LEDGER
         ===================================================================== */}
      <section className="space-y-4 border-t border-border-subtle pt-10">
        <Tabs defaultValue="matrix">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-fg-primary">
                System Inventory & Living Evolution Ledger
              </h2>
              <p className="text-xs text-fg-muted">
                Every artifact in <code className="font-mono">registry.json</code>{" "}
                mapped to its governing Decision IDs and version history.
              </p>
            </div>
            <TabsList variant="segmented">
              <TabsTrigger value="matrix">
                Registry Matrix ({REGISTRY_INVENTORY_MATRIX.length})
              </TabsTrigger>
              <TabsTrigger value="changelog">
                Living Changelog ({DECISION_CHANGELOG.length})
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="matrix">
            <div className="overflow-hidden rounded-cmplt-lg border border-border-subtle bg-surface">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border-subtle bg-subtle/60 text-fg-muted uppercase text-[10.5px]">
                    <tr>
                      <th className="py-3 px-4">Registry Artifact</th>
                      <th className="py-3 px-4">Type & Engine</th>
                      <th className="py-3 px-4">Governing Decisions</th>
                      <th className="py-3 px-4">Architectural Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle">
                    {REGISTRY_INVENTORY_MATRIX.map((item) => (
                      <tr key={item.name} className="hover:bg-subtle/30">
                        <td className="py-3 px-4 align-top">
                          <div className="font-mono font-semibold text-fg-primary">
                            @cmplt/{item.name}
                          </div>
                          <div className="font-mono text-[10.5px] text-fg-muted mt-0.5">
                            {item.sourcePath}
                          </div>
                        </td>
                        <td className="py-3 px-4 align-top">
                          <Badge variant="mono" size="sm" dot={false}>
                            {item.type}
                          </Badge>
                          <div className="font-mono text-[11px] text-fg-secondary mt-1">
                            {item.engine}
                          </div>
                        </td>
                        <td className="py-3 px-4 align-top">
                          <div className="flex flex-wrap gap-1">
                            {item.keyDecisions.map((id) => (
                              <a
                                key={id}
                                href={`#${id}`}
                                className="rounded-cmplt-2xs border border-border-accent/50 bg-accent-subtle px-1.5 py-0.5 font-mono text-[10px] font-semibold text-fg-accent hover:underline"
                              >
                                {id}
                              </a>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-fg-secondary leading-relaxed align-top">
                          {item.summary}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="changelog">
            <div className="space-y-4">
              {DECISION_CHANGELOG.map((entry) => (
                <Card key={entry.version} className="p-5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="brand" size="sm" className="font-mono">
                        {entry.version}
                      </Badge>
                      <span className="text-sm font-semibold text-fg-primary">
                        {entry.title}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-fg-muted cmplt-tabular flex items-center gap-1">
                      <GitCommit className="h-3.5 w-3.5 text-fg-accent" />
                      {entry.date}
                    </span>
                  </div>
                  <p className="text-xs text-fg-secondary leading-relaxed">
                    {entry.summary}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[11px] font-mono text-fg-muted mr-1">
                      Decisions Ratified:
                    </span>
                    {entry.decisionsAddedOrUpdated.map((id) => (
                      <a
                        key={id}
                        href={`#${id}`}
                        className="rounded-cmplt-2xs border border-border-subtle bg-subtle px-2 py-0.5 font-mono text-[10.5px] font-semibold text-fg-accent hover:border-border-accent"
                      >
                        {id}
                      </a>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
