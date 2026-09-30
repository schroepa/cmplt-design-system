"use client";

import * as React from "react";
import Link from "next/link";
import tokensData from "@/registry/cmplt/tokens/tokens.json";
import tokensStudioData from "@/registry/cmplt/tokens/tokens-studio.json";
import { CliInstallTabs } from "@/components/docs/cli-install-tabs";
import { TokenSyncInspectorBlock } from "@/registry/cmplt/blocks/token-sync-inspector";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Button } from "@/registry/cmplt/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/cmplt/ui/card";
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
import { Field, FieldLabel, FieldDescription } from "@/registry/cmplt/ui/field";
import { Input } from "@/registry/cmplt/ui/input";
import {
  Figma,
  ArrowRightLeft,
  Layers,
  CheckCircle2,
  Sparkles,
  Download,
  Code2,
} from "lucide-react";

export default function FigmaLandingPage() {
  const handleDownloadW3C = () => {
    const blob = new Blob([JSON.stringify(tokensData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cmplt.tokens.w3c.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadTokensStudio = () => {
    const blob = new Blob([JSON.stringify(tokensStudioData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cmplt.tokens-studio.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="cmplt-container py-16 md:py-24 lg:py-32 2xl:py-40 space-y-24 md:space-y-32 2xl:space-y-40">
      {/* Hero */}
      <div className="grid gap-12 md:gap-16 lg:gap-16 2xl:gap-24 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 2xl:col-span-6 space-y-6 md:space-y-8">
          <div className="flex items-center gap-2">
            <Badge variant="brand">
              <Figma className="h-3 w-3" /> Code-First → Figma Parity · W3C DTCG
            </Badge>
          </div>

          <h1 className="cmplt-h1 text-fg-primary">
            Built in Code First.{" "}
            <span className="text-fg-brand">
              Engineered for 1:1 Figma Synchronization.
            </span>
          </h1>

          <p className="cmplt-lead text-fg-secondary">
            In <strong className="text-fg-primary">cmplt</strong>, code is the
            single source of truth. Our 3-tier token architecture and Base UI
            component states are structured so they map directly to{" "}
            <strong className="text-fg-primary">Figma Variables</strong>,{" "}
            <strong className="text-fg-primary">Auto-Layout tokens</strong>, and{" "}
            <strong className="text-fg-primary">Component Variant Properties</strong>{" "}
            without manual translation.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
            <Button variant="primary" size="lg" onClick={handleDownloadW3C}>
              <Download className="h-4 w-4" />
              Download W3C tokens.json
            </Button>

            <Button variant="secondary" size="lg" onClick={handleDownloadTokensStudio}>
              <Download className="h-4 w-4" />
              Tokens Studio Schema
            </Button>

            <Dialog>
              <DialogTrigger
                render={
                  <Button variant="ghost" size="lg">
                    <Sparkles className="h-4 w-4 text-fg-brand" />
                    Get Figma UI Kit
                  </Button>
                }
              />
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>cmplt Figma UI Kit &amp; Sync Plugin</DialogTitle>
                  <DialogDescription>
                    Get instant access to the W3C Variable collections and the full Auto-Layout Figma Component Library.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3 py-2">
                  <Field>
                    <FieldLabel>Work Email</FieldLabel>
                    <Input placeholder="you@company.com" type="email" />
                    <FieldDescription>
                      We&apos;ll send your Figma Variables import guide and download link.
                    </FieldDescription>
                  </Field>
                </div>
                <DialogFooter>
                  <DialogClose
                    render={<Button variant="outline">Cancel</Button>}
                  />
                  <DialogClose
                    render={<Button variant="primary">Get Free UI Kit</Button>}
                  />
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="lg:col-span-6 2xl:col-span-6">
          <div className="cmplt-stage bg-cmplt-dots">
            <TokenSyncInspectorBlock />
          </div>
        </div>
      </div>

      {/* CLI Token Delivery for Figma & Toolchains */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <Badge variant="brand">Automated CLI Token Distribution</Badge>
          <h2 className="cmplt-h2 text-fg-primary">
            Install Design Tokens directly via shadcn CLI
          </h2>
          <p className="cmplt-body text-fg-secondary">
            Pull pure W3C DTCG JSON or Tokens Studio for Figma multi-mode schemas straight into your repository without copying files manually.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 md:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="mono" size="sm">registry:file</Badge>
              <span className="text-xs font-mono text-fg-brand">@cmplt/tokens-studio</span>
            </div>
            <h3 className="cmplt-h4 text-fg-primary">Tokens Studio for Figma</h3>
            <p className="cmplt-body-xs text-fg-muted">
              Pre-configured multi-theme schema with Light and Dark mode sets. Directly importable into the Tokens Studio Figma plugin.
            </p>
            <CliInstallTabs itemName="tokens-studio" />
          </Card>

          <Card className="p-6 md:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="mono" size="sm">registry:file</Badge>
              <span className="text-xs font-mono text-fg-brand">@cmplt/design-tokens</span>
            </div>
            <h3 className="cmplt-h4 text-fg-primary">Raw W3C DTCG Format</h3>
            <p className="cmplt-body-xs text-fg-muted">
              Standard W3C design tokens JSON formatted for Style Dictionary, Amazon DTCG tools, and custom token pipelines.
            </p>
            <CliInstallTabs itemName="design-tokens" />
          </Card>
        </div>
      </section>

      {/* How Code Maps to Figma (3-Step Bridge) */}
      <section className="space-y-12 md:space-y-16">
        <div className="max-w-3xl space-y-4">
          <Badge variant="outline">Architecture Bridge</Badge>
          <h2 className="cmplt-h2 text-fg-primary">
            How cmplt maps Code to Figma 1:1
          </h2>
          <p className="cmplt-body text-fg-secondary">
            Every layer of the design system — from perceptual OKLCH primitives to component variant properties — is structured for deterministic bidirectional synchronization.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:gap-10 2xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-7 md:p-8 2xl:p-10 space-y-4">
            <Badge variant="mono" size="sm">
              Collection 01 — Primitives
            </Badge>
            <h3 className="cmplt-h4 text-fg-primary">
              OKLCH Ramps → Figma Color Primitives
            </h3>
            <p className="cmplt-body-sm text-fg-secondary">
              Every <code className="font-mono text-fg-primary">--neutral-*</code> and{" "}
              <code className="font-mono text-fg-primary">--brand-*</code>{" "}
              step in <code className="font-mono text-fg-primary">tokens.css</code>{" "}
              includes a calibrated sRGB/P3 fallback in{" "}
              <code className="font-mono text-fg-primary">tokens.json</code> for lossless import into Figma&apos;s Primitive Collection.
            </p>
          </Card>

          <Card className="p-7 md:p-8 2xl:p-10 space-y-4">
            <Badge variant="mono" size="sm">
              Collection 02 — Semantic Modes
            </Badge>
            <h3 className="cmplt-h4 text-fg-primary">
              :root &amp; .dark → Figma Variable Modes
            </h3>
            <p className="cmplt-body-sm text-fg-secondary">
              Semantic tokens (<code className="font-mono text-fg-brand">bg.surface</code>,{" "}
              <code className="font-mono text-fg-brand">fg.primary</code>,{" "}
              <code className="font-mono text-fg-brand">border.subtle</code>) carry explicit{" "}
              <code className="font-mono text-fg-primary">figmaScope</code> metadata (<code className="font-mono">FRAME_FILL</code>, <code className="font-mono">TEXT_FILL</code>, <code className="font-mono">STROKE_COLOR</code>) across Light, Dark, and Preset modes.
            </p>
          </Card>

          <Card className="md:col-span-2 lg:col-span-1 p-7 md:p-8 2xl:p-10 space-y-4">
            <Badge variant="mono" size="sm">
              Collection 03 — Component Props
            </Badge>
            <h3 className="cmplt-h4 text-fg-primary">
              CVA &amp; Base UI States → Figma Variants
            </h3>
            <p className="cmplt-body-sm text-fg-secondary">
              Our TypeScript CVA variants (<code className="font-mono text-fg-primary">variant</code>,{" "}
              <code className="font-mono text-fg-primary">size</code>) and Base UI data states (<code className="font-mono text-fg-primary">data-[open]</code>,{" "}
              <code className="font-mono text-fg-primary">data-[checked]</code>,{" "}
              <code className="font-mono text-fg-primary">data-[disabled]</code>) mirror the exact Variant Property names in Figma.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
