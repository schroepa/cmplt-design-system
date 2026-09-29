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
  Sparkles,
  Terminal,
  Menu,
  X,
  Github,
} from "lucide-react";
import { cn } from "@/registry/cmplt/lib/utils";

const NAV_ITEMS = [
  { href: "/docs", label: "Docs" },
  { href: "/docs/components/button", label: "Components" },
  { href: "/docs/tokens", label: "Tokens" },
  { href: "/blocks", label: "Blocks", badge: "Pro" },
  { href: "/figma", label: "Figma Kit" },
  { href: "/pricing", label: "Pricing" },
];

const QUICK_SEARCH_LINKS = [
  { title: "Introduction & Philosophy", href: "/docs", category: "Guide" },
  { title: "shadcn Registry Setup", href: "/docs#registry", category: "Guide" },
  { title: "3-Tier W3C Design Tokens", href: "/docs/tokens", category: "Tokens" },
  { title: "Button (@base-ui/react/button)", href: "/docs/components/button", category: "Component" },
  { title: "Dialog (@base-ui/react/dialog)", href: "/docs/components/dialog", category: "Component" },
  { title: "Select (@base-ui/react/select)", href: "/docs/components/select", category: "Component" },
  { title: "Tabs (@base-ui/react/tabs)", href: "/docs/components/tabs", category: "Component" },
  { title: "Accordion (@base-ui/react/accordion)", href: "/docs/components/accordion", category: "Component" },
  { title: "Popover (@base-ui/react/popover)", href: "/docs/components/popover", category: "Component" },
  { title: "Switch (@base-ui/react/switch)", href: "/docs/components/switch", category: "Component" },
  { title: "Input & Field (@base-ui/react/field)", href: "/docs/components/input", category: "Component" },
  { title: "Card & Surface", href: "/docs/components/card", category: "Component" },
  { title: "Badge & Status", href: "/docs/components/badge", category: "Component" },
  { title: "Tooltip (@base-ui/react/tooltip)", href: "/docs/components/tooltip", category: "Component" },
  { title: "Progress (@base-ui/react/progress)", href: "/docs/components/progress", category: "Component" },
  { title: "Pro Blocks Library", href: "/blocks", category: "Marketing" },
  { title: "Code ↔ Figma Variables Sync", href: "/figma", category: "Figma" },
  { title: "Pricing & Licensing", href: "/pricing", category: "Sales" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { mode, toggleMode, preset, setPreset, radius, setRadius } = useTheme();
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filteredLinks = QUICK_SEARCH_LINKS.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-canvas/85 backdrop-blur-md">
      <div className="cmplt-container flex h-16 md:h-18 2xl:h-20 items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 2xl:gap-12">
        {/* Zone 1 (Left): Brand Logo (Squircle App Icon) + Version */}
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-3 font-semibold tracking-tight text-fg-primary"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-cmplt-squircle bg-accent text-fg-on-accent font-mono text-xs font-bold shadow-cmplt-xs">
              c/
            </span>
            <span className="text-sm 2xl:text-[15px] font-semibold tracking-tight truncate">
              cmplt
              <span className="ml-1 font-normal text-fg-muted">design</span>
            </span>
            <Badge
              variant="mono"
              size="sm"
              className="hidden sm:inline-flex"
              dot={false}
            >
              v1.3
            </Badge>
          </Link>
        </div>

        {/* Zone 2 (Center): Tablet, Desktop & Desktop+ Floating Pill Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center justify-center gap-1 lg:gap-1.5 2xl:gap-2 rounded-cmplt-full border border-border-subtle/90 bg-surface/75 p-1 shadow-cmplt-xs"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-cmplt-full px-3 lg:px-4 2xl:px-4.5 py-1.5 text-xs 2xl:text-[13px] font-medium transition-colors whitespace-nowrap",
                  isActive
                    ? "bg-subtle text-fg-primary shadow-cmplt-none"
                    : "text-fg-secondary hover:bg-subtle/60 hover:text-fg-primary"
                )}
              >
                {item.label}
                {item.badge && (
                  <Badge
                    variant="brand"
                    size="sm"
                    className="px-1.5 py-0 text-[10px]"
                  >
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3 (Right): Search Trigger (Cmd+K), Theme Customizer, Mode Toggle, CTA & Mobile Menu */}
        <div className="flex items-center justify-end gap-2 sm:gap-2.5 2xl:gap-3.5">
          {/* Pill-shaped Search Field Trigger */}
          <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
            <DialogTrigger
              render={
                <button
                  type="button"
                  aria-label="Search documentation and components"
                  className="inline-flex h-9 w-9 sm:w-auto 2xl:min-w-[220px] items-center justify-center sm:justify-between gap-2.5 rounded-cmplt-full border border-border-default bg-subtle/50 sm:px-3.5 2xl:px-4 text-xs text-fg-muted transition-colors hover:border-border-strong hover:bg-surface hover:text-fg-primary cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Search className="h-3.5 w-3.5 stroke-[1.75] shrink-0" />
                    <span className="hidden lg:inline">Search...</span>
                    <span className="hidden 2xl:inline">registry & docs</span>
                  </span>
                  <Kbd className="hidden sm:inline-flex">⌘K</Kbd>
                </button>
              }
            />
            <DialogContent className="max-w-xl p-0 overflow-hidden gap-0">
              <DialogHeader className="p-6 pb-5 border-b border-border-subtle">
                <DialogTitle className="text-sm flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-fg-accent stroke-[1.75]" />
                  cmplt Command & Registry Search
                </DialogTitle>
                <DialogDescription className="text-xs">
                  Jump directly to any Base UI primitive, W3C token, or Pro block.
                </DialogDescription>
                <div className="pt-3">
                  <Input
                    variant="search"
                    autoFocus
                    placeholder="Search components, tokens, or blocks..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </DialogHeader>
              <div className="max-h-80 overflow-y-auto p-2.5 divide-y divide-border-subtle/40">
                {filteredLinks.length === 0 ? (
                  <div className="py-10 text-center text-xs text-fg-muted">
                    No matching items found for &ldquo;{query}&rdquo;.
                  </div>
                ) : (
                  filteredLinks.map((item) => (
                    <button
                      key={item.href + item.title}
                      type="button"
                      onClick={() => {
                        setSearchOpen(false);
                        setQuery("");
                        router.push(item.href);
                      }}
                      className="flex w-full items-center justify-between rounded-cmplt-sm px-3.5 py-2.5 text-left text-xs transition-colors hover:bg-subtle cursor-pointer"
                    >
                      <span className="font-medium text-fg-primary">
                        {item.title}
                      </span>
                      <Badge variant="outline" size="sm">
                        {item.category}
                      </Badge>
                    </button>
                  ))
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* Live Design System Customizer Popover */}
          <Popover>
            <PopoverTrigger
              render={
                <Button
                  variant="secondary"
                  size="sm"
                  shape="pill"
                  className="h-9 px-3 sm:px-3.5"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5 text-fg-accent" />
                  <span className="hidden xl:inline">Theme Studio</span>
                </Button>
              }
            />
            <PopoverContent align="end" className="w-80 space-y-4">
              <div>
                <PopoverTitle>Live Token Studio</PopoverTitle>
                <PopoverDescription>
                  Mutate semantic CSS tokens & geometry in real time across the entire website.
                </PopoverDescription>
              </div>

              <div className="space-y-1.5">
                <div className="text-[11px] font-medium uppercase tracking-wider text-fg-muted">
                  Aesthetic Preset
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {(
                    [
                      { id: "precision", label: "Precision", dot: "bg-indigo-500" },
                      { id: "editorial", label: "Editorial", dot: "bg-orange-500" },
                      { id: "emerald", label: "Emerald", dot: "bg-emerald-500" },
                    ] as { id: ThemePreset; label: string; dot: string }[]
                  ).map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPreset(p.id)}
                      className={cn(
                        "flex items-center justify-center gap-1.5 rounded-cmplt-full border px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer",
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
                          "rounded-cmplt-full border py-1 text-center font-mono text-xs transition-colors cursor-pointer",
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

              <div className="flex items-center justify-between border-t border-border-subtle pt-3 text-xs">
                <span className="text-fg-muted">Color Scheme</span>
                <Button variant="outline" size="xs" shape="pill" onClick={toggleMode}>
                  {mode === "dark" ? (
                    <>
                      <Sun className="h-3 w-3" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-3 w-3" /> Dark Mode
                    </>
                  )}
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          {/* Dark / Light Mode Quick Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={toggleMode}
            aria-label="Toggle color mode"
          >
            {mode === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          {/* GitHub (@schroepa) Quick Link */}
          <a
            href="https://github.com/schroepa"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub: schroepa (Patrick Schrödter)"
            title="Inventor & Owner: Patrick Schrödter (github: schroepa)"
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Github className="h-4 w-4" />
            </Button>
          </a>

          {/* Primary Pill Sales CTA (Desktop & Desktop+) */}
          <Link href="/pricing" className="hidden xl:inline-flex">
            <Button variant="primary" size="sm" className="h-9 px-4">
              <Sparkles className="h-3.5 w-3.5" />
              Get cmplt Pro
            </Button>
          </Link>

          {/* Mobile Navigation Menu Trigger (< 768px) */}
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 md:hidden"
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

      {/* Mobile Navigation Drawer (< 768px) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border-subtle bg-surface/95 backdrop-blur-md">
          <div className="cmplt-container py-5 space-y-4">
            <nav className="grid grid-cols-2 gap-2" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-cmplt-md border px-3.5 py-2.5 text-xs font-medium transition-colors",
                      isActive
                        ? "border-border-accent bg-accent-subtle text-fg-accent font-semibold"
                        : "border-border-subtle bg-canvas/60 text-fg-primary hover:bg-subtle"
                    )}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <Badge variant="brand" size="sm" className="px-1.5 py-0 text-[10px]">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-1">
              <Link href="/pricing" className="block">
                <Button variant="primary" size="sm" className="w-full h-10">
                  <Sparkles className="h-3.5 w-3.5" />
                  Get cmplt Pro
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
