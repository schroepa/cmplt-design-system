"use client";

import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineHeader,
  TimelineTitle,
  TimelineTime,
  TimelineDescription,
} from "@/registry/cmplt/ui/timeline";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/registry/cmplt/ui/avatar";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Button } from "@/registry/cmplt/ui/button";
import {
  GitCommit,
  ShieldCheck,
  Palette,
  AlertTriangle,
  Filter,
  CheckCircle2,
} from "lucide-react";

export function ActivityFeedBlock() {
  const [filter, setFilter] = React.useState<"all" | "security" | "releases">("all");

  return (
    <div className="rounded-panel border border-border-default bg-surface p-5 sm:p-7 shadow-xs w-full max-w-2xl mx-auto space-y-6">
      {/* Header with Title and Filter Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border-subtle">
        <div>
          <h3 className="text-base font-semibold text-fg">Activity &amp; Audit Trail</h3>
          <p className="text-xs text-fg-muted mt-0.5">Real-time team actions and security alerts.</p>
        </div>
        <div className="flex items-center gap-1.5">
          <Button
            variant={filter === "all" ? "primary" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "releases" ? "primary" : "outline"}
            size="sm"
            onClick={() => setFilter("releases")}
          >
            Releases
          </Button>
          <Button
            variant={filter === "security" ? "primary" : "outline"}
            size="sm"
            onClick={() => setFilter("security")}
          >
            Security
          </Button>
        </div>
      </div>

      {/* Timeline Stream */}
      <Timeline>
        <TimelineItem>
          <TimelineDot variant="accent">
            <GitCommit className="size-4" />
          </TimelineDot>
          <TimelineContent>
            <TimelineHeader>
              <div className="flex items-center gap-2">
                <TimelineTitle>Deployed Design System v1.2.0</TimelineTitle>
                <Badge variant="brand" size="sm">Production</Badge>
              </div>
              <TimelineTime>3 minutes ago</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>
              Published 68 shadcn registry endpoints with OKLCH token calibration and Base UI primitives.
            </TimelineDescription>
            <div className="mt-2 flex items-center gap-2 text-xs text-fg-muted">
              <Avatar size="xs">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <span>Triggered by <strong className="text-fg-primary">Sarah Connor</strong></span>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineDot variant="success">
            <ShieldCheck className="size-4" />
          </TimelineDot>
          <TimelineContent>
            <TimelineHeader>
              <div className="flex items-center gap-2">
                <TimelineTitle>API Access Key Rotated</TimelineTitle>
                <Badge variant="success" size="sm">Audit</Badge>
              </div>
              <TimelineTime>42 minutes ago</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>
              Rotated edge signing secret for cluster region <code className="font-mono text-fg-primary">eu-central-1</code>.
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineDot variant="default">
            <Palette className="size-4" />
          </TimelineDot>
          <TimelineContent>
            <TimelineHeader>
              <div className="flex items-center gap-2">
                <TimelineTitle>Figma Variable Tokens Synchronized</TimelineTitle>
                <Badge variant="outline" size="sm">Figma</Badge>
              </div>
              <TimelineTime>2 hours ago</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>
              Synchronized 42 semantic OKLCH color variables from the cmplt Figma library file.
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem isLast>
          <TimelineDot variant="warning">
            <AlertTriangle className="size-4" />
          </TimelineDot>
          <TimelineContent>
            <TimelineHeader>
              <div className="flex items-center gap-2">
                <TimelineTitle>High Memory Usage Resolved</TimelineTitle>
                <Badge variant="warning" size="sm">Auto-Scale</Badge>
              </div>
              <TimelineTime>5 hours ago</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>
              Memory threshold exceeded 85%. Automated worker pool scaled from 64 to 128 instances.
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
