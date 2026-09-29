"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  useTheme,
  type ThemePreset,
  type RadiusPreset,
} from "@/components/theme-provider";
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
  CornerDownLeft,
  ArrowUpDown,
  ArrowUpRight,
  Layers,
  Figma,
  Compass,
  Github,
} from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

interface NavItem {
  index: string;
  href: string;
  label: string;
  description: string;
  meta: string;
  isActive: (pathname: string) => boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    index: "01",
    href: "/docs",
    label: "Documentation",
    description: "Architecture, CLI setup & headless @base-ui/react primitives",
    meta: "v1.4 Core",
    isActive: (pathname) =>
      pathname === "/docs" || pathname.startsWith("/docs/blueprint"),
  },
  {
    index: "02",
    href: "/docs/components/button",
    label: "Components",
    description: "17 accessible UI primitives, GSAP surfaces & 7 card presets",
    meta: "17 Items",
    isActive: (pathname) => pathname.startsWith("/docs/components"),
  },
  {
    index: "03",
    href: "/docs/tokens",
    label: "Design Tokens",
    description: "3-tier perceptual OKLCH color ramps & W3C DTCG JSON schema",
    meta: "W3C OKLCH",
    isActive: (pathname) => pathname.startsWith("/docs/tokens"),
  },
  {
    index: "04",
    href: "/blocks",
    label: "UI Blocks",
    description: "Production multi-surface shells, AI telemetry & app directories",
    meta: "Pro Library",
    isActive: (pathname) => pathname.startsWith("/blocks"),
  },
  {
    index: "05",
    href: "/pricing",
    label: "Pricing",
    description: "Open-source MIT primitives & team-wide Pro registry licensing",
    meta: "MIT & Pro",
    isActive: (pathname) => pathname.startsWith("/pricing"),
  },
];

const FEATURED_COMPONENTS = [
  { label: "Button", href: "/docs/components/button" },
  { label: "Dialog", href: "/docs/components/dialog" },
  { label: "Select", href: "/docs/components/select" },
  { label: "Tabs", href: "/docs/components/tabs" },
  { label: "Card Presets", href: "/docs/components/card" },
  { label: "Input & Field", href: "/docs/components/input" },
  { label: "Popover", href: "/docs/components/popover" },
  { label: "Tooltip", href: "/docs/components/tooltip" },
  { label: "Typography", href: "/docs/components/typography" },
  { label: "Dot Field (3D)", href: "/docs/components/interactive-dot-field" },
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
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const itemRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  // Refs for GSAP Animated Menu Icon & Full-Screen Off-Canvas Overlay
  const headerRootRef = React.useRef<HTMLElement | null>(null);
  const topBarRef = React.useRef<HTMLSpanElement | null>(null);
  const middleBarRef = React.useRef<HTMLSpanElement | null>(null);
  const bottomBarRef = React.useRef<HTMLSpanElement | null>(null);
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  const backdropGlowRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setMenuOpen(false);
        setSearchOpen((prev) => !prev);
      } else if (e.key === "Escape" && menuOpen) {
        e.preventDefault();
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // GSAP Natural Choreography for Menu Icon + Full-Screen Off-Canvas Menu
  useGSAP(
    () => {
      const topBar = topBarRef.current;
      const middleBar = middleBarRef.current;
      const bottomBar = bottomBarRef.current;
      const overlay = overlayRef.current;
      const glow = backdropGlowRef.current;

      if (!topBar || !middleBar || !bottomBar || !overlay) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const primaryItems = overlay.querySelectorAll("[data-menu-primary]");
      const secondaryItems = overlay.querySelectorAll("[data-menu-secondary]");
      const footerBar = overlay.querySelectorAll("[data-menu-footer]");

      gsap.killTweensOf([
        topBar,
        middleBar,
        bottomBar,
        overlay,
        glow,
        primaryItems,
        secondaryItems,
        footerBar,
      ]);

      if (prefersReduced) {
        gsap.set(overlay, {
          autoAlpha: menuOpen ? 1 : 0,
          clipPath: "inset(0% 0% 0% 0%)",
        });
        gsap.set(topBar, {
          y: menuOpen ? 0 : -4.5,
          rotate: menuOpen ? 45 : 0,
        });
        gsap.set(middleBar, {
          scaleX: menuOpen ? 0 : 1,
          opacity: menuOpen ? 0 : 1,
        });
        gsap.set(bottomBar, {
          y: menuOpen ? 0 : 4.5,
          rotate: menuOpen ? -45 : 0,
          scaleX: 1,
        });
        return;
      }

      if (menuOpen) {
        // 1. Two-stage natural morph of the 3-line icon into a crisp X
        const iconTl = gsap.timeline();
        iconTl
          .to(
            middleBar,
            {
              scaleX: 0,
              opacity: 0,
              duration: 0.2,
              ease: "power2.in",
            },
            0
          )
          .to(
            topBar,
            {
              y: 0,
              duration: 0.22,
              ease: "power3.inOut",
            },
            0
          )
          .to(
            bottomBar,
            {
              y: 0,
              scaleX: 1,
              duration: 0.22,
              ease: "power3.inOut",
            },
            0
          )
          .to(
            topBar,
            {
              rotate: 45,
              duration: 0.36,
              ease: "back.out(1.7)",
            },
            0.18
          )
          .to(
            bottomBar,
            {
              rotate: -45,
              duration: 0.36,
              ease: "back.out(1.7)",
            },
            0.18
          );

        // 2. Full-screen curtain reveal + staggered content entrance
        gsap.set(overlay, { visibility: "visible" });
        const menuTl = gsap.timeline();
        menuTl
          .fromTo(
            overlay,
            {
              opacity: 0,
              clipPath: "inset(0% 0% 100% 0%)",
            },
            {
              opacity: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.58,
              ease: "expo.out",
            },
            0
          )
          .fromTo(
            glow,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
            },
            0.1
          )
          .fromTo(
            primaryItems,
            { y: 36, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.56,
              stagger: 0.055,
              ease: "power3.out",
            },
            0.14
          )
          .fromTo(
            secondaryItems,
            { y: 22, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.045,
              ease: "power3.out",
            },
            0.22
          )
          .fromTo(
            footerBar,
            { y: 14, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
              ease: "power2.out",
            },
            0.3
          );
      } else {
        // 1. Two-stage natural uncross of the icon back into architectural bars
        const iconCloseTl = gsap.timeline();
        iconCloseTl
          .to(
            [topBar, bottomBar],
            {
              rotate: 0,
              duration: 0.22,
              ease: "power3.inOut",
            },
            0
          )
          .to(
            topBar,
            {
              y: -4.5,
              duration: 0.28,
              ease: "back.out(1.5)",
            },
            0.16
          )
          .to(
            bottomBar,
            {
              y: 4.5,
              scaleX: 0.72,
              duration: 0.28,
              ease: "back.out(1.5)",
            },
            0.16
          )
          .to(
            middleBar,
            {
              scaleX: 1,
              opacity: 1,
              duration: 0.26,
              ease: "power3.out",
            },
            0.18
          );

        // 2. Smooth exit choreography for full-screen overlay
        const closeTl = gsap.timeline({
          onComplete: () => {
            gsap.set(overlay, { visibility: "hidden" });
          },
        });
        closeTl
          .to(
            [primaryItems, secondaryItems, footerBar],
            {
              y: -16,
              opacity: 0,
              duration: 0.22,
              stagger: 0.015,
              ease: "power2.in",
            },
            0
          )
          .to(
            overlay,
            {
              opacity: 0,
              clipPath: "inset(0% 0% 100% 0%)",
              duration: 0.42,
              ease: "power3.inOut",
            },
            0.08
          );
      }
    },
    { dependencies: [menuOpen], scope: headerRootRef }
  );

  const handleMenuButtonEnter = () => {
    if (menuOpen || !bottomBarRef.current) return;
    gsap.to(bottomBarRef.current, {
      scaleX: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMenuButtonLeave = () => {
    if (menuOpen || !bottomBarRef.current) return;
    gsap.to(bottomBarRef.current, {
      scaleX: 0.72,
      duration: 0.25,
      ease: "power2.out",
    });
  };

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
    <header
      ref={headerRootRef}
      className="sticky top-0 z-50 w-full pointer-events-none"
    >
      {/* Top Floating Bar — No Full-Width Navbar Background */}
      <div className="cmplt-container relative z-50 flex h-16 items-center justify-between gap-4">
        {/* Zone 1 (Left): Individual Floating Brand Identity */}
        <div className="flex items-center min-w-0">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="pointer-events-auto group inline-flex h-9 items-center gap-2 rounded-cmplt-full border border-border-subtle/90 bg-surface/85 pl-1.5 pr-3.5 font-semibold tracking-tight text-fg-primary shadow-cmplt-sm backdrop-blur-md transition-colors hover:border-border-default hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-cmplt-full bg-accent text-fg-on-accent font-mono text-[11px] font-bold transition-transform duration-150 group-hover:scale-[1.04]">
              c/
            </span>
            <span className="text-sm font-semibold tracking-tight truncate">
              cmplt
            </span>
          </Link>
        </div>

        {/* Zone 2 (Right): Individual Floating Utility Controls (Search + Appearance + Animated Menu Trigger) */}
        <div className="pointer-events-auto flex items-center justify-end gap-2">
          {/* Utility 1: Floating Search Pill (Cmd+K) */}
          <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
            <DialogTrigger
              render={
                <button
                  type="button"
                  aria-label="Search documentation and components (Cmd+K)"
                  className="inline-flex h-9 w-9 sm:w-auto sm:min-w-[132px] items-center justify-center sm:justify-between gap-2 rounded-cmplt-full border border-border-subtle/90 bg-surface/85 sm:px-3 text-xs text-fg-muted shadow-cmplt-sm backdrop-blur-md transition-colors hover:border-border-default hover:bg-surface hover:text-fg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus cursor-pointer"
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

          {/* Utility 2: Floating Appearance & Token Studio Icon Button */}
          <Popover>
            <PopoverTrigger
              render={
                <button
                  type="button"
                  aria-label="Appearance and theme settings"
                  title="Appearance & Live Token Studio"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-cmplt-full border border-border-subtle/90 bg-surface/85 text-fg-secondary shadow-cmplt-sm backdrop-blur-md transition-colors hover:border-border-default hover:bg-surface hover:text-fg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus cursor-pointer"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </button>
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

          {/* Utility 3: GSAP-Animated Menu Trigger Button (All Viewports) */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            onMouseEnter={handleMenuButtonEnter}
            onMouseLeave={handleMenuButtonLeave}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="cmplt-fullscreen-menu"
            className={cn(
              "group inline-flex h-9 items-center gap-2.5 rounded-cmplt-full border px-3.5 text-xs font-medium shadow-cmplt-sm backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus cursor-pointer",
              menuOpen
                ? "border-border-strong bg-elevated text-fg-primary"
                : "border-border-subtle/90 bg-surface/85 text-fg-primary hover:border-border-default hover:bg-surface"
            )}
          >
            <span className="hidden sm:inline font-medium tracking-tight">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <span
              aria-hidden="true"
              className="relative flex h-4 w-4 items-center justify-center"
            >
              <span
                ref={topBarRef}
                className="absolute h-[1.5px] w-4 rounded-full bg-current origin-center"
                style={{ transform: "translateY(-4.5px)" }}
              />
              <span
                ref={middleBarRef}
                className="absolute h-[1.5px] w-4 rounded-full bg-current origin-center"
              />
              <span
                ref={bottomBarRef}
                className="absolute h-[1.5px] w-4 rounded-full bg-current origin-right"
                style={{ transform: "translateY(4.5px) scaleX(0.72)" }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* =====================================================================
          FULL-SCREEN OFF-CANVAS NAVIGATION OVERLAY (GSAP CHOREOGRAPHY)
         ===================================================================== */}
      <div
        id="cmplt-fullscreen-menu"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation menu"
        aria-hidden={!menuOpen}
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-canvas/96 backdrop-blur-2xl pt-20 pb-8 sm:pt-24 sm:pb-10",
          menuOpen ? "pointer-events-auto" : "pointer-events-none invisible"
        )}
      >
        {/* Subtle Ambient Accent Glow */}
        <div
          ref={backdropGlowRef}
          aria-hidden="true"
          className="pointer-events-none fixed -top-32 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="cmplt-container relative z-10 my-auto w-full py-4 sm:py-8">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16 xl:gap-24 items-start">
            {/* Left Column: Primary Editorial Destinations (01 – 05) */}
            <nav aria-label="Full-screen primary navigation" className="space-y-2">
              <div
                data-menu-primary
                className="pb-2 text-[11px] font-mono uppercase tracking-widest text-fg-muted"
              >
                Navigation Directory
              </div>
              <div className="divide-y divide-border-subtle/60 border-y border-border-subtle/60">
                {NAV_ITEMS.map((item) => {
                  const active = item.isActive(pathname);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      data-menu-primary
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-center justify-between gap-4 py-4 sm:py-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus rounded-cmplt-sm"
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6 min-w-0">
                        <span
                          className={cn(
                            "font-mono text-xs sm:text-sm cmplt-tabular transition-colors shrink-0",
                            active
                              ? "text-fg-accent font-semibold"
                              : "text-fg-muted group-hover:text-fg-accent"
                          )}
                        >
                          {item.index}
                        </span>
                        <div className="min-w-0 space-y-1">
                          <div className="flex items-center gap-3">
                            <span
                              className={cn(
                                "text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-1",
                                active
                                  ? "text-fg-accent"
                                  : "text-fg-primary group-hover:text-fg-primary"
                              )}
                            >
                              {item.label}
                            </span>
                            {active && (
                              <Badge variant="brand" size="sm">
                                Current
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-fg-secondary line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline-block font-mono text-[11px] text-fg-muted">
                          {item.meta}
                        </span>
                        <span
                          className={cn(
                            "flex h-9 w-9 items-center justify-center rounded-cmplt-full border transition-all duration-200",
                            active
                              ? "border-border-accent bg-accent-subtle text-fg-accent"
                              : "border-border-subtle bg-surface text-fg-secondary group-hover:border-border-strong group-hover:bg-elevated group-hover:text-fg-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          )}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Right Column: Architecture Deep-Links, Component Quick-Jump & Live Theme */}
            <div className="space-y-8">
              {/* System Architecture & Ecosystem Cards */}
              <div data-menu-secondary className="space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-widest text-fg-muted">
                  Architecture &amp; Ecosystem
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link
                    href="/docs/blueprint"
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "group flex flex-col justify-between gap-3 rounded-cmplt-md border p-4 transition-all",
                      pathname.startsWith("/docs/blueprint")
                        ? "border-border-accent bg-accent-subtle/60"
                        : "border-border-subtle bg-surface/75 hover:border-border-default hover:bg-surface"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <Compass className="h-4 w-4 text-fg-accent" />
                      <Badge variant="outline" size="sm">
                        24 ADRs
                      </Badge>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-fg-primary group-hover:text-fg-accent transition-colors">
                        Living System Blueprint
                      </div>
                      <p className="mt-0.5 text-xs text-fg-secondary">
                        Granular architecture decisions &amp; UI-writing taxonomy.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/figma"
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "group flex flex-col justify-between gap-3 rounded-cmplt-md border p-4 transition-all",
                      pathname.startsWith("/figma")
                        ? "border-border-accent bg-accent-subtle/60"
                        : "border-border-subtle bg-surface/75 hover:border-border-default hover:bg-surface"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <Figma className="h-4 w-4 text-fg-accent" />
                      <Badge variant="outline" size="sm">
                        W3C Sync
                      </Badge>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-fg-primary group-hover:text-fg-accent transition-colors">
                        Figma UI Kit
                      </div>
                      <p className="mt-0.5 text-xs text-fg-secondary">
                        1:1 variable modes, auto-layout &amp; Code Connect parity.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Direct Component Primitives Quick-Jump */}
              <div data-menu-secondary className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-fg-muted">
                    Popular Primitives
                  </span>
                  <Link
                    href="/docs/components/button"
                    onClick={() => setMenuOpen(false)}
                    className="text-xs font-medium text-fg-accent hover:underline"
                  >
                    View all 17 →
                  </Link>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {FEATURED_COMPONENTS.map((comp) => {
                    const active = pathname === comp.href;
                    return (
                      <Link
                        key={comp.href}
                        href={comp.href}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                          "inline-flex items-center rounded-cmplt-full border px-3 py-1.5 text-xs font-medium transition-colors",
                          active
                            ? "border-border-accent bg-accent-subtle text-fg-accent font-semibold"
                            : "border-border-subtle bg-surface/70 text-fg-secondary hover:border-border-default hover:bg-surface hover:text-fg-primary"
                        )}
                      >
                        {comp.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Quick Theme Preset Switcher inside Off-Canvas */}
              <div
                data-menu-secondary
                className="rounded-cmplt-md border border-border-subtle bg-surface/60 p-4 space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-fg-muted">
                    Live Aesthetic Preset
                  </span>
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="inline-flex items-center gap-1.5 rounded-cmplt-full border border-border-subtle bg-canvas px-2.5 py-1 text-[11px] font-medium text-fg-secondary hover:text-fg-primary cursor-pointer"
                  >
                    {mode === "dark" ? (
                      <>
                        <Sun className="h-3 w-3 text-fg-accent" /> Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="h-3 w-3 text-fg-accent" /> Dark Mode
                      </>
                    )}
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {PRESET_META.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPreset(p.id)}
                      className={cn(
                        "flex items-center justify-center gap-1.5 rounded-cmplt-sm border py-1.5 text-xs font-medium transition-colors cursor-pointer",
                        preset === p.id
                          ? "border-border-accent bg-accent-subtle text-fg-accent font-semibold"
                          : "border-border-subtle bg-canvas/70 text-fg-secondary hover:text-fg-primary"
                      )}
                    >
                      <span className={cn("h-2 w-2 rounded-full", p.dot)} />
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar inside Full-Screen Canvas */}
        <div
          data-menu-footer
          className="cmplt-container relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle/70 pt-5 text-xs text-fg-muted"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px]">
              cmplt design system v1.4
            </span>
            <span className="hidden sm:inline text-border-strong">·</span>
            <span className="hidden sm:inline">
              Press <Kbd>ESC</Kbd> to close or <Kbd>⌘K</Kbd> to search
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/schroepa"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-fg-secondary hover:text-fg-primary transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub (@schroepa)
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
