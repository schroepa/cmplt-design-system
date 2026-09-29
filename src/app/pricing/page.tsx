"use client";

import * as React from "react";
import { PricingTierBlock } from "@/registry/cmplt/blocks/pricing-tier-block";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Card } from "@/registry/cmplt/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/cmplt/ui/accordion";
import { Check, Minus, ShieldCheck } from "lucide-react";

const COMPARISON_ROWS = [
  {
    feature: "16+ Base UI Primitives (@base-ui/react)",
    core: "Included (MIT)",
    pro: "Included (MIT)",
    team: "Included (MIT)",
  },
  {
    feature: "3-Tier W3C OKLCH Design Tokens (tokens.css + tokens.json)",
    core: "Included",
    pro: "Included + 3 Theme Presets",
    team: "Included + Custom Brand Generator",
  },
  {
    feature: "Public shadcn Registry (@cmplt/*)",
    core: true,
    pro: true,
    team: true,
  },
  {
    feature: "60+ Production Marketing & Application Blocks",
    core: false,
    pro: true,
    team: true,
  },
  {
    feature: "Complete Figma UI Kit with Synced W3C Variables",
    core: false,
    pro: true,
    team: true,
  },
  {
    feature: "Automated Code → Figma GitHub Action Sync",
    core: false,
    pro: false,
    team: true,
  },
  {
    feature: "Commercial Projects & Client Work License",
    core: "Unlimited",
    pro: "Unlimited (1 User)",
    team: "Unlimited (Whole Org)",
  },
];

export default function PricingLandingPage() {
  return (
    <div className="cmplt-container py-16 md:py-24 lg:py-32 2xl:py-40 space-y-24 md:space-y-32 2xl:space-y-40">
      {/* Header */}
      <div className="mx-auto max-w-4xl text-center space-y-6">
        <Badge variant="brand">Pricing &amp; Licensing</Badge>
        <h1 className="cmplt-h1 text-fg-primary mx-auto">
          Invest once.{" "}
          <span className="text-fg-accent">
            Ship consistent interfaces forever.
          </span>
        </h1>
        <p className="cmplt-lead text-fg-secondary mx-auto">
          Start free with the open-source <strong className="text-fg-primary">@cmplt</strong>{" "}
          core registry, or unlock our commercial Pro Blocks and 1:1 synced Figma Design System.
        </p>
      </div>

      {/* Interactive Pricing Block */}
      <PricingTierBlock />

      {/* Feature Matrix Comparison */}
      <section className="space-y-10 md:space-y-12">
        <div className="max-w-2xl space-y-3">
          <Badge variant="outline">Edition Matrix</Badge>
          <h2 className="cmplt-h2 text-fg-primary">
            Detailed Edition Comparison
          </h2>
          <p className="cmplt-body text-fg-muted">
            Transparent licensing with zero recurring lock-in required.
          </p>
        </div>

        <div className="overflow-x-auto rounded-cmplt-xl border border-border-subtle bg-surface shadow-cmplt-xs">
          <table className="w-full text-left text-xs sm:text-sm min-w-[640px]">
            <thead className="border-b border-border-subtle bg-subtle/60 text-fg-muted uppercase text-[11px]">
              <tr>
                <th className="py-4 md:py-5 px-6 md:px-8">Capability</th>
                <th className="py-4 md:py-5 px-6 md:px-8">Core UI (Free)</th>
                <th className="py-4 md:py-5 px-6 md:px-8 text-fg-accent">Pro + Figma Kit</th>
                <th className="py-4 md:py-5 px-6 md:px-8">Team Suite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.feature} className="hover:bg-subtle/30 transition-colors">
                  <td className="py-4 md:py-5 px-6 md:px-8 font-medium text-fg-primary">
                    {row.feature}
                  </td>
                  {[row.core, row.pro, row.team].map((cell, idx) => (
                    <td key={idx} className="py-4 md:py-5 px-6 md:px-8 text-fg-secondary">
                      {typeof cell === "boolean" ? (
                        cell ? (
                          <Check className="h-4 w-4 text-status-success" />
                        ) : (
                          <Minus className="h-4 w-4 text-fg-muted/50" />
                        )
                      ) : (
                        <span className="font-mono text-xs">{cell}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Licensing FAQ */}
      <section className="grid gap-10 md:gap-12 lg:grid-cols-12 lg:gap-16 2xl:gap-24 items-start">
        <div className="lg:col-span-4 space-y-4">
          <Badge variant="outline">Licensing FAQ</Badge>
          <h2 className="cmplt-h2 text-fg-primary">
            Licensing &amp; Registry Questions
          </h2>
          <p className="cmplt-body text-fg-secondary">
            Full source-code ownership with predictable one-time licensing for individuals and engineering teams.
          </p>
        </div>
        <div className="lg:col-span-8">
          <Card className="p-6 sm:p-8 2xl:p-10">
            <Accordion defaultValue={["l-1"]}>
              <AccordionItem value="l-1">
                <AccordionTrigger>
                  Can I use cmplt Core UI and Pro Blocks in commercial client projects?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="cmplt-prose">
                    Yes! Both the MIT-licensed Core UI and the commercial Pro Blocks can be used in unlimited commercial SaaS products and client applications.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="l-2">
                <AccordionTrigger>
                  What happens after I install a component via npx shadcn add?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="cmplt-prose">
                    The TypeScript and Tailwind CSS source code lives directly inside your project repository. You have zero external runtime lock-in and full freedom to customize every token and variant.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>
    </div>
  );
}
