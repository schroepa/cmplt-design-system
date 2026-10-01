"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPONENT_DOCS } from "@/components/docs/component-catalog";
import { Badge } from "@/registry/cmplt/ui/badge";
import { cn } from "@/registry/cmplt/lib/utils";
import { BookOpen, Box, Sparkles, Figma, ChevronDown } from "lucide-react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    setMobileSidebarOpen(false);
  }, [pathname]);

  const categories = [
    "Primitives & Actions",
    "Forms & Inputs",
    "Overlays & Navigation",
  ] as const;

  return (
    <div className="cmplt-container">
      <div className="flex flex-col md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] 2xl:grid-cols-[300px_minmax(0,1fr)] md:gap-8 lg:gap-14 xl:gap-16 2xl:gap-24">
        {/* Left Sticky Sidebar (Collapsible on Mobile, Sticky on Tablet/Desktop/Desktop+) */}
        <aside className="py-4 md:py-10 lg:py-14 2xl:py-16 md:pr-6 lg:pr-8 2xl:pr-10 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto">
          {/* Mobile Collapsible Index Trigger (< md) */}
          <button
            type="button"
            onClick={() => setMobileSidebarOpen((prev) => !prev)}
            aria-expanded={mobileSidebarOpen}
            className="flex md:hidden w-full min-h-[44px] items-center justify-between rounded-xl bg-surface px-4 py-2.5 text-xs font-semibold text-fg-primary cursor-pointer border-0 shadow-none"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5 text-fg-brand" />
              Documentation &amp; Component Index
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-fg-muted transition-transform duration-200",
                mobileSidebarOpen && "rotate-180"
              )}
            />
          </button>

          <div
            className={cn(
              "space-y-8 pt-4 md:pt-0",
              mobileSidebarOpen ? "block" : "hidden md:block"
            )}
          >
            {/* Group 1: Architecture & Foundations */}
            <div>
              <div className="mb-3 flex items-center gap-2 px-2.5 text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
                <BookOpen className="h-3 w-3 text-fg-brand" />
                Getting Started
              </div>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/docs"
                    aria-current={pathname === "/docs" ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-[11px] px-3.5 py-2 text-xs font-medium transition-colors",
                      pathname === "/docs"
                        ? "bg-brand text-fg-on-brand font-medium"
                        : "text-fg-secondary hover:bg-subtle hover:text-fg-primary"
                    )}
                  >
                    <span>Overview &amp; Registry</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/blueprint"
                    aria-current={
                      pathname?.startsWith("/docs/blueprint") ? "page" : undefined
                    }
                    className={cn(
                      "flex items-center justify-between rounded-[11px] px-3.5 py-2 text-xs font-medium transition-colors",
                      pathname?.startsWith("/docs/blueprint")
                        ? "bg-brand text-fg-on-brand font-medium"
                        : "text-fg-secondary hover:bg-subtle hover:text-fg-primary"
                    )}
                  >
                    <span>Living Blueprint</span>
                    <Badge
                      variant="mono"
                      size="sm"
                      className={cn(
                        "px-1.5 py-0 text-[10px] border-0 shadow-none",
                        pathname?.startsWith("/docs/blueprint")
                          ? "bg-black/20 text-fg-on-brand"
                          : "bg-subtle text-fg-muted"
                      )}
                    >
                      ADR
                    </Badge>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/tokens"
                    aria-current={pathname === "/docs/tokens" ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-[11px] px-3.5 py-2 text-xs font-medium transition-colors",
                      pathname === "/docs/tokens"
                        ? "bg-brand text-fg-on-brand font-medium"
                        : "text-fg-secondary hover:bg-subtle hover:text-fg-primary"
                    )}
                  >
                    <span>Design Tokens (OKLCH)</span>
                    <Badge
                      variant="mono"
                      size="sm"
                      className={cn(
                        "px-1.5 py-0 text-[10px] border-0 shadow-none",
                        pathname === "/docs/tokens"
                          ? "bg-black/20 text-fg-on-brand"
                          : "bg-subtle text-fg-muted"
                      )}
                    >
                      W3C
                    </Badge>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/hooks"
                    aria-current={pathname === "/docs/hooks" ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-[11px] px-3.5 py-2 text-xs font-medium transition-colors",
                      pathname === "/docs/hooks"
                        ? "bg-brand text-fg-on-brand font-medium"
                        : "text-fg-secondary hover:bg-subtle hover:text-fg-primary"
                    )}
                  >
                    <span>React Hooks</span>
                    <Badge
                      variant="mono"
                      size="sm"
                      className={cn(
                        "px-1.5 py-0 text-[10px] border-0 shadow-none",
                        pathname === "/docs/hooks"
                          ? "bg-black/20 text-fg-on-brand"
                          : "bg-subtle text-fg-muted"
                      )}
                    >
                      Hooks
                    </Badge>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Group 2: Base UI Components by Category */}
            {categories.map((cat) => {
              const items = COMPONENT_DOCS.filter((c) => c.category === cat);
              return (
                <div key={cat}>
                  <div className="mb-3 flex items-center justify-between gap-2 px-2.5 text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
                    <span className="flex items-center gap-2">
                      <Box className="h-3 w-3 text-fg-brand" />
                      {cat}
                    </span>
                    <span className="font-mono text-[10px] font-normal text-fg-muted/80 cmplt-tabular">
                      {items.length}
                    </span>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-1">
                    {items.map((item) => {
                      const href = `/docs/components/${item.slug}`;
                      const active = pathname === href;
                      return (
                        <li key={item.slug}>
                          <Link
                            href={href}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                              "flex items-center justify-between rounded-[11px] px-3.5 py-2 text-xs font-medium transition-colors",
                              active
                                ? "bg-brand text-fg-on-brand font-medium shadow-none"
                                : "text-fg-secondary hover:bg-subtle hover:text-fg-primary"
                            )}
                          >
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            {/* Group 3: Ecosystem */}
            <div>
              <div className="mb-3 flex items-center gap-2 px-2.5 text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
                <Sparkles className="h-3 w-3 text-fg-brand" />
                Ecosystem
              </div>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/blocks"
                    className="flex items-center justify-between rounded-[11px] px-3.5 py-2 text-xs font-medium text-fg-secondary hover:bg-subtle hover:text-fg-primary"
                  >
                    <span>UI Blocks</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/figma"
                    className="flex items-center justify-between rounded-[11px] px-3.5 py-2 text-xs font-medium text-fg-secondary hover:bg-subtle hover:text-fg-primary"
                  >
                    <span className="flex items-center gap-1.5">
                      <Figma className="h-3 w-3" /> Figma UI Kit
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Documentation Content */}
        <div className="py-10 md:py-12 lg:py-16 2xl:py-20 min-w-0">{children}</div>
      </div>
    </div>
  );
}
