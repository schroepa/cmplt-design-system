"use client";

import * as React from "react";
import { Button } from "@/registry/cmplt/ui/button";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Input } from "@/registry/cmplt/ui/input";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
} from "@/registry/cmplt/ui/avatar";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export function CtaBannerBlock() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-cmplt-panel border border-border-default bg-surface p-8 sm:p-12 lg:p-16 shadow-cmplt-sm w-full">
      {/* Background Glow Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -bottom-20 size-80 rounded-full bg-accent/5 blur-3xl"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <Badge variant="brand" className="gap-1.5 shadow-sm">
            <Sparkles className="size-3" /> Early Access &amp; Changelog
          </Badge>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
          Elevate your next project with{" "}
          <span className="text-accent">cmplt</span>.
        </h2>

        <p className="text-sm sm:text-base text-fg-secondary leading-relaxed max-w-lg mx-auto">
          Join 8,000+ engineers building modern, accessible interfaces with headless Base UI and OKLCH design tokens.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 p-4 rounded-cmplt-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium animate-in fade-in">
            <CheckCircle2 className="size-4" />
            <span>Thank you for subscribing! Check your inbox for your starter kit.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your work email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-10 bg-subtle/50 text-sm"
            />
            <Button type="submit" size="md" className="w-full sm:w-auto h-10 gap-1.5 shrink-0 shadow-cmplt-xs">
              <span>Subscribe</span>
              <ArrowRight className="size-4" />
            </Button>
          </form>
        )}

        {/* Social Proof */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-fg-muted">
          <AvatarGroup max={4}>
            <Avatar size="sm">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80" />
              <AvatarFallback>ET</AvatarFallback>
            </Avatar>
          </AvatarGroup>
          <span>Shipped by design engineers at leading startups and scaleups.</span>
        </div>
      </div>
    </section>
  );
}
