"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/registry/cmplt/ui/button";
import { AnimatedCtaButton } from "@/registry/cmplt/ui/animated-cta-button";
import { HighlightInput } from "@/registry/cmplt/ui/highlight-input";
import { Badge } from "@/registry/cmplt/ui/badge";

const InteractiveDotField = dynamic(
  () =>
    import("@/registry/cmplt/ui/interactive-dot-field").then(
      (m) => m.InteractiveDotField
    ),
  { ssr: false }
);
import {
  Card,
  CardMedia,
  CardHeader,
  CardEyebrow,
  CardTitle,
  CardDescription,
  CardContent,
  CardMeta,
  CardPrice,
  CardFooter,
  BlogCard,
  ProductCard,
  ApparelProductCard,
  TechProductCard,
  DigitalProductCard,
  MetricCard,
  ProfileCard,
  FeatureCard,
  TestimonialCard,
  EventCard,
} from "@/registry/cmplt/ui/card";
import { Input } from "@/registry/cmplt/ui/input";
import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/registry/cmplt/ui/field";
import { Switch } from "@/registry/cmplt/ui/switch";
import { Checkbox } from "@/registry/cmplt/ui/checkbox";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/cmplt/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/cmplt/ui/accordion";
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
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
} from "@/registry/cmplt/ui/popover";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/registry/cmplt/ui/select";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/registry/cmplt/ui/tooltip";
import { Progress } from "@/registry/cmplt/ui/progress";
import { Separator } from "@/registry/cmplt/ui/separator";
import { Kbd } from "@/registry/cmplt/ui/kbd";
import { Heading, Text, Code, Prose } from "@/registry/cmplt/ui/typography";
import {
  LiquidTabs,
  LiquidTabsList,
  LiquidTabsTrigger,
  LiquidTabsContent,
} from "@/registry/cmplt/ui/liquid-tabs";
import { LiquidSwitch } from "@/registry/cmplt/ui/liquid-switch";
import { LiquidButton } from "@/registry/cmplt/ui/liquid-button";
import { LiquidFilter, GooeyContainer } from "@/registry/cmplt/ui/liquid-filter";
import {
  LiquidToggleGroup,
  LiquidToggleGroupItem,
} from "@/registry/cmplt/ui/liquid-toggle-group";
import {
  LiquidPagination,
  LiquidPaginationItem,
  LiquidPaginationLink,
  LiquidPaginationPrevious,
  LiquidPaginationNext,
  LiquidPaginationEllipsis,
} from "@/registry/cmplt/ui/liquid-pagination";
import {
  LiquidRadioGroup,
  LiquidRadio,
  LiquidRadioItem,
} from "@/registry/cmplt/ui/liquid-radio-group";
import {
  LiquidAvatarGroup,
  LiquidAvatar,
  LiquidAvatarImage,
  LiquidAvatarFallback,
} from "@/registry/cmplt/ui/liquid-avatar-group";
import {
  LiquidDock,
  LiquidDockItem,
  LiquidDockSeparator,
} from "@/registry/cmplt/ui/liquid-dock";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
} from "@/registry/cmplt/ui/avatar";
import { Textarea } from "@/registry/cmplt/ui/textarea";
import {
  RadioGroup,
  Radio,
  RadioItem,
  RadioCard,
} from "@/registry/cmplt/ui/radio-group";
import { Toggle } from "@/registry/cmplt/ui/toggle";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/cmplt/ui/toggle-group";
import {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
} from "@/registry/cmplt/ui/skeleton";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/registry/cmplt/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
} from "@/registry/cmplt/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/registry/cmplt/ui/alert-dialog";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/registry/cmplt/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/registry/cmplt/ui/pagination";
import { cn } from "@/registry/cmplt/lib/utils";
import {
  Sparkles,
  Layers,
  Shield,
  Bell,
  Code2,
  Send,
  ArrowRight,
  Search,
  Droplets,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  CheckCircle2,
  Zap,
  Settings,
  LogOut,
  User,
  SlidersHorizontal,
  Trash2,
  AlertTriangle,
  Home,
  Sliders,
  ChevronRight,
  FileX,
  Plus,
  ChevronsUpDown,
  Database,
  FolderOpen,
} from "lucide-react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/registry/cmplt/ui/alert";
import {
  ToastProvider,
  Toaster,
  toast,
} from "@/registry/cmplt/ui/toast";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/registry/cmplt/ui/table";
import { ScrollArea } from "@/registry/cmplt/ui/scroll-area";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/registry/cmplt/ui/collapsible";
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
} from "@/registry/cmplt/ui/empty-state";
import { Slider } from "@/registry/cmplt/ui/slider";
import { NumberField } from "@/registry/cmplt/ui/number-field";
import { OTPField } from "@/registry/cmplt/ui/otp-field";
import {
  Combobox,
  ComboboxInputGroup,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxClear,
  ComboboxContent,
  ComboboxItem,
  ComboboxEmpty,
} from "@/registry/cmplt/ui/combobox";
import { Meter } from "@/registry/cmplt/ui/meter";
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineHeader,
  TimelineTitle,
  TimelineTime,
  TimelineDescription,
} from "@/registry/cmplt/ui/timeline";
import {
  GitCommit,
  CheckCircle,
  Clock,
  HardDrive,
} from "lucide-react";

function LiquidTabsDemo() {
  const [viscosity, setViscosity] = React.useState<"subtle" | "medium" | "fluid">("medium");
  return (
    <div className="flex flex-col items-center gap-6 py-6 w-full">
      <LiquidTabs defaultValue="overview" className="w-full max-w-md flex flex-col items-center">
        <LiquidTabsList viscosity={viscosity}>
          <LiquidTabsTrigger value="overview">Overview</LiquidTabsTrigger>
          <LiquidTabsTrigger value="analytics">Analytics</LiquidTabsTrigger>
          <LiquidTabsTrigger value="reports">Reports</LiquidTabsTrigger>
          <LiquidTabsTrigger value="settings">Settings</LiquidTabsTrigger>
        </LiquidTabsList>
        <div className="w-full mt-4 p-4 rounded-panel bg-subtle/60 border border-border-subtle text-center text-xs text-fg-secondary">
          <LiquidTabsContent value="overview">
            <span className="font-semibold text-fg-primary">Overview Dashboard:</span> Fluid pill stretching dynamically with {viscosity} viscosity.
          </LiquidTabsContent>
          <LiquidTabsContent value="analytics">
            <span className="font-semibold text-fg-primary">Real-time Telemetry:</span> Liquid bridge detaches and merges with smooth spring physics.
          </LiquidTabsContent>
          <LiquidTabsContent value="reports">
            <span className="font-semibold text-fg-primary">Compliance Reports:</span> 100% accessible via Base UI Tabs standard keyboard navigation.
          </LiquidTabsContent>
          <LiquidTabsContent value="settings">
            <span className="font-semibold text-fg-primary">System Preferences:</span> Typography and icons remain crisp on the foreground layer.
          </LiquidTabsContent>
        </div>
      </LiquidTabs>
      <div className="flex items-center gap-2 text-xs text-fg-muted">
        <span>Viscosity:</span>
        {(["subtle", "medium", "fluid"] as const).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setViscosity(v)}
            className={cn(
              "px-2.5 py-1 rounded-full border text-[11px] font-mono capitalize transition-colors cursor-pointer",
              viscosity === v
                ? "bg-brand text-fg-on-brand border-brand"
                : "bg-surface border-border-default text-fg-secondary hover:text-fg-primary"
            )}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}

function LiquidSwitchDemo() {
  const [checked, setChecked] = React.useState(true);
  const [viscosity, setViscosity] = React.useState<"subtle" | "medium" | "fluid">("medium");

  return (
    <div className="flex flex-col items-center gap-6 py-6">
      <div className="flex items-center gap-4 p-4 rounded-panel bg-subtle/50 border border-border-subtle">
        <div className="space-y-0.5 text-left">
          <p className="text-xs font-medium text-fg-primary">Mercury Flow Mode</p>
          <p className="text-[11px] text-fg-muted">Elastic liquid stretching with self-contained SVG filter</p>
        </div>
        <LiquidSwitch
          checked={checked}
          onCheckedChange={setChecked}
          viscosity={viscosity}
        />
      </div>
      <div className="flex items-center gap-2 text-xs text-fg-muted">
        <span>Viscosity:</span>
        {(["subtle", "medium", "fluid"] as const).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setViscosity(v)}
            className={cn(
              "px-2.5 py-1 rounded-full border text-[11px] font-mono capitalize transition-colors cursor-pointer",
              viscosity === v
                ? "bg-brand text-fg-on-brand border-brand"
                : "bg-surface border-border-default text-fg-secondary hover:text-fg-primary"
            )}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}

function LiquidButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-6">
      <LiquidButton variant="primary" size="lg">
        <Droplets className="h-4 w-4" />
        Primary Fluid
      </LiquidButton>
      <LiquidButton variant="subtle" size="lg">
        <Sparkles className="h-4 w-4" />
        Subtle Mercury
      </LiquidButton>
      <LiquidButton variant="surface" size="lg">
        Surface Gel
        <ArrowRight className="h-4 w-4" />
      </LiquidButton>
    </div>
  );
}

function LiquidFilterDemo() {
  const [offset, setOffset] = React.useState(32);
  return (
    <div className="flex flex-col items-center gap-6 py-6 w-full max-w-sm">
      <GooeyContainer className="flex items-center justify-center h-28 w-full">
        <div
          className="h-12 w-12 rounded-full bg-brand transition-transform duration-100 ease-out"
          style={{ transform: `translateX(-${offset}px)` }}
        />
        <div
          className="h-12 w-12 rounded-full bg-brand transition-transform duration-100 ease-out"
          style={{ transform: `translateX(${offset}px)` }}
        />
      </GooeyContainer>
      <div className="flex flex-col items-center gap-1.5 w-full max-w-xs">
        <div className="flex justify-between w-full text-xs text-fg-muted">
          <span>Fusion Proximity:</span>
          <span className="font-mono">{offset}px</span>
        </div>
        <input
          type="range"
          min="10"
          max="55"
          value={offset}
          onChange={(e) => setOffset(Number(e.target.value))}
          className="w-full accent-accent cursor-pointer"
        />
      </div>
    </div>
  );
}

function LiquidToggleGroupDemo() {
  const [value, setValue] = React.useState<string | undefined>("center");
  const [viscosity, setViscosity] = React.useState<"subtle" | "medium" | "fluid">("medium");

  return (
    <div className="flex flex-col items-center gap-6 py-6 w-full">
      <LiquidToggleGroup
        value={value}
        onValueChange={setValue}
        viscosity={viscosity}
      >
        <LiquidToggleGroupItem value="left" aria-label="Align Left">
          <AlignLeft className="h-3.5 w-3.5" />
          <span className="ml-1 text-[11px]">Left</span>
        </LiquidToggleGroupItem>
        <LiquidToggleGroupItem value="center" aria-label="Align Center">
          <AlignCenter className="h-3.5 w-3.5" />
          <span className="ml-1 text-[11px]">Center</span>
        </LiquidToggleGroupItem>
        <LiquidToggleGroupItem value="right" aria-label="Align Right">
          <AlignRight className="h-3.5 w-3.5" />
          <span className="ml-1 text-[11px]">Right</span>
        </LiquidToggleGroupItem>
      </LiquidToggleGroup>

      <div className="flex items-center gap-2 text-xs text-fg-muted">
        <span>Viscosity:</span>
        {(["subtle", "medium", "fluid"] as const).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setViscosity(v)}
            className={cn(
              "px-2.5 py-1 rounded-full border text-[11px] font-mono capitalize transition-colors cursor-pointer",
              viscosity === v
                ? "bg-brand text-fg-on-brand border-brand"
                : "bg-surface border-border-default text-fg-secondary hover:text-fg-primary"
            )}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}

function LiquidPaginationDemo() {
  const [page, setPage] = React.useState(3);

  return (
    <div className="flex flex-col items-center gap-6 py-6 w-full">
      <LiquidPagination currentPage={page} onPageChange={setPage} viscosity="medium">
        <LiquidPaginationPrevious onClick={() => setPage((p) => Math.max(1, p - 1))} />
        <LiquidPaginationItem>
          <LiquidPaginationLink page={1} />
        </LiquidPaginationItem>
        <LiquidPaginationItem>
          <LiquidPaginationLink page={2} />
        </LiquidPaginationItem>
        <LiquidPaginationItem>
          <LiquidPaginationLink page={3} />
        </LiquidPaginationItem>
        <LiquidPaginationItem>
          <LiquidPaginationLink page={4} />
        </LiquidPaginationItem>
        <LiquidPaginationItem>
          <LiquidPaginationLink page={5} />
        </LiquidPaginationItem>
        <LiquidPaginationNext onClick={() => setPage((p) => Math.min(5, p + 1))} />
      </LiquidPagination>
      <span className="text-xs text-fg-muted font-mono">
        Active Page: <strong className="text-fg-primary">{page}</strong> / 5
      </span>
    </div>
  );
}

function LiquidRadioGroupDemo() {
  const [plan, setPlan] = React.useState("pro");

  return (
    <div className="flex flex-col items-center gap-6 py-6 w-full max-w-sm">
      <LiquidRadioGroup value={plan} onValueChange={(val) => setPlan(val as string)} className="w-full">
        <LiquidRadioItem
          value="starter"
          label="Starter Edge"
          description="10k requests/mo · Edge functions · Free"
        />
        <LiquidRadioItem
          value="pro"
          label="Pro Fluid Cluster"
          description="Unlimited requests · Zero-latency memory · $29/mo"
        />
        <LiquidRadioItem
          value="enterprise"
          label="Enterprise Dedicated"
          description="Custom SLA · Dedicated VPC isolation · Tailored"
        />
      </LiquidRadioGroup>
    </div>
  );
}

function LiquidAvatarGroupDemo() {
  return (
    <div className="flex flex-col items-center gap-6 py-6">
      <LiquidAvatarGroup max={4} spacing="tight" viscosity="subtle">
        <LiquidAvatar size="md" status="online">
          <LiquidAvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" alt="Sarah" />
          <LiquidAvatarFallback>SC</LiquidAvatarFallback>
        </LiquidAvatar>
        <LiquidAvatar size="md" status="online">
          <LiquidAvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" alt="Marcus" />
          <LiquidAvatarFallback>MV</LiquidAvatarFallback>
        </LiquidAvatar>
        <LiquidAvatar size="md" status="busy">
          <LiquidAvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80" alt="Elena" />
          <LiquidAvatarFallback>ER</LiquidAvatarFallback>
        </LiquidAvatar>
        <LiquidAvatar size="md" status="away">
          <LiquidAvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80" alt="Alex" />
          <LiquidAvatarFallback>AJ</LiquidAvatarFallback>
        </LiquidAvatar>
        <LiquidAvatar size="md">
          <LiquidAvatarFallback>+3</LiquidAvatarFallback>
        </LiquidAvatar>
      </LiquidAvatarGroup>
      <p className="text-xs text-fg-muted max-w-xs text-center">
        Avatars merge into an organic visual cluster. Hover individual avatars to watch them detach elastically.
      </p>
    </div>
  );
}

function LiquidDockDemo() {
  return (
    <div className="flex flex-col items-center gap-6 py-6 w-full">
      <LiquidDock>
        <LiquidDockItem label="Home">
          <Home />
        </LiquidDockItem>
        <LiquidDockItem label="Explore">
          <Search />
        </LiquidDockItem>
        <LiquidDockItem label="Activity" active>
          <Bell />
        </LiquidDockItem>
        <LiquidDockSeparator />
        <LiquidDockItem label="Settings">
          <Settings />
        </LiquidDockItem>
        <LiquidDockItem label="Profile">
          <User />
        </LiquidDockItem>
      </LiquidDock>
      <p className="text-xs text-fg-muted">
        Move your pointer across the dock to guide the liquid light beam.
      </p>
    </div>
  );
}

function AvatarCatalogDemo() {
  return (
    <div className="flex flex-col items-center gap-8 py-4 w-full">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="relative">
          <Avatar size="sm">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" alt="Sarah Connor" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <AvatarBadge status="online" />
        </div>
        <div className="relative">
          <Avatar size="md">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" alt="Marcus Vance" />
            <AvatarFallback>MV</AvatarFallback>
          </Avatar>
          <AvatarBadge status="busy" />
        </div>
        <div className="relative">
          <Avatar size="lg">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80" alt="Elena Rostova" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <AvatarBadge status="away" />
        </div>
        <div className="relative">
          <Avatar size="xl">
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
          <AvatarBadge status="online" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-fg-muted">Stacked Team Group</span>
        <AvatarGroup max={4} spacing="md">
          <Avatar size="md">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" alt="User 1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" alt="User 2" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80" alt="User 3" />
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80" alt="User 4" />
            <AvatarFallback>U4</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarFallback>+5</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarFallback>+6</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
    </div>
  );
}

function TextareaCatalogDemo() {
  const [value, setValue] = React.useState("Dual-Scale Utopia fluid typography scale with Bringhurst measure rules.");
  const [autoResize, setAutoResize] = React.useState(true);

  return (
    <div className="w-full max-w-md mx-auto space-y-3 py-2">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-fg-primary">Release Notes Description</span>
        <button
          type="button"
          onClick={() => setAutoResize((p) => !p)}
          className="text-fg-brand hover:underline text-[11px] font-mono cursor-pointer"
        >
          {autoResize ? "Auto-Resize: ON" : "Auto-Resize: OFF"}
        </button>
      </div>
      <Textarea
        autoResize={autoResize}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter release notes or system summary..."
        rows={3}
      />
      <div className="flex items-center justify-between text-[11px] text-fg-muted font-mono cmplt-tabular">
        <span>Press Shift+Enter for new line</span>
        <span>{value.length} / 500 chars</span>
      </div>
    </div>
  );
}

function RadioGroupCatalogDemo() {
  const [plan, setPlan] = React.useState("team");

  return (
    <div className="w-full max-w-md mx-auto space-y-4 py-2">
      <RadioGroup value={plan} onValueChange={(val) => setPlan(val as string)}>
        <RadioCard
          value="starter"
          title="Personal Workspace"
          description="Basic token sync and headless components for personal exploration."
          price="Free"
        />
        <RadioCard
          value="team"
          title="Team Workspace"
          description="Collaborative workspace with shared tokens and real-time syncing."
          badge={<Badge variant="brand" size="sm">Popular</Badge>}
          price="Free"
        />
        <RadioCard
          value="enterprise"
          title="Enterprise Suite"
          description="Dedicated infrastructure, custom security policies, and SLA guarantee."
          badge={<Badge variant="mono" size="sm">Self-Hosted</Badge>}
          price="Free"
        />
      </RadioGroup>
    </div>
  );
}

function ToggleCatalogDemo() {
  const [alignment, setAlignment] = React.useState<string[]>(["left"]);
  const [formatting, setFormatting] = React.useState<string[]>(["bold"]);

  return (
    <div className="flex flex-col items-center gap-6 py-4 w-full max-w-sm mx-auto">
      <div className="flex items-center gap-2">
        <ToggleGroup
          value={formatting}
          onValueChange={setFormatting}
          multiple
          variant="outline"
          aria-label="Text formatting"
        >
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-3.5 w-3.5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-3.5 w-3.5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-3.5 w-3.5" />
          </ToggleGroupItem>
        </ToggleGroup>

        <ToggleGroup
          value={alignment}
          onValueChange={(val) => val.length && setAlignment(val)}
          variant="default"
          aria-label="Text alignment"
        >
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="h-3.5 w-3.5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter className="h-3.5 w-3.5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="h-3.5 w-3.5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div
        className={cn(
          "w-full p-4 rounded-panel bg-subtle/50 border border-border-subtle text-xs text-fg-primary transition-all",
          alignment.includes("center") && "text-center",
          alignment.includes("right") && "text-right",
          formatting.includes("bold") && "font-bold",
          formatting.includes("italic") && "italic",
          formatting.includes("underline") && "underline"
        )}
      >
        Dynamic typography preview reflecting live toggle state.
      </div>
    </div>
  );
}

function SkeletonCatalogDemo() {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="w-full max-w-sm mx-auto space-y-4 py-2">
      <div className="flex justify-between items-center">
        <span className="text-xs text-fg-muted font-mono">State: {loading ? "Loading (Skeleton)" : "Loaded (Content)"}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLoading((p) => !p)}
        >
          Toggle State
        </Button>
      </div>

      <div className="rounded-panel border border-border-default bg-surface p-5 space-y-4 shadow-xs">
        {loading ? (
          <>
            <div className="flex items-center gap-3">
              <SkeletonAvatar size="lg" />
              <div className="space-y-1.5 flex-1">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
            <SkeletonText lines={3} gap="sm" />
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-8 w-24 rounded-md" />
              <Skeleton className="h-8 w-20 rounded-md" />
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <Avatar size="lg">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" alt="Sarah Connor" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-sm font-semibold text-fg-primary">Sarah Connor</h4>
                <p className="text-xs text-fg-secondary">Lead Design Engineer</p>
              </div>
            </div>
            <p className="text-xs text-fg-secondary leading-relaxed">
              Architecting fluid OKLCH design systems, accessible UI components, and Figma variable pipelines.
            </p>
            <div className="flex gap-2 pt-1">
              <Button size="sm">Connect</Button>
              <Button variant="outline" size="sm">View Profile</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function DrawerCatalogDemo() {
  const [openRight, setOpenRight] = React.useState(false);
  const [openBottom, setOpenBottom] = React.useState(false);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-6">
      {/* Right Drawer (Panel) */}
      <Drawer open={openRight} onOpenChange={setOpenRight}>
        <DrawerTrigger render={<Button variant="outline"><SlidersHorizontal className="h-3.5 w-3.5" /> Open Side Panel (Right)</Button>} />
        <DrawerContent side="right">
          <DrawerHeader>
            <DrawerTitle>Design Token Inspector</DrawerTitle>
            <DrawerDescription>
              Configure live OKLCH lightness curves and Bringhurst typography measure constraints.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 space-y-4 py-4 text-xs text-fg-secondary">
            <div className="rounded-md bg-subtle/60 p-3 border border-border-subtle space-y-2">
              <span className="font-semibold text-fg-primary">Chroma Gamut:</span>
              <p className="text-[11px] text-fg-muted">Clamped to P3 display gamut with sRGB fallbacks for legacy displays.</p>
            </div>
            <div className="space-y-1.5">
              <label className="font-medium text-fg-primary">Filter Tag</label>
              <Input placeholder="Search tokens..." />
            </div>
            <div className="space-y-1.5">
              <label className="font-medium text-fg-primary">Theme Notes</label>
              <Textarea placeholder="Add engineering notes..." autoResize rows={3} />
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={() => setOpenRight(false)}>Save Changes</Button>
            <DrawerClose render={<Button variant="outline">Cancel</Button>} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Bottom Sheet */}
      <Drawer open={openBottom} onOpenChange={setOpenBottom}>
        <DrawerTrigger render={<Button variant="outline"><Layers className="h-3.5 w-3.5" /> Open Mobile Sheet (Bottom)</Button>} />
        <DrawerContent side="bottom" className="max-w-xl mx-auto">
          <DrawerHeader>
            <DrawerTitle>Quick Actions</DrawerTitle>
            <DrawerDescription>
              Swipe down or tap outside to dismiss this sheet.
            </DrawerDescription>
          </DrawerHeader>
          <div className="grid grid-cols-2 gap-3 py-4">
            <Button variant="outline" className="justify-start gap-2 h-11"><User className="h-4 w-4" /> Manage Team</Button>
            <Button variant="outline" className="justify-start gap-2 h-11"><Settings className="h-4 w-4" /> System Settings</Button>
            <Button variant="outline" className="justify-start gap-2 h-11"><Sparkles className="h-4 w-4" /> Export Tokens</Button>
            <Button variant="outline" className="justify-start gap-2 h-11"><Shield className="h-4 w-4" /> Audit Compliance</Button>
          </div>
          <DrawerFooter>
            <Button onClick={() => setOpenBottom(false)} className="w-full">Done</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

function DropdownMenuCatalogDemo() {
  return (
    <div className="flex justify-center py-6">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="outline" className="gap-2">
              <User className="h-4 w-4" />
              <span>Options &amp; Actions</span>
              <ChevronRight className="h-3.5 w-3.5 rotate-90 text-fg-muted" />
            </Button>
          }
        />
        <DropdownMenuContent className="w-56" align="center">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <User className="h-3.5 w-3.5 text-fg-muted" />
            <span>Profile Overview</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="h-3.5 w-3.5 text-fg-muted" />
            <span>Preferences</span>
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Sparkles className="h-3.5 w-3.5 text-fg-muted" />
              <span>Theme Mode</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-36">
              <DropdownMenuItem>Light OKLCH</DropdownMenuItem>
              <DropdownMenuItem>Dark Graphite</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>System Auto</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <LogOut className="h-3.5 w-3.5" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function AlertDialogCatalogDemo() {
  const [deleted, setDeleted] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-3 py-6">
      <AlertDialog>
        <AlertDialogTrigger
          render={
            <Button variant="danger" className="gap-2">
              <Trash2 className="h-3.5 w-3.5" />
              Delete Deployment
            </Button>
          }
        />
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center gap-2 text-status-danger font-semibold">
              <AlertTriangle className="h-4 w-4" />
              <span>Confirm Irreversible Deletion</span>
            </div>
            <AlertDialogTitle>Are you absolutely certain?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently revoke the production token endpoint, unmount API clusters, and remove associated server logs.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="danger"
              onClick={() => {
                setDeleted(true);
                setTimeout(() => setDeleted(false), 2500);
              }}
            >
              Yes, Delete Permanently
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {deleted && (
        <span className="text-xs text-status-danger font-mono animate-fade-in">
          ✓ Deployment deleted. Action confirmed via AlertDialog.
        </span>
      )}
    </div>
  );
}

function BreadcrumbCatalogDemo() {
  return (
    <div className="flex flex-col items-center gap-6 py-6 w-full max-w-lg mx-auto">
      <div className="w-full p-4 rounded-panel bg-subtle/50 border border-border-subtle">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="flex items-center gap-1">
                <Home className="h-3 w-3" />
                <span>Home</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Workspaces</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Tokens</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Typography</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <p className="text-xs text-fg-muted">
        Accessible wayfinding with WAI-ARIA aria-current=&quot;page&quot; and collapsed ellipsis.
      </p>
    </div>
  );
}

function PaginationCatalogDemo() {
  const [currentPage, setCurrentPage] = React.useState(2);
  const totalPages = 8;

  return (
    <div className="flex flex-col items-center gap-4 py-6 w-full">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={currentPage === page}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            }
            if (page === 2 && currentPage > 3) {
              return <PaginationItem key={page}><PaginationEllipsis /></PaginationItem>;
            }
            if (page === totalPages - 1 && currentPage < totalPages - 2) {
              return <PaginationItem key={page}><PaginationEllipsis /></PaginationItem>;
            }
            return null;
          })}
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <span className="text-xs text-fg-muted font-mono cmplt-tabular">
        Viewing page {currentPage} of {totalPages}
      </span>
    </div>
  );
}

function AlertCatalogDemo() {
  return (
    <div className="flex flex-col gap-3 py-4 w-full max-w-lg mx-auto">
      <Alert variant="default">
        <AlertTitle>System Maintenance Scheduled</AlertTitle>
        <AlertDescription>
          Registry endpoints will undergo routine database indexing tonight at 02:00 UTC.
        </AlertDescription>
      </Alert>

      <Alert variant="info">
        <AlertTitle>Figma Parity Updated</AlertTitle>
        <AlertDescription>
          Version 1.8 token sync now maps 3-tier variables directly to W3C Design Token specifications.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <AlertTitle>Audit Verified (WCAG AAA)</AlertTitle>
        <AlertDescription>
          All 3-tier OKLCH color token combinations pass 7:1 contrast ratio guardrails.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTitle>Legacy P3 Color Fallback Active</AlertTitle>
        <AlertDescription>
          Display does not support wide gamut color(display-p3); sRGB fallback active.
        </AlertDescription>
      </Alert>

      <Alert variant="danger">
        <AlertTitle>Token Compilation Failed</AlertTitle>
        <AlertDescription>
          Cyclic reference detected in semantic alias token: --fg-brand points to --accent-hover.
        </AlertDescription>
      </Alert>
    </div>
  );
}

function ToastCatalogDemo() {
  return (
    <ToastProvider>
      <div className="flex flex-col items-center gap-4 py-6 w-full">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            size="sm"
            onClick={() =>
              toast({
                title: "Deployment Successful",
                description: "Registry v1.8 published to production CDN edge.",
                variant: "success",
              })
            }
          >
            Trigger Success
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              toast({
                title: "Rate Limit Approaching",
                description: "You have used 85% of your hourly API quota.",
                variant: "warning",
              })
            }
          >
            Trigger Warning
          </Button>

          <Button
            variant="danger"
            size="sm"
            onClick={() =>
              toast({
                title: "API Connection Severed",
                description: "Unable to establish WebSocket connection to cluster.",
                variant: "danger",
              })
            }
          >
            Trigger Danger
          </Button>

          <Button
            variant="secondary"
            size="sm"
            onClick={() =>
              toast({
                title: "New Token Available",
                description: "Utopia fluid typography scale loaded into memory.",
                variant: "info",
              })
            }
          >
            Trigger Info
          </Button>
        </div>
        <p className="text-xs text-fg-muted font-mono">
          Click any button to push animated toasts to the global viewport stack.
        </p>
        <Toaster position="bottom-right" />
      </div>
    </ToastProvider>
  );
}

function TableCatalogDemo() {
  const deployments = [
    { id: "dep-091", env: "Production", commit: "feat(tokens): oklch gamut", status: "Active", time: "2m ago" },
    { id: "dep-090", env: "Staging", commit: "fix(dialog): focus trap", status: "Active", time: "18m ago" },
    { id: "dep-089", env: "Preview", commit: "docs: add living blueprint", status: "Building", time: "42m ago" },
    { id: "dep-088", env: "Production", commit: "chore: bump base-ui to v1.8", status: "Superseded", time: "3h ago" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto py-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Deployment ID</TableHead>
            <TableHead>Environment</TableHead>
            <TableHead>Git Commit</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deployments.map((d) => (
            <TableRow key={d.id}>
              <TableCell className="font-mono text-fg-primary font-medium">{d.id}</TableCell>
              <TableCell>{d.env}</TableCell>
              <TableCell className="font-mono text-[11px] max-w-[180px] truncate">{d.commit}</TableCell>
              <TableCell>
                <Badge
                  variant={d.status === "Active" ? "success" : d.status === "Building" ? "warning" : "default"}
                  size="sm"
                >
                  {d.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right font-mono text-fg-muted">{d.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function ScrollAreaCatalogDemo() {
  const tokens = [
    { name: "--color-brand-oklch", value: "oklch(0.68 0.22 284)" },
    { name: "--bg-canvas", value: "oklch(0.99 0.005 85)" },
    { name: "--bg-surface", value: "oklch(1 0 0)" },
    { name: "--bg-elevated", value: "oklch(1 0 0)" },
    { name: "--bg-subtle", value: "oklch(0.96 0.005 85)" },
    { name: "--fg-primary", value: "oklch(0.18 0.02 280)" },
    { name: "--fg-secondary", value: "oklch(0.42 0.02 280)" },
    { name: "--fg-muted", value: "oklch(0.58 0.015 280)" },
    { name: "--border-default", value: "oklch(0.88 0.01 280)" },
    { name: "--border-subtle", value: "oklch(0.93 0.008 280)" },
    { name: "--border-brand", value: "oklch(0.68 0.22 284)" },
    { name: "--radius-panel", value: "16px (concentric outer)" },
    { name: "--radius-element", value: "8px (concentric inner)" },
  ];

  return (
    <div className="w-full max-w-md mx-auto py-2">
      <div className="rounded-panel border border-border-default bg-surface p-4">
        <div className="mb-2 flex items-center justify-between pb-2 border-b border-border-subtle text-xs font-semibold text-fg-primary">
          <span>Design Tokens Palette</span>
          <span className="font-mono text-fg-muted text-[10px] cmplt-tabular">{tokens.length} variables</span>
        </div>
        <ScrollArea className="h-44 w-full pr-3">
          <div className="space-y-1.5 py-1">
            {tokens.map((t) => (
              <div
                key={t.name}
                className="flex items-center justify-between rounded-sm bg-subtle/50 px-2.5 py-1.5 text-xs"
              >
                <span className="font-mono font-medium text-fg-primary text-[11px]">{t.name}</span>
                <span className="font-mono text-fg-muted text-[11px]">{t.value}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

function CollapsibleCatalogDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-full max-w-md mx-auto py-2">
      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className="w-full rounded-panel border border-border-default bg-surface p-4 shadow-xs space-y-3"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Database className="h-4 w-4 text-fg-brand" />
            <h4 className="text-xs font-semibold text-fg-primary">
              PostgreSQL Telemetry Metrics
            </h4>
          </div>
          <CollapsibleTrigger
            render={
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                <ChevronsUpDown className="h-3.5 w-3.5" />
                <span className="sr-only">Toggle details</span>
              </Button>
            }
          />
        </div>

        <div className="rounded-sm bg-subtle/60 p-2.5 text-xs text-fg-secondary">
          <span className="font-mono text-fg-primary font-semibold">Active Connections:</span> 14 / 100 pool instances
        </div>

        <CollapsibleContent className="space-y-2 pt-1 border-t border-border-subtle">
          <div className="grid grid-cols-2 gap-2 text-[11px] text-fg-muted font-mono pt-2">
            <div>Avg Latency: <span className="text-fg-primary font-semibold">1.4ms</span></div>
            <div>Cache Hit Ratio: <span className="text-fg-primary font-semibold">99.2%</span></div>
            <div>Replication Lag: <span className="text-fg-primary font-semibold">0.0s</span></div>
            <div>Max Disk I/O: <span className="text-fg-primary font-semibold">450 MB/s</span></div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

function EmptyStateCatalogDemo() {
  return (
    <div className="w-full max-w-lg mx-auto py-2">
      <EmptyState dashed>
        <EmptyStateIcon>
          <FolderOpen className="h-6 w-6" />
        </EmptyStateIcon>
        <EmptyStateTitle>No Project Workspaces Yet</EmptyStateTitle>
        <EmptyStateDescription>
          Get started by creating your first design system workspace or clone a pre-configured template from GitHub.
        </EmptyStateDescription>
        <EmptyStateActions>
          <Button size="sm" className="gap-1.5">
            <Plus className="h-3.5 w-3.5" />
            New Workspace
          </Button>
          <Button variant="outline" size="sm">
            Import Config
          </Button>
        </EmptyStateActions>
      </EmptyState>
    </div>
  );
}

function SliderCatalogDemo() {
  const [singleVal, setSingleVal] = React.useState(65);
  const [rangeVal, setRangeVal] = React.useState<number[]>([25, 75]);

  return (
    <div className="w-full max-w-md mx-auto space-y-6 py-2">
      <div className="space-y-2 rounded-panel border border-border-default bg-surface p-4 shadow-xs">
        <Slider
          label="Display Brightness"
          showValue
          value={singleVal}
          onValueChange={(val) => setSingleVal(val as number)}
          min={0}
          max={100}
        />
        <div className="flex justify-between text-[11px] text-fg-muted font-mono pt-1">
          <span>0%</span>
          <span>Current: {singleVal}%</span>
          <span>100%</span>
        </div>
      </div>

      <div className="space-y-2 rounded-panel border border-border-default bg-surface p-4 shadow-xs">
        <Slider
          label="Budget Range ($ / mo)"
          showValue
          value={rangeVal}
          onValueChange={(val) => setRangeVal(val as number[])}
          min={0}
          max={200}
        />
        <div className="flex justify-between text-[11px] text-fg-muted font-mono pt-1">
          <span>Min: ${rangeVal[0]}</span>
          <span>Max: ${rangeVal[1]}</span>
        </div>
      </div>
    </div>
  );
}

function NumberFieldCatalogDemo() {
  const [quantity, setQuantity] = React.useState<number | null>(4);
  const [seats, setSeats] = React.useState<number | null>(12);

  return (
    <div className="w-full max-w-md mx-auto space-y-5 py-2">
      <div className="rounded-panel border border-border-default bg-surface p-4 shadow-xs space-y-4">
        <NumberField
          label="Quantity (Stacked Stepper)"
          description="Bounded between 1 and 20 items."
          value={quantity}
          onValueChange={setQuantity}
          min={1}
          max={20}
          stepperStyle="stacked"
        />

        <NumberField
          label="Team Seats (Inline Stepper)"
          description="Use minus/plus buttons on edges."
          value={seats}
          onValueChange={setSeats}
          min={1}
          max={50}
          stepperStyle="inline"
        />
      </div>
    </div>
  );
}

function OTPFieldCatalogDemo() {
  const [code, setCode] = React.useState("");

  return (
    <div className="w-full max-w-md mx-auto py-2 flex flex-col items-center gap-4">
      <div className="rounded-panel border border-border-default bg-surface p-6 shadow-xs flex flex-col items-center gap-4 w-full">
        <div className="text-center space-y-1">
          <h4 className="text-sm font-semibold text-fg-primary">Two-Factor Authentication</h4>
          <p className="text-xs text-fg-muted">Enter the 6-digit code sent to your authenticator app.</p>
        </div>

        <OTPField
          length={6}
          separatorIndex={3}
          value={code}
          onValueChange={setCode}
        />

        <div className="text-xs font-mono text-fg-muted">
          Value: <span className="font-semibold text-fg-primary">{code || "------"}</span>
        </div>
      </div>
    </div>
  );
}

function ComboboxCatalogDemo() {
  const frameworks = [
    { value: "next", label: "Next.js" },
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
    { value: "svelte", label: "SvelteKit" },
    { value: "solid", label: "SolidJS" },
    { value: "astro", label: "Astro" },
  ];
  const [selected, setSelected] = React.useState<string | null>("next");

  return (
    <div className="w-full max-w-md mx-auto py-2">
      <div className="rounded-panel border border-border-default bg-surface p-5 shadow-xs space-y-3">
        <label className="text-xs font-medium text-fg-secondary">
          Target Framework Architecture
        </label>
        <Combobox value={selected} onValueChange={(val) => setSelected(val as string)}>
          <ComboboxInputGroup>
            <ComboboxInput placeholder="Search framework..." />
            <ComboboxTrigger />
          </ComboboxInputGroup>
          <ComboboxContent>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
            {frameworks.map((f) => (
              <ComboboxItem key={f.value} value={f.value}>
                {f.label}
              </ComboboxItem>
            ))}
          </ComboboxContent>
        </Combobox>
        <div className="text-[11px] font-mono text-fg-muted">
          Selected: <span className="text-fg-primary font-semibold">{selected || "none"}</span>
        </div>
      </div>
    </div>
  );
}

function MeterCatalogDemo() {
  return (
    <div className="w-full max-w-md mx-auto space-y-4 py-2">
      <div className="rounded-panel border border-border-default bg-surface p-5 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-1 border-b border-border-subtle">
          <HardDrive className="size-4 text-fg-brand" />
          <h4 className="text-xs font-semibold text-fg-primary">Resource Utilization Quotas</h4>
        </div>
        
        <Meter
          label="Disk Storage (SSD)"
          showValue
          value={42}
          variant="default"
        />

        <Meter
          label="API Monthly Quota"
          showValue
          value={76}
          variant="warning"
        />

        <Meter
          label="Cluster Memory Pressure"
          showValue
          value={91}
          variant="danger"
        />

        <Meter
          label="Health Check Score"
          showValue
          value={99}
          variant="success"
        />
      </div>
    </div>
  );
}

function TimelineCatalogDemo() {
  return (
    <div className="w-full max-w-lg mx-auto py-2">
      <div className="rounded-panel border border-border-default bg-surface p-6 shadow-xs">
        <Timeline>
          <TimelineItem>
            <TimelineDot variant="accent">
              <GitCommit className="size-4" />
            </TimelineDot>
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle>Production Release v2.4.0</TimelineTitle>
                <TimelineTime>Just now</TimelineTime>
              </TimelineHeader>
              <TimelineDescription>
                Shipped Base UI primitives with OKLCH token sync and 68 registry endpoints.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineDot variant="success">
              <CheckCircle className="size-4" />
            </TimelineDot>
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle>E2E Verification Tests Passed</TimelineTitle>
                <TimelineTime>12m ago</TimelineTime>
              </TimelineHeader>
              <TimelineDescription>
                All 68 automated headless component integration tests passed in 4.2s.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem isLast>
            <TimelineDot variant="neutral">
              <Clock className="size-4" />
            </TimelineDot>
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle>Build Pipeline Queued</TimelineTitle>
                <TimelineTime>25m ago</TimelineTime>
              </TimelineHeader>
              <TimelineDescription>
                Triggered by commit <span className="font-mono text-fg-primary">3f721a9</span> on branch <span className="font-mono text-fg-primary">main</span>.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

function CardPresetsCatalogDemo() {
  const [shopFilter, setShopFilter] = React.useState<
    "all" | "apparel" | "tech" | "digital" | "interior"
  >("all");

  return (
    <div className="space-y-6">
      <Tabs defaultValue="shop">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2">
          <TabsList variant="segmented" className="flex-wrap">
            <TabsTrigger value="shop">Shop / E-Commerce</TabsTrigger>
            <TabsTrigger value="blog">Blog / Editorial</TabsTrigger>
            <TabsTrigger value="metrics">KPI / Telemetry</TabsTrigger>
            <TabsTrigger value="social">Profile & Reviews</TabsTrigger>
            <TabsTrigger value="bento">Bento & Events</TabsTrigger>
            <TabsTrigger value="surfaces">Base Surfaces</TabsTrigger>
          </TabsList>
        </div>

        {/* TAB 1: E-COMMERCE / SHOP PRODUCT CARDS */}
        <TabsContent value="shop" className="pt-3 space-y-5">
          {/* Shop Domain Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 pb-1">
            <span className="text-xs font-medium text-fg-muted mr-1">
              Shop-Bereich:
            </span>
            {[
              { id: "all", label: "Alle Shops", count: 7 },
              { id: "apparel", label: "Bekleidung (Fashion)", count: 2 },
              { id: "tech", label: "Technik (Hardware)", count: 2 },
              { id: "digital", label: "Digitale Güter", count: 2 },
              { id: "interior", label: "Interior & Living", count: 1 },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setShopFilter(f.id as any)}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all cursor-pointer",
                  shopFilter === f.id
                    ? "border-border-brand bg-brand/10 text-fg-brand font-semibold shadow-xs"
                    : "border-border-subtle bg-surface text-fg-secondary hover:border-border-default hover:text-fg-primary"
                )}
              >
                <span>{f.label}</span>
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.2 font-mono text-[10px]",
                    shopFilter === f.id
                      ? "bg-brand text-fg-on-brand"
                      : "bg-subtle text-fg-muted"
                  )}
                >
                  {f.count}
                </span>
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* 1. BEKLEIDUNG: Overshirt */}
            {(shopFilter === "all" || shopFilter === "apparel") && (
              <ProductCard
                category="apparel"
                brand="cmplt Atelier · Studio 01"
                title="Relaxed Merino Wool Overshirt"
                subtitle="Heavyweight 340gsm double-faced virgin wool with concealed horn buttons."
                price="$220.00"
                compareAtPrice="$260.00"
                badge="Autumn Drop"
                badgeVariant="brand"
                rating={4.9}
                reviewCount={84}
                material="100% Virgin Merino Wool"
                fitBadge="Relaxed Fit"
                sizes={["XS", "S", "M", "L", "XL"]}
                image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80"
                swatches={[
                  {
                    name: "Camel",
                    color: "oklch(0.68 0.08 72)",
                    image:
                      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80",
                  },
                  {
                    name: "Charcoal",
                    color: "oklch(0.28 0.003 85)",
                    image:
                      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&auto=format&fit=crop&q=80",
                  },
                  { name: "Oat Milk", color: "oklch(0.92 0.015 85)" },
                ]}
              />
            )}

            {/* 2. BEKLEIDUNG: Selvedge Denim */}
            {(shopFilter === "all" || shopFilter === "apparel") && (
              <ProductCard
                category="apparel"
                brand="cmplt Denim Lab"
                title="14oz Kurabo Selvedge Jacket"
                subtitle="Woven on vintage Toyoda shuttle looms in Okayama with custom copper hardware."
                price="$285.00"
                badge="Craft Edition"
                badgeVariant="default"
                rating={5.0}
                reviewCount={47}
                material="14oz Japanese Selvedge Denim"
                fitBadge="Boxy Silhouette"
                sizes={["S", "M", "L", "XL"]}
                image="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80"
                swatches={[
                  { name: "Raw Indigo", color: "oklch(0.32 0.08 260)" },
                  { name: "Washed Black", color: "oklch(0.25 0.005 85)" },
                ]}
              />
            )}

            {/* 3. TECHNIK: Reference Headphones */}
            {(shopFilter === "all" || shopFilter === "tech") && (
              <ProductCard
                category="tech"
                brand="cmplt Audio Lab · Series 04"
                title="Reference Wireless ANC Headphones"
                subtitle="40mm custom beryllium drivers with hybrid active noise cancellation and lossless 24-bit DAC."
                price="$349.00"
                compareAtPrice="$420.00"
                badge="-17% Launch Offer"
                badgeVariant="brand"
                rating={4.9}
                reviewCount={142}
                warranty="2-Year International Warranty"
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
                specs={[
                  { label: "Battery", value: "48h ANC" },
                  { label: "Driver", value: "40mm Beryllium" },
                  { label: "Codec", value: "LDAC / aptX HD" },
                  { label: "Weight", value: "264g Aluminum" },
                ]}
                swatches={[
                  { name: "Matte Black", color: "oklch(0.24 0.003 85)" },
                  { name: "Lunar Silver", color: "oklch(0.85 0.005 85)" },
                  { name: "Brand Accent", color: "oklch(0.645 0.175 34)" },
                ]}
              />
            )}

            {/* 4. TECHNIK: Mechanical Keyboard */}
            {(shopFilter === "all" || shopFilter === "tech") && (
              <ProductCard
                category="tech"
                brand="cmplt Hardware Lab"
                title="Apex-75 Custom Mechanical Keyboard"
                subtitle="CNC-machined 6063 aluminum chassis with gasket mount and hot-swappable PBT keycaps."
                price="$199.00"
                badge="In Stock"
                badgeVariant="success"
                rating={4.8}
                reviewCount={96}
                warranty="1-Year Hardware Warranty"
                image="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
                specs={[
                  { label: "Layout", value: "75% Exploded" },
                  { label: "Wireless", value: "2.4GHz + BT 5.4" },
                  { label: "Mount", value: "Poron Gasket" },
                  { label: "Plate", value: "FR4 Precision" },
                ]}
                swatches={[
                  { name: "Space Gray", color: "oklch(0.38 0.01 270)" },
                  { name: "Warm White", color: "oklch(0.94 0.01 90)" },
                  { name: "Forest", color: "oklch(0.45 0.08 150)" },
                ]}
              />
            )}

            {/* 5. DIGITALE GÜTER: Vector Iconography Studio */}
            {(shopFilter === "all" || shopFilter === "digital") && (
              <ProductCard
                category="digital"
                brand="cmplt Community · Free Assets"
                title="Geometric Vector Icons & Glyph Library"
                subtitle="450+ clean geometric SVG glyphs, Figma component library, and optimized React icon components."
                price="Free"
                badge="MIT License"
                badgeVariant="success"
                rating={5.0}
                reviewCount={89}
                image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
                fileFormats={[
                  "Figma (.fig)",
                  "SVG Icons",
                  "React JSX",
                  "JSON",
                ]}
                license="MIT Open Source License"
                version="v2.4.0 (Sep 2026)"
                fileSize="12.4 MB ZIP"
                instantDownload
                ctaLabel="Download Pack"
                ctaType="download"
              />
            )}

            {/* 6. DIGITALE GÜTER: 3D Chromatic Asset Pack */}
            {(shopFilter === "all" || shopFilter === "digital") && (
              <ProductCard
                category="digital"
                brand="cmplt Community Assets"
                title="Chromatic 3D Prisms & Spatial Icons"
                subtitle="120+ high-fidelity 4K 3D renders, editable Blender scene files, and lightweight GLTF models."
                price="Free"
                badge="Free Download"
                badgeVariant="brand"
                rating={4.9}
                reviewCount={63}
                image="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80"
                fileFormats={[
                  "Blender (.blend)",
                  "GLTF / GLB",
                  "4K PNG Alpha",
                  "Figma",
                ]}
                license="Creative Commons Zero (CC0)"
                version="v1.2 (Updated)"
                fileSize="1.8 GB ZIP"
                instantDownload
                ctaLabel="Download Pack"
                ctaType="download"
              />
            )}

            {/* 7. INTERIOR & LIVING: Smoked Oak Lounge Chair */}
            {(shopFilter === "all" || shopFilter === "interior") && (
              <ProductCard
                category="interior"
                brand="cmplt Living · Atelier Nord"
                title="Koto Smoked Oak Lounge Chair"
                subtitle="FSC-certified solid European white oak frame with Italian textured bouclé upholstery."
                price="$640.00"
                compareAtPrice="$750.00"
                badge="Handcrafted in Portugal"
                badgeVariant="default"
                rating={4.9}
                reviewCount={31}
                image="https://images.unsplash.com/photo-1580481077195-c3a821a58875?w=800&auto=format&fit=crop&q=80"
                material="Solid Smoked Oak & Bouclé"
                dimensions="W: 74 × D: 82 × H: 76 cm"
                stockLabel="In stock · White Glove Delivery"
                swatches={[
                  { name: "Oatmeal Bouclé", color: "oklch(0.91 0.02 85)" },
                  { name: "Forest", color: "oklch(0.38 0.06 145)" },
                  { name: "Charcoal", color: "oklch(0.28 0.005 85)" },
                ]}
              />
            )}
          </div>
        </TabsContent>

        {/* TAB 2: BLOG & EDITORIAL ARTICLE CARDS */}
        <TabsContent value="blog" className="pt-3 space-y-6">
          {/* Horizontal Featured Article with Unsplash Photo */}
          <BlogCard
            layout="horizontal"
            featured
            category="Architecture Deep-Dive"
            date="Sep 28, 2026"
            readTime="7 min read"
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80"
            title="Why We Replaced #FFFFFF and #000000 with Calibrated OKLCH Stone & Graphite"
            excerpt="Pure white and pitch black create halation and visual fatigue on modern OLED displays. Discover how our 4-step warm neutral luminance curve (Hue 85) keeps interfaces crisp and tactile."
            tags={["oklch", "color-science", "design-tokens"]}
            author={{
              name: "Elena Rostova",
              role: "Staff Design Systems Architect",
              avatarUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
            }}
          />

          {/* 3-Column Vertical Blog Cards with Unsplash Photos */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              category="Engineering"
              date="Sep 24, 2026"
              readTime="5 min read"
              image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80"
              title="Zero-Lock-In Component Distribution with Base UI and shadcn CLI"
              excerpt="How we compile headless @base-ui/react primitives and GSAP motion highlights into static JSON endpoints ready for 1-command installation."
              tags={["base-ui", "shadcn", "cli"]}
              author={{
                name: "Aria Chen",
                role: "Core Maintainer",
                avatarUrl:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
              }}
            />

            <BlogCard
              category="Design Geometry"
              date="Sep 19, 2026"
              readTime="6 min read"
              image="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80"
              title="Optical Concentricity: Calculating Inner Border Radii in Nested UI Shells"
              excerpt="When nesting a media frame inside a 20px rounded card with 8px padding, using the same radius looks pinched. Learn the R_inner = R_outer - padding formula."
              tags={["css", "geometry", "cards"]}
              author={{
                name: "Marcus Vance",
                role: "UI Infrastructure Lead",
                avatarUrl:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
              }}
            />

            <BlogCard
              category="Design Philosophy"
              date="Sep 14, 2026"
              readTime="4 min read"
              image="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80"
              title="Tactile Interfaces: Bringing Organic Materiality Back to Web Design"
              excerpt="Digital fatigue is real. By combining subtle micro-textures, concentric borders, and spring physics, software can feel tangible like handcrafted hardware."
              tags={["philosophy", "motion", "tactile"]}
              author={{
                name: "Julian Thorne",
                role: "Design Director",
                avatarUrl:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
              }}
            />
          </div>
        </TabsContent>

        {/* TAB 3: KPI & TELEMETRY METRIC CARDS */}
        <TabsContent value="metrics" className="pt-3">
          <div className="grid gap-4 sm:grid-cols-3">
            <MetricCard
              label="Net Store Revenue"
              value="$128,450"
              delta="+18.4%"
              deltaTrend="up"
              period="vs. $108,490 last month"
              sparkline={[38, 52, 46, 64, 58, 76, 72, 90, 85, 100]}
              targetLabel="Q3 Goal Progress"
              targetValue="94.2%"
              icon={<Sparkles className="h-3.5 w-3.5 text-fg-brand" />}
            />

            <MetricCard
              label="Registry CLI Installs"
              value="42,810"
              delta="+24.1%"
              deltaTrend="up"
              period="Last 30 days across 18 endpoints"
              sparkline={[25, 35, 42, 40, 55, 62, 70, 68, 84, 96]}
              targetLabel="Top Endpoint"
              targetValue="@cmplt/card"
              icon={<Code2 className="h-3.5 w-3.5 text-fg-brand" />}
            />

            <MetricCard
              label="Edge P95 Latency"
              value="14.2ms"
              delta="-3.8ms"
              deltaTrend="up"
              period="Global multi-region average"
              sparkline={[80, 75, 68, 72, 60, 54, 48, 45, 38, 32]}
              targetLabel="SLA Threshold"
              targetValue="< 25.0ms"
              icon={<Layers className="h-3.5 w-3.5 text-fg-brand" />}
            />
          </div>
        </TabsContent>

        {/* TAB 4: PROFILE / CREATOR & TESTIMONIAL / REVIEW CARDS */}
        <TabsContent value="social" className="pt-3">
          <div className="grid gap-5 md:grid-cols-2">
            <ProfileCard
              name="Lukas Lindqvist"
              handle="@lukas.cmplt"
              role="Principal Design Engineer"
              avatarText="LL"
              verified
              status="online"
              statusText="Open for Advisory"
              bio="Crafting tactile OKLCH design systems, headless Base UI primitives, and automated Figma Variable pipelines."
              skills={[
                "@base-ui/react",
                "OKLCH Tokens",
                "GSAP Physics",
                "Tailwind v4",
              ]}
              stats={[
                { label: "Components", value: "84" },
                { label: "Figma Syncs", value: "1.4k" },
                { label: "Community", value: "4.8★" },
              ]}
            />

            <TestimonialCard
              quote="The optical concentricity on nested cards and tactile OKLCH surfaces completely transformed our design system. Our engineers stopped arguing about border-radii formulas."
              authorName="Sarah Jenkins"
              authorRole="VP of Product Design"
              company="Finscale Labs"
              avatarText="SJ"
              rating={5}
              verifiedBadge="Enterprise Customer"
              metricHighlight={{
                label: "Design-to-Code Delivery",
                value: "+340% velocity",
              }}
            />
          </div>
        </TabsContent>

        {/* TAB 5: BENTO GRID FEATURES & EVENT TICKETING */}
        <TabsContent value="bento" className="pt-3">
          <div className="grid gap-5 md:grid-cols-2">
            <FeatureCard
              eyebrow="Architecture 01"
              title="Headless Base UI Foundation"
              description="Unstyled, fully accessible Radix/Base UI state machines wrapped in calibrated OKLCH token styling."
              icon={<Layers className="h-4 w-4" />}
              badge="W3C Compliant"
              highlights={[
                "Zero CSS lock-in: copy-paste into Tailwind v4",
                "WCAG 2.2 AAA color contrast compliance",
                "Optical concentric container geometry",
              ]}
              ctaLabel="Inspect token contracts"
            />

            <EventCard
              month="OCT"
              day="14"
              time="18:00 – 20:30 CET"
              category="System Architecture"
              title="Scaling Headless Design Systems with OKLCH Tokens"
              description="Live hands-on workshop building production-ready concentric cards and fluid animations."
              location="Virtual Stage 01 · Livestream"
              spotsLeft="18 spots left"
              price="Free Admission"
              ctaLabel="Reserve Ticket"
            />
          </div>
        </TabsContent>

        {/* TAB 6: BASE COMPOSABLE SURFACES */}
        <TabsContent value="surfaces" className="pt-3">
          <div className="grid gap-4 sm:grid-cols-3">
            <Card variant="default">
              <CardHeader className="p-4">
                <CardTitle className="text-sm">Default Surface</CardTitle>
                <CardDescription className="text-xs">
                  Warm Alabaster / Matte Graphite (--bg-surface)
                </CardDescription>
              </CardHeader>
            </Card>
            <Card variant="elevated">
              <CardHeader className="p-4">
                <CardTitle className="text-sm">Elevated Surface</CardTitle>
                <CardDescription className="text-xs">
                  Lifted inner pane (--bg-elevated + shadow-sm)
                </CardDescription>
              </CardHeader>
            </Card>
            <Card variant="subtle">
              <CardHeader className="p-4">
                <CardTitle className="text-sm">Subtle Well</CardTitle>
                <CardDescription className="text-xs">
                  Recessed grouping container (--bg-subtle)
                </CardDescription>
              </CardHeader>
            </Card>
            <Card variant="interactive">
              <CardHeader className="p-4">
                <CardTitle className="text-sm">Interactive Surface</CardTitle>
                <CardDescription className="text-xs">
                  Hover border & diffused shadow lift
                </CardDescription>
              </CardHeader>
            </Card>
            <Card variant="outline">
              <CardHeader className="p-4">
                <CardTitle className="text-sm">Outline Frame</CardTitle>
                <CardDescription className="text-xs">
                  Transparent canvas + 1px default border
                </CardDescription>
              </CardHeader>
            </Card>
            <Card variant="featured">
              <CardHeader className="p-4">
                <CardTitle className="text-sm">Featured Highlight</CardTitle>
                <CardDescription className="text-xs">
                  Accent border contour (--border-brand)
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export interface ComponentDocEntry {
  slug: string;
  title: string;
  category: "Primitives & Actions" | "Forms & Inputs" | "Overlays & Navigation";
  baseUiPackage: string;
  summary: string;
  dataAttributes: { attr: string; description: string }[];
  propsTable: { prop: string; type: string; defaultVal: string; description: string }[];
  usageCode: string;
  renderDemo: () => React.ReactNode;
}

export const COMPONENT_DOCS: ComponentDocEntry[] = [
  {
    slug: "typography",
    title: "Typography & Liquid Scale",
    category: "Primitives & Actions",
    baseUiPackage: "geist/font/sans + geist/font/mono",
    summary:
      "Dual-Scale Liquid Utopia typography system (1.200 Minor Third on 360px Mobile -> 1.333 Perfect Fourth on 1440px Desktop) with Geist Variable, Geist Mono, automatic Bringhurst ch measure constraints (18ch / 28ch / 54ch / 65ch), and optical dark-mode weight compensation.",
    dataAttributes: [
      { attr: "data-slot='heading'", description: "Semantic heading element with automatic balance wrap and measure limit." },
      { attr: "data-slot='text'", description: "Prose or UI text primitive with pretty wrap and calibrated leading." },
      { attr: "data-slot='code-inline'", description: "Geist Mono inline or block code primitive with tabular figures." },
    ],
    propsTable: [
      { prop: "size (Heading)", type: "'display-xl' | 'display-lg' | 'h1' | 'h2' | 'h3' | 'h4'", defaultVal: "'h2'", description: "Maps to fluid Utopia clamp() step (--type-step-1 through --type-step-6)." },
      { prop: "variant (Text)", type: "'lead' | 'body' | 'body-sm' | 'eyebrow' | 'ui-lg' | 'ui-md' | 'ui-sm' | 'ui-xs'", defaultVal: "'body'", description: "Selects between fluid editorial prose steps or static pixel-aligned UI control tokens." },
      { prop: "measure", type: "'auto' | 'display' | 'heading' | 'compact' | 'lead' | 'body' | 'none'", defaultVal: "'auto'", description: "Constrains maximum line width in ch units (18ch, 28ch, 42ch, 54ch, 65ch) for effortless eye-tracking." },
      { prop: "tone", type: "'primary' | 'secondary' | 'muted' | 'accent'", defaultVal: "'primary'", description: "Calibrated OKLCH foreground hierarchy token." },
    ],
    usageCode: `import { Heading, Text, Code, Prose } from "@/components/ui/typography"

export function TypographyDemo() {
  return (
    <div className="space-y-4">
      <Text variant="eyebrow">Geist Variable · Dual-Scale Utopia</Text>
      <Heading size="h2">
        Engineered for effortless reading across every viewport.
      </Heading>
      <Text variant="lead">
        Editorial headings and body copy scale fluidly via <Code>clamp()</Code>{" "}
        while UI controls stay locked to crisp static <Code>rem</Code> steps.
      </Text>
      <Prose>
        <p>
          Long-form prose is automatically constrained to <strong>65ch</strong>{" "}
          (Bringhurst's optimal 60–70 character reading measure) with optical dark-mode
          variable weight compensation (<Code>wght 380</Code>) to prevent halation.
        </p>
      </Prose>
    </div>
  )
}`,
    renderDemo: () => (
      <div className="w-full max-w-2xl space-y-4 py-2 text-left">
        <Text variant="eyebrow">Geist Variable · Dual-Scale 1.200 → 1.333</Text>
        <Heading size="h2">
          Engineered for effortless reading across every viewport.
        </Heading>
        <Text variant="lead">
          Editorial headings and body copy scale fluidly via <Code>clamp()</Code>{" "}
          while dense UI controls stay locked to crisp static <Code>rem</Code> steps.
        </Text>
        <Prose>
          <p>
            Long-form prose is automatically constrained to <strong>65ch</strong>{" "}
            (Bringhurst&apos;s optimal 60–70 character reading measure) with optical
            dark-mode variable weight compensation (<Code>wght 380</Code>) on Matte
            Graphite surfaces.
          </p>
        </Prose>
      </div>
    ),
  },
  {
    slug: "interactive-dot-field",
    title: "Interactive Dot Field (Three.js + GSAP)",
    category: "Primitives & Actions",
    baseUiPackage: "three + gsap",
    summary:
      "WebGL Three.js custom shader dot-matrix background field driven by GSAP quickTo pointer inertia, organic sine breathing, and theme-reactive OKLCH brand illumination from --bg-brand / --fg-brand.",
    dataAttributes: [
      { attr: "data-slot='interactive-dot-field'", description: "WebGL canvas wrapper synced with GSAP ticker and theme attributes." },
    ],
    propsTable: [
      { prop: "spacing", type: "number", defaultVal: "24", description: "Grid spacing between dots in CSS pixels." },
      { prop: "dotSize", type: "number", defaultVal: "2.4", description: "Base dot diameter in CSS pixels." },
      { prop: "interactionRadius", type: "number", defaultVal: "195", description: "Gaussian pointer influence radius in CSS pixels." },
      { prop: "maxDisplacement", type: "number", defaultVal: "7.5", description: "Maximum silk-like radial parting displacement in CSS pixels." },
    ],
    usageCode: `import { InteractiveDotField } from "@/components/ui/interactive-dot-field"

export function HeroBackgroundDemo() {
  return (
    <section className="relative h-72 overflow-hidden rounded-xl border border-border-default bg-canvas">
      <InteractiveDotField spacing={22} interactionRadius={160} maxDisplacement={8} />
      <div className="relative z-10 flex h-full items-center justify-center">
        <span className="rounded-full border border-border-default bg-surface/90 px-4 py-1.5 text-xs font-medium text-fg-primary shadow-sm backdrop-blur-sm">
          Move your cursor across the WebGL dot field
        </span>
      </div>
    </section>
  )
}`,
    renderDemo: () => (
      <div className="relative h-64 w-full overflow-hidden rounded-xl border border-border-default bg-canvas">
        <InteractiveDotField spacing={20} interactionRadius={150} maxDisplacement={8} />
        <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center gap-2 text-center px-4">
          <Badge variant="brand" size="sm">
            WebGL Shader · 60fps GSAP Ticker
          </Badge>
          <p className="text-sm font-semibold text-fg-primary">
            Move your cursor across this surface
          </p>
          <p className="text-xs text-fg-secondary max-w-xs">
            Dots part gently with Gaussian falloff, swell in radius, and illuminate in your active theme accent.
          </p>
        </div>
      </div>
    ),
  },
  {
    slug: "liquid-tabs",
    title: "Liquid Tabs (GSAP + Base UI)",
    category: "Overlays & Navigation",
    baseUiPackage: "@base-ui/react/tabs + gsap",
    summary:
      "Accessible segmented control featuring an organic liquid mercury pill indicator that dynamically stretches, forms a fluid bridge, and softly detaches across tab switches. Self-contained SVG filter with 100% crisp foreground typography.",
    dataAttributes: [
      { attr: "data-tab-value", description: "Identifies the tab for GSAP fluid bounding box calculation." },
      { attr: "data-[active]", description: "Present on the currently selected tab trigger." },
      { attr: "data-[disabled]", description: "Present when tab is disabled." },
    ],
    propsTable: [
      { prop: "viscosity", type: "'subtle' | 'medium' | 'fluid'", defaultVal: "'medium'", description: "Controls surface tension and bridge detachment distance of the liquid indicator." },
      { prop: "defaultValue", type: "string | number", defaultVal: "undefined", description: "Default selected tab value." },
      { prop: "value", type: "string | number", defaultVal: "undefined", description: "Controlled selected tab value." },
      { prop: "onValueChange", type: "(val: string | number) => void", defaultVal: "undefined", description: "Callback fired when selected tab changes." },
    ],
    usageCode: `import {
  LiquidTabs,
  LiquidTabsList,
  LiquidTabsTrigger,
  LiquidTabsContent,
} from "@/components/ui/liquid-tabs"

export function LiquidTabsExample() {
  return (
    <LiquidTabs defaultValue="design">
      <LiquidTabsList viscosity="medium">
        <LiquidTabsTrigger value="design">Design</LiquidTabsTrigger>
        <LiquidTabsTrigger value="tokens">Tokens</LiquidTabsTrigger>
        <LiquidTabsTrigger value="components">Components</LiquidTabsTrigger>
      </LiquidTabsList>
      <LiquidTabsContent value="design">Design content...</LiquidTabsContent>
      <LiquidTabsContent value="tokens">Tokens content...</LiquidTabsContent>
      <LiquidTabsContent value="components">Components content...</LiquidTabsContent>
    </LiquidTabs>
  )
}`,
    renderDemo: () => <LiquidTabsDemo />,
  },
  {
    slug: "liquid-switch",
    title: "Liquid Switch (Base UI)",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/switch",
    summary:
      "Tactile toggle switch featuring an elastic mercury thumb with fluid trail absorption and self-contained SVG gooey physics. Stretches elastically under active drag/click before settling into place.",
    dataAttributes: [
      { attr: "data-[checked]", description: "Present on the root when the switch is in the active/checked state." },
      { attr: "data-[disabled]", description: "Present when the switch is disabled." },
    ],
    propsTable: [
      { prop: "viscosity", type: "'subtle' | 'medium' | 'fluid'", defaultVal: "'medium'", description: "Controls the surface tension of the fluid thumb." },
      { prop: "checked", type: "boolean", defaultVal: "undefined", description: "Controlled toggle state." },
      { prop: "defaultChecked", type: "boolean", defaultVal: "false", description: "Initial uncontrolled toggle state." },
      { prop: "onCheckedChange", type: "(checked: boolean) => void", defaultVal: "undefined", description: "Callback fired on state toggle." },
    ],
    usageCode: `import { LiquidSwitch } from "@/components/ui/liquid-switch"

export function LiquidSwitchExample() {
  const [enabled, setEnabled] = React.useState(true)

  return (
    <div className="flex items-center gap-3">
      <LiquidSwitch
        checked={enabled}
        onCheckedChange={setEnabled}
        viscosity="medium"
      />
      <span className="text-xs font-medium text-fg-primary">
        Fluid Toggle: {enabled ? "Active" : "Inactive"}
      </span>
    </div>
  )
}`,
    renderDemo: () => <LiquidSwitchDemo />,
  },
  {
    slug: "liquid-button",
    title: "Liquid Button (GSAP + Base UI)",
    category: "Primitives & Actions",
    baseUiPackage: "@base-ui/react/button + gsap",
    summary:
      "Organic fluid action button with cursor-reactive liquid droplets, soft press deformation, and razor-sharp foreground typography. Contains self-contained SVG gooey filtering for out-of-the-box delivery.",
    dataAttributes: [
      { attr: "data-[disabled]", description: "Present when the button is disabled." },
    ],
    propsTable: [
      { prop: "variant", type: "'primary' | 'subtle' | 'surface'", defaultVal: "'primary'", description: "Color hierarchy theme for the liquid body and merging blobs." },
      { prop: "size", type: "'sm' | 'md' | 'lg' | 'icon'", defaultVal: "'md'", description: "Pill button sizing and ergonomic touch padding." },
      { prop: "viscosity", type: "'subtle' | 'medium' | 'fluid'", defaultVal: "'medium'", description: "Fluid meniscus surface tension." },
      { prop: "interactiveBlobs", type: "boolean", defaultVal: "true", description: "Enables cursor-tracking GSAP quickTo fluid droplets." },
    ],
    usageCode: `import { LiquidButton } from "@/components/ui/liquid-button"
import { Droplets } from "lucide-react"

export function LiquidButtonExample() {
  return (
    <LiquidButton variant="primary" size="lg">
      <Droplets className="h-4 w-4" />
      Fluid Action
    </LiquidButton>
  )
}`,
    renderDemo: () => <LiquidButtonDemo />,
  },
  {
    slug: "liquid-filter",
    title: "Liquid Gooey Filter Primitive",
    category: "Primitives & Actions",
    baseUiPackage: "Self-Contained SVG Filter Primitive",
    summary:
      "Foundational SVG gooey filter primitive with calibrated Gaussian blur & alpha color matrix for soft, organic fluid cohesion. Includes GooeyContainer for effortless multi-element liquid merging.",
    dataAttributes: [
      { attr: "aria-hidden='true'", description: "The SVG filter definition is hidden from assistive tech." },
    ],
    propsTable: [
      { prop: "viscosity", type: "'subtle' | 'medium' | 'fluid'", defaultVal: "'medium'", description: "Blur radius (4px, 6px, 8px) and matching alpha cutoff matrix." },
      { prop: "id", type: "string", defaultVal: "auto-generated via useId()", description: "Unique filter identifier for CSS url(#id) referencing." },
      { prop: "children", type: "ReactNode", defaultVal: "undefined", description: "Elements to be liquid-fused inside GooeyContainer." },
    ],
    usageCode: `import { GooeyContainer, LiquidFilter } from "@/components/ui/liquid-filter"

export function LiquidGooeyExample() {
  return (
    <GooeyContainer viscosity="medium" className="flex items-center gap-2">
      <div className="h-10 w-10 rounded-full bg-brand" />
      <div className="h-8 w-8 rounded-full bg-brand" />
    </GooeyContainer>
  )
}`,
    renderDemo: () => <LiquidFilterDemo />,
  },
  {
    slug: "liquid-toggle-group",
    title: "Liquid Toggle Group (GSAP + Base UI)",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/toggle-group + gsap",
    summary:
      "Segmented toggle group with an organic liquid mercury pill indicator that dynamically stretches, forms a fluid bridge, and softly detaches across item toggles.",
    dataAttributes: [
      { attr: "data-toggle-value", description: "Identifies the toggle item for GSAP fluid bounding box calculation." },
      { attr: "data-[pressed]", description: "Present when the toggle item is currently active." },
      { attr: "data-[disabled]", description: "Present when item is disabled." },
    ],
    propsTable: [
      { prop: "viscosity", type: "'subtle' | 'medium' | 'fluid'", defaultVal: "'medium'", description: "Controls surface tension and bridge detachment distance." },
      { prop: "value", type: "string", defaultVal: "undefined", description: "Controlled active value." },
      { prop: "defaultValue", type: "string", defaultVal: "undefined", description: "Default initial value." },
      { prop: "onValueChange", type: "(val: string | undefined) => void", defaultVal: "undefined", description: "Callback when active selection changes." },
      { prop: "size", type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: "Pill height and padding scale." },
    ],
    usageCode: `import {
  LiquidToggleGroup,
  LiquidToggleGroupItem,
} from "@/components/ui/liquid-toggle-group"
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react"

export function LiquidToggleGroupExample() {
  const [align, setAlign] = React.useState("center")

  return (
    <LiquidToggleGroup value={align} onValueChange={setAlign} viscosity="medium">
      <LiquidToggleGroupItem value="left" aria-label="Align Left">
        <AlignLeft className="h-4 w-4" />
      </LiquidToggleGroupItem>
      <LiquidToggleGroupItem value="center" aria-label="Align Center">
        <AlignCenter className="h-4 w-4" />
      </LiquidToggleGroupItem>
      <LiquidToggleGroupItem value="right" aria-label="Align Right">
        <AlignRight className="h-4 w-4" />
      </LiquidToggleGroupItem>
    </LiquidToggleGroup>
  )
}`,
    renderDemo: () => <LiquidToggleGroupDemo />,
  },
  {
    slug: "liquid-pagination",
    title: "Liquid Pagination (GSAP)",
    category: "Overlays & Navigation",
    baseUiPackage: "Accessible Pagination + gsap",
    summary:
      "Accessible pagination bar where the active page pill indicator flows seamlessly across page numbers with organic liquid stretch and snap physics.",
    dataAttributes: [
      { attr: "data-page-index", description: "Identifies the page number for fluid indicator tracking." },
      { attr: "aria-current='page'", description: "Present on the active page number button." },
    ],
    propsTable: [
      { prop: "currentPage", type: "number", defaultVal: "1", description: "Current active page index." },
      { prop: "onPageChange", type: "(page: number) => void", defaultVal: "undefined", description: "Callback fired when a page is selected." },
      { prop: "viscosity", type: "'subtle' | 'medium' | 'fluid'", defaultVal: "'medium'", description: "Surface tension of the flowing page pill." },
    ],
    usageCode: `import {
  LiquidPagination,
  LiquidPaginationItem,
  LiquidPaginationLink,
  LiquidPaginationPrevious,
  LiquidPaginationNext,
} from "@/components/ui/liquid-pagination"

export function LiquidPaginationExample() {
  const [page, setPage] = React.useState(1)

  return (
    <LiquidPagination currentPage={page} onPageChange={setPage}>
      <LiquidPaginationPrevious onClick={() => setPage(p => Math.max(1, p - 1))} />
      <LiquidPaginationItem>
        <LiquidPaginationLink page={1} />
      </LiquidPaginationItem>
      <LiquidPaginationItem>
        <LiquidPaginationLink page={2} />
      </LiquidPaginationItem>
      <LiquidPaginationItem>
        <LiquidPaginationLink page={3} />
      </LiquidPaginationItem>
      <LiquidPaginationNext onClick={() => setPage(p => Math.min(3, p + 1))} />
    </LiquidPagination>
  )
}`,
    renderDemo: () => <LiquidPaginationDemo />,
  },
  {
    slug: "liquid-radio-group",
    title: "Liquid Radio Group (Base UI)",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/radio-group",
    summary:
      "Accessible radio group with organic fluid surface-tension swelling on selection and self-contained SVG gooey physics.",
    dataAttributes: [
      { attr: "data-[checked]", description: "Present when the radio button is selected." },
      { attr: "data-[disabled]", description: "Present when the radio item is disabled." },
    ],
    propsTable: [
      { prop: "value", type: "string", defaultVal: "undefined", description: "Controlled value of selected radio." },
      { prop: "onValueChange", type: "(val: string) => void", defaultVal: "undefined", description: "Callback when radio selection changes." },
      { prop: "viscosity", type: "'subtle' | 'medium' | 'fluid'", defaultVal: "'medium'", description: "Surface tension of fluid swell." },
    ],
    usageCode: `import {
  LiquidRadioGroup,
  LiquidRadioItem,
} from "@/components/ui/liquid-radio-group"

export function LiquidRadioExample() {
  const [plan, setPlan] = React.useState("pro")

  return (
    <LiquidRadioGroup value={plan} onValueChange={setPlan}>
      <LiquidRadioItem value="starter" label="Starter" description="Basic access" />
      <LiquidRadioItem value="pro" label="Pro" description="Unlimited features" />
    </LiquidRadioGroup>
  )
}`,
    renderDemo: () => <LiquidRadioGroupDemo />,
  },
  {
    slug: "liquid-avatar-group",
    title: "Liquid Avatar Group (Base UI)",
    category: "Primitives & Actions",
    baseUiPackage: "@base-ui/react/avatar",
    summary:
      "Overlapping team avatars that merge into an organic visual cluster with fluid surface tension and elastic detachment on hover.",
    dataAttributes: [
      { attr: "aria-hidden='true'", description: "Hidden SVG gooey filter wrapper." },
    ],
    propsTable: [
      { prop: "max", type: "number", defaultVal: "5", description: "Maximum visible avatars before surplus count pill." },
      { prop: "spacing", type: "'tight' | 'normal' | 'relaxed'", defaultVal: "'tight'", description: "Overlap distance for cluster cohesion." },
      { prop: "viscosity", type: "'subtle' | 'medium' | 'fluid'", defaultVal: "'subtle'", description: "Meniscus tension parameter." },
    ],
    usageCode: `import {
  LiquidAvatarGroup,
  LiquidAvatar,
  LiquidAvatarImage,
  LiquidAvatarFallback,
} from "@/components/ui/liquid-avatar-group"

export function LiquidAvatarGroupExample() {
  return (
    <LiquidAvatarGroup max={3}>
      <LiquidAvatar status="online">
        <LiquidAvatarImage src="/avatar1.png" alt="Dev 1" />
        <LiquidAvatarFallback>D1</LiquidAvatarFallback>
      </LiquidAvatar>
      <LiquidAvatar status="online">
        <LiquidAvatarImage src="/avatar2.png" alt="Dev 2" />
        <LiquidAvatarFallback>D2</LiquidAvatarFallback>
      </LiquidAvatar>
    </LiquidAvatarGroup>
  )
}`,
    renderDemo: () => <LiquidAvatarGroupDemo />,
  },
  {
    slug: "liquid-dock",
    title: "Liquid Dock (GSAP)",
    category: "Overlays & Navigation",
    baseUiPackage: "Interactive Ribbon + gsap",
    summary:
      "Floating navigation ribbon with a cursor-following fluid beam that organically connects and flows across dock items with smooth surface tension.",
    dataAttributes: [
      { attr: "data-dock-item", description: "Identifies dock interactive buttons for cursor beam tracking." },
    ],
    propsTable: [
      { prop: "viscosity", type: "'subtle' | 'medium' | 'fluid'", defaultVal: "'medium'", description: "Fluid beam surface tension." },
      { prop: "magnification", type: "boolean", defaultVal: "true", description: "Enables proximity hover scaling." },
    ],
    usageCode: `import {
  LiquidDock,
  LiquidDockItem,
  LiquidDockSeparator,
} from "@/components/ui/liquid-dock"
import { Home, Search, Bell, Settings } from "lucide-react"

export function LiquidDockExample() {
  return (
    <LiquidDock>
      <LiquidDockItem label="Home"><Home /></LiquidDockItem>
      <LiquidDockItem label="Search"><Search /></LiquidDockItem>
      <LiquidDockSeparator />
      <LiquidDockItem label="Notifications"><Bell /></LiquidDockItem>
      <LiquidDockItem label="Settings"><Settings /></LiquidDockItem>
    </LiquidDock>
  )
}`,
    renderDemo: () => <LiquidDockDemo />,
  },
  {
    slug: "animated-cta-button",
    title: "Animated CTA Button (GSAP)",
    category: "Primitives & Actions",
    baseUiPackage: "@base-ui/react/button + gsap",
    summary:
      "Hierarchy-elevating Call-to-Action button powered by GSAP (useGSAP + quickTo) with a continuous, whisper-soft orbital border highlight, inertial cursor sheen, and gentle magnetic proximity physics.",
    dataAttributes: [
      { attr: "data-[disabled]", description: "Present when the button is disabled." },
    ],
    propsTable: [
      { prop: "variant", type: "'accent-beam' | 'surface-halo'", defaultVal: "'accent-beam'", description: "Solid brand accent pill with specular border orbit or elevated surface pill with traveling accent border." },
      { prop: "size", type: "'sm' | 'md' | 'lg' | 'xl'", defaultVal: "'lg'", description: "Height and horizontal pill padding." },
      { prop: "magnetic", type: "boolean", defaultVal: "true", description: "Enables natural GSAP quickTo magnetic cursor proximity pull." },
      { prop: "magneticStrength", type: "number", defaultVal: "3.5", description: "Maximum pixel displacement on pointer hover." },
    ],
    usageCode: `import { AnimatedCtaButton } from "@/components/ui/animated-cta-button"
import { ArrowRight, Sparkles } from "lucide-react"

export function AnimatedCtaDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <AnimatedCtaButton variant="accent-beam" size="lg">
        Deploy Registry
        <ArrowRight className="h-4 w-4" />
      </AnimatedCtaButton>
      <AnimatedCtaButton variant="surface-halo" size="lg">
        <Sparkles className="h-4 w-4 text-fg-brand" />
        Explore UI Blocks
      </AnimatedCtaButton>
    </div>
  )
}`,
    renderDemo: () => (
      <div className="flex flex-wrap items-center justify-center gap-4 py-4">
        <AnimatedCtaButton variant="accent-beam" size="lg">
          Deploy Registry
          <ArrowRight className="h-4 w-4" />
        </AnimatedCtaButton>
        <AnimatedCtaButton variant="surface-halo" size="lg">
          <Sparkles className="h-4 w-4 text-fg-brand" />
          Explore UI Blocks
        </AnimatedCtaButton>
        <AnimatedCtaButton variant="accent-beam" size="sm">
          Compact CTA
        </AnimatedCtaButton>
      </div>
    ),
  },
  {
    slug: "highlight-input",
    title: "Highlight Input (GSAP)",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/input + gsap",
    summary:
      "GSAP border-highlighted input frame that visually lifts primary search bars, command palettes, and key form fields in the visual hierarchy via a soft orbital border light and inertial pointer spotlight.",
    dataAttributes: [
      { attr: "data-[disabled]", description: "Applied when the underlying Base UI input is disabled." },
    ],
    propsTable: [
      { prop: "shape", type: "'rounded' | 'pill'", defaultVal: "'rounded'", description: "10px structured form input contour or 9999px full pill search contour." },
      { prop: "highlightMode", type: "'ambient' | 'focus-only'", defaultVal: "'ambient'", description: "Continuous soft orbital border highlight vs. awakening only on hover/focus." },
      { prop: "leadingIcon", type: "React.ReactNode", defaultVal: "undefined", description: "Optional left-aligned icon inside the surface." },
      { prop: "trailingSlot", type: "React.ReactNode", defaultVal: "undefined", description: "Optional right-aligned slot (e.g., Kbd shortcut or badge)." },
    ],
    usageCode: `import { HighlightInput } from "@/components/ui/highlight-input"
import { Kbd } from "@/components/ui/kbd"
import { Search, Sparkles } from "lucide-react"

export function HighlightInputDemo() {
  return (
    <div className="space-y-4 max-w-md">
      <HighlightInput
        shape="pill"
        highlightMode="ambient"
        leadingIcon={<Search />}
        placeholder="Search components, tokens, or blocks..."
        trailingSlot={<Kbd>⌘K</Kbd>}
      />
      <HighlightInput
        shape="rounded"
        highlightMode="ambient"
        leadingIcon={<Sparkles />}
        defaultValue="@cmplt/blocks"
      />
    </div>
  )
}`,
    renderDemo: () => (
      <div className="max-w-md mx-auto space-y-5 py-2">
        <Field>
          <FieldLabel>Hierarchy-Elevated Command / Search Input (Pill 9999px)</FieldLabel>
          <HighlightInput
            shape="pill"
            highlightMode="ambient"
            leadingIcon={<Search />}
            placeholder="Search components, tokens, or blocks..."
            trailingSlot={
              <span className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </span>
            }
          />
          <FieldDescription>
            Soft GSAP conic border light + cursor proximity spotlight.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel>Highlighted Form Input (10px Structured Radius)</FieldLabel>
          <HighlightInput
            shape="rounded"
            highlightMode="ambient"
            leadingIcon={<Sparkles />}
            defaultValue="npx shadcn@latest add @cmplt/highlight-input"
            className="font-mono text-xs"
          />
        </Field>
      </div>
    ),
  },
  {
    slug: "button",
    title: "Button",
    category: "Primitives & Actions",
    baseUiPackage: "@base-ui/react/button",
    summary:
      "Accessible button primitive built on @base-ui/react/button with 6 semantic CVA variants, keyboard focus rings, and tactile active scaling.",
    dataAttributes: [
      { attr: "data-[disabled]", description: "Present when the button is disabled (including focusableWhenDisabled)." },
    ],
    propsTable: [
      { prop: "variant", type: "'primary' | 'secondary' | 'outline' | 'subtle' | 'ghost' | 'danger'", defaultVal: "'primary'", description: "Visual surface and semantic color role." },
      { prop: "size", type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon'", defaultVal: "'md'", description: "Height, horizontal padding, and token radius scale." },
      { prop: "focusableWhenDisabled", type: "boolean", defaultVal: "false", description: "Base UI prop allowing screen-reader focus on disabled buttons." },
    ],
    usageCode: `import { Button } from "@/components/ui/button"
import { AnimatedCtaButton } from "@/components/ui/animated-cta-button"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <AnimatedCtaButton variant="accent-beam" size="md">GSAP Highlight CTA</AnimatedCtaButton>
      <Button variant="primary">Primary Action</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="subtle">Subtle Brand</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Destructive</Button>
    </div>
  )
}`,
    renderDemo: () => (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <AnimatedCtaButton variant="accent-beam" size="md">
            <Sparkles className="h-3.5 w-3.5" /> GSAP Highlight CTA
          </AnimatedCtaButton>
          <Button variant="primary" shape="pill">Primary Action</Button>
          <Button variant="secondary" shape="pill">Secondary</Button>
          <Button variant="outline" shape="pill">Outline</Button>
          <Button variant="subtle" shape="pill">Subtle Brand</Button>
          <Button variant="ghost" shape="pill">Ghost</Button>
          <Button variant="danger" shape="pill">Destructive</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button size="xs" variant="secondary" shape="pill">Size XS</Button>
          <Button size="sm" variant="secondary" shape="pill">Size SM</Button>
          <Button size="md" variant="secondary" shape="pill">Size MD</Button>
          <Button size="lg" variant="secondary" shape="pill">Size LG</Button>
          <Button disabled variant="primary" shape="pill">Disabled State</Button>
        </div>
      </div>
    ),
  },
  {
    slug: "dialog",
    title: "Dialog",
    category: "Overlays & Navigation",
    baseUiPackage: "@base-ui/react/dialog",
    summary:
      "Modal dialog window with top-layer discrete CSS animations (@starting-style), backdrop blur, focus trapping, and WAI-ARIA labeling.",
    dataAttributes: [
      { attr: "data-[open]", description: "Applied to Trigger, Backdrop, and Popup while the dialog is open." },
      { attr: "data-[starting-style]", description: "Applied on initial entry frame for smooth scale/fade transitions." },
      { attr: "data-[ending-style]", description: "Applied during exit transition before unmounting from top layer." },
    ],
    propsTable: [
      { prop: "open", type: "boolean", defaultVal: "undefined", description: "Controlled open state of the dialog." },
      { prop: "onOpenChange", type: "(open: boolean) => void", defaultVal: "undefined", description: "Callback fired when the dialog opens or closes." },
      { prop: "showClose", type: "boolean", defaultVal: "true", description: "Renders the top-right close button inside DialogContent." },
    ],
    usageCode: `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Open Token Sync Modal</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sync W3C Tokens to Figma</DialogTitle>
          <DialogDescription>
            Push 42 semantic OKLCH variables directly to your Figma Variables collection.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <DialogClose render={<Button variant="primary">Push to Figma</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
    renderDemo: () => (
      <div className="flex items-center justify-center py-4">
        <Dialog>
          <DialogTrigger
            render={
              <Button variant="primary">
                <Layers className="h-4 w-4" /> Open Interactive Dialog
              </Button>
            }
          />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sync W3C Tokens to Figma Variables</DialogTitle>
              <DialogDescription>
                Push all 3-tier OKLCH color, radius, and typography tokens to your linked Figma file.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3 py-2">
              <Field>
                <FieldLabel>Target Figma File Key</FieldLabel>
                <Input defaultValue="figma.com/design/cmplt-ds-v1-variables" />
                <FieldDescription>
                  Synced via W3C Design Tokens Format ($type, $value, figmaScope).
                </FieldDescription>
              </Field>
            </div>
            <DialogFooter>
              <DialogClose
                render={<Button variant="outline">Cancel</Button>}
              />
              <DialogClose
                render={<Button variant="primary">Sync 42 Variables</Button>}
              />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    ),
  },
  {
    slug: "select",
    title: "Select",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/select",
    summary:
      "Accessible dropdown select built on @base-ui/react/select with Floating UI positioning, typeahead keyboard navigation, and --anchor-width matching.",
    dataAttributes: [
      { attr: "data-[highlighted]", description: "Applied to SelectItem when focused via keyboard or pointer." },
      { attr: "data-[selected]", description: "Applied to the currently active SelectItem." },
      { attr: "data-[popup-open]", description: "Applied to SelectTrigger while the menu is expanded." },
    ],
    propsTable: [
      { prop: "value", type: "string", defaultVal: "undefined", description: "Controlled selected value." },
      { prop: "defaultValue", type: "string", defaultVal: "undefined", description: "Initial value for uncontrolled usage." },
      { prop: "onValueChange", type: "(value: any) => void", defaultVal: "undefined", description: "Callback fired when selection changes." },
    ],
    usageCode: `import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select defaultValue="precision">
      <SelectTrigger className="w-64">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="precision">Precision (Default)</SelectItem>
        <SelectItem value="editorial">Editorial</SelectItem>
        <SelectItem value="emerald">Emerald</SelectItem>
      </SelectContent>
    </Select>
  )
}`,
    renderDemo: () => (
      <div className="max-w-xs mx-auto space-y-2">
        <label className="text-xs font-medium text-fg-secondary">
          Design Token Theme Preset
        </label>
        <Select defaultValue="precision">
          <SelectTrigger aria-label="Select theme preset">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="precision">Precision (Default)</SelectItem>
            <SelectItem value="editorial">Editorial</SelectItem>
            <SelectItem value="emerald">Emerald</SelectItem>
          </SelectContent>
        </Select>
      </div>
    ),
  },
  {
    slug: "tabs",
    title: "Tabs",
    category: "Overlays & Navigation",
    baseUiPackage: "@base-ui/react/tabs",
    summary:
      "Layered tab views built on @base-ui/react/tabs with arrow-key roving focus and data-[active] state styling.",
    dataAttributes: [
      { attr: "data-[active]", description: "Applied to TabsTrigger when its corresponding panel is visible." },
      { attr: "data-[disabled]", description: "Applied when a tab is disabled." },
    ],
    propsTable: [
      { prop: "defaultValue", type: "string", defaultVal: "undefined", description: "The tab value active by default." },
      { prop: "variant (on TabsList)", type: "'segmented' | 'underline'", defaultVal: "'segmented'", description: "Pill-shaped Segmented Control or clean Underline navigation." },
      { prop: "orientation", type: "'horizontal' | 'vertical'", defaultVal: "'horizontal'", description: "Keyboard navigation axis." },
    ],
    usageCode: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <div className="space-y-6">
      {/* 1. Pill-shaped Segmented Control */}
      <Tabs defaultValue="tokens">
        <TabsList variant="segmented">
          <TabsTrigger value="tokens">CSS Tokens</TabsTrigger>
          <TabsTrigger value="registry">Registry JSON</TabsTrigger>
          <TabsTrigger value="figma">Figma Sync</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* 2. Simple Underline Navigation */}
      <Tabs defaultValue="tokens">
        <TabsList variant="underline">
          <TabsTrigger value="tokens">Overview</TabsTrigger>
          <TabsTrigger value="registry">Telemetry</TabsTrigger>
          <TabsTrigger value="figma">Audit Logs</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}`,
    renderDemo: () => (
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-2">
          <div className="cmplt-meta">1. Pill Segmented Control (variant=&quot;segmented&quot;)</div>
          <Tabs defaultValue="tokens">
            <TabsList variant="segmented" className="w-full grid grid-cols-3">
              <TabsTrigger value="tokens">CSS Tokens</TabsTrigger>
              <TabsTrigger value="registry">Registry CLI</TabsTrigger>
              <TabsTrigger value="figma">Figma Variables</TabsTrigger>
            </TabsList>
            <TabsContent value="tokens">
              <Card className="p-4 text-xs text-fg-secondary">
                Segmented control uses a pill-shaped container (<code className="font-mono text-fg-brand">9999px</code>) and pill active indicator.
              </Card>
            </TabsContent>
            <TabsContent value="registry">
              <Card className="p-4 font-mono text-xs text-fg-primary">
                npx shadcn@latest add @cmplt/tabs
              </Card>
            </TabsContent>
            <TabsContent value="figma">
              <Card className="p-4 text-xs text-fg-secondary">
                Exported via W3C DTCG JSON directly into Figma Variable Collections.
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-2 pt-2 border-t border-border-subtle">
          <div className="cmplt-meta">2. Clean Underline Navigation (variant=&quot;underline&quot;)</div>
          <Tabs defaultValue="overview">
            <TabsList variant="underline">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="metrics">Hero Metrics</TabsTrigger>
              <TabsTrigger value="audit">Security Audit</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="text-xs text-fg-secondary pt-1">
                Minimalist horizontal section divider with a crisp 2px active underline.
              </div>
            </TabsContent>
            <TabsContent value="metrics">
              <div className="text-xs text-fg-secondary pt-1">
                Tabular figures (<code className="font-mono">.cmplt-tabular</code>) keep dashboard columns aligned.
              </div>
            </TabsContent>
            <TabsContent value="audit">
              <div className="text-xs text-fg-secondary pt-1">
                Zero-data-retention mode active across all edge regions.
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    ),
  },
  {
    slug: "accordion",
    title: "Accordion",
    category: "Overlays & Navigation",
    baseUiPackage: "@base-ui/react/accordion",
    summary:
      "Vertically stacked collapsible panels built on @base-ui/react/accordion with full ARIA disclosure semantics.",
    dataAttributes: [
      { attr: "data-[open]", description: "Applied to AccordionItem, Trigger, and Panel when expanded." },
      { attr: "data-[disabled]", description: "Applied when an item is non-interactive." },
    ],
    propsTable: [
      { prop: "defaultValue", type: "any[]", defaultVal: "[]", description: "Array of item values open on initial render." },
      { prop: "multiple", type: "boolean", defaultVal: "false", description: "Allow multiple accordion items to stay open simultaneously." },
    ],
    usageCode: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Why Base UI instead of Radix?</AccordionTrigger>
        <AccordionContent>
          Base UI is built by the creators of Radix, Floating UI, and MUI with unified state attributes and modern React 19 ergonomics.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
    renderDemo: () => (
      <div className="max-w-lg mx-auto">
        <Accordion defaultValue={["item-1"]}>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Why combine Base UI with the shadcn Registry?
            </AccordionTrigger>
            <AccordionContent>
              Base UI gives you rock-solid headless accessibility and Floating UI positioning, while the shadcn registry lets you install and own the styled TypeScript code directly in your repo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How does the Code-to-Figma pipeline work?
            </AccordionTrigger>
            <AccordionContent>
              Every semantic token in <code className="font-mono text-fg-primary">tokens.css</code> is mirrored in <code className="font-mono text-fg-primary">tokens.json</code> using the W3C Design Tokens specification, ready for Figma Variables import.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    ),
  },
  {
    slug: "popover",
    title: "Popover",
    category: "Overlays & Navigation",
    baseUiPackage: "@base-ui/react/popover",
    summary:
      "Floating non-modal overlay anchored to a trigger element via @base-ui/react/popover.",
    dataAttributes: [
      { attr: "data-[open]", description: "Present when the popover is visible." },
      { attr: "data-[side]", description: "Indicates current placement ('top' | 'bottom' | 'left' | 'right')." },
    ],
    propsTable: [
      { prop: "side", type: "'top' | 'bottom' | 'left' | 'right'", defaultVal: "'bottom'", description: "Preferred anchor side." },
      { prop: "sideOffset", type: "number", defaultVal: "8", description: "Distance in pixels from the trigger." },
      { prop: "align", type: "'start' | 'center' | 'end'", defaultVal: "'center'", description: "Alignment along the anchor edge." },
    ],
    usageCode: `import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="secondary">Inspect Token</Button>} />
      <PopoverContent>
        <PopoverTitle>--bg-elevated</PopoverTitle>
        <PopoverDescription>Used for floating overlays and popovers.</PopoverDescription>
      </PopoverContent>
    </Popover>
  )
}`,
    renderDemo: () => (
      <div className="flex justify-center py-4">
        <Popover>
          <PopoverTrigger
            render={
              <Button variant="secondary">
                <Code2 className="h-4 w-4 text-fg-brand" /> Open Token Popover
              </Button>
            }
          />
          <PopoverContent>
            <PopoverTitle>Surface Elevation Token</PopoverTitle>
            <PopoverDescription>
              This popover uses <code className="font-mono text-fg-brand">bg-elevated</code> and <code className="font-mono text-fg-brand">shadow-lg</code> with top-layer transitions.
            </PopoverDescription>
          </PopoverContent>
        </Popover>
      </div>
    ),
  },
  {
    slug: "switch",
    title: "Switch",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/switch",
    summary:
      "Tactile binary toggle control built on @base-ui/react/switch with hidden native input support for forms.",
    dataAttributes: [
      { attr: "data-[checked]", description: "Applied to Root and Thumb when toggled on." },
      { attr: "data-[disabled]", description: "Applied when interaction is disabled." },
    ],
    propsTable: [
      { prop: "checked", type: "boolean", defaultVal: "undefined", description: "Controlled checked state." },
      { prop: "defaultChecked", type: "boolean", defaultVal: "false", description: "Initial state for uncontrolled usage." },
      { prop: "onCheckedChange", type: "(checked: boolean) => void", defaultVal: "undefined", description: "Callback when toggled." },
    ],
    usageCode: `import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  return (
    <label className="flex items-center gap-3 text-sm">
      <Switch defaultChecked />
      <span>Enable OKLCH High-Contrast Mode</span>
    </label>
  )
}`,
    renderDemo: () => (
      <div className="flex flex-col gap-3 max-w-xs mx-auto">
        <label className="flex items-center justify-between rounded-md border border-border-subtle bg-surface p-3 cursor-pointer">
          <span className="text-xs font-medium text-fg-primary">
            Automatic Figma Variable Sync
          </span>
          <Switch defaultChecked />
        </label>
        <label className="flex items-center justify-between rounded-md border border-border-subtle bg-surface p-3 cursor-pointer">
          <span className="text-xs font-medium text-fg-primary">
            Strict WCAG AAA Contrast Check
          </span>
          <Switch />
        </label>
      </div>
    ),
  },
  {
    slug: "checkbox",
    title: "Checkbox",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/checkbox",
    summary:
      "Accessible checkbox control built on @base-ui/react/checkbox with custom SVG check indicator.",
    dataAttributes: [
      { attr: "data-[checked]", description: "Present when the checkbox is checked." },
      { attr: "data-[indeterminate]", description: "Present when in mixed/indeterminate state." },
    ],
    propsTable: [
      { prop: "checked", type: "boolean", defaultVal: "undefined", description: "Controlled checked state." },
      { prop: "defaultChecked", type: "boolean", defaultVal: "false", description: "Default checked state." },
    ],
    usageCode: `import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return (
    <label className="flex items-center gap-2.5 text-sm">
      <Checkbox defaultChecked />
      <span>Include W3C tokens.json in build</span>
    </label>
  )
}`,
    renderDemo: () => (
      <div className="flex flex-col gap-2.5 max-w-xs mx-auto">
        <label className="flex items-center gap-2.5 text-xs font-medium text-fg-primary cursor-pointer">
          <Checkbox defaultChecked />
          <span>Export CSS Custom Properties (tokens.css)</span>
        </label>
        <label className="flex items-center gap-2.5 text-xs font-medium text-fg-primary cursor-pointer">
          <Checkbox defaultChecked />
          <span>Generate shadcn Registry (/r/*.json)</span>
        </label>
      </div>
    ),
  },
  {
    slug: "input",
    title: "Input & Field",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/field + @base-ui/react/input",
    summary:
      "Accessible form field composition pairing Base UI Field (automatic id/aria-describedby wiring) with styled Input.",
    dataAttributes: [
      { attr: "data-[invalid]", description: "Applied automatically to FieldLabel, Input, and FieldDescription on validation failure." },
      { attr: "data-[disabled]", description: "Applied across all child parts when Field is disabled." },
    ],
    propsTable: [
      { prop: "variant (on Input)", type: "'default' | 'search'", defaultVal: "'default'", description: "Structured 8px input or fully-rounded 9999px pill search input." },
      { prop: "invalid", type: "boolean", defaultVal: "false", description: "Marks the field and input as invalid." },
      { prop: "disabled", type: "boolean", defaultVal: "false", description: "Disables the field and associated control." },
    ],
    usageCode: `import { Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputFieldDemo() {
  return (
    <div className="space-y-4">
      <Field>
        <FieldLabel>Standard Form Input (8px Radius)</FieldLabel>
        <Input defaultValue="@cmplt/ui" />
        <FieldDescription>Level 0 flat integration with 1px hairline border.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel>Search Input (Pill 9999px)</FieldLabel>
        <Input variant="search" placeholder="Filter telemetry logs..." />
      </Field>
    </div>
  )
}`,
    renderDemo: () => (
      <div className="max-w-sm mx-auto space-y-5">
        <Field>
          <FieldLabel>Standard Form Input (8px Radius, Flat Level 0)</FieldLabel>
          <Input defaultValue="@cmplt" placeholder="@your-org" />
          <FieldDescription>
            Configured inside your consumer project&apos;s components.json.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel>Pill Search Input (variant=&quot;search&quot;, 9999px)</FieldLabel>
          <Input variant="search" placeholder="Search tokens, metrics, or logs..." />
        </Field>
      </div>
    ),
  },

  {
    slug: "card",
    title: "Card & Domain Presets",
    category: "Primitives & Actions",
    baseUiPackage: "cmplt surface + 7 domain presets",
    summary:
      "Concentric surface container with composable sub-primitives (CardMedia, CardEyebrow, CardMeta, CardPrice) and domain presets: ProductCard (with tailored support for Bekleidung/Apparel, Technik/Hardware, Digitale Güter/Licenses & Interior), BlogCard (Editorial & Magazine with Unsplash Imagery), MetricCard (KPI/Telemetry), ProfileCard (Creator/Team), FeatureCard (Bento), TestimonialCard (Reviews), and EventCard (Bookings).",
    dataAttributes: [
      { attr: "data-slot=\"card-media\"", description: "Triggers automatic content-based header spacing via CSS :has([data-slot=\"card-media\"])." },
      { attr: "data-slot=\"card-meta\"", description: "Inset grouped key-value / metadata well with 10px concentric radius." },
      { attr: "data-slot=\"card-price\"", description: "Tabular numeric price primitive with optional strikethrough comparison." },
    ],
    propsTable: [
      { prop: "variant (Card)", type: "'default' | 'elevated' | 'subtle' | 'interactive' | 'outline' | 'featured'", defaultVal: "'default'", description: "Surface elevation, border role, and highlight contour." },
      { prop: "layout (Card / BlogCard)", type: "'vertical' | 'horizontal' | 'adaptive'", defaultVal: "'vertical'", description: "Stacked vertical flow, side-by-side split, or @container size-aware adaptive layout." },
      { prop: "ProductCard", type: "category, image, brand, title, price, compareAtPrice, swatches, sizes, specs, fileFormats, license, warranty", defaultVal: "preset", description: "Multi-domain shop card with variants for Bekleidung (Apparel), Technik (Hardware), Digitale Güter (Software/Licenses), and Interior." },
      { prop: "BlogCard", type: "image, category, readTime, date, title, excerpt, author (name, role, avatarUrl), tags, layout", defaultVal: "preset", description: "Editorial article card with Unsplash imagery, concentric media stage, author byline, and tags." },
      { prop: "ApparelProductCard / TechProductCard / DigitalProductCard", type: "ProductCardProps", defaultVal: "preset", description: "Specialized domain convenience presets with tailored actions, specs, format pills, and size pickers." },
      { prop: "MetricCard", type: "label, value, delta, deltaTrend, sparkline, targetLabel, targetValue", defaultVal: "preset", description: "Analytical KPI & telemetry card with tabular figures and bar sparkline." },
      { prop: "ProfileCard", type: "name, role, handle, avatarText, verified, status, skills, stats", defaultVal: "preset", description: "Creator, author, or seller card with 3-column inset metrics box." },
      { prop: "FeatureCard", type: "eyebrow, title, description, icon, badge, visual, highlights", defaultVal: "preset", description: "Bento grid & product feature highlight card with checklist items." },
      { prop: "TestimonialCard", type: "quote, authorName, authorRole, company, rating, metricHighlight", defaultVal: "preset", description: "Verified customer review & editorial pull-quote card." },
      { prop: "EventCard", type: "month, day, time, category, title, location, spotsLeft, price", defaultVal: "preset", description: "Workshop, product drop, or booking card with interactive RSVP toggle." },
    ],
    usageCode: `import {
  BlogCard,
  ProductCard,
  ApparelProductCard,
  TechProductCard,
  DigitalProductCard,
} from "@/components/ui/card"

export function CardPresetsDemo() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* 1. Bekleidung / Apparel Shop Card */}
      <ProductCard
        category="apparel"
        brand="cmplt Atelier · Studio 01"
        title="Relaxed Merino Wool Overshirt"
        subtitle="Heavyweight 340gsm double-faced virgin wool with concealed horn buttons."
        price="$220.00"
        compareAtPrice="$260.00"
        badge="Autumn Drop"
        material="100% Virgin Merino Wool"
        fitBadge="Relaxed Fit"
        sizes={["XS", "S", "M", "L", "XL"]}
        image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80"
        rating={4.9}
        reviewCount={84}
        swatches={[
          { name: "Camel", color: "oklch(0.68 0.08 72)" },
          { name: "Charcoal", color: "oklch(0.28 0.003 85)" },
        ]}
      />

      {/* 2. Technik / Hardware Shop Card */}
      <ProductCard
        category="tech"
        brand="cmplt Audio Lab · Series 04"
        title="Reference Wireless ANC Headphones"
        subtitle="40mm custom beryllium drivers with hybrid active noise cancellation."
        price="$349.00"
        compareAtPrice="$420.00"
        badge="-17% Launch Offer"
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
        rating={4.9}
        reviewCount={142}
        warranty="2-Year International Warranty"
        specs={[
          { label: "Battery", value: "48h ANC" },
          { label: "Driver", value: "40mm Beryllium" },
          { label: "Codec", value: "LDAC / aptX HD" },
          { label: "Weight", value: "264g" },
        ]}
        swatches={[
          { name: "Matte Black", color: "oklch(0.24 0.003 85)" },
          { name: "Lunar Silver", color: "oklch(0.85 0.005 85)" },
        ]}
      />

      {/* 3. Digitale Güter / Free Open-Source Asset Card */}
      <ProductCard
        category="digital"
        brand="cmplt Community · Free Assets"
        title="Geometric Vector Icons & Glyph Library"
        subtitle="450+ clean geometric SVG glyphs, Figma component library, and optimized React icon components."
        price="Free"
        badge="MIT License"
        badgeVariant="success"
        image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
        fileFormats={["Figma (.fig)", "SVG Icons", "React JSX"]}
        license="MIT Open Source License"
        version="v2.4.0"
        fileSize="12.4 MB ZIP"
        instantDownload
        ctaLabel="Download Pack"
        ctaType="download"
      />

      {/* 4. Editorial / Blog Article Card */}
      <BlogCard
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80"
        category="Architecture Deep-Dive"
        date="Sep 28, 2026"
        readTime="7 min read"
        title="Why We Replaced #FFFFFF and #000000 with Calibrated OKLCH Stone & Graphite"
        excerpt="Pure white and pitch black create halation and visual fatigue on modern OLED displays."
        tags={["oklch", "color-science", "design-tokens"]}
        author={{
          name: "Elena Rostova",
          role: "Staff Design Systems Architect",
          avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
        }}
      />
    </div>
  )
}`,
    renderDemo: () => <CardPresetsCatalogDemo />,
  },
  {
    slug: "badge",
    title: "Badge",
    category: "Primitives & Actions",
    baseUiPackage: "cmplt status primitive",
    summary:
      "Compact semantic status and metadata pill supporting 8 token-driven variants.",
    dataAttributes: [],
    propsTable: [
      { prop: "variant", type: "'default' | 'brand' | 'outline' | 'success' | 'warning' | 'danger' | 'info' | 'mono'", defaultVal: "'default'", description: "Visual badge style." },
      { prop: "size", type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: "Padding and font size." },
    ],
    usageCode: `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="brand">Base UI v1.8</Badge>
      <Badge variant="success">Stable</Badge>
      <Badge variant="warning">Beta</Badge>
      <Badge variant="danger">Breaking</Badge>
      <Badge variant="mono">v1.0.0</Badge>
    </div>
  )
}`,
    renderDemo: () => (
      <div className="flex flex-wrap items-center justify-center gap-2 py-2">
        <Badge variant="default">Default</Badge>
        <Badge variant="brand">Brand Accent</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="mono">v1.0.0-oklch</Badge>
      </div>
    ),
  },
  {
    slug: "tooltip",
    title: "Tooltip",
    category: "Overlays & Navigation",
    baseUiPackage: "@base-ui/react/tooltip",
    summary:
      "Accessible floating label triggered on pointer hover or keyboard focus via @base-ui/react/tooltip.",
    dataAttributes: [
      { attr: "data-[open]", description: "Applied when tooltip popup is active." },
    ],
    propsTable: [
      { prop: "side", type: "'top' | 'bottom' | 'left' | 'right'", defaultVal: "'top'", description: "Placement relative to trigger." },
      { prop: "sideOffset", type: "number", defaultVal: "6", description: "Pixel gap between trigger and popup." },
    ],
    usageCode: `import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline">Hover or Focus Me</Button>} />
      <TooltipContent>Installed via @cmplt/tooltip</TooltipContent>
    </Tooltip>
  )
}`,
    renderDemo: () => (
      <div className="flex justify-center py-4">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline">
                Hover or Focus for Base UI Tooltip
              </Button>
            }
          />
          <TooltipContent>
            Zero-config ARIA tooltip with top-layer transitions
          </TooltipContent>
        </Tooltip>
      </div>
    ),
  },
  {
    slug: "progress",
    title: "Progress",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/progress",
    summary:
      "Accessible progress indicator built on @base-ui/react/progress with optional label and formatted value readout.",
    dataAttributes: [],
    propsTable: [
      { prop: "value", type: "number | null", defaultVal: "0", description: "Current completion percentage (0–100)." },
      { prop: "label", type: "string", defaultVal: "undefined", description: "Accessible progress label." },
      { prop: "showValue", type: "boolean", defaultVal: "false", description: "Renders monospace percentage value." },
    ],
    usageCode: `import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  return <Progress value={78} label="Token Compilation" showValue />
}`,
    renderDemo: () => (
      <div className="max-w-sm mx-auto space-y-4">
        <Progress value={84} label="Figma Variable Sync Coverage" showValue />
        <Progress value={100} label="WCAG AA Contrast Audit" showValue />
      </div>
    ),
  },
  {
    slug: "avatar",
    title: "Avatar",
    category: "Primitives & Actions",
    baseUiPackage: "@base-ui/react/avatar",
    summary:
      "User profile picture and initials fallback built on @base-ui/react/avatar with online/offline status badges and stacked team groups.",
    dataAttributes: [
      {
        attr: "data-loading-status",
        description:
          "Current image loading state: 'idle' | 'loading' | 'loaded' | 'error'.",
      },
    ],
    propsTable: [
      {
        prop: "size",
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
        defaultVal: "'md'",
        description: "Pixel diameter and typographic scale.",
      },
      {
        prop: "shape",
        type: "'circle' | 'square'",
        defaultVal: "'circle'",
        description: "Corner geometry (full circle or rounded-md).",
      },
      {
        prop: "status",
        type: "'online' | 'offline' | 'busy' | 'away'",
        defaultVal: "undefined",
        description: "Status indicator dot rendered on the avatar edge.",
      },
    ],
    usageCode: `import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar size="lg">
          <AvatarImage src="/avatars/sarah.jpg" alt="Sarah Connor" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <AvatarBadge status="online" />
      </div>

      <AvatarGroup max={3}>
        <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>CD</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>EF</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>GH</AvatarFallback></Avatar>
      </AvatarGroup>
    </div>
  )
}`,
    renderDemo: () => <AvatarCatalogDemo />,
  },
  {
    slug: "textarea",
    title: "Textarea",
    category: "Forms & Inputs",
    baseUiPackage: "cmplt form primitive",
    summary:
      "Accessible multi-line text input with automatic height resizing, character count limits, and Field container compatibility.",
    dataAttributes: [
      {
        attr: "data-disabled",
        description: "Applied when textarea interaction is disabled.",
      },
    ],
    propsTable: [
      {
        prop: "autoResize",
        type: "boolean",
        defaultVal: "false",
        description:
          "Automatically adjusts height to match scrollHeight content.",
      },
      {
        prop: "variant",
        type: "'default' | 'subtle'",
        defaultVal: "'default'",
        description: "Visual container styling and background tint.",
      },
      {
        prop: "rows",
        type: "number",
        defaultVal: "3",
        description: "Minimum starting row count.",
      },
    ],
    usageCode: `import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return (
    <Textarea
      autoResize
      placeholder="Type release notes or feedback..."
      rows={3}
    />
  )
}`,
    renderDemo: () => <TextareaCatalogDemo />,
  },
  {
    slug: "radio-group",
    title: "Radio Group",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/radio-group & @base-ui/react/radio",
    summary:
      "WAI-ARIA accessible single-select form primitive with animated spring indicators and selectable RadioCards for pricing or plan tiers.",
    dataAttributes: [
      {
        attr: "data-[checked]",
        description: "Present when the radio item is selected.",
      },
      {
        attr: "data-[disabled]",
        description: "Present when radio item is disabled.",
      },
    ],
    propsTable: [
      {
        prop: "value",
        type: "string",
        defaultVal: "undefined",
        description: "Controlled value of the active radio item.",
      },
      {
        prop: "defaultValue",
        type: "string",
        defaultVal: "undefined",
        description: "Initial uncontrolled selected value.",
      },
      {
        prop: "onValueChange",
        type: "(value: string) => void",
        defaultVal: "undefined",
        description: "Callback fired when selected radio option changes.",
      },
    ],
    usageCode: `import { RadioGroup, RadioItem, RadioCard } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="team">
      <RadioCard
        value="personal"
        title="Personal"
        description="For personal exploration."
        price="Free"
      />
      <RadioCard
        value="team"
        title="Team"
        description="For collaborative workspaces and teams."
        price="Free"
      />
    </RadioGroup>
  )
}`,
    renderDemo: () => <RadioGroupCatalogDemo />,
  },
  {
    slug: "toggle",
    title: "Toggle & Toggle Group",
    category: "Primitives & Actions",
    baseUiPackage: "@base-ui/react/toggle & @base-ui/react/toggle-group",
    summary:
      "Two-state action buttons and segmented control groups powered by @base-ui/react with single or multi-select modes.",
    dataAttributes: [
      {
        attr: "data-[pressed]",
        description: "Applied when the toggle button is in pressed state.",
      },
    ],
    propsTable: [
      {
        prop: "pressed",
        type: "boolean",
        defaultVal: "undefined",
        description: "Controlled pressed state for single toggle.",
      },
      {
        prop: "multiple",
        type: "boolean",
        defaultVal: "false",
        description:
          "Allows multiple items to be pressed simultaneously in ToggleGroup.",
      },
      {
        prop: "variant",
        type: "'default' | 'outline' | 'accent'",
        defaultVal: "'default'",
        description: "Visual appearance and surface background.",
      },
    ],
    usageCode: `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

export function FormattingToolbar() {
  return (
    <ToggleGroup multiple variant="outline">
      <ToggleGroupItem value="bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="underline"><Underline className="h-4 w-4" /></ToggleGroupItem>
    </ToggleGroup>
  )
}`,
    renderDemo: () => <ToggleCatalogDemo />,
  },
  {
    slug: "skeleton",
    title: "Skeleton",
    category: "Primitives & Actions",
    baseUiPackage: "cmplt feedback primitive",
    summary:
      "Shimmer pulse loading placeholders with composable helpers for multi-line typography, circular avatars, and card layouts.",
    dataAttributes: [],
    propsTable: [
      {
        prop: "shimmer",
        type: "boolean",
        defaultVal: "true",
        description: "Enables CSS pulse animation.",
      },
      {
        prop: "lines",
        type: "number",
        defaultVal: "3",
        description: "Number of rows rendered by SkeletonText.",
      },
      {
        prop: "size",
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
        defaultVal: "'md'",
        description: "Diameter scale for SkeletonAvatar.",
      },
    ],
    usageCode: `import { Skeleton, SkeletonText, SkeletonAvatar } from "@/components/ui/skeleton"

export function ProfileCardSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <SkeletonAvatar size="lg" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-3 w-1/3" />
      </div>
    </div>
  )
}`,
    renderDemo: () => <SkeletonCatalogDemo />,
  },
  {
    slug: "drawer",
    title: "Drawer & Sheet",
    category: "Overlays & Navigation",
    baseUiPackage: "@base-ui/react/drawer",
    summary:
      "Slide-out panel and mobile sheet overlay built on @base-ui/react/drawer supporting 4 edge directions (right, left, bottom, top) and swipe dismiss.",
    dataAttributes: [
      {
        attr: "data-[open]",
        description: "Applied when drawer popup is visible.",
      },
    ],
    propsTable: [
      {
        prop: "side",
        type: "'right' | 'left' | 'bottom' | 'top'",
        defaultVal: "'right'",
        description: "Edge from which the drawer slides into viewport.",
      },
      {
        prop: "showClose",
        type: "boolean",
        defaultVal: "true",
        description: "Renders top-right close icon button.",
      },
    ],
    usageCode: `import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button>Open Drawer</Button>} />
      <DrawerContent side="right">
        <DrawerHeader>
          <DrawerTitle>Edit Settings</DrawerTitle>
          <DrawerDescription>Adjust your preferences below.</DrawerDescription>
        </DrawerHeader>
        <div className="py-4">Content here</div>
        <DrawerFooter>
          <Button>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`,
    renderDemo: () => <DrawerCatalogDemo />,
  },
  {
    slug: "dropdown-menu",
    title: "Dropdown Menu",
    category: "Overlays & Navigation",
    baseUiPackage: "@base-ui/react/menu",
    summary:
      "Accessible action menu and nested submenu system built on @base-ui/react/menu with keyboard shortcuts, checkboxes, and radio options.",
    dataAttributes: [
      {
        attr: "data-[highlighted]",
        description: "Active hovered or keyboard-navigated item.",
      },
    ],
    propsTable: [
      {
        prop: "align",
        type: "'start' | 'center' | 'end'",
        defaultVal: "'start'",
        description: "Popup alignment relative to trigger.",
      },
      {
        prop: "side",
        type: "'top' | 'bottom' | 'left' | 'right'",
        defaultVal: "'bottom'",
        description: "Placement side for popup.",
      },
    ],
    usageCode: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Options</Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem>
          Profile
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Delete Account</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
    renderDemo: () => <DropdownMenuCatalogDemo />,
  },
  {
    slug: "alert-dialog",
    title: "Alert Dialog",
    category: "Overlays & Navigation",
    baseUiPackage: "@base-ui/react/alert-dialog",
    summary:
      "Confirmation modal interrupting user flow for critical, destructive, or irreversible actions using WAI-ARIA alertdialog.",
    dataAttributes: [
      {
        attr: "data-[open]",
        description: "Applied when alert dialog popup is open.",
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: "'danger' | 'primary' | 'secondary'",
        defaultVal: "'danger'",
        description: "Confirmation button visual accent.",
      },
    ],
    usageCode: `import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="danger">Delete</Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="danger">Confirm Deletion</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
    renderDemo: () => <AlertDialogCatalogDemo />,
  },
  {
    slug: "breadcrumb",
    title: "Breadcrumb",
    category: "Overlays & Navigation",
    baseUiPackage: "cmplt navigation primitive",
    summary:
      "Hierarchical wayfinding breadcrumb trail supporting custom chevron separators, current page markers, and collapsed ellipsis segments.",
    dataAttributes: [
      {
        attr: "aria-current='page'",
        description: "Applied to the active end destination.",
      },
    ],
    propsTable: [
      {
        prop: "separator",
        type: "ReactNode",
        defaultVal: "<ChevronRight />",
        description: "Custom delimiter between breadcrumb links.",
      },
    ],
    usageCode: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="/docs">Docs</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Components</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`,
    renderDemo: () => <BreadcrumbCatalogDemo />,
  },
  {
    slug: "pagination",
    title: "Pagination",
    category: "Overlays & Navigation",
    baseUiPackage: "cmplt navigation primitive",
    summary:
      "Accessible pagination controls with active page indicators, chevron previous/next triggers, and ellipsis markers for multi-page data.",
    dataAttributes: [
      {
        attr: "aria-current='page'",
        description: "Applied to the active page button.",
      },
    ],
    propsTable: [
      {
        prop: "isActive",
        type: "boolean",
        defaultVal: "false",
        description: "Highlights current active page number.",
      },
      {
        prop: "disabled",
        type: "boolean",
        defaultVal: "false",
        description: "Disables previous/next buttons at boundaries.",
      },
    ],
    usageCode: `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination"

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink isActive>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`,
    renderDemo: () => <PaginationCatalogDemo />,
  },
  {
    slug: "alert",
    title: "Alert",
    category: "Primitives & Actions",
    baseUiPackage: "cmplt status primitive",
    summary:
      "Inline semantic status callout banner supporting 5 color variants (default, info, success, warning, danger) with automatic icon slotting.",
    dataAttributes: [
      {
        attr: "role='alert'",
        description: "Screen reader landmark for critical notifications.",
      },
    ],
    propsTable: [
      {
        prop: "variant",
        type: "'default' | 'info' | 'success' | 'warning' | 'danger'",
        defaultVal: "'default'",
        description: "Semantic color style and border accent.",
      },
      {
        prop: "hideIcon",
        type: "boolean",
        defaultVal: "false",
        description: "Suppresses rendering of the automatic status icon.",
      },
    ],
    usageCode: `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert variant="success">
      <AlertTitle>Audit Verified</AlertTitle>
      <AlertDescription>All 3-tier OKLCH tokens pass contrast guardrails.</AlertDescription>
    </Alert>
  )
}`,
    renderDemo: () => <AlertCatalogDemo />,
  },
  {
    slug: "toast",
    title: "Toast",
    category: "Overlays & Navigation",
    baseUiPackage: "@base-ui/react/toast",
    summary:
      "Floating notification toast queue powered by @base-ui/react/toast with auto-dismiss timers, swipe-to-dismiss, and imperactive toast() triggers.",
    dataAttributes: [
      {
        attr: "data-[swiping]",
        description: "Applied when user gestures to dismiss toast.",
      },
    ],
    propsTable: [
      {
        prop: "title",
        type: "ReactNode",
        defaultVal: "undefined",
        description: "Main toast header text.",
      },
      {
        prop: "variant",
        type: "'default' | 'success' | 'warning' | 'danger' | 'info'",
        defaultVal: "'default'",
        description: "Semantic status color theme.",
      },
      {
        prop: "timeout",
        type: "number",
        defaultVal: "5000",
        description: "Auto-dismiss duration in milliseconds.",
      },
    ],
    usageCode: `import { toast, Toaster, ToastProvider } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  return (
    <ToastProvider>
      <Button onClick={() => toast({ title: "Updated", variant: "success" })}>
        Show Toast
      </Button>
      <Toaster position="bottom-right" />
    </ToastProvider>
  )
}`,
    renderDemo: () => <ToastCatalogDemo />,
  },
  {
    slug: "table",
    title: "Table",
    category: "Forms & Inputs",
    baseUiPackage: "cmplt data primitive",
    summary:
      "Responsive data table with zebra row borders, hover highlights, selection states, and tabular monospace alignment.",
    dataAttributes: [
      {
        attr: "data-[state='selected']",
        description: "Applied to active selected table rows.",
      },
    ],
    propsTable: [
      {
        prop: "className",
        type: "string",
        defaultVal: "undefined",
        description: "Custom classes applied to the table container.",
      },
    ],
    usageCode: `import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table"

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>API Edge</TableCell>
          <TableCell>Operational</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`,
    renderDemo: () => <TableCatalogDemo />,
  },
  {
    slug: "scroll-area",
    title: "Scroll Area",
    category: "Primitives & Actions",
    baseUiPackage: "@base-ui/react/scroll-area",
    summary:
      "Cross-browser accessible custom scroll container built on @base-ui/react/scroll-area with sleek thumb indicators.",
    dataAttributes: [
      {
        attr: "data-[orientation]",
        description: "'vertical' | 'horizontal' scrollbar track orientation.",
      },
    ],
    propsTable: [
      {
        prop: "orientation",
        type: "'vertical' | 'horizontal'",
        defaultVal: "'vertical'",
        description: "Active scrollbar axis.",
      },
    ],
    usageCode: `import { ScrollArea } from "@/components/ui/scroll-area"

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-48 w-full rounded-md border p-4">
      Long list of items...
    </ScrollArea>
  )
}`,
    renderDemo: () => <ScrollAreaCatalogDemo />,
  },
  {
    slug: "collapsible",
    title: "Collapsible",
    category: "Primitives & Actions",
    baseUiPackage: "@base-ui/react/collapsible",
    summary:
      "Lightweight expanding section toggle built on @base-ui/react/collapsible for smooth height transitions and accessible disclosure.",
    dataAttributes: [
      {
        attr: "data-[open]",
        description: "Applied when disclosure panel is visible.",
      },
    ],
    propsTable: [
      {
        prop: "open",
        type: "boolean",
        defaultVal: "undefined",
        description: "Controlled open state.",
      },
      {
        prop: "onOpenChange",
        type: "(open: boolean) => void",
        defaultVal: "undefined",
        description: "Callback fired when open state changes.",
      },
    ],
    usageCode: `import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

export function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger render={<Button>Toggle Details</Button>} />
      <CollapsibleContent>Secret telemetry details here.</CollapsibleContent>
    </Collapsible>
  )
}`,
    renderDemo: () => <CollapsibleCatalogDemo />,
  },
  {
    slug: "empty-state",
    title: "Empty State",
    category: "Primitives & Actions",
    baseUiPackage: "cmplt placeholder primitive",
    summary:
      "Centered placeholder container for blank dashboards, empty search results, and fresh workspace onboarding states.",
    dataAttributes: [],
    propsTable: [
      {
        prop: "dashed",
        type: "boolean",
        defaultVal: "true",
        description: "Renders a subtle 2px dashed container border.",
      },
    ],
    usageCode: `import { EmptyState, EmptyStateIcon, EmptyStateTitle, EmptyStateDescription, EmptyStateActions } from "@/components/ui/empty-state"
import { Button } from "@/components/ui/button"
import { FolderOpen } from "lucide-react"

export function EmptyStateDemo() {
  return (
    <EmptyState>
      <EmptyStateIcon><FolderOpen className="h-6 w-6" /></EmptyStateIcon>
      <EmptyStateTitle>No Workspaces Found</EmptyStateTitle>
      <EmptyStateDescription>Create a new workspace to start designing.</EmptyStateDescription>
      <EmptyStateActions><Button size="sm">Create Workspace</Button></EmptyStateActions>
    </EmptyState>
  )
}`,
    renderDemo: () => <EmptyStateCatalogDemo />,
  },
  {
    slug: "slider",
    title: "Slider",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/slider",
    summary:
      "Accessible range slider built on @base-ui/react/slider with single and dual-thumb range support, smooth spring physics, and OKLCH color tokens.",
    dataAttributes: [
      {
        attr: "data-[disabled]",
        description: "Applied when the slider is disabled.",
      },
      {
        attr: "data-[orientation]",
        description: "'horizontal' or 'vertical' orientation.",
      },
    ],
    propsTable: [
      {
        prop: "value",
        type: "number | number[]",
        defaultVal: "undefined",
        description: "Controlled value or dual range values.",
      },
      {
        prop: "min",
        type: "number",
        defaultVal: "0",
        description: "Minimum value.",
      },
      {
        prop: "max",
        type: "number",
        defaultVal: "100",
        description: "Maximum value.",
      },
      {
        prop: "step",
        type: "number",
        defaultVal: "1",
        description: "Granular step size.",
      },
    ],
    usageCode: `import { Slider } from "@/components/ui/slider"

export function SliderDemo() {
  return (
    <Slider
      label="Brightness"
      showValue
      defaultValue={50}
      min={0}
      max={100}
    />
  )
}`,
    renderDemo: () => <SliderCatalogDemo />,
  },
  {
    slug: "number-field",
    title: "Number Field",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/number-field",
    summary:
      "Accessible numeric stepper and scrub input powered by @base-ui/react/number-field with stacked and inline stepper controls.",
    dataAttributes: [
      {
        attr: "data-[disabled]",
        description: "Applied when the number field is disabled.",
      },
    ],
    propsTable: [
      {
        prop: "value",
        type: "number | null",
        defaultVal: "undefined",
        description: "Controlled numeric value.",
      },
      {
        prop: "min",
        type: "number",
        defaultVal: "undefined",
        description: "Minimum allowable value.",
      },
      {
        prop: "max",
        type: "number",
        defaultVal: "undefined",
        description: "Maximum allowable value.",
      },
      {
        prop: "stepperStyle",
        type: "'stacked' | 'inline'",
        defaultVal: "'stacked'",
        description: "Layout style of increment/decrement buttons.",
      },
    ],
    usageCode: `import { NumberField } from "@/components/ui/number-field"

export function NumberFieldDemo() {
  return (
    <NumberField
      label="Quantity"
      defaultValue={1}
      min={1}
      max={10}
      stepperStyle="stacked"
    />
  )
}`,
    renderDemo: () => <NumberFieldCatalogDemo />,
  },
  {
    slug: "otp-field",
    title: "OTP Field",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/otp-field",
    summary:
      "Accessible one-time password and verification PIN input slots powered by @base-ui/react/otp-field with automatic focus advancement and separator splits.",
    dataAttributes: [
      {
        attr: "data-[filled]",
        description: "Applied to slots containing a character.",
      },
    ],
    propsTable: [
      {
        prop: "length",
        type: "number",
        defaultVal: "6",
        description: "Total number of PIN slots.",
      },
      {
        prop: "separatorIndex",
        type: "number",
        defaultVal: "3",
        description: "Slot index after which to place visual separator.",
      },
    ],
    usageCode: `import { OTPField } from "@/components/ui/otp-field"

export function OTPFieldDemo() {
  return (
    <OTPField
      length={6}
      separatorIndex={3}
      onValueChange={(code) => console.log(code)}
    />
  )
}`,
    renderDemo: () => <OTPFieldCatalogDemo />,
  },
  {
    slug: "combobox",
    title: "Combobox",
    category: "Forms & Inputs",
    baseUiPackage: "@base-ui/react/combobox",
    summary:
      "Accessible searchable dropdown and auto-completing selector built on @base-ui/react/combobox with popup positioning and tag chips.",
    dataAttributes: [
      {
        attr: "data-[highlighted]",
        description: "Applied when an item is active via keyboard.",
      },
      {
        attr: "data-[selected]",
        description: "Applied when an item is chosen.",
      },
    ],
    propsTable: [
      {
        prop: "value",
        type: "any",
        defaultVal: "undefined",
        description: "Controlled selected value.",
      },
      {
        prop: "onValueChange",
        type: "(value: any) => void",
        defaultVal: "undefined",
        description: "Callback fired when selection changes.",
      },
    ],
    usageCode: `import {
  Combobox,
  ComboboxInputGroup,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox"

export function ComboboxDemo() {
  return (
    <Combobox defaultValue="next">
      <ComboboxInputGroup>
        <ComboboxInput placeholder="Search..." />
        <ComboboxTrigger />
      </ComboboxInputGroup>
      <ComboboxContent>
        <ComboboxEmpty>No results.</ComboboxEmpty>
        <ComboboxItem value="next">Next.js</ComboboxItem>
        <ComboboxItem value="react">React</ComboboxItem>
      </ComboboxContent>
    </Combobox>
  )
}`,
    renderDemo: () => <ComboboxCatalogDemo />,
  },
  {
    slug: "meter",
    title: "Meter",
    category: "Primitives & Actions",
    baseUiPackage: "@base-ui/react/meter",
    summary:
      "Accessible scalar measurement and capacity indicator powered by @base-ui/react/meter with semantic status color variants.",
    dataAttributes: [],
    propsTable: [
      {
        prop: "value",
        type: "number",
        defaultVal: "0",
        description: "Current value along the range.",
      },
      {
        prop: "variant",
        type: "'default' | 'success' | 'warning' | 'danger' | 'info'",
        defaultVal: "'default'",
        description: "Semantic color theme for the meter bar.",
      },
      {
        prop: "showValue",
        type: "boolean",
        defaultVal: "false",
        description: "Displays formatted numeric value alongside label.",
      },
    ],
    usageCode: `import { Meter } from "@/components/ui/meter"

export function MeterDemo() {
  return (
    <Meter
      label="Disk Usage"
      value={75}
      showValue
      variant="warning"
    />
  )
}`,
    renderDemo: () => <MeterCatalogDemo />,
  },
  {
    slug: "timeline",
    title: "Timeline",
    category: "Primitives & Actions",
    baseUiPackage: "cmplt timeline compound primitive",
    summary:
      "Chronological activity log and audit stream with connected line nodes, status badges, and timestamp formatting.",
    dataAttributes: [],
    propsTable: [
      {
        prop: "variant",
        type: "'default' | 'accent' | 'success' | 'warning' | 'danger' | 'neutral'",
        defaultVal: "'default'",
        description: "Visual node badge style.",
      },
    ],
    usageCode: `import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineHeader,
  TimelineTitle,
  TimelineTime,
  TimelineDescription,
} from "@/components/ui/timeline"
import { GitCommit } from "lucide-react"

export function TimelineDemo() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineDot variant="accent"><GitCommit className="size-4" /></TimelineDot>
        <TimelineContent>
          <TimelineHeader>
            <TimelineTitle>Deployed v1.0.0</TimelineTitle>
            <TimelineTime>2m ago</TimelineTime>
          </TimelineHeader>
          <TimelineDescription>Base system operational.</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}`,
    renderDemo: () => <TimelineCatalogDemo />,
  },
];

export function getComponentDoc(slug: string): ComponentDocEntry | undefined {
  return COMPONENT_DOCS.find((c) => c.slug === slug);
}
