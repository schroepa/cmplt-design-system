"use client";

import * as React from "react";
import { HighlightInput } from "@/registry/cmplt/ui/highlight-input";
import { AnimatedCtaButton } from "@/registry/cmplt/ui/animated-cta-button";
import {
  Search,
  Link2,
  MessageSquare,
  GraduationCap,
  Lightbulb,
  Ticket,
  Users,
  Calendar,
  PenTool,
  Home,
  Plus,
} from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

const INSTALLED_APPS = [
  { id: "links", name: "Links", icon: Link2, color: "bg-blue-600 text-white", count: 1 },
  { id: "forums", name: "Forums", icon: MessageSquare, color: "bg-indigo-500 text-white", count: 1 },
  { id: "courses", name: "Courses", icon: GraduationCap, color: "bg-violet-500 text-white", count: 1 },
  { id: "suggestions", name: "Suggestions", icon: Lightbulb, color: "bg-amber-100 text-amber-800 border border-amber-300", count: 1 },
  { id: "tickets", name: "Tickets", icon: Ticket, color: "bg-sky-100 text-sky-700 border border-sky-300", count: 1 },
];

const READY_APPS = [
  { id: "community", name: "Community", icon: Users, color: "bg-rose-100 text-rose-600" },
  { id: "chat", name: "Chat", icon: MessageSquare, color: "bg-[#EA623F] text-white" },
  { id: "calendar", name: "Calendar Booking", icon: Calendar, color: "bg-orange-100 text-orange-600" },
  { id: "blog", name: "Blog", icon: PenTool, color: "bg-indigo-100 text-indigo-600" },
];

/**
 * AppManagerBlock — Implements the exact multi-pane window architecture from the Light Mode reference:
 * - Soft Alabaster Shell (#FBFBF9 in Light / #262625 in Dark) with 24px radius & top grab handle
 * - Left Sidebar (#F5F5F3 in Light) with GSAP HighlightInput Pill Search, Squircle App Icons, Indigo Count Circles & Coral "+ ADD"
 * - Center Editorial Pane with generous whitespace and clear typographic hierarchy
 * - Right Nested Preview Card with active Coral border highlight ("Suggestions App")
 * - Frosted Bottom Action Bar with GSAP AnimatedCtaButton "Done" Pill Button
 */
export function AppManagerBlock() {
  const [search, setSearch] = React.useState("");
  const [selectedApp, setSelectedApp] = React.useState("suggestions");

  const filteredInstalled = INSTALLED_APPS.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full overflow-hidden rounded-cmplt-xl border border-border-default bg-surface shadow-cmplt-lg">
      <div className="grid lg:grid-cols-12">
        {/* Left Sidebar: GSAP Highlight Pill Search + Installed & Ready Apps */}
        <div className="lg:col-span-4 2xl:col-span-3 border-b lg:border-b-0 lg:border-r border-border-subtle bg-subtle/75 p-5 sm:p-6 lg:p-7 2xl:p-8 space-y-6">
          {/* GSAP Highlight Pill Search Field */}
          <HighlightInput
            shape="pill"
            highlightMode="ambient"
            leadingIcon={<Search />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Apps..."
            className="text-xs"
          />

          {/* App Lists (Stacked on Mobile & Desktop Sidebar, 2-Col Split on Tablet) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Installed Apps List */}
            <div className="space-y-2.5">
              <div className="px-1.5 text-[10px] font-semibold uppercase tracking-wider text-fg-muted">
                Installed Apps
              </div>
              <div className="space-y-1.5">
                {filteredInstalled.map((app) => {
                  const Icon = app.icon;
                  const isSelected = selectedApp === app.id;
                  return (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => setSelectedApp(app.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-cmplt-lg-inner-sm p-1.5 pr-3 text-left text-xs transition-colors cursor-pointer",
                        isSelected
                          ? "bg-surface text-fg-primary shadow-cmplt-xs"
                          : "text-fg-secondary hover:bg-surface/60 hover:text-fg-primary"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        {/* Concentric Icon: Row (12px) - Padding (6px) = 6px (rounded-cmplt-xs) */}
                        <span
                          className={cn(
                            "flex h-7 w-7 items-center justify-center rounded-cmplt-xs shadow-cmplt-xs",
                            app.color
                          )}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-medium text-fg-primary">
                          {app.name}
                        </span>
                      </span>
                      <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[var(--cmplt-indigo-500)] text-[10px] font-semibold text-white cmplt-tabular">
                        {app.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Divider + Ready to Install */}
            <div className="border-t md:border-t-0 md:border-l lg:border-l-0 lg:border-t border-border-subtle pt-5 md:pt-0 md:pl-6 lg:pl-0 lg:pt-5 space-y-2.5">
              <div className="px-1.5 text-[10px] font-semibold uppercase tracking-wider text-fg-muted">
                Ready to Install
              </div>
              <div className="space-y-1.5">
                {READY_APPS.map((app) => {
                  const Icon = app.icon;
                  return (
                    <div
                      key={app.id}
                      className="flex items-center justify-between rounded-cmplt-lg-inner-sm p-1.5 pr-2.5 text-xs"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={cn(
                            "flex h-7 w-7 items-center justify-center rounded-cmplt-xs",
                            app.color
                          )}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-medium text-fg-primary">
                          {app.name}
                        </span>
                      </span>
                      <button
                        type="button"
                        className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[var(--cmplt-coral-500)] hover:opacity-80 cursor-pointer"
                      >
                        <Plus className="h-3 w-3 stroke-[2.5]" />
                        ADD
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Center & Right Area: Editorial Instructions + Nested App Preview Card */}
        <div className="lg:col-span-8 2xl:col-span-9 flex flex-col justify-between bg-surface">
          {/* Top Grab Handle */}
          <div className="flex justify-center pt-3">
            <span className="h-1 w-12 rounded-full bg-border-default" />
          </div>

          <div className="grid gap-8 p-6 sm:p-8 md:p-10 lg:p-10 xl:p-12 2xl:p-14 md:grid-cols-12 md:gap-8 lg:gap-10 2xl:gap-14 items-start">
            {/* Editorial Column */}
            <div className="md:col-span-6 2xl:col-span-5 space-y-6 2xl:space-y-7">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-fg-primary">
                  Manage Apps
                </h3>
                <p className="text-xs sm:text-[13px] text-fg-secondary leading-relaxed">
                  Here you can set up all of your apps. You can browse all the apps on the left.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xs sm:text-[13px] font-semibold text-fg-primary">
                  Settings
                </h4>
                <p className="text-xs sm:text-[13px] text-fg-secondary leading-relaxed">
                  On each app you will find access and other customization settings.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xs sm:text-[13px] font-semibold text-fg-primary">
                  Invite your community
                </h4>
                <p className="text-xs sm:text-[13px] text-fg-secondary leading-relaxed">
                  Share links directly to your community and get your customers hyped.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xs sm:text-[13px] font-semibold text-fg-primary">
                  Browse Apps
                </h4>
                <p className="text-xs sm:text-[13px] text-fg-secondary leading-relaxed">
                  On your left, you can manage and install new apps.
                </p>
              </div>
            </div>

            {/* Right Nested Card (Concentric: 16px Card -> 10px Row -> 4.5px Icon) */}
            <div className="md:col-span-6 2xl:col-span-7 rounded-cmplt-xl-inner-sm border border-border-subtle bg-elevated p-3.5 sm:p-4 2xl:p-5 shadow-cmplt-xs">
              <div className="flex gap-3.5 sm:gap-4 2xl:gap-5">
                {/* Mini Icon Rail (16px Card - 10px p-2.5 = 6px rounded-cmplt-xs) */}
                <div className="flex flex-col items-center gap-2.5 border-r border-border-subtle pr-3.5 sm:pr-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-cmplt-xs text-[var(--cmplt-coral-500)] font-bold text-xs">
                    ✦
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-cmplt-xs bg-subtle text-fg-primary">
                    <Home className="h-4 w-4" />
                  </span>
                  <span className="h-8 w-8 rounded-cmplt-xs bg-subtle/60" />
                  <span className="h-8 w-8 rounded-cmplt-xs bg-subtle/60" />
                </div>

                {/* Your Apps Selection List */}
                <div className="flex-1 space-y-2.5">
                  <div className="px-2 pt-0.5 text-[10px] font-semibold uppercase tracking-wider text-fg-muted">
                    Your Apps
                  </div>
                  <div className="space-y-2">
                    {INSTALLED_APPS.map((app) => {
                      const Icon = app.icon;
                      const isActive = selectedApp === app.id;
                      return (
                        <button
                          key={app.id}
                          type="button"
                          onClick={() => setSelectedApp(app.id)}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-cmplt-md p-2 pr-3 text-left text-xs transition-all cursor-pointer border",
                            isActive
                              ? "border-[var(--cmplt-coral-500)] bg-surface shadow-cmplt-xs"
                              : "border-transparent hover:bg-subtle/60"
                          )}
                        >
                          {/* Concentric Icon: Row (10px) - Padding (5.5px) = 4.5px (rounded-cmplt-2xs) */}
                          <span
                            className={cn(
                              "flex h-6 w-6 items-center justify-center rounded-cmplt-2xs",
                              app.color
                            )}
                          >
                            <Icon className="h-3 w-3" />
                          </span>
                          <span className="font-medium text-fg-primary">
                            {app.name} App
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Frosted Bottom Action Bar with Warm Coral "Done" GSAP Pill Button */}
          <div className="flex items-center justify-between border-t border-border-subtle bg-subtle/65 px-6 py-4 sm:px-8 lg:px-10 2xl:px-14 backdrop-blur-md">
            <span className="text-xs text-fg-muted">
              Once you&apos;re done, hit done on the right.
            </span>
            <AnimatedCtaButton variant="accent-beam" size="sm">
              Done
            </AnimatedCtaButton>
          </div>
        </div>
      </div>
    </div>
  );
}
