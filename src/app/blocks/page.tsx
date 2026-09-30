"use client";

import * as React from "react";
import Link from "next/link";
import { HeroMotionBlock } from "@/registry/cmplt/blocks/hero-motion-block";
import { AppDockBlock } from "@/registry/cmplt/blocks/app-dock-block";
import { EngagementPanelBlock } from "@/registry/cmplt/blocks/engagement-panel-block";
import { AppManagerBlock } from "@/registry/cmplt/blocks/app-manager-block";
import { AiDeploymentCard } from "@/registry/cmplt/blocks/ai-deployment-card";
import { TokenSyncInspectorBlock } from "@/registry/cmplt/blocks/token-sync-inspector";
import { PricingTierBlock } from "@/registry/cmplt/blocks/pricing-tier-block";
import { SiteHeaderBlock } from "@/registry/cmplt/blocks/site-header-block";
import { FeatureBentoBlock } from "@/registry/cmplt/blocks/feature-bento-block";
import { StatsMetricBlock } from "@/registry/cmplt/blocks/stats-metric-block";
import { FaqAccordionBlock } from "@/registry/cmplt/blocks/faq-accordion-block";
import { CtaBannerBlock } from "@/registry/cmplt/blocks/cta-banner-block";
import { SiteFooterBlock } from "@/registry/cmplt/blocks/site-footer-block";
import { DashboardShellBlock } from "@/registry/cmplt/blocks/dashboard-shell-block";
import { ActivityFeedBlock } from "@/registry/cmplt/blocks/activity-feed-block";
import { DataTableToolbarBlock } from "@/registry/cmplt/blocks/data-table-toolbar-block";
import { AccountSettingsBlock } from "@/registry/cmplt/blocks/account-settings-block";
import { CliInstallTabs } from "@/components/docs/cli-install-tabs";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Card } from "@/registry/cmplt/ui/card";
import { Sparkles, ExternalLink, ArrowRight } from "lucide-react";

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
          <span className="text-fg-brand">Installed via CLI.</span>
        </h1>
        <p className="cmplt-lead text-fg-secondary">
          Every <strong className="text-fg-primary">cmplt Block</strong> is composed
          from our headless <code className="font-mono text-fg-primary">@base-ui/react</code>{" "}
          primitives and calibrated 4-step surface hierarchy. Run{" "}
          <code className="font-mono text-fg-brand">npx shadcn add @cmplt/[block]</code>{" "}
          to install the block and all required primitives into your repository.
        </p>
      </div>

      {/* Featured: Interactive Hero Motion Block */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="brand">Featured Block</Badge>
              <h2 className="cmplt-h3 text-fg-primary">
                Interactive Hero Motion Section
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/hero-motion-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Composite section pairing Three.js dynamic dot canvas, dual GSAP action triggers, and Liquid Utopia typography.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/showcase"
              className="inline-flex items-center gap-1.5 font-medium text-xs text-fg-brand hover:underline"
            >
              Full Page Showcase <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href="/r/hero-motion-block.json"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-muted hover:text-fg-primary hover:underline"
            >
              /r/hero-motion-block.json <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <CliInstallTabs itemName="hero-motion-block" />
        <HeroMotionBlock />
      </section>

      {/* Featured: Fluid Workspace Dock & Presence Block */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="brand">Liquid Physics</Badge>
              <h2 className="cmplt-h3 text-fg-primary">
                Fluid Workspace Dock &amp; Presence
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/app-dock-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Interactive workspace dock combining gooey surface tension physics, live collaborator avatar group, and reactive stage switching.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/r/app-dock-block.json"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-muted hover:text-fg-primary hover:underline"
            >
              /r/app-dock-block.json <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <CliInstallTabs itemName="app-dock-block" />
        <AppDockBlock />
      </section>

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
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
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
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
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
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
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
                    <Badge variant="outline" size="sm" className="hover:border-border-brand">
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
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
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
                05. SaaS Pricing Matrix
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
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
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

      {/* Block 06: Site Header Navigation */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                06. Site Header &amp; Responsive Navigation Shell
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/site-header-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Sticky frosted navbar with command palette search trigger, ecosystem dropdowns, and mobile slide-out drawer.
            </p>
          </div>
          <a
            href="/r/site-header-block.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
          >
            /r/site-header-block.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <CliInstallTabs itemName="site-header-block" />
        <div className="rounded-panel border border-border-default overflow-hidden">
          <SiteHeaderBlock />
        </div>
      </section>

      {/* Block 07: Feature Bento Grid */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                07. Feature Bento Grid Showcase
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/feature-bento-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Asymmetric bento grid displaying OKLCH gamut controls, Base UI primitives, and zero runtime performance.
            </p>
          </div>
          <a
            href="/r/feature-bento-block.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
          >
            /r/feature-bento-block.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <CliInstallTabs itemName="feature-bento-block" />
        <div className="cmplt-stage bg-cmplt-dots">
          <FeatureBentoBlock />
        </div>
      </section>

      {/* Block 08: Real-Time Telemetry & KPIs */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                08. Real-Time Telemetry &amp; KPI Metrics Grid
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/stats-metric-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              High-impact stats grid featuring Base UI Meter bars, percentage badges, and tabular monospace numbers.
            </p>
          </div>
          <a
            href="/r/stats-metric-block.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
          >
            /r/stats-metric-block.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <CliInstallTabs itemName="stats-metric-block" />
        <div className="cmplt-stage bg-cmplt-dots">
          <StatsMetricBlock />
        </div>
      </section>

      {/* Block 09: FAQ Knowledge Accordion */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                09. FAQ Knowledge Accordion
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/faq-accordion-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Structured Q&amp;A knowledge section with smooth Base UI accordion disclosure animations.
            </p>
          </div>
          <a
            href="/r/faq-accordion-block.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
          >
            /r/faq-accordion-block.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <CliInstallTabs itemName="faq-accordion-block" />
        <div className="cmplt-stage bg-cmplt-dots">
          <FaqAccordionBlock />
        </div>
      </section>

      {/* Block 10: CTA Launch & Newsletter Banner */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                10. High-Conversion CTA &amp; Newsletter Banner
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/cta-banner-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Action banner with email capture, radial glow accent, and stacked avatar social proof.
            </p>
          </div>
          <a
            href="/r/cta-banner-block.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
          >
            /r/cta-banner-block.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <CliInstallTabs itemName="cta-banner-block" />
        <div className="cmplt-stage bg-cmplt-dots">
          <CtaBannerBlock />
        </div>
      </section>

      {/* Block 11: SaaS Dashboard Application Shell */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                11. SaaS Dashboard Application Shell
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/dashboard-shell-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Full application frame with collapsible sidebar, active route indicators, breadcrumbs, search, and user profile menu.
            </p>
          </div>
          <a
            href="/r/dashboard-shell-block.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
          >
            /r/dashboard-shell-block.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <CliInstallTabs itemName="dashboard-shell-block" />
        <div className="cmplt-stage bg-cmplt-dots">
          <DashboardShellBlock />
        </div>
      </section>

      {/* Block 12: Real-Time Activity & Audit Trail */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                12. Real-Time Activity &amp; Audit Trail
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/activity-feed-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Chronological event stream with connected timeline nodes, actor avatars, and event category filters.
            </p>
          </div>
          <a
            href="/r/activity-feed-block.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
          >
            /r/activity-feed-block.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <CliInstallTabs itemName="activity-feed-block" />
        <div className="cmplt-stage bg-cmplt-dots">
          <ActivityFeedBlock />
        </div>
      </section>

      {/* Block 13: Enterprise Data Table Toolbar */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                13. Enterprise Data Table &amp; Management Toolbar
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/data-table-toolbar-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Live data table with query filtering, multi-row selection, batch delete actions, and pagination footer.
            </p>
          </div>
          <a
            href="/r/data-table-toolbar-block.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
          >
            /r/data-table-toolbar-block.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <CliInstallTabs itemName="data-table-toolbar-block" />
        <div className="cmplt-stage bg-cmplt-dots">
          <DataTableToolbarBlock />
        </div>
      </section>

      {/* Block 14: Account Settings & Danger Zone */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                14. Account Settings &amp; Danger Zone
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/account-settings-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Multi-section settings card featuring profile fields, radio cards plan selector, switches, and destructive alert dialog.
            </p>
          </div>
          <a
            href="/r/account-settings-block.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
          >
            /r/account-settings-block.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <CliInstallTabs itemName="account-settings-block" />
        <div className="cmplt-stage bg-cmplt-dots">
          <AccountSettingsBlock />
        </div>
      </section>

      {/* Block 15: Site Footer Multi-Column */}
      <section className="space-y-8 md:space-y-10 2xl:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="cmplt-h3 text-fg-primary">
                15. Site Footer &amp; Categorized Links
              </h2>
              <Badge variant="mono" size="sm" dot={false}>
                @cmplt/site-footer-block
              </Badge>
            </div>
            <p className="cmplt-body-sm text-fg-muted">
              Multi-column footer layout with categorized navigation links, live system status pill, and social channels.
            </p>
          </div>
          <a
            href="/r/site-footer-block.json"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-brand hover:underline"
          >
            /r/site-footer-block.json <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <CliInstallTabs itemName="site-footer-block" />
        <div className="rounded-panel border border-border-default overflow-hidden">
          <SiteFooterBlock />
        </div>
      </section>
    </div>
  );
}
