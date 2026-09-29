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
  Github,
} from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

interface NavItem {
  href: string;
  label: string;
  description: string;
  isActive: (pathname: string) => boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    href: "/docs",
    label: "Documentation",
    description: "Getting started, CLI setup, and core architecture",
    isActive: (pathname) =>
      pathname === "/docs" || pathname.startsWith("/docs/blueprint"),
  },
  {
    href: "/docs/components/button",
    label: "Components",
    description: "Accessible Base UI primitives and interactive surfaces",
    isActive: (pathname) => pathname.startsWith("/docs/components"),
  },
  {
    href: "/docs/tokens",
    label: "Design Tokens",
    description: "Three-tier OKLCH color system and W3C token definitions",
    isActive: (pathname) => pathname.startsWith("/docs/tokens"),
  },
  {
    href: "/blocks",
    label: "Blocks",
    description: "Multi-surface application shells and composed patterns",
    isActive: (pathname) => pathname.startsWith("/blocks"),
  },
  {
    href: "/pricing",
    label: "Pricing",
    description: "Open-source primitives and team licensing",
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
  const hasMountedRef = React.useRef(false);

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
        primaryItems,
        secondaryItems,
        footerBar,
      ]);

      if (!hasMountedRef.current) {
        hasMountedRef.current = true;
        gsap.set(overlay, {
          opacity: 0,
          visibility: "hidden",
          clipPath: "inset(0% 0% 100% 0%)",
        });
        gsap.set(topBar, {
          x: 0,
          y: -4.5,
          rotate: 0,
          scaleX: 1,
          transformOrigin: "50% 50%",
        });
        gsap.set(middleBar, {
          x: 0,
          y: 0,
          scaleX: 1,
          opacity: 1,
          transformOrigin: "50% 50%",
        });
        gsap.set(bottomBar, {
          x: 2.2,
          y: 4.5,
          rotate: 0,
          scaleX: 0.72,
          transformOrigin: "50% 50%",
        });
        return;
      }

      if (prefersReduced) {
        gsap.set(overlay, {
          autoAlpha: menuOpen ? 1 : 0,
          clipPath: "inset(0% 0% 0% 0%)",
        });
        gsap.set(topBar, {
          x: 0,
          y: menuOpen ? 0 : -4.5,
          rotate: menuOpen ? 45 : 0,
          scaleX: 1,
          transformOrigin: "50% 50%",
        });
        gsap.set(middleBar, {
          x: 0,
          y: 0,
          scaleX: menuOpen ? 0 : 1,
          opacity: menuOpen ? 0 : 1,
          transformOrigin: "50% 50%",
        });
        gsap.set(bottomBar, {
          x: menuOpen ? 0 : 2.2,
          y: menuOpen ? 0 : 4.5,
          rotate: menuOpen ? -45 : 0,
          scaleX: menuOpen ? 1 : 0.72,
          transformOrigin: "50% 50%",
        });
        return;
      }

      if (menuOpen) {
        // 1. Two-stage natural morph of the 3-line icon into a crisp centered X
        const iconTl = gsap.timeline();
        iconTl
          .to(
            middleBar,
            {
              scaleX: 0,
              opacity: 0,
              duration: 0.18,
              ease: "power2.in",
              transformOrigin: "50% 50%",
            },
            0
          )
          .to(
            topBar,
            {
              x: 0,
              y: 0,
              scaleX: 1,
              duration: 0.22,
              ease: "power3.inOut",
              transformOrigin: "50% 50%",
            },
            0
          )
          .to(
            bottomBar,
            {
              x: 0,
              y: 0,
              scaleX: 1,
              duration: 0.22,
              ease: "power3.inOut",
              transformOrigin: "50% 50%",
            },
            0
          )
          .to(
            topBar,
            {
              rotate: 45,
              duration: 0.36,
              ease: "back.out(1.7)",
              transformOrigin: "50% 50%",
            },
            0.18
          )
          .to(
            bottomBar,
            {
              rotate: -45,
              duration: 0.36,
              ease: "back.out(1.7)",
              transformOrigin: "50% 50%",
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
              duration: 0.55,
              ease: "expo.out",
            },
            0
          )
          .fromTo(
            primaryItems,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.52,
              stagger: 0.05,
              ease: "power3.out",
            },
            0.12
          )
          .fromTo(
            secondaryItems,
            { y: 18, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.48,
              stagger: 0.04,
              ease: "power3.out",
            },
            0.2
          )
          .fromTo(
            footerBar,
            { y: 10, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
            },
            0.28
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
              transformOrigin: "50% 50%",
            },
            0
          )
          .to(
            topBar,
            {
              x: 0,
              y: -4.5,
              scaleX: 1,
              duration: 0.28,
              ease: "back.out(1.5)",
              transformOrigin: "50% 50%",
            },
            0.16
          )
          .to(
            bottomBar,
            {
              x: 2.2,
              y: 4.5,
              scaleX: 0.72,
              duration: 0.28,
              ease: "back.out(1.5)",
              transformOrigin: "50% 50%",
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
              transformOrigin: "50% 50%",
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
              y: -14,
              opacity: 0,
              duration: 0.2,
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
              duration: 0.4,
              ease: "power3.inOut",
            },
            0.06
          );
      }
    },
    { dependencies: [menuOpen], scope: headerRootRef }
  );

  const handleMenuButtonEnter = () => {
    if (menuOpen || !bottomBarRef.current) return;
    gsap.to(bottomBarRef.current, {
      x: 0,
      scaleX: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMenuButtonLeave = () => {
    if (menuOpen || !bottomBarRef.current) return;
    gsap.to(bottomBarRef.current, {
      x: 2.2,
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
                          <div className="px-3 pt-2.5 pb-1 text-xs font-medium text-fg-muted first:pt-1">
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
                <span className="text-[11px]">Esc to close</span>
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
                <div className="text-xs font-medium text-fg-muted">
                  Color scheme
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
                <div className="text-xs font-medium text-fg-muted">
                  Preset
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
                <div className="text-xs font-medium text-fg-muted">
                  Corner radius
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
              />
              <span
                ref={middleBarRef}
                className="absolute h-[1.5px] w-4 rounded-full bg-current origin-center"
              />
              <span
                ref={bottomBarRef}
                className="absolute h-[1.5px] w-4 rounded-full bg-current origin-center"
              />
            </span>
          </button>
        </div>
      </div>

      {/* =====================================================================
          FULL-SCREEN OFF-CANVAS NAVIGATION OVERLAY
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
        <div className="cmplt-container relative z-10 my-auto w-full py-4 sm:py-8">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16 xl:gap-24 items-start">
            {/* Left Column: Primary Navigation Links */}
            <nav aria-label="Primary navigation">
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
                      <div className="min-w-0 space-y-1">
                        <div
                          className={cn(
                            "text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight transition-colors",
                            active
                              ? "text-fg-accent"
                              : "text-fg-primary group-hover:text-fg-accent"
                          )}
                        >
                          {item.label}
                        </div>
                        <p className="text-xs sm:text-sm text-fg-secondary">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        className={cn(
                          "h-5 w-5 shrink-0 transition-all duration-200",
                          active
                            ? "text-fg-accent opacity-100"
                            : "text-fg-muted opacity-40 group-hover:opacity-100 group-hover:text-fg-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        )}
                      />
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Right Column: Components & Resources */}
            <div className="space-y-10 lg:pt-2">
              {/* Direct Component Links */}
              <div data-menu-secondary className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-fg-muted">
                    Components
                  </span>
                  <Link
                    href="/docs/components/button"
                    onClick={() => setMenuOpen(false)}
                    className="text-xs font-medium text-fg-secondary hover:text-fg-primary transition-colors"
                  >
                    All components →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 border-t border-border-subtle/60 pt-3">
                  {FEATURED_COMPONENTS.map((comp) => {
                    const active = pathname === comp.href;
                    return (
                      <Link
                        key={comp.href}
                        href={comp.href}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                          "py-1 text-sm transition-colors",
                          active
                            ? "text-fg-accent font-medium"
                            : "text-fg-secondary hover:text-fg-primary"
                        )}
                      >
                        {comp.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* System Resources */}
              <div data-menu-secondary className="space-y-3">
                <div className="text-xs font-medium text-fg-muted">
                  Resources
                </div>
                <div className="grid sm:grid-cols-2 gap-4 border-t border-border-subtle/60 pt-3">
                  <Link
                    href="/docs/blueprint"
                    onClick={() => setMenuOpen(false)}
                    className="group space-y-1 rounded-cmplt-sm py-1 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-sm font-medium text-fg-primary group-hover:text-fg-accent transition-colors">
                      <span>Living System Blueprint</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-fg-muted group-hover:text-fg-accent transition-colors" />
                    </div>
                    <p className="text-xs text-fg-secondary">
                      Architecture decisions and UI-writing taxonomy.
                    </p>
                  </Link>

                  <Link
                    href="/figma"
                    onClick={() => setMenuOpen(false)}
                    className="group space-y-1 rounded-cmplt-sm py-1 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-sm font-medium text-fg-primary group-hover:text-fg-accent transition-colors">
                      <span>Figma UI Kit</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-fg-muted group-hover:text-fg-accent transition-colors" />
                    </div>
                    <p className="text-xs text-fg-secondary">
                      Variable modes, auto-layout, and Code Connect parity.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar inside Full-Screen Canvas */}
        <div
          data-menu-footer
          className="cmplt-container relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle/60 pt-5 text-xs text-fg-muted"
        >
          <span>cmplt design system</span>
          <a
            href="https://github.com/schroepa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-fg-secondary hover:text-fg-primary transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
