"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/registry/cmplt/ui/card";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Button } from "@/registry/cmplt/ui/button";
import { Switch } from "@/registry/cmplt/ui/switch";
import { Progress } from "@/registry/cmplt/ui/progress";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/registry/cmplt/ui/select";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/registry/cmplt/ui/dialog";
import { Cpu, Globe, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react";

const TELEMETRY_BARS = [42, 58, 51, 74, 66, 88, 79, 94, 68, 84, 91, 76];

/**
 * AiDeploymentCard — Demonstrates all 7 sections of the Visual Style Guide:
 * - Soft 20px-24px Card Container + Squircle App Icon
 * - Oversized Hero Metric (.cmplt-metric) with Tabular Figures
 * - Analytical Dot-Matrix Focus Area with Top-Rounded / Flat-Bottom Chart Bars
 * - Micro-Grid Key-Value Pairs + Minimalist Dot Status Badge
 * - Pill-shaped Switches & Primary Action Buttons + Flat Level-0 Select Input
 */
export function AiDeploymentCard() {
  const [edgeCache, setEdgeCache] = React.useState(true);
  const [zeroRetention, setZeroRetention] = React.useState(true);
  const [region, setRegion] = React.useState("eu-central-1");
  const [load, setLoad] = React.useState(68);

  return (
    <Card variant="default" className="w-full h-full flex flex-col justify-between">
      <div>
        <CardHeader className="border-b border-border-subtle pb-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3.5">
              {/* Squircle App Icon (Section 2) */}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-cmplt-squircle bg-subtle border border-border-subtle text-fg-primary">
                <Cpu className="h-4 w-4 stroke-[1.75] text-fg-accent" />
              </span>
              <div>
                <CardTitle>Edge Cluster Telemetry</CardTitle>
                <CardDescription>
                  Real-time Base UI & OKLCH control surface
                </CardDescription>
              </div>
            </div>
            {/* Minimalist Dot Status Badge (Section 7) */}
            <Badge variant="success" size="sm">
              Operational
            </Badge>
          </div>

          {/* Hero Metric Anchor + Micro-Layout Key-Value Grid (Sections 3 & 4) */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-2">
            <div className="sm:col-span-2">
              <div className="cmplt-meta">Total Requests (24h)</div>
              <div className="mt-1.5 flex items-baseline gap-2.5">
                <span className="cmplt-metric text-3xl sm:text-4xl text-fg-primary">
                  2,849,120
                </span>
                <span className="inline-flex items-center text-xs font-medium text-status-success cmplt-tabular">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  +14.8%
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-end border-t sm:border-t-0 sm:border-l border-border-subtle pt-3 sm:pt-0 sm:pl-5">
              <div className="cmplt-meta">P99 Latency</div>
              <div className="mt-1.5 cmplt-metric text-xl sm:text-2xl text-fg-primary">
                8.4<span className="text-xs font-normal text-fg-muted ml-0.5">ms</span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
          {/* Analytical Dot-Matrix Focus Area + Top-Rounded / Flat-Bottom Chart Bars (Sections 2 & 5) */}
          <div className="rounded-cmplt-md border border-border-subtle bg-cmplt-dots p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-4">
              <span className="cmplt-meta font-medium text-fg-secondary">
                Throughput Distribution (12h Window)
              </span>
              <span className="font-mono text-[11px] text-fg-muted cmplt-tabular">
                Peak: 94.2k req/m
              </span>
            </div>
            <div className="flex h-20 items-end gap-2 pt-2">
              {TELEMETRY_BARS.map((val, idx) => (
                <div
                  key={idx}
                  style={{ height: `${val}%` }}
                  className="flex-1 rounded-t-[5px] rounded-b-none bg-accent/80 transition-all hover:bg-fg-accent"
                  title={`${val}% capacity`}
                />
              ))}
            </div>
          </div>

          {/* Level-0 Flat Select Control (8px radius, no shadow) */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-fg-secondary flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 stroke-[1.75] text-fg-muted" />
              Primary Deployment Region
            </label>
            <Select
              value={region}
              onValueChange={(val) => {
                if (val) setRegion(val);
              }}
            >
              <SelectTrigger aria-label="Deployment Region">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eu-central-1">
                  Frankfurt (eu-central-1) — 8.4ms
                </SelectItem>
                <SelectItem value="us-east-1">
                  Virginia (us-east-1) — 24.1ms
                </SelectItem>
                <SelectItem value="ap-northeast-1">
                  Tokyo (ap-northeast-1) — 41.0ms
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Clean 1px Divided List Rows with Pill Switches (Sections 4, 6, 7) */}
          <div className="divide-y divide-border-subtle rounded-cmplt-md border border-border-subtle bg-subtle/35 px-4 sm:px-5">
            <div className="flex items-center justify-between gap-4 py-3.5">
              <div>
                <div className="text-[13px] font-medium text-fg-primary">
                  Global Edge Token Cache
                </div>
                <div className="cmplt-meta">
                  Replicate registry artifacts across 310 PoPs
                </div>
              </div>
              <Switch
                checked={edgeCache}
                onCheckedChange={setEdgeCache}
                aria-label="Toggle Global Edge Token Cache"
              />
            </div>

            <div className="flex items-center justify-between gap-4 py-3.5">
              <div>
                <div className="text-[13px] font-medium text-fg-primary flex items-center gap-1.5">
                  Zero-Data-Retention Mode
                  <ShieldCheck className="h-3.5 w-3.5 stroke-[1.75] text-status-success" />
                </div>
                <div className="cmplt-meta">
                  SOC2 Type II & EU AI Act compliant isolation
                </div>
              </div>
              <Switch
                checked={zeroRetention}
                onCheckedChange={setZeroRetention}
                aria-label="Toggle Zero-Data-Retention Mode"
              />
            </div>
          </div>

          {/* Tabular Progress Readout */}
          <div className="space-y-2.5">
            <Progress
              value={load}
              label="Compute Quota Utilization"
              showValue
            />
            <div className="flex items-center justify-between cmplt-meta">
              <span>Active Node: {region}</span>
              <button
                type="button"
                onClick={() => setLoad((prev) => (prev >= 92 ? 42 : prev + 12))}
                className="text-fg-accent hover:underline cursor-pointer font-medium cmplt-tabular"
              >
                Simulate Burst (+12%)
              </button>
            </div>
          </div>
        </CardContent>
      </div>

      <CardFooter className="border-t border-border-subtle pt-5">
        <span className="font-mono text-[11px] text-fg-muted">
          @cmplt/ai-deployment-card
        </span>
        <Dialog>
          <DialogTrigger
            render={
              <Button variant="primary" size="sm">
                <Sparkles className="h-3.5 w-3.5" />
                Deploy Config
              </Button>
            }
          />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Production Rollout</DialogTitle>
              <DialogDescription>
                You are deploying to <strong className="text-fg-primary">{region}</strong>{" "}
                with Edge Cache{" "}
                <Badge variant={edgeCache ? "success" : "outline"} size="sm">
                  {edgeCache ? "Enabled" : "Disabled"}
                </Badge>
                .
              </DialogDescription>
            </DialogHeader>
            <div className="rounded-cmplt-md border border-border-subtle bg-subtle p-3.5 font-mono text-xs text-fg-secondary">
              npx shadcn@latest add @cmplt/ai-deployment-card
            </div>
            <DialogFooter>
              <DialogClose
                render={<Button variant="outline" size="sm">Cancel</Button>}
              />
              <DialogClose
                render={
                  <Button variant="primary" size="sm">
                    Rollout Now
                  </Button>
                }
              />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
