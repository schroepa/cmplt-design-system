export type PillarSlug =
  | "visual-foundations"
  | "interaction-ergonomics"
  | "architecture-delivery";

export interface GranularDecisionRecord {
  id: string;
  title: string;
  pillar: PillarSlug;
  status: "Enforced" | "Ratified" | "Living Standard";
  versionIntroduced: string;
  lastUpdated: string;
  summary: string;
  contextAndProblem: string;
  granularSpec: {
    parameter: string;
    value: string;
    detail: string;
  }[];
  rationale: string;
  rejectedAlternatives: string[];
  sourceFiles: string[];
  verificationRule: string;
}

export interface PillarSpecification {
  slug: PillarSlug;
  number: string;
  shortTitle: string;
  fullTitle: string;
  legacyAcronym: "UI" | "UX" | "Tech";
  uiWritingRationale: string;
  tagline: string;
  summary: string;
  corePrinciples: {
    title: string;
    description: string;
  }[];
  keyMetrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  decisions: GranularDecisionRecord[];
}

export interface UiWritingGuideline {
  id: string;
  rule: string;
  insteadOf: string;
  usePreferred: string;
  rationale: string;
}

export interface RegistryArtifactDoc {
  name: string;
  type:
    | "registry:ui"
    | "registry:hook"
    | "registry:block"
    | "registry:component"
    | "registry:lib"
    | "registry:theme"
    | "registry:base"
    | "registry:font"
    | "registry:page"
    | "registry:file"
    | "registry:item"
    | "registry:style";
  pillar: PillarSlug;
  engine: string;
  sourcePath: string;
  targetPath: string;
  keyDecisions: string[];
  summary: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  pillarImpact: PillarSlug[];
  decisionsAddedOrUpdated: string[];
  summary: string;
}

export const LIVING_DOC_META = {
  title: "cmplt Living System Blueprint & Decision Registry",
  version: "1.4.0",
  lastUpdated: "2026-09-28",
  status: "Living Document · Mandatory Continuous Sync",
  owner: "Patrick Schrödter (ptrckschrdtr)",
  website: "https://ptrckschrdtr.de",
  github: "https://github.com/schroepa",
  mandate:
    "This specification is the authoritative, living single source of truth for the cmplt design system. Every visual token adjustment, interaction behavior change, new component, or architectural refactor MUST be documented here with a granular Decision Record in the same commit.",
  updateProtocol: [
    {
      step: "01. Classify the Domain",
      detail:
        "Assign every change to one of the three UI-writing compliant pillars: Visual Foundations & Aesthetics (UI), Interaction, Motion & Accessibility (UX), or System Architecture & Delivery (Tech).",
    },
    {
      step: "02. Record Granular Parameters",
      detail:
        "Document exact CSS variables, OKLCH coordinates, clamp() formulas, GSAP easing/durations, Base UI data-* attributes, and rejected alternatives in src/components/docs/living-blueprint-catalog.ts.",
    },
    {
      step: "03. Synchronize Markdown & Portal Docs",
      detail:
        "Update the corresponding Markdown specification in docs/ and verify that /docs/blueprint renders the updated decision record and version ledger.",
    },
    {
      step: "04. Validate Registry & Build Integrity",
      detail:
        "Run npm run registry:build and npm run build to guarantee all 26+ static /r/[name].json endpoints and documentation routes compile without drift.",
    },
  ],
};

export const UI_WRITING_TAXONOMY: UiWritingGuideline[] = [
  {
    id: "UW-01",
    rule: "Domain Pillar Naming (No Raw Two-Letter Acronyms)",
    insteadOf: "UI / User Interface",
    usePreferred: "Visual Foundations & Aesthetics (Nav: Visual Foundations)",
    rationale:
      "Two-letter acronyms like 'UI' and 'UX' blur together in navigation sidebars. 'Visual Foundations & Aesthetics' immediately communicates concrete scope: perceptual OKLCH color, surface hierarchy, fluid typography, and concentric geometry.",
  },
  {
    id: "UW-02",
    rule: "Behavioral & Human-Centric Naming",
    insteadOf: "UX / User Experience",
    usePreferred: "Interaction, Motion & Accessibility (Nav: Interaction & Ergonomics)",
    rationale:
      "'UX' is overly broad. Naming the pillar after its three observable pillars—Interaction, Motion, and Accessibility (Ergonomics)—tells engineers and designers exactly where keyboard contracts, reading measure guardrails, and GSAP physics are governed.",
  },
  {
    id: "UW-03",
    rule: "Architectural & Delivery Clarity",
    insteadOf: "Tech / Technical",
    usePreferred: "System Architecture & Delivery (Nav: Architecture & Delivery)",
    rationale:
      "'Tech' is colloquial shorthand. 'System Architecture & Delivery' accurately frames the engineering stack, W3C DTCG token pipeline, static shadcn registry compiler, and 1:1 Figma synchronization.",
  },
  {
    id: "UW-04",
    rule: "Action-Oriented CTA Microcopy",
    insteadOf: "Submit / Click Here / More / OK",
    usePreferred: "Deploy Registry / Sync 42 Variables / Explore 3-Tier Tokens",
    rationale:
      "Every primary button and trigger starts with a concrete verb and names the object or outcome (e.g., 'Push to Figma', 'Generate CLI Config'), reducing cognitive load and screen-reader ambiguity.",
  },
  {
    id: "UW-05",
    rule: "Role-Based Semantic Token Vocabulary",
    insteadOf: "--gray-100, --dark-card, --orange-btn",
    usePreferred: "--bg-canvas, --bg-surface, --bg-elevated, --fg-primary, --border-subtle",
    rationale:
      "Semantic tokens are named strictly by architectural role (background layer, foreground hierarchy, contour strength) rather than hue or mode, so the same token name remains truthful across Light, Dark, and Theme Studio presets.",
  },
];

export const SYSTEM_PILLARS: PillarSpecification[] = [
  /* ========================================================================
     PILLAR 01: VISUAL FOUNDATIONS & AESTHETICS (Replaces "UI")
     ======================================================================== */
  {
    slug: "visual-foundations",
    number: "01",
    shortTitle: "Visual Foundations",
    fullTitle: "Visual Foundations & Aesthetics",
    legacyAcronym: "UI",
    uiWritingRationale:
      "Replaces the generic acronym 'UI' with 'Visual Foundations & Aesthetics' so readers immediately identify perceptual OKLCH color science, multi-layer surface hierarchy, fluid typography, and concentric corner geometry.",
    tagline:
      "Calibrated OKLCH luminance, 4-step surface depth, Dual-Scale Liquid Utopia typography, and mathematical concentric geometry.",
    summary:
      "Governs every visual and perceptual property of cmplt. Instead of relying on harsh #FFFFFF white or #000000 black, cmplt establishes a warm stone and matte graphite OKLCH canvas with 4 semantic surface elevation steps, optical dark-mode variable font compensation, and strict R_inner = R_outer - padding corner geometry.",
    corePrinciples: [
      {
        title: "Zero Harsh Luminance Extremes",
        description:
          "Ban pure #FFFFFF white and #000000 pitch black. Operate within calibrated warm stone (Light L = 0.950–0.992) and matte graphite (Dark L = 0.242–0.304) to prevent halation and preserve headroom for elevated panels.",
      },
      {
        title: "Surface Depth Over Drop Shadows",
        description:
          "Communicate hierarchy through a deterministic 4-step surface progression (Canvas → Surface → Elevated → Subtle) paired with 1px hairline contours rather than heavy, muddy box shadows.",
      },
      {
        title: "Hybrid Fluid + Pixel-Aligned Typography",
        description:
          "Scale editorial headings and long-form prose fluidly via Dual-Scale Utopia clamp() while locking dense application controls (buttons, inputs, badges, tables) to crisp static rem steps.",
      },
      {
        title: "Mathematical Concentricity",
        description:
          "Every nested container subtracts its parent padding from the outer border radius (R_inner = R_outer - d) so curvature centers align optically.",
      },
    ],
    keyMetrics: [
      {
        label: "Light / Dark Luminance Range",
        value: "L 0.950–0.992 / L 0.242–0.304",
        detail: "Hue 85° (Warm Stone & Matte Graphite), Chroma 0.001–0.004",
      },
      {
        label: "Dual-Scale Utopia Ratios",
        value: "1.200 → 1.333",
        detail: "360px Minor Third (15px) to 1440px Perfect Fourth (16px)",
      },
      {
        label: "Dark Mode Anti-Halation Offset",
        value: "-15 to -20 wght",
        detail: "Geist Variable body 400 → 380, semibold 600 → 585",
      },
      {
        label: "Concentric Radius Law",
        value: "R_inner = R_outer − d",
        detail: "24px shell − 10px pad = 14px panel; 20px card − 8px pad = 12px stage",
      },
    ],
    decisions: [
      {
        id: "VF-01",
        title: "Calibrated OKLCH Luminance & Ban on Pure #FFFFFF / #000000",
        pillar: "visual-foundations",
        status: "Enforced",
        versionIntroduced: "v1.0.0",
        lastUpdated: "2026-09-28",
        summary:
          "All neutral surfaces and text tokens are authored in perceptual OKLCH at Hue 85° (warm stone/graphite) and strictly avoid pure white (#FFFFFF) and pitch black (#000000).",
        contextAndProblem:
          "Pure #FFFFFF backgrounds paired with #000000 text create 21:1 contrast glare, causing visual fatigue in long-form documentation and dashboards. Conversely, #000000 dark mode backgrounds cause astigmatic halation (white text bleeding into black pixels) and make it impossible to recess inset wells or elevate cards using lightness alone.",
        granularSpec: [
          {
            parameter: "--neutral-0 (Light Elevated)",
            value: "oklch(0.992 0.001 85) · #FDFDFC",
            detail: "Brightest surface in Light Mode; reserved for inner elevated panes and floating overlays.",
          },
          {
            parameter: "--neutral-25 (Light Surface)",
            value: "oklch(0.985 0.002 85) · #FBFBF9",
            detail: "Primary card shell surface in Warm Alabaster.",
          },
          {
            parameter: "--neutral-100 (Light Canvas)",
            value: "oklch(0.950 0.003 85) · #EEEEEC",
            detail: "Soft stone page backdrop allowing #FBFBF9 cards to stand out cleanly.",
          },
          {
            parameter: "--neutral-950 (Dark Canvas & Light Primary Text)",
            value: "oklch(0.242 0.003 85) · #1F1F1E",
            detail: "Deepest matte graphite floor in Dark Mode and primary charcoal typography in Light Mode.",
          },
          {
            parameter: "--fg-primary (Dark Mode)",
            value: "oklch(0.915 0.003 85) · #E4E4E2",
            detail: "Warm off-white primary text in Dark Mode to prevent halation while exceeding WCAG AA/AAA.",
          },
        ],
        rationale:
          "Using OKLCH guarantees uniform perceived lightness across steps. Anchoring neutrals at Hue 85° with micro-chroma (0.001–0.004) imparts an editorial, tactile warmth reminiscent of archival paper in Light Mode and anodized graphite hardware in Dark Mode.",
        rejectedAlternatives: [
          "Standard Tailwind Slate/Zinc ramps with #FFFFFF cards on #09090B dark backgrounds (rejected due to cold blue cast and harsh contrast poles).",
          "HSL/RGB color definitions (rejected because HSL lightness is perceptually non-uniform across hues).",
        ],
        sourceFiles: [
          "src/styles/tokens.css",
          "src/registry/cmplt/tokens/tokens.json",
        ],
        verificationRule:
          "No component or stylesheet may contain hardcoded #fff, #ffffff, #000, #000000, bg-white, or bg-black classes (except translucent backdrop scrims like bg-black/45 on modals).",
      },
      {
        id: "VF-02",
        title: "4-Step Semantic Surface Hierarchy (Canvas → Surface → Elevated → Subtle)",
        pillar: "visual-foundations",
        status: "Enforced",
        versionIntroduced: "v1.1.0",
        lastUpdated: "2026-09-28",
        summary:
          "Establishes a mandatory 4-tier semantic surface stack (--bg-canvas, --bg-surface, --bg-elevated, --bg-subtle) that works identically across Light and Dark modes.",
        contextAndProblem:
          "Complex enterprise and SaaS blocks (such as split-shell engagement offers and 3-pane app managers) require up to four distinct nesting layers. Without semantic surface roles, developers hardcode arbitrary neutral steps that break when switching between Light and Dark modes.",
        granularSpec: [
          {
            parameter: "Step 0 · --bg-canvas (bg-canvas)",
            value: "Light #EEEEEC (L 0.950) · Dark #1F1F1E (L 0.242)",
            detail: "Root <html> and <body> viewport backdrop.",
          },
          {
            parameter: "Step 1 · --bg-surface (bg-surface)",
            value: "Light #FBFBF9 (L 0.985) · Dark #262625 (L 0.270)",
            detail: "Primary card shells, outer window frames, and resting control backgrounds.",
          },
          {
            parameter: "Step 2 · --bg-elevated (bg-elevated)",
            value: "Light #FDFDFC (L 0.992) · Dark #2E2E2D (L 0.304)",
            detail: "Nested featured panes (e.g., 'Product Design' pane in EngagementPanelBlock) and top-layer popups.",
          },
          {
            parameter: "Step 3 · --bg-subtle (bg-subtle)",
            value: "Light #F5F5F3 (L 0.968) · Dark #2A2A29 (L 0.286)",
            detail: "Recessed sidebars, search wells, code blocks, and grouped key-value inset tables.",
          },
        ],
        rationale:
          "In both Light and Dark modes, progressing from Canvas → Surface → Elevated moves monotonically upward in lightness (L 0.950 → 0.985 → 0.992 in Light; L 0.242 → 0.270 → 0.304 in Dark), while Subtle provides a recessed well between Surface and Elevated.",
        rejectedAlternatives: [
          "Using opacity-based white overlays (bg-white/5) for dark mode elevation (rejected because translucent layers bleed underlying colors and fail Figma Variable 1:1 mapping).",
        ],
        sourceFiles: [
          "src/styles/tokens.css",
          "src/styles/globals.css",
          "src/registry/cmplt/blocks/engagement-panel-block.tsx",
          "src/registry/cmplt/blocks/app-manager-block.tsx",
        ],
        verificationRule:
          "All container backgrounds must use bg-canvas, bg-surface, bg-elevated, bg-subtle, or bg-muted.",
      },
      {
        id: "VF-03",
        title: "Single Brand Ramp & Semantic Brand Roles",
        pillar: "visual-foundations",
        status: "Enforced",
        versionIntroduced: "v1.2.0",
        lastUpdated: "2026-09-30",
        summary:
          "One brand ramp (--brand-*) maps to semantic roles (--bg-brand, --fg-brand, --border-brand, --ring-focus) in both Light and Dark. No dual-polarity preset that swaps brand for success/info hues.",
        contextAndProblem:
          "Swapping the brand identity between Coral (light) and Jade (dark) via theme presets made Marke and Feedback interchangeable and broke Handstyle parity (shadcn --accent = hover, not brand).",
        granularSpec: [
          {
            parameter: "--brand-500",
            value: "oklch(0.645 0.175 34)",
            detail: "Canonical brand mid-step; same ramp in Light and Dark (hover steps may differ).",
          },
          {
            parameter: "--bg-brand / --bg-brand-hover / --fg-on-brand",
            value: "Semantic brand surface roles",
            detail: "Primary CTAs, filled badges, and on-brand text. Utilities: bg-brand, text-fg-on-brand.",
          },
          {
            parameter: "--success-* / --warning-* / --danger-* / --info-*",
            value: "Feedback primitives → --status-*",
            detail: "Status only — never remapped onto --bg-brand by a theme preset.",
          },
          {
            parameter: "shadcn aliases",
            value: "--primary = brand · --accent = --bg-subtle",
            detail: "Output aliases only; source of truth remains the Handstyle-aligned semantic layer.",
          },
        ],
        rationale:
          "Decoupling component classes (bg-brand, text-fg-brand, border-border-brand) from primitive names keeps Marke stable across modes while Feedback stays in --status-*.",
        rejectedAlternatives: [
          "Dual-polarity presets that rebound --bg-brand to success/info hues per mode (rejected — conflicts with Handstyle token contract).",
          "Hardcoding Tailwind palette utilities like bg-emerald-600 inside components (rejected — breaks theming and Figma semantic parity).",
        ],
        sourceFiles: [
          "src/styles/tokens.css",
          "src/styles/globals.css",
          "src/components/theme-provider.tsx",
        ],
        verificationRule:
          "Light and Dark both resolve --bg-brand from --brand-*. Status CTAs use --status-success / --status-danger, not a swapped brand hue.",
      },
      {
        id: "VF-04",
        title: "Hybrid Typography Architecture: Dual-Scale Liquid Utopia vs. Static UI Controls",
        pillar: "visual-foundations",
        status: "Enforced",
        versionIntroduced: "v1.3.0",
        lastUpdated: "2026-09-28",
        summary:
          "Separates typography into a fluid clamp() editorial ramp (1.200 Minor Third at 360px → 1.333 Perfect Fourth at 1440px) for headings/prose and a fixed pixel-aligned rem scale for interactive UI controls.",
        contextAndProblem:
          "Applying fluid clamp() sizing to every element in an application causes buttons, inputs, and table rows to render at fractional pixel heights, blurring 1px borders and misaligning 16px icons. Conversely, static media-query jumps make editorial headlines feel rigid.",
        granularSpec: [
          {
            parameter: "Liquid Editorial Scale (--type-step-0 to --type-step-6)",
            value: "360px (Ratio 1.200) → 1440px (Ratio 1.333)",
            detail: "Step 0 Body (15px→16px), Step 1 Lead/H4 (17px→20px), Step 2 H3 (20px→26px), Step 3 H2 (24px→35px), Step 4 H1 (30px→47px), Step 5 Display-LG (36px→60px), Step 6 Display-XL (42px→76px).",
          },
          {
            parameter: "Static App UI Scale (--ui-2xs to --ui-lg)",
            value: "11px · 12px · 13px · 14px · 15px (Fixed rem)",
            detail: "ui-2xs (0.6875rem/11px badges & kbd), ui-xs (0.75rem/12px labels), ui-sm (0.8125rem/13px default buttons/inputs), ui-md (0.875rem/14px nav), ui-lg (0.9375rem/15px hero pills).",
          },
          {
            parameter: "WCAG 1.4.4 Zoom Guardrail",
            value: "Max / Min Ratio <= 1.81x (< 2.5x limit)",
            detail: "Step 6 scales from 42px to 76px (1.81x), preserving full browser zoom accessibility.",
          },
        ],
        rationale:
          "Gives marketing pages, documentation headers, and editorial cards expressive Swiss typographic hierarchy while keeping application chrome, form controls, and data tables razor-sharp at every viewport width.",
        rejectedAlternatives: [
          "Fluid clamp() on buttons and inputs (rejected due to sub-pixel border blurring).",
          "Breakpoint-only tailwind text-2xl sm:text-4xl jumps (rejected due to abrupt layout shifts between 360px and 1440px).",
        ],
        sourceFiles: [
          "src/styles/tokens.css",
          "src/styles/globals.css",
          "src/registry/cmplt/ui/typography.tsx",
          "src/app/docs/tokens/page.tsx",
        ],
        verificationRule:
          "Use Heading/Text/Prose or .cmplt-h1..h4/.cmplt-body for editorial content, and text-ui-* or fixed CVA sizes for interactive controls.",
      },
      {
        id: "VF-05",
        title: "Optical Dark-Mode Anti-Halation Font Weight Compensation",
        pillar: "visual-foundations",
        status: "Enforced",
        versionIntroduced: "v1.3.0",
        lastUpdated: "2026-09-28",
        summary:
          "Uses Geist Variable's continuous wght axis to reduce font weights by 15–20 units in Dark Mode (e.g., body 400 → 380, semibold 600 → 585).",
        contextAndProblem:
          "When light text is rendered on a dark surface, human vision perceives the strokes as thicker due to light irradiation on the retina. Standard discrete font weights (400 vs 300) are too coarse to correct this—300 is too thin, while 400 looks heavy.",
        granularSpec: [
          {
            parameter: "--weight-body",
            value: "Light: 400 · Dark: 380 (-20 wght)",
            detail: "Applied to <body>, .cmplt-body, .cmplt-lead, and .cmplt-prose.",
          },
          {
            parameter: "--weight-medium",
            value: "Light: 500 · Dark: 485 (-15 wght)",
            detail: "Applied to .cmplt-h4, inline code, and active controls.",
          },
          {
            parameter: "--weight-semibold",
            value: "Light: 600 · Dark: 585 (-15 wght)",
            detail: "Applied to .cmplt-display-*, .cmplt-h1..h3, and strong prose emphasis.",
          },
          {
            parameter: "--weight-bold",
            value: "Light: 700 · Dark: 685 (-15 wght)",
            detail: "Applied to high-emphasis KPI metrics and brand marks.",
          },
        ],
        rationale:
          "Leveraging Geist Sans Variable's continuous wght axis via font-variation-settings equalizes perceived stem thickness between Warm Alabaster and Matte Graphite modes.",
        rejectedAlternatives: [
          "Applying -webkit-font-smoothing: subpixel-antialiased only in Light Mode (rejected as inconsistent across macOS/Windows/Linux displays).",
        ],
        sourceFiles: [
          "src/styles/tokens.css",
          "src/styles/globals.css",
        ],
        verificationRule:
          "Typography classes must bind both font-weight and font-variation-settings: 'wght' var(--weight-*).",
      },
      {
        id: "VF-06",
        title: "Concentric Corner Geometry Law (R_inner = R_outer − padding)",
        pillar: "visual-foundations",
        status: "Enforced",
        versionIntroduced: "v1.2.0",
        lastUpdated: "2026-09-28",
        summary:
          "Enforces optical concentricity across all nested containers using CSS calc() radius tokens where inner radius equals outer radius minus container padding.",
        contextAndProblem:
          "When a child box with a 20px border-radius is placed inside a parent card that also has a 20px border-radius and 8px padding, the corner gap appears thicker at the diagonal apex than along the straight edges, creating an amateurish visual pinch.",
        granularSpec: [
          {
            parameter: "--radius-xl (24px) → --radius-xl-inner (14px)",
            value: "calc(1.5rem - 0.625rem) [p-2.5 / 10px]",
            detail: "Used in EngagementPanelBlock outer shell (24px) → inner elevated 'Product Design' panel (14px).",
          },
          {
            parameter: "--radius-lg (20px) → --radius-lg-inner-sm (12px)",
            value: "calc(1.25rem - 0.5rem) [p-2 / 8px]",
            detail: "Used in Card (20px) → inset CardMedia and Component Directory preview stages (12px).",
          },
          {
            parameter: "--radius-panel (14px) → --radius-sm (8px)",
            value: "14px popup − 6px (p-1.5) = 8px item",
            detail: "Used in SelectContentpopup (14px) → SelectItem highlight row (8px).",
          },
          {
            parameter: "--radius-squircle (11px) & --radius-full (9999px)",
            value: "0.6875rem (Squircle) · 9999px (Pill)",
            detail: "11px squircle for app/brand icons; 9999px pill for primary CTAs, switches, segmented tabs, and search bars.",
          },
        ],
        rationale:
          "Aligning the center of curvature between outer and inner contours creates uniform frame thickness around nested media stages, popups, and multi-pane shells.",
        rejectedAlternatives: [
          "Using identical rounded-xl classes on both parent and child containers (rejected due to non-concentric corner pinching).",
        ],
        sourceFiles: [
          "src/styles/tokens.css",
          "src/styles/globals.css",
          "src/registry/cmplt/ui/card.tsx",
          "src/registry/cmplt/ui/highlight-input.tsx",
        ],
        verificationRule:
          "Any inset child container with margin/padding d inside a rounded parent must use the corresponding concentric inner token.",
      },
      {
        id: "VF-07",
        title: "3-Level Z-Axis Elevation & 1px Hairline Contour Discipline",
        pillar: "visual-foundations",
        status: "Enforced",
        versionIntroduced: "v1.1.0",
        lastUpdated: "2026-09-28",
        summary:
          "Restricts Z-axis depth to three calibrated levels: Level 0 (Flat Controls), Level 1 (1px Bordered Cards with micro-shadow), and Level 2 (Top-Layer Overlays with diffuse ambient shadow).",
        contextAndProblem:
          "Applying drop shadows to buttons, text inputs, and badges muddies dense interfaces and clashes with clean 1px architectural grids.",
        granularSpec: [
          {
            parameter: "Level 0 · Flat Integration (--shadow-none)",
            value: "0 0 #0000 + 1px solid var(--border-default)",
            detail: "Buttons, Inputs, SelectTriggers, Switches, Checkboxes, and Badges.",
          },
          {
            parameter: "Level 1 · Surface Containers (--shadow-xs / sm)",
            value: "0 1px 2px oklch(0.2 0.005 85 / 0.03) + 1px border",
            detail: "Resting Cards, Bento cells, and multi-pane window shells.",
          },
          {
            parameter: "Level 2 · Floating Top-Layer (--shadow-lg)",
            value: "0 24px 60px -12px oklch(...) + bg-elevated",
            detail: "Modal Dialogs, Popovers, Select dropdowns, and Tooltips.",
          },
        ],
        rationale:
          "Keeping Level 0 controls completely shadow-free ensures crisp alignment inside Level 1 cards, while Level 2 diffuse shadows clearly separate portaled overlays from the underlying canvas.",
        rejectedAlternatives: [
          "Material-style multi-shadow elevation on buttons and inputs (rejected as visually noisy).",
        ],
        sourceFiles: [
          "src/styles/tokens.css",
          "src/registry/cmplt/ui/button.tsx",
          "src/registry/cmplt/ui/card.tsx",
          "src/registry/cmplt/ui/dialog.tsx",
        ],
        verificationRule:
          "Form controls and buttons must never use shadow-md or shadow-lg; reserve shadow-lg exclusively for portaled overlays.",
      },
      {
        id: "VF-08",
        title: "4-Tier Responsive Architectural Whitespace & Analytical Dot Matrices",
        pillar: "visual-foundations",
        status: "Enforced",
        versionIntroduced: "v1.2.0",
        lastUpdated: "2026-09-28",
        summary:
          "Defines explicit container widths, horizontal gutters, and vertical section rhythms across Mobile, Tablet, Desktop (1440px), and Desktop+ (1728px), paired with radial dot textures (.bg-cmplt-grid, .bg-cmplt-dots).",
        contextAndProblem:
          "Standard 1280px containers feel cramped on modern 27-inch and ultra-wide displays, while unguarded 100% width layouts break scanlines. Additionally, solid 1px background grids compete with component borders in preview stages.",
        granularSpec: [
          {
            parameter: "Mobile (<768px) & Tablet (768–1023px)",
            value: "Gutters: 20px → 40px · Section Y: 72px → 104px",
            detail: "Single-column and balanced 2-column grid flows.",
          },
          {
            parameter: "Desktop (1024–1535px) & Desktop+ (>=1536px)",
            value: "Max-Width: 1440px → 1728px · Gutters: 56px → 80px · Section Y: 136px → 168px",
            detail: "Controlled via .cmplt-container and .cmplt-section utilities.",
          },
          {
            parameter: "Analytical Background Textures (.bg-cmplt-grid / .bg-cmplt-dots)",
            value: "radial-gradient(var(--border-default) 1px, transparent 1px)",
            detail: "20px×20px (.bg-cmplt-grid) for live component stages; 16px×16px (.bg-cmplt-dots) for card media thumbnails.",
          },
        ],
        rationale:
          "Radial 1px dot matrices provide spatial reference inside component preview stages without introducing intersecting horizontal/vertical lines that clash with 1px card contours.",
        rejectedAlternatives: [
          "Solid CSS linear-gradient grid lines in component stages (rejected due to moiré interference with 1px component borders).",
        ],
        sourceFiles: [
          "src/styles/tokens.css",
          "src/styles/globals.css",
        ],
        verificationRule:
          "Use .bg-cmplt-grid or .bg-cmplt-dots for preview stages and .cmplt-container for top-level layout alignment.",
      },
    ],
  },

  /* ========================================================================
     PILLAR 02: INTERACTION, MOTION & ACCESSIBILITY (Replaces "UX")
     ======================================================================== */
  {
    slug: "interaction-ergonomics",
    number: "02",
    shortTitle: "Interaction & Ergonomics",
    fullTitle: "Interaction, Motion & Accessibility",
    legacyAcronym: "UX",
    uiWritingRationale:
      "Replaces the broad acronym 'UX' with 'Interaction, Motion & Accessibility' (short nav: 'Interaction & Ergonomics') to make behavioral contracts concrete: WAI-ARIA keyboard ergonomics, reading comfort, and inertial GSAP motion.",
    tagline:
      "WAI-ARIA headless ergonomics, Bringhurst 65ch reading guardrails, tabular numeric discipline, and whisper-soft GSAP hierarchy physics.",
    summary:
      "Defines how cmplt behaves, responds, and communicates with every user—whether navigating by pointer, keyboard, or assistive technology. Every interactive primitive is powered by @base-ui/react state machines, every long-form text block obeys strict character-width guardrails, and GSAP motion is reserved purposefully to elevate primary actions and inputs in the visual hierarchy.",
    corePrinciples: [
      {
        title: "Headless WAI-ARIA Integrity First",
        description:
          "Delegate focus trapping, roving tabindex, typeahead, and ARIA relationship wiring to @base-ui/react v1.8 primitives styled declaratively via data-* attributes.",
      },
      {
        title: "Effortless Eye-Tracking & Reading Comfort",
        description:
          "Constrain every prose and heading element in character units (18ch–65ch) and enforce tabular numerals on all quantitative metrics so eyes never lose their place.",
      },
      {
        title: "Purposeful, Hierarchy-Driven Motion",
        description:
          "Use GSAP inertial physics (quickTo, orbital conic light, subtle magnetic pull) exclusively to guide attention toward primary CTAs and command inputs—never as gratuitous decoration.",
      },
      {
        title: "Zero-Compromise Reduced Motion & Keyboard Parity",
        description:
          "Every action reachable by pointer is reachable by keyboard (including ⌘K global search), and prefers-reduced-motion immediately disables spatial displacement.",
      },
    ],
    keyMetrics: [
      {
        label: "Long-Form Reading Measure",
        value: "65ch Max-Width",
        detail: "Bringhurst optimal 60–70 character line length (--measure-body)",
      },
      {
        label: "GSAP Magnetic Pull Cap",
        value: "3.5px Max Displacement",
        detail: "Inertial power3.out quickTo (0.55s) for natural, non-jarring cursor pull",
      },
      {
        label: "Overlay Transition Timing",
        value: "220ms cubic-bezier(0.16, 1, 0.3, 1)",
        detail: "Discrete top-layer @starting-style entry/exit choreography",
      },
      {
        label: "Reduced-Motion Fallback",
        value: "0px Displacement / 80ms Fade",
        detail: "Enforced across CSS @media, GSAP useGSAP hooks, and WebGL shaders",
      },
    ],
    decisions: [
      {
        id: "IE-01",
        title: "Headless Accessibility & Declarative State Styling via @base-ui/react v1.8",
        pillar: "interaction-ergonomics",
        status: "Enforced",
        versionIntroduced: "v1.0.0",
        lastUpdated: "2026-09-28",
        summary:
          "Standardizes all interactive primitives on @base-ui/react v1.8, using declarative data-* attributes and the render prop composition pattern.",
        contextAndProblem:
          "Hand-rolling modal focus traps, dropdown collision positioning, and ARIA attributes leads to subtle accessibility regressions. Meanwhile, older headless libraries rely on fragile React.cloneElement (asChild) patterns that struggle with React 19 ref forwarding and TypeScript strictness.",
        granularSpec: [
          {
            parameter: "Composition Pattern (render prop)",
            value: "<DialogTrigger render={<Button />} />",
            detail: "Cleanly merges trigger behavior, ARIA attributes, and refs onto custom cmplt components without wrapper DOM nodes.",
          },
          {
            parameter: "Declarative State Selectors",
            value: "data-[open], data-[checked], data-[highlighted], data-[selected], data-[disabled], data-[invalid]",
            detail: "Styled directly via Tailwind v4 attribute modifiers.",
          },
          {
            parameter: "Screen-Reader Disabled Focus",
            value: "focusableWhenDisabled on @base-ui/react/button",
            detail: "Allows keyboard and screen-reader users to discover disabled actions without triggering click handlers.",
          },
        ],
        rationale:
          "Engineered by the creators of Radix, Floating UI, and MUI, @base-ui/react provides unified Floating UI anchor positioning (--anchor-width), React 19 native ergonomics, and rock-solid WAI-ARIA compliance.",
        rejectedAlternatives: [
          "Legacy Radix UI individual @radix-ui/react-* packages (rejected in favor of Base UI's unified single-package architecture and modern render prop).",
          "Custom React state + window click listeners for popovers/selects (rejected due to accessibility and portal layering edge cases).",
        ],
        sourceFiles: [
          "src/registry/cmplt/ui/button.tsx",
          "src/registry/cmplt/ui/dialog.tsx",
          "src/registry/cmplt/ui/select.tsx",
          "src/registry/cmplt/ui/tabs.tsx",
          "src/registry/cmplt/ui/accordion.tsx",
        ],
        verificationRule:
          "All interactive primitives must expose Base UI's native props and style states via data-[*] selectors.",
      },
      {
        id: "IE-02",
        title: "Bringhurst Reading Ergonomics & Character Measure Guardrails (ch)",
        pillar: "interaction-ergonomics",
        status: "Enforced",
        versionIntroduced: "v1.3.0",
        lastUpdated: "2026-09-28",
        summary:
          "Enforces automatic max-width constraints in character units (18ch, 28ch, 42ch, 54ch, 65ch) paired with text-wrap: balance on headings and text-wrap: pretty on body copy.",
        contextAndProblem:
          "On 1440px–1728px desktop containers, unconstrained paragraphs stretch to 120+ characters per line, causing readers to lose their vertical scan position when returning to the left margin.",
        granularSpec: [
          {
            parameter: "--measure-display (18ch)",
            value: "max-w-measure-display + text-wrap: balance",
            detail: "Hero statements (.cmplt-display-xl, .cmplt-display-lg) break into balanced 2–4 word lines.",
          },
          {
            parameter: "--measure-heading (28ch)",
            value: "max-w-measure-heading + text-wrap: balance",
            detail: "Section headings (.cmplt-h1, .cmplt-h2, .cmplt-h3).",
          },
          {
            parameter: "--measure-compact (42ch) & --measure-lead (54ch)",
            value: "42ch (Cards/Dialogs) · 54ch (Lead decks)",
            detail: "Keeps introductory decks and modal descriptions compact.",
          },
          {
            parameter: "--measure-body (65ch)",
            value: "max-w-measure-body + text-wrap: pretty + line-height: 1.65",
            detail: "Enforces Robert Bringhurst's ideal 60–70 character reading line across .cmplt-body and .cmplt-prose.",
          },
        ],
        rationale:
          "Character units (ch, equal to the width of the '0' glyph in the active font) scale proportionally with fluid clamp() font sizes, guaranteeing 60–70 characters per line regardless of viewport width.",
        rejectedAlternatives: [
          "Pixel-based max-w-2xl or max-w-3xl on text (rejected because pixel widths do not adapt when font size scales fluidly).",
        ],
        sourceFiles: [
          "src/styles/tokens.css",
          "src/styles/globals.css",
          "src/registry/cmplt/ui/typography.tsx",
        ],
        verificationRule:
          "All long-form documentation and prose containers must apply .cmplt-prose, .cmplt-body, or max-w-measure-body.",
      },
      {
        id: "IE-03",
        title: "Quantitative Scannability & Tabular Numeral Discipline (tabular-nums)",
        pillar: "interaction-ergonomics",
        status: "Enforced",
        versionIntroduced: "v1.2.0",
        lastUpdated: "2026-09-28",
        summary:
          "Mandates monospace or tabular numeral rendering (font-variant-numeric: tabular-nums) across all metrics, prices, counters, badges, and interactive sliders.",
        contextAndProblem:
          "Proportional numerals have varying glyph widths (e.g., '1' is narrower than '8'), causing layout jitter during live slider dragging (such as the Liquid Viewport Simulator) and misaligning columns in pricing and telemetry tables.",
        granularSpec: [
          {
            parameter: ".cmplt-metric",
            value: "font-variant-numeric: tabular-nums; letter-spacing: -0.03em; line-height: 1.05; font-weight: 600",
            detail: "Used in MetricCard KPI values, CardPrice amounts, and PricingTierBlock figures.",
          },
          {
            parameter: ".cmplt-tabular",
            value: "font-variant-numeric: tabular-nums",
            detail: "Used on timestamps, deltas, read-time eyebrows, and viewport simulator readouts.",
          },
          {
            parameter: "Geist Mono OpenType Features",
            value: "font-feature-settings: 'liga' 0, 'calt' 1, 'zero' 1",
            detail: "Enables slashed zero ('zero' 1) in all code, kbd, and token hex/oklch readouts to distinguish '0' from 'O'.",
          },
        ],
        rationale:
          "Ensures effortless vertical scanning of quantitative data and zero horizontal layout shift when values mutate.",
        rejectedAlternatives: [
          "Default proportional numerals in KPI cards and slider badges (rejected due to horizontal width jitter).",
        ],
        sourceFiles: [
          "src/styles/globals.css",
          "src/registry/cmplt/ui/card.tsx",
          "src/registry/cmplt/ui/typography.tsx",
        ],
        verificationRule:
          "Every numeric readout, price, percentage delta, or live counter must apply .cmplt-tabular, .cmplt-metric, or font-mono.",
      },
      {
        id: "IE-04",
        title: "Hierarchy-Elevating GSAP Motion Physics (AnimatedCtaButton & HighlightInput)",
        pillar: "interaction-ergonomics",
        status: "Enforced",
        versionIntroduced: "v1.4.0",
        lastUpdated: "2026-09-28",
        summary:
          "Uses GSAP (useGSAP + gsap.quickTo) to visually elevate primary CTAs and priority search/command inputs via continuous orbital conic border light, inertial cursor sheen, and gentle magnetic proximity physics.",
        contextAndProblem:
          "In calm, low-contrast warm alabaster and matte graphite interfaces, primary Call-to-Action buttons and command bars need a refined way to stand out in the visual hierarchy without resorting to garish neon colors or heavy drop shadows.",
        granularSpec: [
          {
            parameter: "AnimatedCtaButton Orbital Conic Light",
            value: "--beam-angle: 0deg → 360deg (6.5s linear, 1.45x timeScale on hover)",
            detail: "1.5px conic-gradient border frame with soft breathing outer aura (2.8s sine.inOut).",
          },
          {
            parameter: "AnimatedCtaButton Magnetic Proximity Physics",
            value: "magneticStrength: 3.5px · quickTo duration: 0.55s (power3.out)",
            detail: "Inner content translates at 0.45x of outer shell displacement for subtle layered depth; press scales to 0.982 and releases with back.out(2).",
          },
          {
            parameter: "HighlightInput Orbital & Focus Physics",
            value: "--input-angle: 0deg → 360deg (7.5s) · Focus: scale 1.006, y -1px (expo.out)",
            detail: "Supports 'ambient' (continuous 0.72 opacity orbit) and 'focus-only' (0.15 resting opacity awakening on hover/focus) modes in 'rounded' (10px) or 'pill' (9999px) contours.",
          },
        ],
        rationale:
          "GSAP's quickTo creates interruptible, spring-like inertial cursor tracking without React state re-renders, guiding user attention to the single most important action or input on the screen.",
        rejectedAlternatives: [
          "React onMouseMove setState({ x, y }) (rejected because triggering 60–120fps React re-renders degrades INP performance).",
          "Aggressive 15px+ magnetic button pulls (rejected as disorienting and detrimental to click accuracy).",
        ],
        sourceFiles: [
          "src/registry/cmplt/ui/animated-cta-button.tsx",
          "src/registry/cmplt/ui/highlight-input.tsx",
          "src/styles/globals.css",
        ],
        verificationRule:
          "Use AnimatedCtaButton and HighlightInput sparingly—only for primary page CTAs and primary search/command inputs to preserve hierarchy contrast.",
      },
      {
        id: "IE-05",
        title: "Surface Proximity Lighting & Staggered Entry (MotionSurface & InteractiveDotField)",
        pillar: "interaction-ergonomics",
        status: "Enforced",
        versionIntroduced: "v1.4.0",
        lastUpdated: "2026-09-28",
        summary:
          "Provides low-amplitude cursor spotlight and -2px float on interactive Bento cards (MotionSurface) and silk-like Gaussian dot parting on canvas backgrounds (InteractiveDotField).",
        contextAndProblem:
          "Static card grids can feel lifeless, while heavy 3D tilt effects distort typography and hurt readability.",
        granularSpec: [
          {
            parameter: "MotionSurface Hover & Entrance",
            value: "Hover: y -2px (0.45s power3.out) + 11% oklab accent radial glow · Entrance: y 12px → 0 (0.7s)",
            detail: "Clears transform props after entrance so nested fixed/sticky positioning is unaffected.",
          },
          {
            parameter: "MotionStaggerGroup Cascade",
            value: "stagger: 0.065s · duration: 0.65s · yOffset: 12px (power3.out)",
            detail: "Targets [data-motion-item] or direct children for coordinated section reveals.",
          },
          {
            parameter: "InteractiveDotField Gaussian & Wake Physics",
            value: "spacing: 24px · interactionRadius: 195px · maxDisplacement: 7.5px",
            detail: "Combines a primary cursor Gaussian field (0.65s quickTo) with a trailing secondary wake field (1.35s quickTo) and radial edge vignette.",
          },
        ],
        rationale:
          "Capping card hover lift at -2px and WebGL dot displacement at 7.5px preserves the calm Swiss architectural precision of cmplt while rewarding pointer exploration.",
        rejectedAlternatives: [
          "3D perspective rotateX/rotateY card tilting (rejected because perspective transforms blur subpixel text rendering).",
        ],
        sourceFiles: [
          "src/registry/cmplt/ui/motion-surface.tsx",
          "src/registry/cmplt/ui/interactive-dot-field.tsx",
        ],
        verificationRule:
          "All surface motion wrappers must clear transforms on rest and respect prefers-reduced-motion.",
      },
      {
        id: "IE-06",
        title: "Discrete Top-Layer Overlay Choreography (@starting-style & allow-discrete)",
        pillar: "interaction-ergonomics",
        status: "Enforced",
        versionIntroduced: "v1.2.0",
        lastUpdated: "2026-09-28",
        summary:
          "Animates Dialog, Popover, Select, and Tooltip portals using modern CSS @starting-style, transition-behavior: allow-discrete, and Base UI lifecycle attributes.",
        contextAndProblem:
          "Traditional overlay animations require either keeping closed modals mounted in the DOM or orchestrating complex JavaScript unmount timers.",
        granularSpec: [
          {
            parameter: ".cmplt-overlay-popup",
            value: "opacity: 0 → 1 · transform: scale(0.97) translateY(4px) → scale(1) translateY(0)",
            detail: "220ms (--duration-normal) with cubic-bezier(0.16, 1, 0.3, 1) (--ease-out) and transition-behavior: allow-discrete.",
          },
          {
            parameter: ".cmplt-overlay-backdrop",
            value: "opacity: 0 → 1 + bg-black/45 backdrop-blur-[3px]",
            detail: "Synchronized 220ms fade with data-[starting-style] and data-[ending-style] hooks.",
          },
        ],
        rationale:
          "Pairs native CSS Baseline @starting-style with Base UI's data-[starting-style] and data-[ending-style] attributes so both entry and exit transitions run at 60fps on the compositor thread.",
        rejectedAlternatives: [
          "Heavy JavaScript spring libraries for simple dropdown and tooltip portals (rejected to keep core primitive bundles lightweight).",
        ],
        sourceFiles: [
          "src/styles/globals.css",
          "src/registry/cmplt/ui/dialog.tsx",
          "src/registry/cmplt/ui/popover.tsx",
          "src/registry/cmplt/ui/select.tsx",
          "src/registry/cmplt/ui/tooltip.tsx",
        ],
        verificationRule:
          "All portaled popup surfaces must apply .cmplt-overlay-popup and backdrops must apply .cmplt-overlay-backdrop.",
      },
      {
        id: "IE-07",
        title: "Form Ergonomics, Tactile Active Feedback & Automatic ARIA Field Wiring",
        pillar: "interaction-ergonomics",
        status: "Enforced",
        versionIntroduced: "v1.1.0",
        lastUpdated: "2026-09-28",
        summary:
          "Connects form labels, descriptions, and error messages automatically via @base-ui/react/field and enforces tactile micro-feedback on interactive controls.",
        contextAndProblem:
          "Disconnected <label> and <input> elements or missing aria-describedby links make forms inaccessible to screen-reader users, while flat buttons without active press feedback feel unresponsive.",
        granularSpec: [
          {
            parameter: "Field Composition (Field, FieldLabel, FieldDescription, FieldError)",
            value: "Automatic id, htmlFor, aria-describedby, and data-[invalid] cascade",
            detail: "Setting invalid on Field automatically styles Input border/ring with --status-danger.",
          },
          {
            parameter: "Button Tactile Press Scaling",
            value: "active:scale-[0.985] · transition-all duration-150",
            detail: "Subtle 1.5% physical depression on click/tap across all Button variants.",
          },
          {
            parameter: "Dual Input Contours",
            value: "variant='default' (8px rounded-md) · variant='search' (9999px rounded-full)",
            detail: "Distinguishes structured data entry fields from global filter/search bars.",
          },
        ],
        rationale:
          "Baking ARIA relationship management into the Field primitive makes accessible forms the path of least resistance for developers.",
        rejectedAlternatives: [
          "Manual id/htmlFor string props on every Input usage (rejected as error-prone when rendering multiple forms).",
        ],
        sourceFiles: [
          "src/registry/cmplt/ui/field.tsx",
          "src/registry/cmplt/ui/input.tsx",
          "src/registry/cmplt/ui/button.tsx",
        ],
        verificationRule:
          "Wrap form inputs with Field and FieldLabel (or explicit aria-label on standalone search bars).",
      },
      {
        id: "IE-08",
        title: "Universal Reduced-Motion Enforcement & Keyboard-First Navigation (⌘K)",
        pillar: "interaction-ergonomics",
        status: "Enforced",
        versionIntroduced: "v1.0.0",
        lastUpdated: "2026-09-28",
        summary:
          "Enforces prefers-reduced-motion across CSS, GSAP, and WebGL, provides global ⌘K / Ctrl+K command navigation, and standardizes 2px offset focus rings.",
        contextAndProblem:
          "Users with vestibular disorders can experience motion sickness from continuous orbital animations or WebGL particle displacement, while keyboard power users require instant navigation and unmistakable focus indicators.",
        granularSpec: [
          {
            parameter: "CSS Reduced Motion (@media (prefers-reduced-motion: reduce))",
            value: "transform: none !important; transition-duration: 80ms !important",
            detail: "Replaces scale/translate overlay transitions with a fast 80ms opacity crossfade.",
          },
          {
            parameter: "GSAP & Three.js Reduced Motion Guard",
            value: "window.matchMedia('(prefers-reduced-motion: reduce)').matches",
            detail: "Bails out of GSAP orbital/magnetic tweens and sets WebGL uMaxDisp = 0 and uTime = 0.",
          },
          {
            parameter: "Keyboard Focus Ring & Global ⌘K",
            value: "focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
            detail: "2px high-contrast accent ring with 2px canvas-colored offset gap; global keydown listener opens Command Search on ⌘K / Ctrl+K.",
          },
        ],
        rationale:
          "Accessibility is treated as a core engineering invariant rather than an afterthought, satisfying WCAG 2.1.1 (Keyboard), 2.3.3 (Animation from Interactions), and 2.4.7 (Focus Visible).",
        rejectedAlternatives: [
          "Using outline-none without a replacement focus-visible ring (strictly prohibited across all primitives).",
        ],
        sourceFiles: [
          "src/styles/globals.css",
          "src/components/site-header.tsx",
          "src/registry/cmplt/ui/animated-cta-button.tsx",
          "src/registry/cmplt/ui/interactive-dot-field.tsx",
        ],
        verificationRule:
          "Every interactive element must include focus-visible:ring-2 and every JS animation hook must check prefers-reduced-motion.",
      },
    ],
  },

  /* ========================================================================
     PILLAR 03: SYSTEM ARCHITECTURE & DELIVERY (Replaces "Tech")
     ======================================================================== */
  {
    slug: "architecture-delivery",
    number: "03",
    shortTitle: "Architecture & Delivery",
    fullTitle: "System Architecture & Delivery",
    legacyAcronym: "Tech",
    uiWritingRationale:
      "Replaces informal 'Tech' shorthand with 'System Architecture & Delivery' (short nav: 'Architecture & Delivery') to accurately represent the compiler pipeline, W3C token schema, progressive CSS engine, and native shadcn registry distribution.",
    tagline:
      "Native shadcn static registry compiler, W3C DTCG ↔ CSS dual-artifact pipeline, Tailwind v4 CSS-first theme engine, and 1:1 Figma Variables parity.",
    summary:
      "Documents the technical foundation, build pipeline, and distribution mechanics of cmplt. Built on Next.js 15, React 19, and Tailwind CSS v4, cmplt compiles every token, primitive, and multi-surface block into schema-validated static JSON endpoints (/r/[name].json) while maintaining 1:1 structural parity with Figma Variables via W3C Design Tokens format.",
    corePrinciples: [
      {
        title: "Source Ownership via Static Registry CLI",
        description:
          "Distribute clean, editable TypeScript and CSS source files directly into consumer repositories via npx shadcn add @cmplt/[name]—zero black-box node_modules style lock-in.",
      },
      {
        title: "Code-First, Figma-Synchronized Single Source of Truth",
        description:
          "Mirror every CSS custom property in tokens.css inside W3C DTCG tokens.json with explicit figmaScope metadata so code and design tools never drift.",
      },
      {
        title: "CSS-First Progressive Enhancement",
        description:
          "Use Tailwind v4 @theme inline, CSS Houdini @property, @container queries, and :has() relational selectors paired with defensive @supports fallbacks.",
      },
      {
        title: "100% Dogfooding Verification",
        description:
          "Build the entire documentation portal, token explorer, and marketing platform exclusively with @cmplt registry components.",
      },
    ],
    keyMetrics: [
      {
        label: "Compiled Registry Endpoints",
        value: "26 Static JSON Artifacts",
        detail: "1 lib, 1 style/token pack, 19 UI/motion primitives, 5 Pro blocks in /public/r/*.json",
      },
      {
        label: "Core Runtime Stack",
        value: "Next.js 15 · React 19 · Tailwind v4",
        detail: "Paired with @base-ui/react v1.8, GSAP 3.12, and Three.js 0.174",
      },
      {
        label: "Token Format Standard",
        value: "W3C DTCG + Figma Scopes",
        detail: "FRAME_FILL, SHAPE_FILL, TEXT_FILL, STROKE_COLOR + sRGB hexFallbacks",
      },
      {
        label: "Theme Mutation Complexity",
        value: "O(1) Root DOM Attributes",
        detail: "html.dark, [data-theme-preset], [data-radius] with zero React tree re-layout",
      },
    ],
    decisions: [
      {
        id: "AD-01",
        title: "Zero-Lock-In Source Distribution via Native shadcn Registry Compiler",
        pillar: "architecture-delivery",
        status: "Enforced",
        versionIntroduced: "v1.0.0",
        lastUpdated: "2026-09-28",
        summary:
          "Compiles all 26 system artifacts from registry.json into static, schema-validated JSON endpoints under public/r/[name].json via scripts/build-registry.mjs.",
        contextAndProblem:
          "Traditional npm UI libraries lock teams into compiled CSS bundles, rigid DOM structures, and breaking major-version upgrades. Teams need a way to install components with automatic dependency resolution while retaining full ownership of the underlying TypeScript source.",
        granularSpec: [
          {
            parameter: "Manifest Source (registry.json)",
            value: "https://ui.shadcn.com/schema/registry.json",
            detail: "Declares item name, type (registry:lib | registry:style | registry:ui | registry:block), npm dependencies, internal registryDependencies, and source-to-target file mappings.",
          },
          {
            parameter: "Static Hydration Compiler (scripts/build-registry.mjs)",
            value: "npm run registry:build → public/r/[name].json + public/r/index.json",
            detail: "Reads live source files from src/registry/cmplt/** and src/styles/tokens.css, embeds their exact UTF-8 source into files[].content, and outputs static JSON served by Next.js / CDN.",
          },
          {
            parameter: "Consumer Namespace Configuration",
            value: '"@cmplt": "https://cmplt.design/r/{name}.json"',
            detail: "Enables 1-command installation: npx shadcn@latest add @cmplt/button or npx shadcn@latest add @cmplt/engagement-panel-block.",
          },
        ],
        rationale:
          "Pre-compiling static JSON endpoints during the build step (`node scripts/build-registry.mjs && next build`) ensures zero runtime server overhead, 100% CDN cacheability, and automatic recursive installation of primitive dependencies.",
        rejectedAlternatives: [
          "Publishing a compiled dist/ npm package with encapsulated styles (rejected due to customization friction and CSS specificity conflicts).",
          "Dynamic Next.js API route reading fs at runtime (rejected because serverless deployments often exclude raw src/ files unless bundled).",
        ],
        sourceFiles: [
          "registry.json",
          "scripts/build-registry.mjs",
          "package.json",
          "public/r/index.json",
        ],
        verificationRule:
          "Whenever any file in src/registry/cmplt/** or src/styles/tokens.css is modified, run npm run registry:build to keep public/r/*.json in sync.",
      },
      {
        id: "AD-02",
        title: "Dual-Artifact Token Pipeline: Runtime CSS (tokens.css) ↔ W3C DTCG (tokens.json)",
        pillar: "architecture-delivery",
        status: "Enforced",
        versionIntroduced: "v1.0.0",
        lastUpdated: "2026-09-28",
        summary:
          "Maintains a 1:1 synchronized contract between src/styles/tokens.css (browser runtime) and src/registry/cmplt/tokens/tokens.json (W3C DTCG schema with Figma Variable Scopes).",
        contextAndProblem:
          "Design systems typically suffer from drift between CSS variables in the repo and color/number variables in Figma. Furthermore, Figma Variables require sRGB/hex values and explicit property scopes (FRAME_FILL, TEXT_FILL, STROKE_COLOR).",
        granularSpec: [
          {
            parameter: "Primitive Token Schema",
            value: '{ "$type": "color", "$value": "oklch(...)", "hexFallback": "#..." }',
            detail: "Provides perceptual OKLCH for modern browsers and calibrated sRGB hex fallbacks for Figma import and Token Explorer previews.",
          },
          {
            parameter: "Semantic Token Metadata",
            value: "cssVar, tailwindClass, light, dark, $description, figmaScope[]",
            detail: "Maps every semantic role directly to its CSS custom property, Tailwind v4 utility class, and Figma Variable Scope array.",
          },
          {
            parameter: "Typography & Measure Schema",
            value: "typography.liquidScale, typography.uiScale, typography.measures",
            detail: "Drives both the interactive Liquid Viewport Simulator in /docs/tokens and external design tool documentation.",
          },
        ],
        rationale:
          "Distributing both tokens.css and tokens.json together inside the @cmplt/tokens registry item gives consumer projects immediate runtime styling and a ready-to-import W3C Figma Variables file.",
        rejectedAlternatives: [
          "Maintaining tokens only in CSS without structured JSON metadata (rejected as it prevents automated Token Explorer tables and Figma sync).",
        ],
        sourceFiles: [
          "src/styles/tokens.css",
          "src/registry/cmplt/tokens/tokens.json",
          "src/app/docs/tokens/page.tsx",
          "src/app/figma/page.tsx",
        ],
        verificationRule:
          "Any token added or modified in src/styles/tokens.css must be mirrored in src/registry/cmplt/tokens/tokens.json.",
      },
      {
        id: "AD-03",
        title: "CSS-First Tailwind v4 Engine (@theme inline) & Houdini @property Registration",
        pillar: "architecture-delivery",
        status: "Enforced",
        versionIntroduced: "v1.0.0",
        lastUpdated: "2026-09-28",
        summary:
          "Uses Tailwind CSS v4's native @theme inline directive in src/styles/globals.css and registers typed CSS Houdini custom properties (@property) for GPU-friendly conic-gradient animations.",
        contextAndProblem:
          "Legacy tailwind.config.ts files split design tokens across JavaScript and CSS. Additionally, browser CSS engines cannot natively interpolate custom variables inside conic-gradient(from var(--angle), ...) unless the variable is registered with syntax: '<angle>'.",
        granularSpec: [
          {
            parameter: "@theme inline Mapping",
            value: "--color-*, --radius-cmplt-*, --shadow-*, --text-*, --container-measure-*",
            detail: "Exposes all semantic tokens as native Tailwind v4 utilities (e.g., bg-surface, text-fg-primary, rounded-lg-inner-sm, max-w-measure-body).",
          },
          {
            parameter: "CSS Houdini @property Registration",
            value: "@property --beam-angle & @property --input-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }",
            detail: "Enables smooth angle interpolation and isolated non-inheriting style recalculation on GSAP-animated border highlights.",
          },
        ],
        rationale:
          "Setting inherits: false on @property angle variables ensures that animating the border angle on a button or input never triggers style recalculation on child DOM nodes.",
        rejectedAlternatives: [
          "Legacy tailwind.config.js with JavaScript theme extensions (rejected in favor of Tailwind v4 CSS-first architecture).",
        ],
        sourceFiles: [
          "src/styles/globals.css",
          "postcss.config.mjs",
        ],
        verificationRule:
          "All new semantic tokens must be registered inside @theme inline in src/styles/globals.css.",
      },
      {
        id: "AD-04",
        title: "Progressive Enhancement CSS: @container, :has(), and cqi with @supports Fallbacks",
        pillar: "architecture-delivery",
        status: "Enforced",
        versionIntroduced: "v1.3.0",
        lastUpdated: "2026-09-28",
        summary:
          "Implements intrinsic, content-aware and size-aware component layouts using CSS :has(), @container queries, and cqi units, guarded by explicit @supports fallbacks.",
        contextAndProblem:
          "A card placed inside a narrow 360px Bento column needs a vertical layout even when the browser viewport is 1440px wide, and a card header following an inset media stage needs tighter top padding than a standalone header.",
        granularSpec: [
          {
            parameter: "Relational Content Styling (:has)",
            value: ".cmplt-card:has([data-slot='card-media']) > [data-slot='card-header'] { padding-top: 0.75rem; }",
            detail: "Includes @supports not selector(:has(*)) fallback using .cmplt-card.has-media.",
          },
          {
            parameter: "Size-Aware Adaptive Layout (@container)",
            value: "@container (min-width: 480px) on .cmplt-card-adaptive inside .cmplt-card-container",
            detail: "Switches from column to row at 480px container width, falling back to @media (min-width: 640px) when container queries are unsupported.",
          },
          {
            parameter: "Container-Query Fluid Title (cqi)",
            value: "@supports (font-size: 1cqi) { font-size: clamp(1.25rem, 0.9rem + 3.2cqi, 2.75rem); }",
            detail: "Falls back to clamp(1.25rem, 1rem + 2.2vw, 2.75rem) for non-cqi environments.",
          },
        ],
        rationale:
          "Follows Modern Web Guidance standards: leverage modern Baseline CSS capabilities for intrinsic component modularity while guaranteeing zero broken layouts on older engines.",
        rejectedAlternatives: [
          "Passing manual hasMedia={true} boolean props to CardHeader (rejected as brittle compared to declarative :has([data-slot='card-media'])).",
        ],
        sourceFiles: [
          "src/styles/globals.css",
          "src/registry/cmplt/ui/card.tsx",
        ],
        verificationRule:
          "Every newly available CSS selector or unit must include a corresponding @supports fallback rule in src/styles/globals.css.",
      },
      {
        id: "AD-05",
        title: "Composable data-slot Architecture & 7 Domain Card Presets",
        pillar: "architecture-delivery",
        status: "Enforced",
        versionIntroduced: "v1.3.0",
        lastUpdated: "2026-09-28",
        summary:
          "Equips every structural sub-component with a deterministic data-slot attribute and ships 7 production domain presets alongside composable primitives in @cmplt/card.",
        contextAndProblem:
          "Low-level primitives (Card, CardHeader, CardContent) require repetitive boilerplate for common product patterns (blog articles, e-commerce items, KPI metrics, user profiles, feature callouts, testimonials, events).",
        granularSpec: [
          {
            parameter: "Composable Sub-Primitives (10 Exports)",
            value: "Card, CardMedia, CardHeader, CardEyebrow, CardTitle, CardDescription, CardContent, CardMeta, CardPrice, CardFooter",
            detail: "Each element renders a deterministic data-slot='card-*' attribute for parent-child CSS orchestration.",
          },
          {
            parameter: "Domain Presets (7 Turnkey Components)",
            value: "BlogCard, ProductCard, MetricCard, ProfileCard, FeatureCard, TestimonialCard, EventCard",
            detail: "Built 100% from the composable sub-primitives, concentric CardMedia stages, and tabular metric formatting.",
          },
        ],
        rationale:
          "Teams can drop in a turnkey <MetricCard /> or <ProductCard /> for rapid delivery, or drop down to <Card><CardMedia /><CardHeader /></Card> when custom composition is needed.",
        rejectedAlternatives: [
          "Splitting each card preset into 7 separate registry installs (rejected to keep card primitives and domain presets cohesive in a single @cmplt/card install).",
        ],
        sourceFiles: [
          "src/registry/cmplt/ui/card.tsx",
          "src/components/docs/component-catalog.tsx",
        ],
        verificationRule:
          "All compound component sub-parts must include a descriptive data-slot attribute.",
      },
      {
        id: "AD-06",
        title: "O(1) Root DOM Attribute Theme Engine (ThemeProvider)",
        pillar: "architecture-delivery",
        status: "Enforced",
        versionIntroduced: "v1.0.0",
        lastUpdated: "2026-09-28",
        summary:
          "Manages color mode ('dark' | 'light') and geometry scale ('none' | 'sm' | 'md' | 'lg' | 'xl') via root <html> attributes. Brand preset attribute remains for API continuity but no longer rebinds brand semantics.",
        contextAndProblem:
          "Passing theme objects through React Context into inline styles forces full-tree component re-renders and causes SSR hydration mismatches.",
        granularSpec: [
          {
            parameter: "Root <html> Attributes",
            value: "class='dark' · data-radius='md'",
            detail: "Server-rendered with default dark/md attributes and suppressHydrationWarning on <html>. data-theme-preset is retained but does not remap --bg-brand.",
          },
          {
            parameter: "Runtime Mutation Hook (useTheme)",
            value: "mode, setMode, toggleMode, radius, setRadius",
            detail: "Synchronizes React state with document.documentElement attributes inside lightweight useEffect hooks.",
          },
        ],
        rationale:
          "Mutating attributes on <html> lets the browser's native CSS cascade update every token in O(1) time without re-executing component render functions.",
        rejectedAlternatives: [
          "CSS-in-JS ThemeProvider injecting dynamic <style> tags on every toggle (rejected due to runtime overhead and Next.js App Router RSC incompatibility).",
        ],
        sourceFiles: [
          "src/components/theme-provider.tsx",
          "src/app/layout.tsx",
          "src/styles/tokens.css",
        ],
        verificationRule:
          "Components must read colors and radii via CSS custom properties rather than branching on useTheme() in JSX (unless displaying current theme metadata in UI controls).",
      },
      {
        id: "AD-07",
        title: "WebGL Orthographic Shader & 1×1 Canvas OKLCH Gamut Bridge (InteractiveDotField)",
        pillar: "architecture-delivery",
        status: "Enforced",
        versionIntroduced: "v1.4.0",
        lastUpdated: "2026-09-28",
        summary:
          "Bridges CSS OKLCH custom properties into Three.js WebGL GLSL shaders via a 1×1 2D canvas gamut resolver and synchronizes the WebGL render loop with gsap.ticker.",
        contextAndProblem:
          "Three.js THREE.Color cannot parse CSS oklch(...) strings natively. Furthermore, running a separate requestAnimationFrame loop alongside GSAP causes dual-timer frame drift and memory leaks if GPU buffers are not explicitly disposed.",
        granularSpec: [
          {
            parameter: "OKLCH-to-WebGL Bridge (resolveCssColorToThree)",
            value: "1×1 2D <canvas> fillRect + getImageData()",
            detail: "Delegates OKLCH-to-sRGB conversion to the browser's native color engine and converts the resulting pixel into normalized [0..1] THREE.Color floats.",
          },
          {
            parameter: "Live Theme MutationObserver",
            value: "Observes class & data-theme-preset on document.documentElement",
            detail: "Smoothly tweens uBaseColor, uAccentColor, and uBaseOpacity shader uniforms over 0.5s via GSAP when switching Light/Dark mode or Theme Studio presets.",
          },
          {
            parameter: "Unified Render Ticker & GPU Cleanup",
            value: "gsap.ticker.add(tick) + geometry/material/renderer.dispose()",
            detail: "Shares GSAP's master RAF ticker and disposes all WebGL resources and ResizeObserver/MutationObserver instances on unmount.",
          },
        ],
        rationale:
          "Ensures the WebGL canvas background stays 100% color-accurate with OKLCH tokens and never leaks WebGL contexts during SPA route transitions.",
        rejectedAlternatives: [
          "Bundling a heavy third-party color-space conversion library just for Three.js (rejected because the 1×1 2D canvas resolver is 20 lines of zero-dependency code).",
        ],
        sourceFiles: [
          "src/registry/cmplt/ui/interactive-dot-field.tsx",
        ],
        verificationRule:
          "Any Three.js component must use gsap.ticker for frame synchronization and dispose geometry, material, and renderer in its useEffect cleanup.",
      },
      {
        id: "AD-08",
        title: "100% Dogfooding Mandate & Self-Hosted Documentation Platform",
        pillar: "architecture-delivery",
        status: "Enforced",
        versionIntroduced: "v1.0.0",
        lastUpdated: "2026-09-28",
        summary:
          "Mandates that every page of the cmplt platform (/docs, /docs/tokens, /docs/blueprint, /blocks, /figma, /pricing) is constructed exclusively from @cmplt registry primitives and blocks.",
        contextAndProblem:
          "Many design systems build their documentation site with third-party doc themes (e.g., Nextra, Docusaurus, or custom one-off CSS), hiding usability flaws in their own components.",
        granularSpec: [
          {
            parameter: "Documentation & Showcase Routes",
            value: "/, /docs, /docs/tokens, /docs/blueprint, /docs/components/[slug], /blocks, /figma, /pricing",
            detail: "Every navigation bar, modal search (⌘K), popover customizer, tab bar, accordion FAQ, and code preview uses src/registry/cmplt/ui/* directly.",
          },
          {
            parameter: "Interactive Thumbnail & Catalog Engine",
            value: "src/components/docs/component-catalog.tsx & component-thumbnails.tsx",
            detail: "Renders live interactive Base UI components inside concentric dot-matrix stages.",
          },
        ],
        rationale:
          "Eating our own dogfood ensures that contrast, spacing, keyboard focus, and responsive behavior are continuously stress-tested in production.",
        rejectedAlternatives: [
          "Using an external documentation generator decoupled from src/registry/cmplt (rejected to guarantee 100% dogfooding).",
        ],
        sourceFiles: [
          "src/app/page.tsx",
          "src/app/docs/layout.tsx",
          "src/app/docs/page.tsx",
          "src/app/docs/blueprint/page.tsx",
          "src/components/docs/component-catalog.tsx",
        ],
        verificationRule:
          "Never create ad-hoc UI controls in src/components/** when a primitive in src/registry/cmplt/ui/** can fulfill the role.",
      },
      {
        id: "AD-09",
        title: "Multi-Tier shadcn Registry Architecture & Token Distribution",
        pillar: "architecture-delivery",
        status: "Enforced",
        versionIntroduced: "v1.5.0",
        lastUpdated: "2026-09-30",
        summary:
          "Expands the cmplt registry distribution across all 12 shadcn registry types (ui, hook, block, component, lib, theme, base, font, page, file, item) with automated Tokens Studio sync, CORS headers, and registry schema validation.",
        contextAndProblem:
          "Traditional component libraries distribute only primitives, leaving design tokens, ergonomic hooks, application pages, and Figma variable bridges disconnected or requiring manual multi-step configuration.",
        granularSpec: [
          {
            parameter: "Full shadcn Registry Types Coverage",
            value: "12 registry types (ui, hook, block, component, lib, theme, base, font, page, file, item, style)",
            detail: "Supports npx shadcn@latest add for hooks, complete full-screen app pages, typography fonts, and DTCG token files.",
          },
          {
            parameter: "Figma Tokens Studio Sync",
            value: "src/registry/cmplt/tokens/tokens-studio.json & /tokens-studio.json",
            detail: "Compiles W3C DTCG tokens.json directly into multi-theme Tokens Studio JSON with global, light, and dark mode sets.",
          },
          {
            parameter: "Cross-Origin Registry Distribution (CORS)",
            value: "Access-Control-Allow-Origin: * for /r/:path* and /tokens-studio.json",
            detail: "Allows remote projects running shadcn CLI or design plugins to pull components and tokens without CORS blocking.",
          },
          {
            parameter: "Automated Registry & Schema Validator",
            value: "scripts/validate-registry.mjs (npm run registry:validate)",
            detail: "Validates all 81+ manifest items, target paths, dependencies, and generated endpoint schemas before deployment.",
          },
        ],
        rationale:
          "Providing the complete spectrum of shadcn registry types turns cmplt from a component library into an end-to-end design engineering ecosystem with 1-command deployment.",
        rejectedAlternatives: [
          "Restricting the registry to registry:ui only (rejected because hooks, blocks, pages, and token definitions would need manual copy-pasting).",
        ],
        sourceFiles: [
          "registry.json",
          "scripts/build-registry.mjs",
          "scripts/build-tokens-studio.mjs",
          "scripts/validate-registry.mjs",
          "next.config.ts",
        ],
        verificationRule:
          "Every registry item must declare a valid registry:* type and pass npm run registry:validate with zero errors.",
      },
    ],
  },
];

export const REGISTRY_INVENTORY_MATRIX: RegistryArtifactDoc[] = [
  {
    name: "utils",
    type: "registry:lib",
    pillar: "architecture-delivery",
    engine: "clsx + tailwind-merge",
    sourcePath: "src/registry/cmplt/lib/utils.ts",
    targetPath: "lib/utils.ts",
    keyDecisions: ["AD-01", "AD-03"],
    summary: "Deterministic Tailwind CSS v4 class merging helper cn().",
  },
  {
    name: "tokens",
    type: "registry:style",
    pillar: "visual-foundations",
    engine: "OKLCH CSS + W3C DTCG JSON",
    sourcePath: "src/styles/tokens.css + src/registry/cmplt/tokens/tokens.json",
    targetPath: "styles/tokens.css + tokens/cmplt.tokens.json",
    keyDecisions: ["VF-01", "VF-02", "VF-03", "VF-04", "VF-05", "VF-06", "AD-02"],
    summary: "Complete 3-tier OKLCH color system, Dual-Scale Liquid Utopia typography, concentric radii, and W3C Figma tokens.",
  },
  {
    name: "typography",
    type: "registry:ui",
    pillar: "visual-foundations",
    engine: "Geist Variable + CVA",
    sourcePath: "src/registry/cmplt/ui/typography.tsx",
    targetPath: "components/ui/typography.tsx",
    keyDecisions: ["VF-04", "VF-05", "IE-02", "IE-03"],
    summary: "Heading, Text, Code, and Prose primitives with fluid clamp() steps and Bringhurst ch measure limits.",
  },
  {
    name: "button",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/button + CVA",
    sourcePath: "src/registry/cmplt/ui/button.tsx",
    targetPath: "components/ui/button.tsx",
    keyDecisions: ["VF-06", "VF-07", "IE-01", "IE-07", "IE-08"],
    summary: "Accessible headless button with 6 semantic variants, pill/rounded contours, and active:scale-[0.985] feedback.",
  },
  {
    name: "animated-cta-button",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/button + GSAP",
    sourcePath: "src/registry/cmplt/ui/animated-cta-button.tsx",
    targetPath: "components/ui/animated-cta-button.tsx",
    keyDecisions: ["IE-04", "IE-08", "AD-03"],
    summary: "Hierarchy-elevating CTA button with GSAP orbital conic border light, cursor sheen, and 3.5px magnetic proximity pull.",
  },
  {
    name: "highlight-input",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/input + GSAP",
    sourcePath: "src/registry/cmplt/ui/highlight-input.tsx",
    targetPath: "components/ui/highlight-input.tsx",
    keyDecisions: ["VF-06", "IE-04", "IE-08", "AD-03"],
    summary: "GSAP border-highlighted input frame for primary search bars, command palettes, and priority form fields.",
  },
  {
    name: "motion-surface",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "GSAP (useGSAP + quickTo)",
    sourcePath: "src/registry/cmplt/ui/motion-surface.tsx",
    targetPath: "components/ui/motion-surface.tsx",
    keyDecisions: ["IE-05", "IE-08"],
    summary: "Interactive card wrapper with radial cursor spotlight, -2px hover lift, and MotionStaggerGroup entrance cascades.",
  },
  {
    name: "card",
    type: "registry:ui",
    pillar: "visual-foundations",
    engine: "CVA + CSS :has() / @container",
    sourcePath: "src/registry/cmplt/ui/card.tsx",
    targetPath: "components/ui/card.tsx",
    keyDecisions: ["VF-02", "VF-06", "VF-07", "AD-04", "AD-05"],
    summary: "10 composable surface sub-primitives and 7 turnkey domain presets (Blog, Product, Metric, Profile, Feature, Testimonial, Event).",
  },
  {
    name: "badge",
    type: "registry:ui",
    pillar: "visual-foundations",
    engine: "CVA",
    sourcePath: "src/registry/cmplt/ui/badge.tsx",
    targetPath: "components/ui/badge.tsx",
    keyDecisions: ["VF-03", "VF-04", "IE-03"],
    summary: "Compact status and metadata pill supporting 8 semantic token variants and optional status indicator dot.",
  },
  {
    name: "input",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/input",
    sourcePath: "src/registry/cmplt/ui/input.tsx",
    targetPath: "components/ui/input.tsx",
    keyDecisions: ["VF-06", "VF-07", "IE-01", "IE-07"],
    summary: "Level 0 flat form input supporting structured 8px ('default') and 9999px ('search') contours.",
  },
  {
    name: "field",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/field",
    sourcePath: "src/registry/cmplt/ui/field.tsx",
    targetPath: "components/ui/field.tsx",
    keyDecisions: ["IE-01", "IE-07"],
    summary: "Accessible form field composition automatically wiring id, htmlFor, aria-describedby, and validation states.",
  },
  {
    name: "switch",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/switch",
    sourcePath: "src/registry/cmplt/ui/switch.tsx",
    targetPath: "components/ui/switch.tsx",
    keyDecisions: ["VF-06", "IE-01", "IE-08"],
    summary: "Pill-shaped binary toggle switch with data-[checked] thumb translation and hidden native form input support.",
  },
  {
    name: "checkbox",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/checkbox",
    sourcePath: "src/registry/cmplt/ui/checkbox.tsx",
    targetPath: "components/ui/checkbox.tsx",
    keyDecisions: ["IE-01", "IE-08"],
    summary: "Accessible checkbox control supporting checked and indeterminate states with SVG indicator.",
  },
  {
    name: "select",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/select",
    sourcePath: "src/registry/cmplt/ui/select.tsx",
    targetPath: "components/ui/select.tsx",
    keyDecisions: ["VF-06", "VF-07", "IE-01", "IE-06"],
    summary: "Floating UI anchored dropdown menu with concentric 14px→8px popup geometry and typeahead navigation.",
  },
  {
    name: "tabs",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/tabs",
    sourcePath: "src/registry/cmplt/ui/tabs.tsx",
    targetPath: "components/ui/tabs.tsx",
    keyDecisions: ["VF-06", "IE-01"],
    summary: "Roving-focus tab navigation supporting both pill 'segmented' controls and clean 'underline' bars.",
  },
  {
    name: "accordion",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/accordion",
    sourcePath: "src/registry/cmplt/ui/accordion.tsx",
    targetPath: "components/ui/accordion.tsx",
    keyDecisions: ["IE-01"],
    summary: "Vertically stacked disclosure panels with WAI-ARIA heading/panel semantics and chevron rotation.",
  },
  {
    name: "dialog",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/dialog",
    sourcePath: "src/registry/cmplt/ui/dialog.tsx",
    targetPath: "components/ui/dialog.tsx",
    keyDecisions: ["VF-06", "VF-07", "IE-01", "IE-06", "IE-08"],
    summary: "Level 2 modal window (24px radius) with top-layer @starting-style transitions, backdrop blur, and focus trapping.",
  },
  {
    name: "popover",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/popover",
    sourcePath: "src/registry/cmplt/ui/popover.tsx",
    targetPath: "components/ui/popover.tsx",
    keyDecisions: ["VF-07", "IE-01", "IE-06"],
    summary: "Non-modal anchored floating surface for inspectors, customizers, and contextual settings.",
  },
  {
    name: "tooltip",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/tooltip",
    sourcePath: "src/registry/cmplt/ui/tooltip.tsx",
    targetPath: "components/ui/tooltip.tsx",
    keyDecisions: ["VF-07", "IE-01", "IE-06"],
    summary: "Hover and keyboard-focus floating label with shared TooltipProvider delay coordination.",
  },
  {
    name: "progress",
    type: "registry:ui",
    pillar: "interaction-ergonomics",
    engine: "@base-ui/react/progress",
    sourcePath: "src/registry/cmplt/ui/progress.tsx",
    targetPath: "components/ui/progress.tsx",
    keyDecisions: ["IE-01", "IE-03"],
    summary: "Accessible progress bar with optional label and tabular-nums percentage readout.",
  },
  {
    name: "separator",
    type: "registry:ui",
    pillar: "visual-foundations",
    engine: "@base-ui/react/separator",
    sourcePath: "src/registry/cmplt/ui/separator.tsx",
    targetPath: "components/ui/separator.tsx",
    keyDecisions: ["VF-07", "IE-01"],
    summary: "1px hairline semantic divider supporting horizontal and vertical orientations.",
  },
  {
    name: "kbd",
    type: "registry:ui",
    pillar: "visual-foundations",
    engine: "Geist Mono",
    sourcePath: "src/registry/cmplt/ui/kbd.tsx",
    targetPath: "components/ui/kbd.tsx",
    keyDecisions: ["VF-04", "IE-03"],
    summary: "Monospace keyboard shortcut badge (11px ui-2xs) used in command triggers and tooltips.",
  },
  {
    name: "engagement-panel-block",
    type: "registry:block",
    pillar: "visual-foundations",
    engine: "Multi-Surface Reference Block",
    sourcePath: "src/registry/cmplt/blocks/engagement-panel-block.tsx",
    targetPath: "components/blocks/engagement-panel-block.tsx",
    keyDecisions: ["VF-01", "VF-02", "VF-03", "VF-06"],
    summary: "Signature split-shell reference block demonstrating Canvas → Surface → Elevated Panel → Subtle Key-Value Table nesting.",
  },
  {
    name: "app-manager-block",
    type: "registry:block",
    pillar: "interaction-ergonomics",
    engine: "Base UI + GSAP Block",
    sourcePath: "src/registry/cmplt/blocks/app-manager-block.tsx",
    targetPath: "components/blocks/app-manager-block.tsx",
    keyDecisions: ["VF-02", "VF-06", "IE-04"],
    summary: "3-pane application directory window shell with GSAP HighlightInput pill search, squircle icons, and AnimatedCtaButton footer.",
  },
  {
    name: "ai-deployment-card",
    type: "registry:block",
    pillar: "architecture-delivery",
    engine: "7-Primitive Composed Block",
    sourcePath: "src/registry/cmplt/blocks/ai-deployment-card.tsx",
    targetPath: "components/blocks/ai-deployment-card.tsx",
    keyDecisions: ["IE-01", "IE-03", "AD-01"],
    summary: "Interactive AI cluster telemetry control surface combining Card, Select, Switch, Progress, Badge, Button, and Dialog.",
  },
  {
    name: "token-sync-inspector",
    type: "registry:block",
    pillar: "architecture-delivery",
    engine: "Base UI Popover + W3C Tokens",
    sourcePath: "src/registry/cmplt/blocks/token-sync-inspector.tsx",
    targetPath: "components/blocks/token-sync-inspector.tsx",
    keyDecisions: ["AD-02", "AD-08"],
    summary: "Interactive Code-to-Figma token parity inspector with Popover scope details and 1-click CSS variable copy.",
  },
  {
    name: "pricing-tier-block",
    type: "registry:block",
    pillar: "visual-foundations",
    engine: "Base UI Tabs + Card Matrix",
    sourcePath: "src/registry/cmplt/blocks/pricing-tier-block.tsx",
    targetPath: "components/blocks/pricing-tier-block.tsx",
    keyDecisions: ["VF-02", "IE-01", "IE-03"],
    summary: "3-tier SaaS and Design System licensing matrix with segmented billing cycle Tabs and highlighted Pro card.",
  },
  {
    name: "hero-motion-block",
    type: "registry:block",
    pillar: "interaction-ergonomics",
    engine: "GSAP Ticker + Liquid Buttons + Three.js",
    sourcePath: "src/registry/cmplt/blocks/hero-motion-block.tsx",
    targetPath: "components/blocks/hero-motion-block.tsx",
    keyDecisions: ["IE-04", "IE-05", "AD-07", "AD-09"],
    summary: "Interactive hero banner block featuring concentric typography, liquid animated CTA buttons, and interactive WebGL dot field.",
  },
  {
    name: "app-dock-block",
    type: "registry:block",
    pillar: "interaction-ergonomics",
    engine: "LiquidDock + LiquidAvatarGroup + Base UI",
    sourcePath: "src/registry/cmplt/blocks/app-dock-block.tsx",
    targetPath: "components/blocks/app-dock-block.tsx",
    keyDecisions: ["IE-04", "IE-05", "AD-08", "AD-09"],
    summary: "Fluid workspace dock composite block combining gooey surface tension dock items, active collaborator presence, and module switcher.",
  },
  {
    name: "use-mouse-position",
    type: "registry:hook",
    pillar: "interaction-ergonomics",
    engine: "React Spring / Pointer Hook",
    sourcePath: "src/registry/cmplt/hooks/use-mouse-position.ts",
    targetPath: "hooks/use-mouse-position.ts",
    keyDecisions: ["IE-04", "AD-09"],
    summary: "Real-time reactive pointer tracking hook for interactive hover effects and fluid magnetic surfaces.",
  },
  {
    name: "use-reduced-motion",
    type: "registry:hook",
    pillar: "interaction-ergonomics",
    engine: "CSS Media Query Matcher",
    sourcePath: "src/registry/cmplt/hooks/use-reduced-motion.ts",
    targetPath: "hooks/use-reduced-motion.ts",
    keyDecisions: ["IE-01", "AD-09"],
    summary: "Accessible hook respecting user prefers-reduced-motion OS preferences with real-time change listeners.",
  },
  {
    name: "use-media-query",
    type: "registry:hook",
    pillar: "architecture-delivery",
    engine: "Window matchMedia Hook",
    sourcePath: "src/registry/cmplt/hooks/use-media-query.ts",
    targetPath: "hooks/use-media-query.ts",
    keyDecisions: ["AD-09"],
    summary: "Hydration-safe responsive breakpoint and media query detection hook.",
  },
  {
    name: "theme",
    type: "registry:theme",
    pillar: "visual-foundations",
    engine: "Tailwind CSS v4 @theme",
    sourcePath: "src/registry/cmplt/theme/theme.css",
    targetPath: "styles/theme.css",
    keyDecisions: ["VF-01", "VF-02", "AD-01", "AD-09"],
    summary: "Tailwind CSS v4 theme module defining inline semantic color, spacing, radius, and container utility variables.",
  },
  {
    name: "base",
    type: "registry:base",
    pillar: "visual-foundations",
    engine: "CSS Global Stylesheet",
    sourcePath: "src/registry/cmplt/base/base.css",
    targetPath: "styles/base.css",
    keyDecisions: ["VF-04", "VF-06", "AD-09"],
    summary: "Foundational CSS layer establishing smooth antialiasing, focus outlines, selection colors, and root variables.",
  },
  {
    name: "showcase-page",
    type: "registry:page",
    pillar: "architecture-delivery",
    engine: "Next.js App Router Page",
    sourcePath: "src/registry/cmplt/page-templates/showcase-page.tsx",
    targetPath: "app/showcase/page.tsx",
    keyDecisions: ["AD-08", "AD-09"],
    summary: "Complete ready-to-run interactive showcase template demonstrating cmplt components, blocks, and tokens.",
  },
  {
    name: "tokens-studio",
    type: "registry:file",
    pillar: "visual-foundations",
    engine: "Tokens Studio Schema",
    sourcePath: "src/registry/cmplt/tokens/tokens-studio.json",
    targetPath: "tokens/tokens-studio.json",
    keyDecisions: ["VF-01", "VF-07", "AD-09"],
    summary: "Multi-theme Tokens Studio JSON schema export with global, light, and dark token sets for 2-way Figma sync.",
  },
  {
    name: "design-tokens",
    type: "registry:item",
    pillar: "visual-foundations",
    engine: "W3C DTCG Format",
    sourcePath: "src/registry/cmplt/tokens/tokens.json",
    targetPath: "tokens/cmplt.tokens.json",
    keyDecisions: ["VF-01", "VF-07", "AD-09"],
    summary: "W3C Design Tokens Community Group specification bundle with calibrated OKLCH values and Figma scopes.",
  },
];

export const DECISION_CHANGELOG: ChangelogEntry[] = [
  {
    version: "v1.5.0",
    date: "2026-09-30",
    title: "12-Type shadcn Registry, Tokens Studio Figma Sync, CORS & Validation Architecture",
    pillarImpact: [
      "visual-foundations",
      "interaction-ergonomics",
      "architecture-delivery",
    ],
    decisionsAddedOrUpdated: [
      "AD-09",
    ],
    summary:
      "Expanded registry into a complete 12-type distribution network (ui, hook, block, component, lib, theme, base, font, page, file, item). Added automated Tokens Studio compiler, CORS access headers, schema validation test suite, and Figma Dev Mode token parity inspection.",
  },
  {
    version: "v1.4.0",
    date: "2026-09-28",
    title: "Living System Blueprint, UI-Writing Taxonomy & GSAP Hierarchy Physics",
    pillarImpact: [
      "visual-foundations",
      "interaction-ergonomics",
      "architecture-delivery",
    ],
    decisionsAddedOrUpdated: [
      "IE-04",
      "IE-05",
      "AD-07",
      "AD-08",
    ],
    summary:
      "Established the Living System Blueprint (/docs/blueprint and docs/*.md) structured into Visual Foundations & Aesthetics, Interaction, Motion & Accessibility, and System Architecture & Delivery. Added GSAP AnimatedCtaButton, HighlightInput, MotionSurface, and Three.js InteractiveDotField with 1×1 canvas OKLCH gamut resolution.",
  },
  {
    version: "v1.3.0",
    date: "2026-09-28",
    title: "Geist Variable Dual-Scale Utopia, 65ch Guardrails & 7 Domain Card Presets",
    pillarImpact: ["visual-foundations", "interaction-ergonomics", "architecture-delivery"],
    decisionsAddedOrUpdated: ["VF-04", "VF-05", "IE-02", "IE-03", "AD-04", "AD-05"],
    summary:
      "Implemented Dual-Scale Liquid Utopia clamp() typography (1.200 → 1.333), static rem UI control separation, dark-mode variable font anti-halation (-15 to -20 wght), Bringhurst ch line-length tokens, and 7 domain card presets with :has() and @container progressive enhancement.",
  },
  {
    version: "v1.2.0",
    date: "2026-09-28",
    title: "Calibrated Warm Alabaster & Matte Graphite Luminance + Concentric Geometry",
    pillarImpact: ["visual-foundations", "interaction-ergonomics"],
    decisionsAddedOrUpdated: ["VF-01", "VF-02", "VF-03", "VF-06", "VF-08", "IE-06"],
    summary:
      "Eliminated #FFFFFF and #000000 extremes in favor of Hue 85° Warm Alabaster and Matte Graphite OKLCH ramps, formalized the 4-step surface hierarchy, and introduced concentric corner radius tokens (R_inner = R_outer - padding).",
  },
  {
    version: "v1.0.0",
    date: "2026-09-28",
    title: "Initial @base-ui/react v1.8 Primitives, W3C DTCG Schema & shadcn Registry",
    pillarImpact: ["visual-foundations", "interaction-ergonomics", "architecture-delivery"],
    decisionsAddedOrUpdated: ["VF-07", "IE-01", "IE-07", "IE-08", "AD-01", "AD-02", "AD-03", "AD-06"],
    summary:
      "Created core headless primitives on @base-ui/react v1.8, Tailwind v4 @theme inline token mapping, W3C tokens.json with Figma scopes, and scripts/build-registry.mjs static endpoint generator.",
  },
];

export function getPillarSpec(slug: string): PillarSpecification | undefined {
  return SYSTEM_PILLARS.find((p) => p.slug === slug);
}

export function getAllDecisions(): GranularDecisionRecord[] {
  return SYSTEM_PILLARS.flatMap((p) => p.decisions);
}
