"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  COMPONENT_DOCS,
  getComponentDoc,
} from "@/components/docs/component-catalog";
import { CliInstallTabs } from "@/components/docs/cli-install-tabs";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Button } from "@/registry/cmplt/ui/button";
import { Card } from "@/registry/cmplt/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/cmplt/ui/tabs";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  Copy,
  Eye,
  ExternalLink,
} from "lucide-react";

export default function ComponentDocPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "button";
  const doc = getComponentDoc(slug) ?? COMPONENT_DOCS[0];
  const [copiedCode, setCopiedCode] = React.useState(false);

  const currentIndex = COMPONENT_DOCS.findIndex((c) => c.slug === doc.slug);
  const prevComp = currentIndex > 0 ? COMPONENT_DOCS[currentIndex - 1] : null;
  const nextComp =
    currentIndex < COMPONENT_DOCS.length - 1
      ? COMPONENT_DOCS[currentIndex + 1]
      : null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(doc.usageCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 1800);
  };

  return (
    <div className="space-y-14 md:space-y-16 lg:space-y-20">
      {/* Header & Metadata */}
      <div className="space-y-4 border-b border-border-subtle pb-8 md:pb-10">
        <div className="flex flex-wrap items-center gap-2 text-xs text-fg-muted">
          <Link href="/docs" className="hover:text-fg-primary">
            Docs
          </Link>
          <span>/</span>
          <span>{doc.category}</span>
          <span>/</span>
          <span className="text-fg-primary font-medium">{doc.title}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="cmplt-h1 text-fg-primary">
            {doc.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="brand" size="sm" className="font-mono">
              {doc.baseUiPackage}
            </Badge>
            <a
              href={`/r/${doc.slug}.json`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex"
            >
              <Badge variant="mono" size="sm" className="hover:border-border-strong">
                /r/{doc.slug}.json <ExternalLink className="ml-1 h-2.5 w-2.5" />
              </Badge>
            </a>
          </div>
        </div>

        <p className="cmplt-lead text-fg-secondary">
          {doc.summary}
        </p>
      </div>

      {/* Main Content Split on Desktop+ (2xl: 8 cols Interactive Stage & Props / 4 cols CLI & Data Attributes) */}
      <div className="grid grid-cols-1 2xl:grid-cols-12 gap-12 lg:gap-16 2xl:gap-16 items-start">
        <div className="2xl:col-span-8 space-y-14 md:space-y-16">
          {/* Live Preview & Code Tabs (shadcn/ui style) */}
          <section className="space-y-4">
            <Tabs defaultValue="preview">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="preview" className="gap-1.5">
                    <Eye className="h-3.5 w-3.5" />
                    Live Preview
                  </TabsTrigger>
                  <TabsTrigger value="code" className="gap-1.5">
                    <Code2 className="h-3.5 w-3.5" />
                    Usage Code
                  </TabsTrigger>
                </TabsList>

                <span className="font-mono text-xs text-fg-muted hidden sm:inline">
                  Interactive Base UI + OKLCH Surface
                </span>
              </div>

              <TabsContent value="preview">
                <Card className="relative flex min-h-[280px] md:min-h-[340px] 2xl:min-h-[380px] w-full items-center justify-center p-8 sm:p-12 md:p-16 bg-cmplt-grid">
                  <div className="w-full max-w-2xl mx-auto">{doc.renderDemo()}</div>
                </Card>
              </TabsContent>

              <TabsContent value="code">
                <Card className="overflow-hidden">
                  <div className="flex items-center justify-between border-b border-border-subtle bg-subtle/60 px-5 py-3">
                    <span className="font-mono text-xs text-fg-muted">
                      {doc.slug}-demo.tsx
                    </span>
                    <Button variant="secondary" size="xs" onClick={handleCopyCode}>
                      {copiedCode ? (
                        <>
                          <Check className="h-3 w-3 text-status-success" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" /> Copy Snippet
                        </>
                      )}
                    </Button>
                  </div>
                  <pre className="overflow-x-auto p-6 font-mono text-xs text-fg-primary leading-relaxed">
                    {doc.usageCode}
                  </pre>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* API Props Table */}
          {doc.propsTable.length > 0 && (
            <section className="space-y-4">
              <h2 className="cmplt-h3 text-fg-primary">
                API Reference &amp; Props
              </h2>
              <div className="overflow-x-auto rounded-cmplt-lg border border-border-subtle bg-surface">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border-subtle bg-subtle/60 text-fg-muted uppercase text-[11px]">
                    <tr>
                      <th className="py-3.5 px-5">Prop</th>
                      <th className="py-3.5 px-5">Type</th>
                      <th className="py-3.5 px-5">Default</th>
                      <th className="py-3.5 px-5">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle">
                    {doc.propsTable.map((row) => (
                      <tr key={row.prop}>
                        <td className="py-3.5 px-5 font-mono font-semibold text-fg-primary">
                          {row.prop}
                        </td>
                        <td className="py-3.5 px-5 font-mono text-fg-accent">
                          {row.type}
                        </td>
                        <td className="py-3.5 px-5 font-mono text-fg-muted">
                          {row.defaultVal}
                        </td>
                        <td className="py-3.5 px-5 text-fg-secondary">
                          {row.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>

        <div className="2xl:col-span-4 space-y-12 md:space-y-14">
          {/* CLI Installation */}
          <section className="space-y-4">
            <h2 className="cmplt-h4 text-fg-primary">
              Installation via shadcn Registry
            </h2>
            <p className="cmplt-body-sm text-fg-muted">
              Run the command below to install <code className="font-mono text-fg-primary">@cmplt/{doc.slug}</code> and its Base UI dependencies directly into your codebase:
            </p>
            <CliInstallTabs itemName={doc.slug} />
          </section>

          {/* Base UI Data Attributes Table */}
          {doc.dataAttributes.length > 0 && (
            <section className="space-y-4">
              <h2 className="cmplt-h4 text-fg-primary">
                Base UI State Data Attributes
              </h2>
              <div className="overflow-x-auto rounded-cmplt-lg border border-border-subtle bg-surface">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border-subtle bg-subtle/60 text-fg-muted uppercase text-[11px]">
                    <tr>
                      <th className="py-3.5 px-5">Tailwind / Data Attribute</th>
                      <th className="py-3.5 px-5">State Condition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle">
                    {doc.dataAttributes.map((d) => (
                      <tr key={d.attr}>
                        <td className="py-3.5 px-5 font-mono font-semibold text-fg-accent">
                          {d.attr}
                        </td>
                        <td className="py-3.5 px-5 text-fg-secondary">
                          {d.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Prev / Next Navigation */}
      <div className="flex items-center justify-between border-t border-border-subtle pt-8">
        {prevComp ? (
          <Link href={`/docs/components/${prevComp.slug}`}>
            <Button variant="outline" size="md">
              <ArrowLeft className="h-3.5 w-3.5" />
              {prevComp.title}
            </Button>
          </Link>
        ) : (
          <div />
        )}
        {nextComp ? (
          <Link href={`/docs/components/${nextComp.slug}`}>
            <Button variant="outline" size="md">
              {nextComp.title}
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        ) : (
          <Link href="/blocks">
            <Button variant="primary" size="md">
              Explore Pro Blocks
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
