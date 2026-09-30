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
import { Tabs, TabsList, TabsTrigger } from "@/registry/cmplt/ui/tabs";
import { Check, Sparkles, Terminal } from "lucide-react";

export function PricingTierBlock() {
  const [billing, setBilling] = React.useState<"annual" | "lifetime">("lifetime");

  return (
    <div className="space-y-8 md:space-y-10 2xl:space-y-12 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border border-border-subtle bg-surface p-5 sm:p-6 lg:px-8 lg:py-6">
        <div className="space-y-1">
          <div className="text-sm sm:text-base font-semibold text-fg-primary">
            Flexible Licensing Architecture
          </div>
          <div className="text-xs sm:text-[13px] text-fg-muted">
            Start free with the Open Source Registry or unlock Pro Blocks & Figma Sync.
          </div>
        </div>
        <Tabs
          value={billing}
          onValueChange={(v) => setBilling(v as "annual" | "lifetime")}
          className="w-full sm:w-auto"
        >
          <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:flex">
            <TabsTrigger value="annual" className="justify-center">Annual Pass</TabsTrigger>
            <TabsTrigger value="lifetime" className="justify-center">
              <span>Lifetime</span>
              <Badge variant="brand" size="sm" className="ml-1.5 hidden sm:inline-flex">
                Popular
              </Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8 xl:gap-10 2xl:gap-12">
        {/* Tier 1: Core Open Source */}
        <Card className="flex flex-col justify-between">
          <div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" size="sm">
                  MIT License
                </Badge>
                <span className="font-mono text-xs text-fg-muted">v1.0</span>
              </div>
              <CardTitle className="mt-3 text-lg sm:text-xl">cmplt Core UI</CardTitle>
              <CardDescription>
                Complete Base UI primitives, 3-tier OKLCH tokens & public shadcn registry.
              </CardDescription>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-primary cmplt-tabular">
                  €0
                </span>
                <span className="text-xs text-fg-muted">/ forever free</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3.5 text-xs sm:text-[13px] text-fg-secondary">
              {[
                "16+ unstyled Base UI primitives with CVA",
                "3-Tier W3C Design Tokens (Light & Dark OKLCH)",
                "Install via npx shadcn@latest add @cmplt/*",
                "100% own the source code — zero lock-in",
                "WCAG 2.2 AA & Top-Layer Motion ready",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-status-success mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </div>
          <CardFooter className="pt-5">
            <Button variant="secondary" className="w-full h-11">
              <Terminal className="h-3.5 w-3.5" />
              npx shadcn add @cmplt/button
            </Button>
          </CardFooter>
        </Card>

        {/* Tier 2: Pro Solo + Figma */}
        <Card
          variant="elevated"
          className="relative flex flex-col justify-between border-border-brand ring-1 ring-border-brand/40 shadow-glow"
        >
          <div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="brand" size="sm">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </Badge>
                <span className="font-mono text-xs text-fg-brand">
                  Code + Figma
                </span>
              </div>
              <CardTitle className="mt-3 text-lg sm:text-xl">cmplt Pro + Figma Kit</CardTitle>
              <CardDescription>
                Production blocks, multi-page templates, private registry & 1:1 Figma Variables Kit.
              </CardDescription>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-primary cmplt-tabular">
                  {billing === "lifetime" ? "€189" : "€119"}
                </span>
                <span className="text-xs text-fg-muted">
                  {billing === "lifetime" ? "one-time payment" : "/ year"}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3.5 text-xs sm:text-[13px] text-fg-secondary">
              {[
                "Everything in cmplt Core UI",
                "60+ Production Marketing & Dashboard Blocks",
                "Complete Figma UI Kit with synced W3C Variables",
                "3 Live Theme Presets (Precision, Editorial, Emerald)",
                "Private Registry Token for 1-command Pro installs",
                "Lifetime updates & commercial project license",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-fg-brand mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </div>
          <CardFooter className="pt-5">
            <Button variant="primary" className="w-full h-11">
              Get cmplt Pro Access
            </Button>
          </CardFooter>
        </Card>

        {/* Tier 3: Team / Organization (Full-width 2-col card on Tablet, 3rd col on Desktop/Desktop+) */}
        <Card className="md:col-span-2 lg:col-span-1 flex flex-col justify-between">
          <div className="md:grid md:grid-cols-2 md:gap-8 lg:block">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="mono" size="sm">
                  Unlimited Seats
                </Badge>
                <span className="font-mono text-xs text-fg-muted">
                  Enterprise
                </span>
              </div>
              <CardTitle className="mt-3 text-lg sm:text-xl">cmplt Team Suite</CardTitle>
              <CardDescription>
                For product teams scaling design-to-code across multiple repositories & Figma orgs.
              </CardDescription>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-primary cmplt-tabular">
                  {billing === "lifetime" ? "€490" : "€290"}
                </span>
                <span className="text-xs text-fg-muted">
                  {billing === "lifetime" ? "one-time org license" : "/ year"}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3.5 text-xs sm:text-[13px] text-fg-secondary md:pt-7 lg:pt-0">
              {[
                "Unlimited designers & developers in your org",
                "Automated GitHub Action for Code -> Figma Token Sync",
                "Custom Brand Token Generator & Contrast Auditor",
                "Multi-brand registry namespace configuration",
                "Priority Discord & architectural support",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-status-success mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </div>
          <CardFooter className="pt-5">
            <Button variant="outline" className="w-full h-11">
              License for Your Team
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
