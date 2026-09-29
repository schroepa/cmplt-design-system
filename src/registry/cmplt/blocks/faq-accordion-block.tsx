"use client";

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/cmplt/ui/accordion";
import { Badge } from "@/registry/cmplt/ui/badge";
import { HelpCircle, Sparkles } from "lucide-react";

export function FaqAccordionBlock() {
  const faqs = [
    {
      id: "faq-1",
      question: "How does cmplt compare to standard shadcn/ui?",
      answer:
        "cmplt builds directly upon shadcn's distribution model (installing uncompiled source code into your repository via CLI). However, instead of Radix UI, cmplt uses @base-ui/react for unstyled headless primitives, pairs it with an OKLCH 3-tier perceptual color token architecture, and includes GSAP fluid liquid physics.",
    },
    {
      id: "faq-2",
      question: "Can I use cmplt in commercial and client projects?",
      answer:
        "Yes, absolutely. The core primitives and registry blocks are MIT licensed, allowing unlimited commercial usage, SaaS deployment, and custom theme modifications with no royalties or attribution requirements.",
    },
    {
      id: "faq-3",
      question: "How do OKLCH tokens handle dark mode?",
      answer:
        "OKLCH provides perceptual uniformity across the human color gamut. In cmplt, light and dark modes share identical chroma and hue parameters, altering only the calibrated lightness values. This eliminates muddy contrast artifacts, poor accessibility ratios, and manual color re-tuning.",
    },
    {
      id: "faq-4",
      question: "What browsers are supported for OKLCH and Base UI?",
      answer:
        "OKLCH is natively supported across all modern evergreen browsers (Chrome 111+, Safari 15.4+, Firefox 113+, Edge 111+), covering 96%+ of global web traffic. Fallback sRGB variables are embedded automatically via CSS custom properties for legacy environments.",
    },
    {
      id: "faq-5",
      question: "How do I install individual blocks or components?",
      answer:
        "Run `npx shadcn add @cmplt/[block-name]` (or `npm run registry:build` locally). The CLI automatically detects and downloads all required primitives, hooks, utility helpers, and dependency packages into your project's `components/` directory.",
    },
  ];

  return (
    <section className="space-y-8 max-w-3xl mx-auto w-full">
      <div className="text-center space-y-3">
        <div className="flex justify-center">
          <Badge variant="brand">
            <HelpCircle className="size-3" /> Frequently Asked Questions
          </Badge>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
          Everything you need to know.
        </h2>
        <p className="text-sm text-fg-secondary max-w-lg mx-auto leading-relaxed">
          Clear answers about licensing, CLI installation, Base UI architecture, and token sync.
        </p>
      </div>

      <div className="rounded-cmplt-panel border border-border-default bg-surface p-4 sm:p-6 shadow-cmplt-xs">
        <Accordion defaultValue={["faq-1"]} className="divide-y divide-border-subtle">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="py-2 first:pt-0 last:pb-0">
              <AccordionTrigger className="text-sm sm:text-base font-medium text-fg hover:text-accent transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-fg-secondary leading-relaxed pt-2 pb-3">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
