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
import { Check, Sparkles, ArrowRight } from "lucide-react";

export function PricingTierBlock() {
  const [billing, setBilling] = React.useState<"monthly" | "annual">("annual");

  return (
    <div className="space-y-8 md:space-y-10 2xl:space-y-12 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border border-border-subtle bg-surface p-5 sm:p-6 lg:px-8 lg:py-6">
        <div className="space-y-1">
          <div className="text-sm sm:text-base font-semibold text-fg-primary">
            Transparent, Predictable Plans
          </div>
          <div className="text-xs sm:text-[13px] text-fg-muted">
            Choose the right plan for your team and scale with confidence.
          </div>
        </div>
        <Tabs
          value={billing}
          onValueChange={(v) => setBilling(v as "monthly" | "annual")}
          className="w-full sm:w-auto"
        >
          <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:flex">
            <TabsTrigger value="monthly" className="justify-center">Monthly</TabsTrigger>
            <TabsTrigger value="annual" className="justify-center">
              <span>Annual</span>
              <Badge variant="brand" size="sm" className="ml-1.5 hidden sm:inline-flex">
                Save 20%
              </Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8 xl:gap-10 2xl:gap-12">
        {/* Tier 1: Starter */}
        <Card className="flex flex-col justify-between">
          <div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" size="sm">
                  Starter
                </Badge>
                <span className="font-mono text-xs text-fg-muted">Hobby</span>
              </div>
              <CardTitle className="mt-3 text-lg sm:text-xl">Free Tier</CardTitle>
              <CardDescription>
                Essential tools and infrastructure for indie hackers and small projects.
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
                "Up to 3 active projects",
                "Community support and public forum",
                "Standard analytics dashboard",
                "10,000 monthly API requests",
                "Automated weekly backups",
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
              Get Started Free
            </Button>
          </CardFooter>
        </Card>

        {/* Tier 2: Professional */}
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
                  Pro Team
                </span>
              </div>
              <CardTitle className="mt-3 text-lg sm:text-xl">Professional</CardTitle>
              <CardDescription>
                Advanced features and accelerated pipelines for growing teams and SaaS apps.
              </CardDescription>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-primary cmplt-tabular">
                  {billing === "annual" ? "€24" : "€29"}
                </span>
                <span className="text-xs text-fg-muted">
                  {billing === "annual" ? "per seat / month (billed annually)" : "per seat / month"}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3.5 text-xs sm:text-[13px] text-fg-secondary">
              {[
                "Unlimited projects & deployments",
                "Unlimited team workspaces",
                "Priority chat and email support",
                "Custom domains & automated SSL",
                "Real-time analytics & export APIs",
                "Automated daily backups & snapshots",
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
              Start 14-Day Free Trial
            </Button>
          </CardFooter>
        </Card>

        {/* Tier 3: Enterprise */}
        <Card className="md:col-span-2 lg:col-span-1 flex flex-col justify-between">
          <div className="md:grid md:grid-cols-2 md:gap-8 lg:block">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="mono" size="sm">
                  Dedicated
                </Badge>
                <span className="font-mono text-xs text-fg-muted">
                  Enterprise
                </span>
              </div>
              <CardTitle className="mt-3 text-lg sm:text-xl">Enterprise</CardTitle>
              <CardDescription>
                Maximum security, dedicated resources, and tailored SLAs for organizations.
              </CardDescription>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-primary cmplt-tabular">
                  {billing === "annual" ? "€99" : "€119"}
                </span>
                <span className="text-xs text-fg-muted">
                  {billing === "annual" ? "per seat / month (billed annually)" : "per seat / month"}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3.5 text-xs sm:text-[13px] text-fg-secondary md:pt-7 lg:pt-0">
              {[
                "Unlimited team seats & sub-organizations",
                "99.99% uptime guarantee with enterprise SLA",
                "Dedicated customer success engineer",
                "Single Sign-On (SAML / Okta / Azure AD)",
                "Audit logging & SOC 2 compliance reports",
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
              Contact Sales
              <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
