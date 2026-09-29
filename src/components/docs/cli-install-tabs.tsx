"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/cmplt/ui/tabs";
import { Button } from "@/registry/cmplt/ui/button";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Check, Copy, Terminal } from "lucide-react";

interface CliInstallTabsProps {
  itemName: string;
  showUrlFallback?: boolean;
}

export function CliInstallTabs({
  itemName,
  showUrlFallback = true,
}: CliInstallTabsProps) {
  const [pm, setPm] = React.useState<"npx" | "pnpm" | "bun" | "url">("npx");
  const [copied, setCopied] = React.useState(false);

  const commands: Record<typeof pm, string> = {
    npx: `npx shadcn@latest add @cmplt/${itemName}`,
    pnpm: `pnpm dlx shadcn@latest add @cmplt/${itemName}`,
    bun: `bunx --bun shadcn@latest add @cmplt/${itemName}`,
    url: `npx shadcn@latest add https://cmplt.design/r/${itemName}.json`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[pm]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="rounded-cmplt-lg border border-border-default bg-surface overflow-hidden shadow-cmplt-xs">
      <div className="flex items-center justify-between gap-2 border-b border-border-subtle bg-subtle/60 px-3 py-2">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-fg-accent" />
          <Tabs
            value={pm}
            onValueChange={(val) => setPm(val as typeof pm)}
          >
            <TabsList className="h-7 bg-canvas/70 p-0.5">
              <TabsTrigger value="npx" className="px-2 py-0.5 text-[11px]">
                npm
              </TabsTrigger>
              <TabsTrigger value="pnpm" className="px-2 py-0.5 text-[11px]">
                pnpm
              </TabsTrigger>
              <TabsTrigger value="bun" className="px-2 py-0.5 text-[11px]">
                bun
              </TabsTrigger>
              {showUrlFallback && (
                <TabsTrigger value="url" className="px-2 py-0.5 text-[11px]">
                  Direct URL
                </TabsTrigger>
              )}
            </TabsList>
          </Tabs>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`/r/${itemName}.json`}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            <Badge variant="mono" size="sm" className="hover:border-border-strong">
              /r/{itemName}.json
            </Badge>
          </a>
          <Button
            variant="secondary"
            size="xs"
            onClick={handleCopy}
            aria-label="Copy CLI command"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-status-success" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                Copy
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="px-4 py-3.5 font-mono text-xs text-fg-primary overflow-x-auto">
        <span className="select-none text-fg-muted mr-2">$</span>
        {commands[pm]}
      </div>
    </div>
  );
}
