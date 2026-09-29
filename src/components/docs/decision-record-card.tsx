"use client";

import * as React from "react";
import Link from "next/link";
import type { GranularDecisionRecord } from "@/components/docs/living-blueprint-catalog";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Card } from "@/registry/cmplt/ui/card";
import { Button } from "@/registry/cmplt/ui/button";
import {
  Check,
  Copy,
  FileCode2,
  ShieldCheck,
  XCircle,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const PILLAR_BADGE_LABELS: Record<
  GranularDecisionRecord["pillar"],
  { label: string; href: string }
> = {
  "visual-foundations": {
    label: "01 · Visual Foundations (UI)",
    href: "/docs/blueprint/visual-foundations",
  },
  "interaction-ergonomics": {
    label: "02 · Interaction & Ergonomics (UX)",
    href: "/docs/blueprint/interaction-ergonomics",
  },
  "architecture-delivery": {
    label: "03 · Architecture & Delivery (Tech)",
    href: "/docs/blueprint/architecture-delivery",
  },
};

export function DecisionRecordCard({
  decision,
  showPillarLink = false,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onToggle,
}: {
  decision: GranularDecisionRecord;
  showPillarLink?: boolean;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
}) {
  const [internalExpanded, setInternalExpanded] = React.useState(defaultExpanded);
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;

  React.useEffect(() => {
    if (controlledExpanded === undefined) {
      setInternalExpanded(defaultExpanded);
    }
  }, [defaultExpanded, controlledExpanded]);

  const toggleExpanded = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalExpanded((prev) => !prev);
    }
  };

  const [copiedId, setCopiedId] = React.useState(false);
  const [copiedParam, setCopiedParam] = React.useState<string | null>(null);

  const handleCopyId = () => {
    navigator.clipboard.writeText(`${decision.id}: ${decision.title}`);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 1500);
  };

  const handleCopyParam = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedParam(val);
    setTimeout(() => setCopiedParam(null), 1500);
  };

  const pillarInfo = PILLAR_BADGE_LABELS[decision.pillar];

  return (
    <Card
      id={decision.id}
      variant="default"
      className="overflow-hidden scroll-mt-24"
    >
      {/* Top Header Strip */}
      <div className="bg-subtle/45 px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleCopyId}
              title="Copy Decision ID"
              className="inline-flex items-center gap-1.5 rounded-cmplt-2xs border border-border-accent/60 bg-accent-subtle px-2.5 py-0.5 font-mono text-xs font-semibold text-fg-accent cursor-pointer transition-colors hover:border-border-accent"
            >
              <span>{decision.id}</span>
              {copiedId ? (
                <Check className="h-3 w-3 text-status-success" />
              ) : (
                <Copy className="h-2.5 w-2.5 opacity-75" />
              )}
            </button>

            <Badge variant="success" size="sm">
              {decision.status}
            </Badge>

            {showPillarLink && (
              <Link href={pillarInfo.href}>
                <Badge
                  variant="outline"
                  size="sm"
                  className="hover:border-border-strong cursor-pointer"
                >
                  {pillarInfo.label}
                </Badge>
              </Link>
            )}
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-fg-muted cmplt-tabular">
            <span>Since {decision.versionIntroduced}</span>
            <span>·</span>
            <span>Synced {decision.lastUpdated}</span>
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-semibold tracking-tight text-fg-primary">
          {decision.title}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-fg-secondary leading-relaxed max-w-measure-body">
          {decision.summary}
        </p>
      </div>

      {/* Progressive Disclosure Toggle Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-border-subtle bg-subtle/25 px-4 py-3 sm:px-6 sm:py-2.5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-fg-muted">
          <span className="font-mono text-[11px] text-fg-secondary">
            {decision.granularSpec.length} spec parameters
          </span>
          <span>·</span>
          <span className="font-mono text-[11px] text-fg-secondary">
            {decision.sourceFiles.length} source {decision.sourceFiles.length === 1 ? "file" : "files"}
          </span>
        </div>
        <Button
          variant="secondary"
          size="xs"
          onClick={toggleExpanded}
          className="inline-flex w-full sm:w-auto min-h-[38px] sm:min-h-0 justify-center items-center gap-1.5 cursor-pointer"
        >
          <span>
            {isExpanded ? (
              "Collapse Specification"
            ) : (
              <>
                Inspect <span className="hidden sm:inline">Specification &amp; Rationale</span><span className="sm:hidden">Spec</span> ({decision.granularSpec.length})
              </>
            )}
          </span>
          {isExpanded ? (
            <ChevronUp className="h-3.5 w-3.5" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5" />
          )}
        </Button>
      </div>

      {/* Body Content (Collapsible) */}
      {isExpanded && (
        <div className="border-t border-border-subtle p-4 sm:p-6 space-y-5">
        {/* 1. Context & Problem Statement */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-cmplt-md border border-border-subtle bg-subtle/40 p-4 space-y-1.5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
              Context & Problem Solved
            </div>
            <p className="text-xs text-fg-secondary leading-relaxed">
              {decision.contextAndProblem}
            </p>
          </div>

          <div className="rounded-cmplt-md border border-border-subtle bg-subtle/40 p-4 space-y-1.5">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-fg-accent">
              <Sparkles className="h-3 w-3" />
              Engineering & Design Rationale
            </div>
            <p className="text-xs text-fg-secondary leading-relaxed">
              {decision.rationale}
            </p>
          </div>
        </div>

        {/* 2. Granular Specification & Parameters Table */}
        <div className="space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
            Granular Specification & Exact Parameters
          </div>
          <div className="overflow-x-auto rounded-cmplt-md border border-border-subtle bg-surface">
            <table className="w-full min-w-[480px] text-left text-xs">
              <thead className="border-b border-border-subtle bg-subtle/60 text-fg-muted uppercase text-[10.5px]">
                <tr>
                  <th className="py-2.5 px-3.5">Parameter / Token</th>
                  <th className="py-2.5 px-3.5">Calibrated Value</th>
                  <th className="py-2.5 px-3.5">Implementation Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {decision.granularSpec.map((spec) => (
                  <tr
                    key={spec.parameter}
                    className="hover:bg-subtle/30 transition-colors"
                  >
                    <td className="py-2.5 px-3.5 font-mono font-semibold text-fg-primary align-top">
                      {spec.parameter}
                    </td>
                    <td className="py-2.5 px-3.5 align-top">
                      <button
                        type="button"
                        onClick={() => handleCopyParam(spec.value)}
                        title="Click to copy parameter value"
                        className="font-mono text-fg-accent hover:underline text-left cursor-pointer cmplt-tabular"
                      >
                        {copiedParam === spec.value ? "Copied!" : spec.value}
                      </button>
                    </td>
                    <td className="py-2.5 px-3.5 text-fg-secondary leading-relaxed align-top">
                      {spec.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Rejected Alternatives & Verification Guardrail */}
        <div className="grid gap-4 md:grid-cols-2 pt-1">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
              <XCircle className="h-3.5 w-3.5 text-status-danger" />
              Rejected Alternatives & Anti-Patterns
            </div>
            <ul className="space-y-1.5">
              {decision.rejectedAlternatives.map((alt, idx) => (
                <li
                  key={idx}
                  className="rounded-cmplt-sm border border-border-subtle bg-subtle/30 px-3 py-2 text-xs text-fg-secondary leading-relaxed"
                >
                  {alt}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 flex flex-col justify-between">
            <div className="rounded-cmplt-md border border-border-subtle bg-subtle/50 p-3.5 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-status-success">
                <ShieldCheck className="h-3.5 w-3.5" />
                Mandatory Verification Rule
              </div>
              <p className="text-xs text-fg-primary leading-relaxed">
                {decision.verificationRule}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
                <FileCode2 className="h-3.5 w-3.5 text-fg-accent" />
                Authoritative Source Files
              </div>
              <div className="flex flex-wrap gap-1.5">
                {decision.sourceFiles.map((file) => (
                  <span
                    key={file}
                    className="inline-flex items-center gap-1 rounded-cmplt-2xs border border-border-subtle bg-subtle px-2 py-0.5 font-mono text-[11px] text-fg-primary"
                  >
                    <CheckCircle2 className="h-2.5 w-2.5 text-fg-accent" />
                    {file}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </Card>
  );
}
