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
import { Meter } from "@/registry/cmplt/ui/meter";
import {
  TrendingUp,
  Activity,
  Server,
  DownloadCloud,
  CheckCircle2,
  HardDrive,
} from "lucide-react";

export function StatsMetricBlock() {
  return (
    <section className="space-y-6 w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border-subtle pb-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-fg">
            Real-Time System Telemetry &amp; KPIs
          </h3>
          <p className="text-xs text-fg-muted mt-0.5">
            Synchronized live metrics across globally distributed edge regions.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex size-2 rounded-full bg-status-success animate-pulse" />
          <span className="font-mono text-xs text-fg-secondary">All clusters operational</span>
        </div>
      </div>

      {/* 4-Card Metric Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Metric 1 */}
        <Card className="p-5 flex flex-col justify-between space-y-4 bg-surface">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-fg-secondary">Monthly Active Users</span>
            <div className="flex size-8 items-center justify-center rounded-sm bg-subtle text-fg">
              <Activity className="size-4" />
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-fg cmplt-tabular">
              248,620
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <Badge variant="success" size="sm" className="gap-1">
                <TrendingUp className="size-3" /> +24.8%
              </Badge>
              <span className="text-[11px] text-fg-muted">vs last period</span>
            </div>
          </div>
          <Meter value={82} variant="default" label="Quarter Target" showValue />
        </Card>

        {/* Metric 2 */}
        <Card className="p-5 flex flex-col justify-between space-y-4 bg-surface">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-fg-secondary">Edge Latency (p99)</span>
            <div className="flex size-8 items-center justify-center rounded-sm bg-status-success-bg text-status-success">
              <Server className="size-4" />
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-fg cmplt-tabular">
              1.42<span className="text-base text-fg-muted font-normal">ms</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <Badge variant="outline" size="sm" className="gap-1 text-status-success border-status-success/30">
                <CheckCircle2 className="size-3" /> 99.98% SLA
              </Badge>
              <span className="text-[11px] text-fg-muted">32 regions</span>
            </div>
          </div>
          <Meter value={15} variant="success" label="Latency Budget" showValue />
        </Card>

        {/* Metric 3 */}
        <Card className="p-5 flex flex-col justify-between space-y-4 bg-surface">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-fg-secondary">Cluster Storage Quota</span>
            <div className="flex size-8 items-center justify-center rounded-sm bg-status-warning-bg text-status-warning">
              <HardDrive className="size-4" />
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-fg cmplt-tabular">
              74.2<span className="text-base text-fg-muted font-normal"> GB</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <Badge variant="warning" size="sm">
                Near Limit
              </Badge>
              <span className="text-[11px] text-fg-muted">100 GB Allocated</span>
            </div>
          </div>
          <Meter value={74} variant="warning" label="Storage Consumption" showValue />
        </Card>

        {/* Metric 4 */}
        <Card className="p-5 flex flex-col justify-between space-y-4 bg-surface">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-fg-secondary">CLI Component Installs</span>
            <div className="flex size-8 items-center justify-center rounded-sm bg-brand/10 text-brand">
              <DownloadCloud className="size-4" />
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-fg cmplt-tabular">
              1,240,891
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <Badge variant="brand" size="sm" className="gap-1">
                <TrendingUp className="size-3" /> +42.1%
              </Badge>
              <span className="text-[11px] text-fg-muted">this week</span>
            </div>
          </div>
          <Meter value={92} variant="default" label="Weekly Goal" showValue />
        </Card>
      </div>
    </section>
  );
}
