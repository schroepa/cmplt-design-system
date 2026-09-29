"use client";

import * as React from "react";
import { Button } from "@/registry/cmplt/ui/button";
import { Check, X, AlertTriangle, ArrowUpRight } from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

/**
 * EngagementPanelBlock — Implements the exact multi-surface architecture from the Dark Mode reference:
 * - Outer Shell: bg-surface (#262625 in Dark / #FBFBF9 in Light), 24px radius (rounded-cmplt-xl)
 * - Left Summary Column: Alert Banner + 1px divided entity rows + stacked Accept (Forest Jade) / Reject buttons
 * - Right Nested Elevated Panel: bg-elevated (#2E2E2D in Dark / #FDFDFC in Light), 20px radius (rounded-cmplt-lg)
 * - Inset Grouped Key-Value List Boxes: bg-subtle (#2A2A29 in Dark / #F5F5F3 in Light), 10px radius, 1px hairline dividers
 */
export function EngagementPanelBlock() {
  const [status, setStatus] = React.useState<"pending" | "accepted" | "rejected">(
    "pending"
  );

  return (
    <div className="w-full rounded-cmplt-xl border border-border-default bg-surface p-2.5 sm:p-3 shadow-cmplt-lg">
      <div className="grid gap-4 md:gap-6 lg:grid-cols-12 lg:gap-6 2xl:gap-8">
        {/* Left Column: Summary, Alert Banner, Entity Links & Primary Actions */}
        <div className="lg:col-span-5 2xl:col-span-4 flex flex-col justify-between p-4 sm:p-6 md:p-7 lg:p-8 2xl:p-10">
          <div className="space-y-6 md:space-y-7">
            <h3 className="text-base sm:text-lg font-medium tracking-tight text-fg-primary">
              View Engagement
            </h3>

            {/* Subtle Warm Banner */}
            <div className="flex items-center gap-3 rounded-cmplt-md bg-muted/80 px-4 py-3 text-xs sm:text-[13px] text-fg-primary border border-border-subtle">
              <AlertTriangle className="h-4 w-4 shrink-0 text-status-warning fill-status-warning/20" />
              <span>
                {status === "pending"
                  ? "You have 2 days to accept this offer"
                  : status === "accepted"
                  ? "Engagement offer accepted"
                  : "Engagement offer declined"}
              </span>
            </div>

            {/* 1px Divided Entity Rows (2-col on Tablet, stacked on Mobile & Desktop sidebar) */}
            <div className="divide-y md:divide-y-0 lg:divide-y divide-border-subtle md:grid md:grid-cols-2 md:gap-4 lg:block pt-1">
              <div className="flex items-center gap-3.5 py-4 md:rounded-cmplt-md md:border md:border-border-subtle md:px-4 lg:rounded-none lg:border-0 lg:px-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-cmplt-sm bg-canvas border border-border-default font-mono text-xs font-bold text-fg-primary">
                  OC
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] text-fg-muted">Company</div>
                  <div className="flex items-center gap-1 text-[13px] font-medium text-fg-primary">
                    <span>ONE Collective</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-fg-muted" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 py-4 md:rounded-cmplt-md md:border md:border-border-subtle md:px-4 lg:rounded-none lg:border-0 lg:px-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-cmplt-sm bg-subtle border border-border-subtle text-sm">
                  🖌️
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] text-fg-muted">Job</div>
                  <div className="flex items-center gap-1 text-[13px] font-medium text-fg-primary">
                    <span>Product Design</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-fg-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons (Side-by-side on Tablet, stacked in Desktop sidebar) */}
          <div className="mt-8 md:mt-7 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 pt-4">
            <Button
              shape="rounded"
              onClick={() => setStatus("accepted")}
              className="w-full h-11 bg-[var(--cmplt-jade-500)] hover:bg-[var(--cmplt-jade-400)] text-white border border-[var(--cmplt-jade-400)]/30 font-medium"
            >
              <Check className="h-4 w-4 stroke-[2]" />
              {status === "accepted" ? "Accepted" : "Accept"}
            </Button>
            <Button
              variant="secondary"
              shape="rounded"
              onClick={() => setStatus("rejected")}
              className="w-full h-11 bg-canvas/70 hover:bg-subtle text-fg-primary border-border-subtle"
            >
              <X className="h-4 w-4" />
              {status === "rejected" ? "Rejected" : "Reject"}
            </Button>
          </div>
        </div>

        {/* Right Nested Elevated Panel (Concentric: Outer 24px - 10px p-2.5 = 14px rounded-cmplt-xl-inner) */}
        <div className="lg:col-span-7 2xl:col-span-8 rounded-cmplt-xl-inner bg-elevated border border-border-subtle p-5 sm:p-7 md:p-8 lg:p-9 2xl:p-11 space-y-6 md:space-y-8">
          {/* Grouped Key-Value Tables (Stacked on Mobile/Tablet/Desktop, Side-by-side on Desktop+ 2xl) */}
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 md:gap-7 2xl:gap-8">
            {/* Group 1 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-fg-primary">
                  Product Design
                </h4>
                <button
                  type="button"
                  aria-label="Close panel"
                  onClick={() => setStatus("pending")}
                  className="text-fg-muted hover:text-fg-primary transition-colors cursor-pointer 2xl:hidden"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Inset Grouped Key-Value List Box */}
              <div className="divide-y divide-border-subtle rounded-cmplt-md border border-border-default/60 bg-subtle px-4 sm:px-5">
                <div className="flex items-center justify-between py-3 text-[13px]">
                  <span className="text-fg-muted">Hourly Rate</span>
                  <span className="font-medium text-fg-primary cmplt-tabular">
                    $100/hr
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 text-[13px]">
                  <span className="text-fg-muted">Weekly Limit</span>
                  <span className="font-medium text-fg-primary cmplt-tabular">
                    40 hrs/week
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 text-[13px]">
                  <span className="text-fg-muted">Location</span>
                  <span className="font-medium text-fg-primary">Remote</span>
                </div>
              </div>
            </div>

            {/* Group 2 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-fg-primary">
                  Design Pairing
                </h4>
                <button
                  type="button"
                  aria-label="Close panel"
                  onClick={() => setStatus("pending")}
                  className="hidden 2xl:inline-flex text-fg-muted hover:text-fg-primary transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="divide-y divide-border-subtle rounded-cmplt-md border border-border-default/60 bg-subtle px-4 sm:px-5">
                <div className="flex items-center justify-between py-3 text-[13px]">
                  <span className="text-fg-muted">Hourly Rate</span>
                  <span className="font-medium text-fg-primary cmplt-tabular">
                    $140/hr
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 text-[13px]">
                  <span className="text-fg-muted">Weekly Limit</span>
                  <span className="font-medium text-fg-primary cmplt-tabular">
                    10 hrs/week
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 text-[13px]">
                  <span className="text-fg-muted">Location</span>
                  <span className="font-medium text-fg-primary">Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Unboxed Metadata Key-Value Rows */}
          <div className="border-t border-border-subtle/70 pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-x-10 gap-y-3.5 text-[13px]">
            <div className="flex items-center justify-between gap-4">
              <span className="text-fg-muted">Duration</span>
              <span className="text-fg-primary font-medium">Open Ended</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-fg-muted">Response Deadline</span>
              <span className="text-fg-primary cmplt-tabular">
                12 December, 2026
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-fg-muted">Start Date</span>
              <span className="text-fg-primary cmplt-tabular">
                Dec 1, 2026
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-fg-muted">PO Number</span>
              <span className="font-mono text-xs text-fg-primary cmplt-tabular">
                REF025
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
