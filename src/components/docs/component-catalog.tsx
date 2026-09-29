"use client";

import * as React from "react";
import { Button } from "@/registry/cmplt/ui/button";
import { AnimatedCtaButton } from "@/registry/cmplt/ui/animated-cta-button";
import { HighlightInput } from "@/registry/cmplt/ui/highlight-input";
import { InteractiveDotField } from "@/registry/cmplt/ui/interactive-dot-field";
import { Badge } from "@/registry/cmplt/ui/badge";
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
import { Sparkles, Layers, Shield, Bell, Code2, Send, ArrowRight, Search } from "lucide-react";

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
      { prop: "size (Heading)", type: "'display-xl' | 'display-lg' | 'h1' | 'h2' | 'h3' | 'h4'", defaultVal: "'h2'", description: "Maps to fluid Utopia clamp() step (--cmplt-step-1 through --cmplt-step-6)." },
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
      "WebGL Three.js custom shader dot-matrix background field driven by GSAP quickTo pointer inertia, organic sine breathing, and theme-reactive OKLCH accent illumination (Warm Coral in Light Mode, Forest Jade in Dark Mode).",
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
    <section className="relative h-72 overflow-hidden rounded-cmplt-xl border border-border-default bg-canvas">
      <InteractiveDotField spacing={22} interactionRadius={160} maxDisplacement={8} />
      <div className="relative z-10 flex h-full items-center justify-center">
        <span className="rounded-cmplt-full border border-border-default bg-surface/90 px-4 py-1.5 text-xs font-medium text-fg-primary shadow-cmplt-sm backdrop-blur-sm">
          Move your cursor across the WebGL dot field
        </span>
      </div>
    </section>
  )
}`,
    renderDemo: () => (
      <div className="relative h-64 w-full overflow-hidden rounded-cmplt-xl border border-border-default bg-canvas">
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
        <Sparkles className="h-4 w-4 text-fg-accent" />
        Explore Pro Blocks
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
          <Sparkles className="h-4 w-4 text-fg-accent" />
          Explore Pro Blocks
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
        defaultValue="@cmplt/pro-blocks"
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
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="subtle">Subtle Brand</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Destructive</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3 border-t border-border-subtle pt-4">
          <Button size="xs" variant="secondary">Size XS</Button>
          <Button size="sm" variant="secondary">Size SM</Button>
          <Button size="md" variant="secondary">Size MD</Button>
          <Button size="lg" variant="secondary">Size LG</Button>
          <Button disabled variant="primary">Disabled State</Button>
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
        <SelectItem value="precision">Precision Indigo (Default)</SelectItem>
        <SelectItem value="editorial">Warm Editorial</SelectItem>
        <SelectItem value="emerald">Cyber Emerald</SelectItem>
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
            <SelectItem value="precision">Precision Indigo (Default)</SelectItem>
            <SelectItem value="editorial">Warm Tactile Editorial</SelectItem>
            <SelectItem value="emerald">High-Contrast Emerald</SelectItem>
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
                Segmented control uses a pill-shaped container (<code className="font-mono text-fg-accent">9999px</code>) and pill active indicator.
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
                <Code2 className="h-4 w-4 text-fg-accent" /> Open Token Popover
              </Button>
            }
          />
          <PopoverContent>
            <PopoverTitle>Surface Elevation Token</PopoverTitle>
            <PopoverDescription>
              This popover uses <code className="font-mono text-fg-accent">bg-elevated</code> and <code className="font-mono text-fg-accent">shadow-cmplt-lg</code> with top-layer transitions.
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
        <label className="flex items-center justify-between rounded-cmplt-md border border-border-subtle bg-surface p-3 cursor-pointer">
          <span className="text-xs font-medium text-fg-primary">
            Automatic Figma Variable Sync
          </span>
          <Switch defaultChecked />
        </label>
        <label className="flex items-center justify-between rounded-cmplt-md border border-border-subtle bg-surface p-3 cursor-pointer">
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
      "Concentric surface container with composable sub-primitives (CardMedia, CardEyebrow, CardMeta, CardPrice) and 7 ready-to-use domain presets: ProductCard (E-Commerce), BlogCard (Editorial), MetricCard (KPI/Telemetry), ProfileCard (Creator/Team), FeatureCard (Bento), TestimonialCard (Reviews), and EventCard (Bookings).",
    dataAttributes: [
      { attr: "data-slot=\"card-media\"", description: "Triggers automatic content-based header spacing via CSS :has([data-slot=\"card-media\"])." },
      { attr: "data-slot=\"card-meta\"", description: "Inset grouped key-value / metadata well with 10px concentric radius." },
      { attr: "data-slot=\"card-price\"", description: "Tabular numeric price primitive with optional strikethrough comparison." },
    ],
    propsTable: [
      { prop: "variant (Card)", type: "'default' | 'elevated' | 'subtle' | 'interactive' | 'outline' | 'featured'", defaultVal: "'default'", description: "Surface elevation, border role, and highlight contour." },
      { prop: "layout (Card / BlogCard)", type: "'vertical' | 'horizontal' | 'adaptive'", defaultVal: "'vertical'", description: "Stacked vertical flow, side-by-side split, or @container size-aware adaptive layout." },
      { prop: "ProductCard", type: "brand, title, price, compareAtPrice, swatches, specs, rating, badge", defaultVal: "preset", description: "E-Commerce & shop product card with interactive swatches, wishlist heart, and bag state." },
      { prop: "BlogCard", type: "category, readTime, date, title, excerpt, author, tags, layout", defaultVal: "preset", description: "Editorial & blog article card supporting vertical grid and horizontal featured layouts." },
      { prop: "MetricCard", type: "label, value, delta, deltaTrend, sparkline, targetLabel, targetValue", defaultVal: "preset", description: "Analytical KPI & telemetry card with tabular figures and bar sparkline." },
      { prop: "ProfileCard", type: "name, role, handle, avatarText, verified, status, skills, stats", defaultVal: "preset", description: "Creator, author, or seller card with 3-column inset metrics box." },
      { prop: "FeatureCard", type: "eyebrow, title, description, icon, badge, visual, highlights", defaultVal: "preset", description: "Bento grid & product feature highlight card with checklist items." },
      { prop: "TestimonialCard", type: "quote, authorName, authorRole, company, rating, metricHighlight", defaultVal: "preset", description: "Verified customer review & editorial pull-quote card." },
      { prop: "EventCard", type: "month, day, time, category, title, location, spotsLeft, price", defaultVal: "preset", description: "Workshop, product drop, or booking card with interactive RSVP toggle." },
    ],
    usageCode: `import {
  BlogCard,
  ProductCard,
  MetricCard,
  ProfileCard,
  FeatureCard,
  TestimonialCard,
  EventCard,
} from "@/components/ui/card"

export function CardPresetsDemo() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* 1. E-Commerce / Shop Product Card */}
      <ProductCard
        brand="cmplt Audio Lab · Series 04"
        title="Reference Studio Monitor M-01"
        subtitle="Anodized warm aluminum enclosure with room-calibrated DSP."
        price="$349.00"
        compareAtPrice="$420.00"
        badge="New Release"
        rating={4.9}
        reviewCount={142}
        swatches={[
          { name: "Alabaster", color: "oklch(0.95 0.003 85)" },
          { name: "Graphite", color: "oklch(0.28 0.003 85)" },
          { name: "Warm Coral", color: "oklch(0.645 0.175 34)" },
        ]}
      />

      {/* 2. Editorial / Blog Article Card */}
      <BlogCard
        category="Design Engineering"
        date="Sep 28, 2026"
        readTime="6 min read"
        title="Calibrating Perceptual OKLCH Surfaces Without Harsh Extremes"
        excerpt="Why replacing #FFFFFF and #000000 with Warm Alabaster and Matte Graphite reduces eye strain and elevates hierarchy."
        tags={["oklch", "tokens", "a11y"]}
        author={{
          name: "Elena Rostova",
          role: "Staff Design Systems Architect",
          avatarText: "ER",
        }}
      />
    </div>
  )
}`,
    renderDemo: () => (
      <div className="space-y-6">
        <Tabs defaultValue="shop">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2">
            <TabsList variant="segmented" className="flex-wrap">
              <TabsTrigger value="shop">Shop / Product</TabsTrigger>
              <TabsTrigger value="blog">Blog / Editorial</TabsTrigger>
              <TabsTrigger value="metrics">KPI / Telemetry</TabsTrigger>
              <TabsTrigger value="social">Profile & Reviews</TabsTrigger>
              <TabsTrigger value="bento">Bento & Events</TabsTrigger>
              <TabsTrigger value="surfaces">Base Surfaces</TabsTrigger>
            </TabsList>
          </div>

          {/* TAB 1: E-COMMERCE / SHOP PRODUCT CARDS */}
          <TabsContent value="shop" className="pt-3">
            <div className="grid gap-5 md:grid-cols-2">
              <ProductCard
                brand="cmplt Audio Lab · Series 04"
                title="Reference Studio Monitor M-01"
                subtitle="CNC-machined warm aluminum chassis with 24-bit room-calibrated DSP waveguide."
                price="$349.00"
                compareAtPrice="$420.00"
                badge="-17% Launch Offer"
                badgeVariant="brand"
                rating={4.9}
                reviewCount={142}
                swatches={[
                  { name: "Alabaster", color: "oklch(0.95 0.003 85)" },
                  { name: "Graphite", color: "oklch(0.28 0.003 85)" },
                  { name: "Coral", color: "oklch(0.645 0.175 34)" },
                ]}
                specs={[
                  { label: "Frequency", value: "38Hz – 24kHz" },
                  { label: "Enclosure", value: "CNC Aluminum" },
                ]}
                media={
                  <div className="relative flex flex-col items-center justify-center gap-2 p-6 transition-transform duration-300 group-hover:scale-105">
                    <div className="flex h-20 w-20 items-center justify-center rounded-cmplt-xl border border-border-default bg-elevated shadow-cmplt-md">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-border-strong bg-subtle">
                        <div className="h-3.5 w-3.5 rounded-full bg-accent" />
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-fg-muted">
                      DSP · 112dB SPL Peak
                    </span>
                  </div>
                }
              />

              <ProductCard
                brand="cmplt Digital Goods · v1.3"
                title="Complete Enterprise Token & Figma Kit"
                subtitle="Full W3C DTCG JSON pipeline, 42 OKLCH variables, and 25+ Base UI registry components."
                price="$189.00"
                badge="Instant CLI"
                badgeVariant="success"
                rating={5.0}
                reviewCount={89}
                defaultWishlisted
                swatches={[
                  { name: "Coral", color: "oklch(0.645 0.175 34)" },
                  { name: "Jade", color: "oklch(0.515 0.115 162)" },
                  { name: "Indigo", color: "oklch(0.57 0.19 275)" },
                ]}
                specs={[
                  { label: "License", value: "Unlimited Teams" },
                  { label: "Format", value: "TSX + Figma JSON" },
                ]}
                ctaLabel="Buy License"
                media={
                  <div className="flex flex-col items-center justify-center gap-2.5 p-6 transition-transform duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-2 rounded-cmplt-lg border border-border-default bg-elevated px-3.5 py-2.5 shadow-cmplt-sm">
                      <Layers className="h-5 w-5 text-fg-accent" />
                      <div className="text-left">
                        <div className="font-mono text-[11px] font-semibold text-fg-primary">
                          @cmplt/pro-kit
                        </div>
                        <div className="font-mono text-[9.5px] text-fg-muted">
                          tokens.json ↔ Figma
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </TabsContent>

          {/* TAB 2: BLOG & EDITORIAL ARTICLE CARDS */}
          <TabsContent value="blog" className="pt-3 space-y-5">
            {/* Horizontal Featured Article */}
            <BlogCard
              layout="horizontal"
              featured
              category="Architecture Deep-Dive"
              date="Sep 28, 2026"
              readTime="7 min read"
              title="Why We Replaced #FFFFFF and #000000 with Calibrated OKLCH Stone & Graphite"
              excerpt="Pure white and pitch black create halation and visual fatigue on modern OLED displays. Discover how our 4-step warm neutral luminance curve (Hue 85) keeps interfaces crisp and tactile."
              tags={["oklch", "color-science", "design-tokens"]}
              author={{
                name: "Elena Rostova",
                role: "Staff Design Systems Architect",
                avatarText: "ER",
              }}
              media={
                <div className="flex flex-col items-center justify-center gap-2.5 p-6">
                  <div className="flex items-center gap-1.5">
                    <span className="h-8 w-8 rounded-cmplt-sm border border-border-default bg-[#FBFBF9] shadow-cmplt-xs" />
                    <span className="h-8 w-8 rounded-cmplt-sm border border-border-default bg-[#262625] shadow-cmplt-xs" />
                    <span className="h-8 w-8 rounded-cmplt-sm border border-border-default bg-[var(--cmplt-coral-500)] shadow-cmplt-xs" />
                    <span className="h-8 w-8 rounded-cmplt-sm border border-border-default bg-[var(--cmplt-jade-500)] shadow-cmplt-xs" />
                  </div>
                  <span className="font-mono text-[10px] text-fg-muted">
                    L = 0.242 → 0.992 · Hue 85
                  </span>
                </div>
              }
            />

            {/* 2-Column Vertical Blog Cards */}
            <div className="grid gap-5 md:grid-cols-2">
              <BlogCard
                category="Engineering"
                date="Sep 19, 2026"
                readTime="5 min read"
                title="Optical Concentricity: Calculating Inner Border Radii in Nested UI Shells"
                excerpt="When nesting a media frame inside a 20px rounded card with 8px padding, using the same radius looks pinched. Learn the R_inner = R_outer - padding formula."
                tags={["css", "geometry", "cards"]}
                author={{
                  name: "Marcus Vance",
                  role: "UI Infrastructure Lead",
                  avatarText: "MV",
                }}
              />

              <BlogCard
                category="Release Notes"
                date="Sep 12, 2026"
                readTime="4 min read"
                title="Zero-Lock-In Component Distribution with Base UI v1.8 and shadcn CLI"
                excerpt="How we compile headless @base-ui/react primitives and GSAP motion highlights into static JSON endpoints ready for 1-command installation."
                tags={["base-ui", "shadcn", "cli"]}
                author={{
                  name: "Aria Chen",
                  role: "Core Maintainer",
                  avatarText: "AC",
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
                icon={<Sparkles className="h-3.5 w-3.5 text-fg-accent" />}
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
                icon={<Code2 className="h-3.5 w-3.5 text-fg-accent" />}
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
                icon={<Layers className="h-3.5 w-3.5 text-fg-accent" />}
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
                skills={["@base-ui/react", "OKLCH Tokens", "GSAP Physics", "Tailwind v4"]}
                stats={[
                  { label: "Components", value: "48" },
                  { label: "CLI Downloads", value: "14.2k" },
                  { label: "Rating", value: "4.98" },
                ]}
                primaryActionLabel="Connect"
                secondaryActionLabel="Sponsor"
              />

              <TestimonialCard
                rating={5}
                verifiedBadge="Verified Enterprise Team"
                quote="Switching our storefront and editorial blog to @cmplt/card presets cut our UI PR review time in half. The concentric inner border radii and tabular numerals make every product grid look art-directed out of the box."
                authorName="HannahVogel"
                authorRole="VP of Product Design"
                company="Nordic Commerce"
                avatarText="HV"
                metricHighlight={{
                  label: "Checkout Conversion Lift",
                  value: "+22.8%",
                }}
              />
            </div>
          </TabsContent>

          {/* TAB 5: BENTO FEATURE & EVENT / BOOKING CARDS */}
          <TabsContent value="bento" className="pt-3">
            <div className="grid gap-5 md:grid-cols-2">
              <FeatureCard
                eyebrow="Code ↔ Figma Pipeline"
                badge="W3C DTCG"
                title="Bi-Directional Variable Synchronization"
                description="Every semantic surface, border, and fluid typography step in tokens.css is automatically mirrored in W3C JSON for zero-drift Figma handoff."
                icon={<Shield className="h-3.5 w-3.5" />}
                highlights={[
                  "Automatic Light & Dark mode collection modes",
                  "Concentric radius tokens (R_inner = R_outer - padding)",
                  "WCAG AAA contrast guardrails built-in",
                ]}
                ctaLabel="Inspect token schema"
                visual={
                  <div className="flex items-center gap-3">
                    <Badge variant="mono" size="sm">tokens.css</Badge>
                    <ArrowRight className="h-3.5 w-3.5 text-fg-accent" />
                    <Badge variant="brand" size="sm">Figma Variables</Badge>
                  </div>
                }
              />

              <EventCard
                month="OCT"
                day="24"
                time="17:00 – 18:30 CEST · Live Workshop"
                category="Design Systems Masterclass"
                title="Architecting Multi-Surface UI & E-Commerce Presets with Base UI"
                description="Hands-on session covering concentric geometry, OKLCH dark mode weight compensation, and custom shadcn registry endpoints."
                location="Livestream + Berlin Studio"
                spotsLeft="9 spots left"
                price="Free with RSVP"
                ctaLabel="Reserve Seat"
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
                    Accent border contour (--border-accent)
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    ),
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
];

export function getComponentDoc(slug: string): ComponentDocEntry | undefined {
  return COMPONENT_DOCS.find((c) => c.slug === slug);
}
