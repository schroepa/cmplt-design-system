"use client";

import * as React from "react";
import Link from "next/link";
import { EngagementPanelBlock } from "@/registry/cmplt/blocks/engagement-panel-block";
import { AppManagerBlock } from "@/registry/cmplt/blocks/app-manager-block";
import { AiDeploymentCard } from "@/registry/cmplt/blocks/ai-deployment-card";
import { TokenSyncInspectorBlock } from "@/registry/cmplt/blocks/token-sync-inspector";
import { PricingTierBlock } from "@/registry/cmplt/blocks/pricing-tier-block";
import { CliInstallTabs } from "@/components/docs/cli-install-tabs";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Card } from "@/registry/cmplt/ui/card";
import { Sparkles, ExternalLink } from "lucide-react";

export default function BlocksLandingPage() {
  return (
    <div className="cmplt-container py-16 md:py-24 lg:py-32 2xl:py-40 space-y-24 md:space-y-32 2xl:space-y-40">
      {/* Hero Header */}
      <div className="max-w-4xl space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="brand">
            <Sparkles className="h-3 w-3" /> cmplt Registry Blocks · 1-Command Install
          </Badge>
        </div>
        <h1 className="cmplt-h1 text-fg-primary">
          Production-Ready Blocks.{" "}
          <span className="text-fg-accent">Installed via CLI.</span>
        </h1>
        <p className="cmplt-lead text-fg-secondary">
          Every <strong className="text-fg-primary">cmplt Block</strong> is composed
          from our headless <code className="font-mono text-fg-primary">@base-ui/react</code>{" "}
          primitives and calibrated 4-step surface hierarchy. Run{" "}
          <code className="font-mono text-fg-accent">npx shadcn add @cmplt/[block]</code>{" "}
          to install the block and all required primitives into your repository.
        </p>
      </div>

      {/* Block 01: Multi-Layer Engagement Offer Shell */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                01. Multi-Layer Engagement Offer Shell
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/engagement-panel-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Demonstrates Matte Graphite / Warm Alabaster nested surface elevation (Shell → Elevated Panel → Inset Grouped Key-Value Boxes).
            </p>
          </div>
          <a
            href="/r/engagement-panel-block.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-accent hover:underline"
          >
            /r/engagement-panel-block.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <CliInstallTabs itemName="engagement-panel-block" />
        <div className="cmplt-stage bg-cmplt-dots">
          <EngagementPanelBlock />
        </div>
      </section>

      {/* Block 02: Multi-Pane App Directory Window Shell */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                02. Multi-Pane App Directory Window Shell
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/app-manager-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              3-pane window shell with pill search field, squircle app icons, coral active borders, and frosted action footer.
            </p>
          </div>
          <a
            href="/r/app-manager-block.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-accent hover:underline"
          >
            /r/app-manager-block.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <CliInstallTabs itemName="app-manager-block" />
        <div className="cmplt-stage bg-cmplt-dots">
          <AppManagerBlock />
        </div>
      </section>

      {/* Block 03: AI Edge Deployment Card */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                03. AI Edge Deployment Control Surface
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/ai-deployment-card
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Uses: Card, Select, Switch, Progress, Badge, Button, Dialog
            </p>
          </div>
          <a
            href="/r/ai-deployment-card.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-accent hover:underline"
          >
            /r/ai-deployment-card.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid gap-8 md:gap-10 lg:gap-12 2xl:gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <div className="cmplt-stage bg-cmplt-dots">
              <AiDeploymentCard />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <CliInstallTabs itemName="ai-deployment-card" />
            <Card className="p-6 md:p-7 2xl:p-8 space-y-4">
              <div className="text-sm font-semibold text-fg-primary">
                Automatic Registry Dependency Graph
              </div>
              <p className="cmplt-body-sm text-fg-secondary">
                Installing <code className="font-mono text-fg-primary">@cmplt/ai-deployment-card</code>{" "}
                automatically resolves and installs 7 primitive dependencies from the registry:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "card",
                  "badge",
                  "button",
                  "switch",
                  "progress",
                  "select",
                  "dialog",
                ].map((dep) => (
                  <Link key={dep} href={`/docs/components/${dep}`}>
                    <Badge variant="outline" size="sm" className="hover:border-border-accent">
                      @cmplt/{dep}
                    </Badge>
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Block 04: Token Sync Inspector */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                04. Code ↔ Figma Token Parity Inspector
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/token-sync-inspector
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Uses: Card, Popover, Badge, Button
            </p>
          </div>
          <a
            href="/r/token-sync-inspector.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-accent hover:underline"
          >
            /r/token-sync-inspector.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid gap-8 md:gap-10 lg:gap-12 2xl:gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <div className="cmplt-stage bg-cmplt-dots">
              <TokenSyncInspectorBlock />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <CliInstallTabs itemName="token-sync-inspector" />
            <Card className="p-6 md:p-7 2xl:p-8 space-y-3">
              <div className="text-sm font-semibold text-fg-primary">
                Ideal for Design System Documentation Portals
              </div>
              <p className="cmplt-body-sm text-fg-secondary">
                Drop this block into your internal styleguide to let designers and engineers inspect live CSS variables alongside their Figma Variable collection paths.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Block 05: Pricing Tier Matrix */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                05. SaaS &amp; Design System Pricing Matrix
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/pricing-tier-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Uses: Tabs, Card, Badge, Button
            </p>
          </div>
          <a
            href="/r/pricing-tier-block.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-accent hover:underline"
          >
            /r/pricing-tier-block.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="space-y-8 md:space-y-10">
          <CliInstallTabs itemName="pricing-tier-block" />
          <div className="cmplt-stage bg-cmplt-dots">
            <PricingTierBlock />
          </div>
        </div>
      </section>
    </div>
  );
}
