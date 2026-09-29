"use client";

import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/cmplt/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/registry/cmplt/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/registry/cmplt/ui/avatar";
import { Button } from "@/registry/cmplt/ui/button";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Input } from "@/registry/cmplt/ui/input";
import {
  LayoutDashboard,
  BarChart3,
  Server,
  Users,
  Settings,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  Sliders,
  CheckCircle2,
} from "lucide-react";

export function DashboardShellBlock() {
  const [activeTab, setActiveTab] = React.useState("deployments");

  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "deployments", label: "Deployments", icon: Server, badge: "3" },
    { id: "customers", label: "Customers", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="flex h-[520px] w-full overflow-hidden rounded-cmplt-panel border border-border-default bg-surface shadow-cmplt-md">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-border-subtle bg-subtle/40 flex flex-col justify-between p-3">
        <div className="space-y-4">
          {/* Workspace Switcher */}
          <div className="flex items-center justify-between rounded-cmplt-md border border-border-subtle bg-surface p-2 shadow-cmplt-xs">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded bg-accent text-accent-fg font-mono text-xs font-bold">
                C
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-fg leading-none">Acme Cloud</div>
                <div className="text-[10px] text-fg-muted font-mono mt-0.5">Enterprise</div>
              </div>
            </div>
            <ChevronDown className="size-3.5 text-fg-muted" />
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex w-full items-center justify-between px-2.5 py-1.5 rounded-cmplt-sm text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-accent/10 text-accent font-semibold"
                      : "text-fg-secondary hover:text-fg hover:bg-subtle"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="size-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <Badge variant={isActive ? "brand" : "neutral"} size="sm">
                      {item.badge}
                    </Badge>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer User */}
        <div className="pt-3 border-t border-border-subtle flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="text-xs font-medium text-fg">Sarah Connor</div>
              <div className="text-[10px] text-fg-muted font-mono">Lead Eng</div>
            </div>
          </div>
          <Sliders className="size-3.5 text-fg-muted hover:text-fg cursor-pointer transition-colors" />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="flex h-13 shrink-0 items-center justify-between border-b border-border-subtle px-5 bg-surface">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Acme</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Edge Regions</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Production</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-3">
            <div className="relative w-44 hidden sm:block">
              <Search className="absolute left-2.5 top-2.5 size-3.5 text-fg-muted" />
              <Input
                placeholder="Search..."
                className="h-8 pl-8 text-xs bg-subtle/50"
              />
            </div>

            <Button variant="outline" size="sm" className="size-8 p-0 relative">
              <Bell className="size-3.5" />
              <span className="absolute top-1 right-1 size-1.5 rounded-full bg-accent" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Avatar size="sm" className="cursor-pointer ring-offset-background hover:ring-2 hover:ring-accent/30">
                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                }
              />
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Sarah Connor</DropdownMenuLabel>
                <DropdownMenuItem>Account Settings</DropdownMenuItem>
                <DropdownMenuItem>API Keys</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-rose-600 dark:text-rose-400 gap-2">
                  <LogOut className="size-3.5" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Viewport Content */}
        <main className="flex-1 overflow-y-auto p-5 space-y-4 bg-subtle/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-fg">Active Cluster Overview</h3>
              <p className="text-xs text-fg-muted">Managing 3 active edge zones in us-east, eu-central, and ap-northeast.</p>
            </div>
            <Button size="sm">Deploy Service</Button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-cmplt-md border border-border-subtle bg-surface p-3 space-y-1">
              <span className="text-[11px] text-fg-muted">Active Workers</span>
              <div className="font-mono text-xl font-bold text-fg">128</div>
            </div>
            <div className="rounded-cmplt-md border border-border-subtle bg-surface p-3 space-y-1">
              <span className="text-[11px] text-fg-muted">Health Check</span>
              <div className="font-mono text-xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="size-4" /> 100%
              </div>
            </div>
            <div className="rounded-cmplt-md border border-border-subtle bg-surface p-3 space-y-1">
              <span className="text-[11px] text-fg-muted">Requests / min</span>
              <div className="font-mono text-xl font-bold text-fg">84.2k</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
