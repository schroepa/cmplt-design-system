"use client";

import * as React from "react";
import {
  LiquidDock,
  LiquidDockItem,
  LiquidDockSeparator,
} from "@/registry/cmplt/ui/liquid-dock";
import { LiquidAvatar, LiquidAvatarGroup } from "@/registry/cmplt/ui/liquid-avatar-group";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Card } from "@/registry/cmplt/ui/card";
import { Heading, Text } from "@/registry/cmplt/ui/typography";
import {
  Terminal,
  Layers,
  Sparkles,
  BarChart3,
  Settings,
  FolderCode,
} from "lucide-react";

export function AppDockBlock() {
  const [activeTab, setActiveTab] = React.useState<string>("editor");

  const apps = [
    { id: "finder", label: "Files & Registry", icon: FolderCode },
    { id: "editor", label: "Code Studio", icon: Terminal },
    { id: "tokens", label: "3-Tier Tokens", icon: Layers },
    { id: "analytics", label: "Telemetry", icon: BarChart3 },
    { id: "ai", label: "Neural Assist", icon: Sparkles },
    { id: "settings", label: "Preferences", icon: Settings },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border-default bg-canvas/80 p-6 sm:p-10 md:p-12 shadow-lg space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Badge variant="default">Interactive Block</Badge>
            <span className="text-xs font-mono text-fg-muted">Liquid Physics Engine</span>
          </div>
          <Heading as="h3" size="h3">
            Fluid Workspace Dock &amp; Presence
          </Heading>
          <Text tone="muted" className="text-xs">
            Organic gooey surface tension, cursor velocity magnification, and live collaborative
            presence.
          </Text>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-fg-muted font-medium hidden sm:inline">
            Active Engineers:
          </span>
          <LiquidAvatarGroup max={4}>
            <LiquidAvatar size="sm" status="online">
              <span className="text-[11px] font-semibold">PS</span>
            </LiquidAvatar>
            <LiquidAvatar size="sm" status="online">
              <span className="text-[11px] font-semibold">AK</span>
            </LiquidAvatar>
            <LiquidAvatar size="sm" status="busy">
              <span className="text-[11px] font-semibold">ML</span>
            </LiquidAvatar>
            <LiquidAvatar size="sm" status="offline">
              <span className="text-[11px] font-semibold">TG</span>
            </LiquidAvatar>
          </LiquidAvatarGroup>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card variant="default" className="p-5 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase text-fg-muted tracking-wider">
              Active Workspace
            </span>
            <div className="text-lg font-semibold capitalize text-fg-primary">
              {apps.find((a) => a.id === activeTab)?.label}
            </div>
            <p className="text-xs text-fg-secondary">
              Synchronized via GSAP spring tickers and SVG gooey matrices across client instances.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-fg-muted">
            <span>Latency: 12ms</span>
            <span className="text-status-success font-mono">● LIVE</span>
          </div>
        </Card>

        <Card variant="subtle" className="p-5 flex flex-col justify-between md:col-span-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase text-fg-muted tracking-wider">
              Fluid Telemetry
            </span>
            <Badge variant="outline">60 FPS WebGL</Badge>
          </div>
          <div className="py-3 font-mono text-xs text-fg-secondary space-y-1">
            <div className="flex justify-between">
              <span>dock_magnification_factor:</span>
              <span className="text-fg-primary">1.45x</span>
            </div>
            <div className="flex justify-between">
              <span>gooey_surface_tension:</span>
              <span className="text-fg-primary">matrix(1 0 0 0 0 ... 18 -7)</span>
            </div>
            <div className="flex justify-between">
              <span>color_gamut_mode:</span>
              <span className="text-fg-brand">P3 Wide Gamut OKLCH</span>
            </div>
          </div>
          <div className="text-[11px] text-fg-muted">
            Hover over the floating dock icons below to activate organic gooey magnification.
          </div>
        </Card>
      </div>

      <div className="pt-4 flex justify-center">
        <LiquidDock className="shadow-xl bg-canvas/90 backdrop-blur-md">
          {apps.slice(0, 3).map((app) => {
            const Icon = app.icon;
            return (
              <LiquidDockItem
                key={app.id}
                label={app.label}
                active={activeTab === app.id}
                onClick={() => setActiveTab(app.id)}
              >
                <Icon />
              </LiquidDockItem>
            );
          })}
          <LiquidDockSeparator />
          {apps.slice(3).map((app) => {
            const Icon = app.icon;
            return (
              <LiquidDockItem
                key={app.id}
                label={app.label}
                active={activeTab === app.id}
                onClick={() => setActiveTab(app.id)}
              >
                <Icon />
              </LiquidDockItem>
            );
          })}
        </LiquidDock>
      </div>
    </div>
  );
}
