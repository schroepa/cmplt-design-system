"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/registry/cmplt/ui/button";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Kbd } from "@/registry/cmplt/ui/kbd";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/registry/cmplt/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/registry/cmplt/ui/dropdown-menu";
import {
  Menu,
  Sparkles,
  Search,
  ChevronDown,
  Layers,
  Palette,
  Terminal,
  ExternalLink,
  Github,
} from "lucide-react";

export function SiteHeaderBlock() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-surface/80 backdrop-blur-md transition-all">
      <div className="cmplt-container flex h-16 items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex size-8 items-center justify-center rounded-sm bg-brand text-brand-fg shadow-xs transition-transform group-hover:scale-105">
              <span className="font-mono text-sm font-bold tracking-tighter">c/</span>
            </div>
            <span className="font-semibold text-fg tracking-tight text-base">
              cmplt<span className="text-brand">.</span>
            </span>
            <Badge variant="brand" size="sm" className="hidden sm:inline-flex">
              v1.2
            </Badge>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            <Link
              href="/docs"
              className="px-3 py-1.5 rounded-sm text-fg-secondary hover:text-fg hover:bg-subtle transition-colors"
            >
              Components
            </Link>
            <Link
              href="/blocks"
              className="px-3 py-1.5 rounded-sm text-fg font-semibold bg-subtle/60 hover:bg-subtle transition-colors"
            >
              Blocks
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <button className="flex items-center gap-1 px-3 py-1.5 rounded-sm text-fg-secondary hover:text-fg hover:bg-subtle transition-colors outline-none">
                    Ecosystem <ChevronDown className="size-3.5 opacity-60" />
                  </button>
                }
              />
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>Design Foundations</DropdownMenuLabel>
                <DropdownMenuItem className="gap-2">
                  <Palette className="size-4 text-brand" />
                  <span>OKLCH Tokens</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Layers className="size-4 text-brand" />
                  <span>Base UI Primitives</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>CLI & Workflow</DropdownMenuLabel>
                <DropdownMenuItem className="gap-2">
                  <Terminal className="size-4 text-fg-muted" />
                  <span>shadcn Parity</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/pricing"
              className="px-3 py-1.5 rounded-sm text-fg-secondary hover:text-fg hover:bg-subtle transition-colors"
            >
              Pricing
            </Link>
          </nav>
        </div>

        {/* Center/Right: Search Palette & Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Search Button */}
          <button
            type="button"
            className="hidden sm:flex items-center gap-2 h-9 px-3 rounded-md border border-border bg-subtle/50 text-xs text-fg-muted hover:border-border-strong hover:bg-subtle transition-colors"
          >
            <Search className="size-3.5" />
            <span>Search docs & blocks...</span>
            <Kbd className="ml-2">⌘K</Kbd>
          </button>

          {/* Social / External */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex size-9 items-center justify-center rounded-md border border-border bg-surface text-fg-muted hover:text-fg hover:border-border-strong transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="size-4" />
          </a>

          {/* Action Button */}
          <Button size="sm" className="hidden sm:inline-flex gap-1.5 shadow-xs">
            <Sparkles className="size-3.5" />
            <span>Get Started</span>
          </Button>

          {/* Mobile Drawer Hamburger */}
          <Drawer open={mobileOpen} onOpenChange={setMobileOpen}>
            <DrawerTrigger
              render={
                <Button
                  variant="outline"
                  size="sm"
                  className="md:hidden size-9 p-0"
                  aria-label="Open Mobile Menu"
                >
                  <Menu className="size-4" />
                </Button>
              }
            />
            <DrawerContent side="right" className="max-w-xs">
              <DrawerHeader>
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-sm bg-brand text-brand-fg">
                    <span className="font-mono text-xs font-bold">c/</span>
                  </div>
                  <DrawerTitle>cmplt Design System</DrawerTitle>
                </div>
              </DrawerHeader>
              <div className="flex flex-col gap-2 p-4 text-sm font-medium">
                <Link
                  href="/docs"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-subtle text-fg-secondary hover:text-fg transition-colors"
                >
                  Components
                </Link>
                <Link
                  href="/blocks"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md bg-subtle/60 text-fg transition-colors"
                >
                  Blocks
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-subtle text-fg-secondary hover:text-fg transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/showcase"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-subtle text-fg-secondary hover:text-fg transition-colors"
                >
                  Showcase
                </Link>
                <div className="mt-4 pt-4 border-t border-border-subtle flex flex-col gap-2">
                  <Button className="w-full justify-center">Get Started</Button>
                  <DrawerClose render={<Button variant="outline" className="w-full">Close</Button>} />
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
