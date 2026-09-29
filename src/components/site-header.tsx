"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  useTheme,
  type ThemePreset,
  type RadiusPreset,
} from "@/components/theme-provider";
import { Button } from "@/registry/cmplt/ui/button";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Kbd } from "@/registry/cmplt/ui/kbd";
import { Input } from "@/registry/cmplt/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
} from "@/registry/cmplt/ui/popover";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/registry/cmplt/ui/dialog";
import {
  Moon,
  Sun,
  SlidersHorizontal,
  Search,
  Terminal,
  Menu,
  X,
  CornerDownLeft,
  ArrowUpDown,
  Layers,
  Figma,
  Compass,
} from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

interface NavItem {
  href: string;
  label: string;
  isActive: (pathname: string) => boolean;
}

/**
 * NN/g Global Navigation Architecture:
 * - Restricted to 4 distinct, mutually exclusive top-level destinations (Hick's Law)
 * - Pure text labels without promotional badges or nested container borders (Heuristic #8: Signal-to-Noise Ratio)
 * - "Tokens" and "Blueprint" live as 2nd-level items inside Docs (Progressive Disclosure)
 */
const NAV_ITEMS: NavItem[] = [
  {
    href: "/docs",
    label: "Docs",
    isActive: (pathname) =>
      pathname.startsWith("/docs") && !pathname.startsWith("/docs/components"),
  },
  {
    href: "/docs/components/button",
    label: "Components",
    isActive: (pathname) => pathname.startsWith("/docs/components"),
  },
  {
    href: "/blocks",
    label: "Blocks",
    isActive: (pathname) => pathname.startsWith("/blocks"),
  },
  {
    href: "/pricing",
    label: "Pricing",
    isActive: (pathname) => pathname.startsWith("/pricing"),
  },
];

interface SearchEntry {
  title: string;
  subtitle: string;
  href: string;
  category:
    | "Foundations & Architecture"
    | "Primitives & Actions"
    | "Forms & Inputs"
    | "Overlays & Navigation"
    | "Ecosystem & Pro";
  keywords?: string;
}

const QUICK_SEARCH_LINKS: SearchEntry[] = [
  // Foundations & Architecture
  {
    title: "Introduction & Registry Setup",
    subtitle: "Headless @base-ui/react + native shadcn CLI distribution",
    href: "/docs",
    category: "Foundations & Architecture",
    keywords: "overview getting started cli install registry",
  },
  {
    title: "Living System Blueprint (ADRs)",
    subtitle: "Granular architecture decisions, UI-writing taxonomy & pillars",
    href: "/docs/blueprint",
    category: "Foundations & Architecture",
    keywords: "blueprint adr decisions architecture pillars",
  },
  {
    title: "3-Tier W3C Design Tokens (OKLCH)",
    subtitle: "Primitive → Semantic → Component tokens & DTCG JSON export",
    href: "/docs/tokens",
    category: "Foundations & Architecture",
    keywords: "tokens oklch w3c colors radius typography spacing",
  },

  // Primitives & Actions
  {
    title: "Button",
    subtitle: "@base-ui/react/button",
    href: "/docs/components/button",
    category: "Primitives & Actions",
  },
  {
    title: "Animated CTA Button",
    subtitle: "@base-ui/react/button + GSAP physics",
    href: "/docs/components/animated-cta-button",
    category: "Primitives & Actions",
    keywords: "gsap animation cta action",
  },
  {
    title: "Badge & Status",
    subtitle: "cmplt status primitive",
    href: "/docs/components/badge",
    category: "Primitives & Actions",
  },
  {
    title: "Card & 7 Domain Presets",
    subtitle: "cmplt surface + Blog, Product, Metric, Profile, Feature, Event",
    href: "/docs/components/card",
    category: "Primitives & Actions",
  },
  {
    title: "Typography & Liquid Scale",
    subtitle: "geist/font/sans + Dual-Scale Utopia clamp() & 65ch guardrails",
    href: "/docs/components/typography",
    category: "Primitives & Actions",
    keywords: "heading text prose code font",
  },
  {
    title: "Interactive Dot Field",
    subtitle: "Three.js + GSAP interactive shader canvas",
    href: "/docs/components/interactive-dot-field",
    category: "Primitives & Actions",
    keywords: "threejs webgl canvas background dots",
  },

  // Forms & Inputs
  {
    title: "Input & Field",
    subtitle: "@base-ui/react/field + @base-ui/react/input",
    href: "/docs/components/input",
    category: "Forms & Inputs",
  },
  {
    title: "Highlight Input",
    subtitle: "@base-ui/react/input + GSAP focus glow",
    href: "/docs/components/highlight-input",
    category: "Forms & Inputs",
  },
  {
    title: "Select",
    subtitle: "@base-ui/react/select",
    href: "/docs/components/select",
    category: "Forms & Inputs",
  },
  {
    title: "Switch",
    subtitle: "@base-ui/react/switch",
    href: "/docs/components/switch",
    category: "Forms & Inputs",
  },
  {
    title: "Checkbox",
    subtitle: "@base-ui/react/checkbox",
    href: "/docs/components/checkbox",
    category: "Forms & Inputs",
  },
  {
    title: "Progress",
    subtitle: "@base-ui/react/progress",
    href: "/docs/components/progress",
    category: "Forms & Inputs",
  },

  // Overlays & Navigation
  {
    title: "Dialog",
    subtitle: "@base-ui/react/dialog",
    href: "/docs/components/dialog",
    category: "Overlays & Navigation",
    keywords: "modal overlay popup",
  },
  {
    title: "Popover",
    subtitle: "@base-ui/react/popover",
    href: "/docs/components/popover",
    category: "Overlays & Navigation",
  },
  {
    title: "Tooltip",
    subtitle: "@base-ui/react/tooltip",
    href: "/docs/components/tooltip",
    category: "Overlays & Navigation",
  },
  {
    title: "Tabs",
    subtitle: "@base-ui/react/tabs",
    href: "/docs/components/tabs",
    category: "Overlays & Navigation",
  },
  {
    title: "Accordion",
    subtitle: "@base-ui/react/accordion",
    href: "/docs/components/accordion",
    category: "Overlays & Navigation",
  },

  // Ecosystem & Pro
  {
    title: "Pro UI Blocks Library",
    subtitle: "Multi-surface shells, AI telemetry cards & application directories",
    href: "/blocks",
    category: "Ecosystem & Pro",
    keywords: "blocks pro templates shells",
  },
  {
    title: "Figma UI Kit & Variables Sync",
    subtitle: "1:1 W3C DTCG token parity with Figma Variables & Auto-Layout",
    href: "/figma",
    category: "Ecosystem & Pro",
    keywords: "figma design kit variables sync",
  },
  {
    title: "Pricing & Licensing",
    subtitle: "Open-source MIT primitives & cmplt Pro team licensing",
    href: "/pricing",
    category: "Ecosystem & Pro",
    keywords: "pricing license pro enterprise buy",
  },
];

const PRESET_META: { id: ThemePreset; label: string; dot: string }[] = [
  { id: "precision", label: "Precision", dot: "bg-indigo-500" },
  { id: "editorial", label: "Editorial", dot: "bg-orange-500" },
  { id: "emerald", label: "Emerald", dot: "bg-emerald-500" },
];

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const { mode, toggleMode, preset, setPreset, radius, setRadius } = useTheme();
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const itemRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  const filteredLinks = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return QUICK_SEARCH_LINKS;
    return QUICK_SEARCH_LINKS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.keywords && item.keywords.toLowerCase().includes(q))
    );
  }, [query]);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [query, searchOpen]);

  const handleSelectSearchResult = React.useCallback(
    (href: string) => {
      setSearchOpen(false);
      setQuery("");
      router.push(href);
    },
    [router]
  );

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredLinks.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => {
        const next = (prev + 1) % filteredLinks.length;
        itemRefs.current[next]?.scrollIntoView({ block: "nearest" });
        return next;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => {
        const next = (prev - 1 + filteredLinks.length) % filteredLinks.length;
        itemRefs.current[next]?.scrollIntoView({ block: "nearest" });
        return next;
      });
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = filteredLinks[activeIndex];
      if (target) {
        handleSelectSearchResult(target.href);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-canvas/85 backdrop-blur-md">
      <div className="cmplt-container flex h-16 items-center justify-between md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-4">
        {/* Zone 1 (Left): Clean Brand Identity — Zero Badge Noise */}
        <div className="flex items-center min-w-0">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 font-semibold tracking-tight text-fg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus rounded-cmplt-sm"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-cmplt-squircle bg-accent text-fg-on-accent font-mono text-[11px] font-bold transition-transform duration-150 group-hover:scale-[1.03]">
              c/
            </span>
            <span className="text-sm font-semibold tracking-tight truncate">
              cmplt
            </span>
          </Link>
        </div>

        {/* Zone 2 (Center): 4 Unadorned Primary Navigation Links (NN/g Global Navigation) */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center justify-center gap-1 lg:gap-2"
        >
          {NAV_ITEMS.map((item) => {
            const active = item.isActive(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-flex items-center rounded-cmplt-md px-3.5 py-1.5 text-[13px] transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus",
                  active
                    ? "bg-subtle/85 text-fg-primary font-semibold"
                    : "text-fg-secondary font-medium hover:text-fg-primary hover:bg-subtle/40"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3 (Right): Minimal Utility Navigation (2 Quiet Controls: Search + Appearance) */}
        <div className="flex items-center justify-end gap-1.5 sm:gap-2">
          {/* Utility 1: Compact Search Trigger (Cmd+K) */}
          <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
            <DialogTrigger
              render={
                <button
                  type="button"
                  aria-label="Search documentation and components (Cmd+K)"
                  className="inline-flex h-8 w-8 sm:w-auto sm:min-w-[128px] items-center justify-center sm:justify-between gap-2 rounded-cmplt-md border border-border-subtle bg-subtle/35 sm:px-2.5 text-xs text-fg-muted transition-colors hover:border-border-default hover:bg-subtle/70 hover:text-fg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Search className="h-3.5 w-3.5 stroke-[1.75] shrink-0" />
                    <span className="hidden sm:inline">Search</span>
                  </span>
                  <Kbd className="hidden sm:inline-flex">⌘K</Kbd>
                </button>
              }
            />
            <DialogContent className="max-w-xl p-0 overflow-hidden gap-0">
              <DialogHeader className="p-5 pb-4 border-b border-border-subtle">
                <DialogTitle className="text-sm flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-fg-accent stroke-[1.75]" />
                    Search Documentation &amp; Registry
                  </span>
                  <span className="font-mono text-[11px] font-normal text-fg-muted cmplt-tabular">
                    {filteredLinks.length}{" "}
                    {filteredLinks.length === 1 ? "item" : "items"}
                  </span>
                </DialogTitle>
                <DialogDescription className="text-xs">
                  Jump to any component, token specification, blueprint ADR, or block.
                </DialogDescription>
                <div className="pt-2.5">
                  <Input
                    variant="search"
                    autoFocus
                    placeholder="Type a command or search (e.g. Dialog, Tokens, Blueprint)..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    aria-label="Search documentation, components, tokens, and blocks"
                  />
                </div>
              </DialogHeader>

              <div
                role="listbox"
                aria-label="Search results"
                className="max-h-80 overflow-y-auto p-2 space-y-1"
              >
                {filteredLinks.length === 0 ? (
                  <div className="py-10 text-center text-xs text-fg-muted">
                    No matching items found for &ldquo;{query}&rdquo;.
                  </div>
                ) : (
                  filteredLinks.map((item, idx) => {
                    const isSelected = idx === activeIndex;
                    const prevCategory =
                      idx > 0 ? filteredLinks[idx - 1]?.category : null;
                    const showCategoryHeader = item.category !== prevCategory;

                    return (
                      <React.Fragment key={item.href + item.title}>
                        {showCategoryHeader && (
                          <div className="px-3 pt-2.5 pb-1 text-[10px] font-semibold uppercase tracking-wider text-fg-muted first:pt-1">
                            {item.category}
                          </div>
                        )}
                        <button
                          ref={(el) => {
                            itemRefs.current[idx] = el;
                          }}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={() => handleSelectSearchResult(item.href)}
                          className={cn(
                            "flex w-full items-center justify-between gap-3 rounded-cmplt-sm px-3 py-2 text-left text-xs transition-colors cursor-pointer",
                            isSelected
                              ? "bg-accent-subtle text-fg-primary ring-1 ring-border-accent/40"
                              : "text-fg-secondary hover:bg-subtle hover:text-fg-primary"
                          )}
                        >
                          <div className="min-w-0">
                            <div
                              className={cn(
                                "font-medium truncate",
                                isSelected
                                  ? "text-fg-accent font-semibold"
                                  : "text-fg-primary"
                              )}
                            >
                              {item.title}
                            </div>
                            <div className="text-[11px] text-fg-muted truncate">
                              {item.subtitle}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <Badge variant="outline" size="sm">
                              {item.category.split(" ")[0]}
                            </Badge>
                            {isSelected && (
                              <CornerDownLeft className="h-3.5 w-3.5 text-fg-accent shrink-0" />
                            )}
                          </div>
                        </button>
                      </React.Fragment>
                    );
                  })
                )}
              </div>

              <div className="flex items-center justify-between border-t border-border-subtle bg-subtle/40 px-4 py-2.5 text-[11px] text-fg-muted">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <ArrowUpDown className="h-3 w-3" />
                    <span>Navigate</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CornerDownLeft className="h-3 w-3" />
                    <span>Open</span>
                  </span>
                </div>
                <span className="font-mono text-[10px]">ESC to close</span>
              </div>
            </DialogContent>
          </Dialog>

          {/* Utility 2: Single Uncluttered Appearance & Token Studio Icon Trigger (Progressive Disclosure) */}
          <Popover>
            <PopoverTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-cmplt-md text-fg-secondary hover:text-fg-primary"
                  aria-label="Appearance and theme settings"
                  title="Appearance & Live Token Studio"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              }
            />
            <PopoverContent align="end" className="w-76 space-y-4">
              <div>
                <PopoverTitle>Appearance &amp; Tokens</PopoverTitle>
                <PopoverDescription>
                  Adjust color scheme, semantic preset, and corner geometry in real time.
                </PopoverDescription>
              </div>

              {/* Color Scheme Segmented Control */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-medium uppercase tracking-wider text-fg-muted">
                  Color Scheme
                </div>
                <div className="grid grid-cols-2 gap-1.5 rounded-cmplt-md bg-subtle/60 p-1">
                  <button
                    type="button"
                    onClick={() => {
                      if (mode !== "light") toggleMode();
                    }}
                    className={cn(
                      "flex items-center justify-center gap-1.5 rounded-cmplt-sm py-1.5 text-xs font-medium transition-colors cursor-pointer",
                      mode === "light"
                        ? "bg-surface text-fg-primary shadow-cmplt-xs"
                        : "text-fg-secondary hover:text-fg-primary"
                    )}
                  >
                    <Sun className="h-3.5 w-3.5" />
                    Light
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (mode !== "dark") toggleMode();
                    }}
                    className={cn(
                      "flex items-center justify-center gap-1.5 rounded-cmplt-sm py-1.5 text-xs font-medium transition-colors cursor-pointer",
                      mode === "dark"
                        ? "bg-surface text-fg-primary shadow-cmplt-xs"
                        : "text-fg-secondary hover:text-fg-primary"
                    )}
                  >
                    <Moon className="h-3.5 w-3.5" />
                    Dark
                  </button>
                </div>
              </div>

              {/* Aesthetic Preset */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-medium uppercase tracking-wider text-fg-muted">
                  Aesthetic Preset
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {PRESET_META.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPreset(p.id)}
                      className={cn(
                        "flex items-center justify-center gap-1.5 rounded-cmplt-sm border px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                        preset === p.id
                          ? "border-border-accent bg-accent-subtle text-fg-accent"
                          : "border-border-subtle bg-surface text-fg-secondary hover:bg-subtle"
                      )}
                    >
                      <span className={cn("h-2 w-2 rounded-full", p.dot)} />
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Geometry Scale */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-medium uppercase tracking-wider text-fg-muted">
                  Geometry Scale (--cmplt-radius-base)
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {(["none", "sm", "md", "lg", "xl"] as RadiusPreset[]).map(
                    (r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRadius(r)}
                        className={cn(
                          "rounded-cmplt-sm border py-1 text-center font-mono text-xs transition-colors cursor-pointer",
                          radius === r
                            ? "border-border-accent bg-accent-subtle text-fg-accent font-semibold"
                            : "border-border-subtle bg-surface text-fg-secondary hover:bg-subtle"
                        )}
                      >
                        {r}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Secondary Deep-Links */}
              <div className="grid grid-cols-2 gap-2 border-t border-border-subtle pt-3">
                <Link
                  href="/docs/tokens"
                  className="flex items-center justify-center gap-1.5 rounded-cmplt-sm border border-border-subtle bg-subtle/40 px-2.5 py-1.5 text-[11px] font-medium text-fg-secondary hover:bg-subtle hover:text-fg-primary transition-colors"
                >
                  <Layers className="h-3 w-3 text-fg-accent" />
                  Token Spec
                </Link>
                <Link
                  href="/figma"
                  className="flex items-center justify-center gap-1.5 rounded-cmplt-sm border border-border-subtle bg-subtle/40 px-2.5 py-1.5 text-[11px] font-medium text-fg-secondary hover:bg-subtle hover:text-fg-primary transition-colors"
                >
                  <Figma className="h-3 w-3 text-fg-accent" />
                  Figma Kit
                </Link>
              </div>
            </PopoverContent>
          </Popover>

          {/* Mobile Navigation Menu Trigger (< 768px) */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-cmplt-md md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Drawer (< 768px) with Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-16 z-30 bg-canvas/60 backdrop-blur-xs md:hidden"
          />
          <div className="relative z-40 md:hidden border-t border-border-subtle bg-surface/98 backdrop-blur-md shadow-cmplt-lg">
            <div className="cmplt-container py-5 space-y-5">
              <div className="space-y-2">
                <div className="px-1 text-[10px] font-semibold uppercase tracking-wider text-fg-muted">
                  Navigation
                </div>
                <nav
                  className="grid grid-cols-2 gap-2"
                  aria-label="Mobile navigation"
                >
                  {NAV_ITEMS.map((item) => {
                    const active = item.isActive(pathname);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-cmplt-md border px-3.5 py-2.5 text-xs font-medium transition-colors",
                          active
                            ? "border-border-accent bg-accent-subtle text-fg-accent font-semibold"
                            : "border-border-subtle bg-canvas/60 text-fg-primary hover:bg-subtle"
                        )}
                      >
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="space-y-2 border-t border-border-subtle pt-4">
                <div className="px-1 text-[10px] font-semibold uppercase tracking-wider text-fg-muted">
                  Foundations &amp; Resources
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <Link
                    href="/docs/tokens"
                    className="flex items-center gap-1.5 rounded-cmplt-md border border-border-subtle bg-canvas/40 px-3 py-2 text-xs font-medium text-fg-secondary hover:bg-subtle hover:text-fg-primary transition-colors"
                  >
                    <Layers className="h-3.5 w-3.5 text-fg-accent shrink-0" />
                    <span className="truncate">Tokens</span>
                  </Link>
                  <Link
                    href="/docs/blueprint"
                    className="flex items-center gap-1.5 rounded-cmplt-md border border-border-subtle bg-canvas/40 px-3 py-2 text-xs font-medium text-fg-secondary hover:bg-subtle hover:text-fg-primary transition-colors"
                  >
                    <Compass className="h-3.5 w-3.5 text-fg-accent shrink-0" />
                    <span className="truncate">Blueprint</span>
                  </Link>
                  <Link
                    href="/figma"
                    className="flex items-center gap-1.5 rounded-cmplt-md border border-border-subtle bg-canvas/40 px-3 py-2 text-xs font-medium text-fg-secondary hover:bg-subtle hover:text-fg-primary transition-colors"
                  >
                    <Figma className="h-3.5 w-3.5 text-fg-accent shrink-0" />
                    <span className="truncate">Figma Kit</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
