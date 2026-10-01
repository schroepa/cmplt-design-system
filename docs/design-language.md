# cmplt Design Language Specification
**The Borderless & Shadowless Physicality Standard**  
*Derived from the Paper.design Master File (`cmplt ds`) & mapped directly to the cmplt OKLCH Token Contract.*

---

## 1. Executive Summary & Design Vision

This specification defines the authoritative design language for the **cmplt design system**.  
Originating from the master design canvas in **Paper.design** (`https://app.paper.design/file/01M3WMHCQ4HEWN5K80SGD91TA5/p-1-0`), this language transitions the design system from traditional line-bordered, drop-shadowed UI boxes into a **calibrated, pure surface-luminance architecture**.

### Core Tenets
1. **Surface Luminance over Line Borders (Borderless):**  
   Container boundaries and hierarchy are defined exclusively through calibrated OKLCH luminance steps between surfaces, never through 1px border lines.
2. **Zero Ambient Drop Shadows (Shadowless):**  
   Muddy, artificial drop-shadows are eliminated entirely (`shadow-none`). Physical elevation is tactile and planar. The only permitted lighting effect is **emissive optical glow** on interactive focal points (e.g., primary CTAs).
3. **222px Soft Edge Transitions (Seamless Gradients):**  
   Sections do not end abruptly. Every major content section concludes with an organic 222px linear fade to the canvas background (`from-transparent to-canvas`).
4. **100vh Viewport Snap-Scroller (Architectural Cadence):**  
   Every major stage occupies full viewport height (`min-h-screen`), aligning to the top of the viewport with smooth, native CSS scroll-snapping (`snap-start snap-always`).
5. **Monolithic Uppercase Typography:**  
   Headlines command attention through heavy weights (`font-black`), uppercase styling, and tight letter-spacing (`tracking-[-0.035em]`), paired with capsule eyebrows.

---

## 2. Token Translation & Color Mapping Matrix

All visual decisions from Paper.design are mapped strictly to the existing **cmplt design system tokens** without altering the underlying token contract (`src/styles/tokens.css`):

| Paper Visual Intent | Paper Reference Hex | Calculated OKLCH | Canonical cmplt Token | Tailwind Utility | Usage in Components |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Canvas Background** | `#20201E` | `oklch(0.244 0.009 38°)` | `var(--bg-canvas)` (`--neutral-950`) | `bg-canvas` | Global page backdrop |
| **Card / Surface** | `#272625` | `oklch(0.270 0.010 31°)` | `var(--bg-surface)` (`--neutral-900`) | `bg-surface` | Primary cards, panels, modals |
| **Subtle Surface / Inset** | `#2B2A29` | `oklch(0.287 0.011 31°)` | `var(--bg-subtle)` (`--neutral-850`) | `bg-subtle` | Icon wells, tag pills, nested groups |
| **Elevated Surface** | `#2E2E2D` | `oklch(0.304 0.003 85°)` | `var(--bg-elevated)` (`--neutral-800`)| `bg-elevated` | Dropdown menus, open popovers |
| **Primary Typography** | `#EFEEEC` | `oklch(0.952 0.031 30°)` | `var(--fg-primary)` (`--neutral-100`) | `text-fg-primary` | Headings, high-contrast labels |
| **Secondary / Lead Text** | `#ADACA9` | `oklch(0.747 0.026 32°)` | `var(--fg-secondary)` (`--neutral-400`)| `text-fg-secondary` | Paragraphs, lead text, card copy |
| **Muted / Metadata Text** | `#73726E` | `oklch(0.553 0.021 35°)` | `var(--fg-muted)` (`--neutral-500`) | `text-fg-muted` | Captions, footnotes, table headers |
| **Brand Accent (Headings)** | `#EF6F50` | `oklch(0.690 0.172 22°)` | `var(--fg-brand)` / `var(--brand-400)` | `text-fg-brand` | Hero headline, active tabs, highlights |
| **Brand Vivid (Action CTA)**| `#E45C3E` | `oklch(0.645 0.179 21°)` | `var(--bg-brand)` / `var(--brand-500)` | `bg-brand` | Primary buttons, brand badges |
| **Success Indicator** | `#1A9064` | `oklch(0.584 0.061 148°)`| `var(--status-success)` | `bg-status-success` | Live status dots, operational indicators |

---

## 3. Structural Rhythm & Layout Cadence

### 3.1 Full-Viewport Sections & Scroll-Snapping
To create an immersive, presentation-grade narrative:
* **Scroll Container (`html.snap-y`):**
  ```css
  html.snap-y {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
  }
  ```
* **Section Containers:**
  ```tsx
  <section className="relative min-h-screen flex flex-col justify-center snap-start snap-always py-20 sm:py-28 md:py-36 overflow-hidden">
    {/* Centered content */}
    <div className="cmplt-container relative z-10 my-auto">
      ...
    </div>
    
    {/* 222px Soft Edge Fade to Canvas */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 inset-x-0 h-[222px] bg-gradient-to-b from-transparent to-canvas z-10"
    />
  </section>
  ```

### 3.2 The 222px Soft Edge Fade
* Hard 1px section borders (`border-b border-border-subtle`) are strictly prohibited between main stages.
* Every stage terminates with an absolute `h-[222px]` gradient:
  ```css
  background: linear-gradient(180deg, transparent 0%, var(--bg-canvas) 100%);
  ```
  This guarantees seamless visual continuity into subsequent sections.

---

## 4. Typography System

### 4.1 Monolithic Uppercase Headings
All major section titles must be uppercase, ultra-bold, and tightly tracked:
```tsx
<h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[-0.035em] text-fg-primary leading-tight text-balance">
  SECTION TITLE HERE
</h2>
```

### 4.2 Hero Display Treatment
* **Headline:** Rendered in `text-fg-brand` (`oklch(0.69 0.165 35)`):
  ```tsx
  <h1 className="mx-auto text-center font-black uppercase tracking-[-0.035em] text-fg-brand text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.04] text-balance">
    THE COMPLETE DESIGNSYSTEM.
  </h1>
  ```
* **Lead Copy:** `text-fg-secondary text-lg sm:text-xl leading-[1.65] max-w-3xl text-balance`.

### 4.3 Capsule Eyebrow Badges
Every section begins with a centered or left-aligned pill capsule:
```tsx
<Badge variant="mono" className="border-0 shadow-none bg-subtle text-fg-secondary">
  INTERACTIVE CONTROL SURFACES
</Badge>
```

---

## 5. Component Anatomy & Rules

### 5.1 Cards & Panels
* **Container:**
  * Background: `bg-surface` (`var(--bg-surface)`).
  * Radius: `rounded-[20px]` (`20px`).
  * Borders: `border-0` (No 1px border lines).
  * Shadows: `shadow-none` (No drop shadows).
  * Padding: `p-6` to `p-10`.
* **Internal Wells & Media:**
  * Concentric inner radius: `rounded-[14px]` or `rounded-[12px]`.
  * Background: `bg-subtle` (`var(--bg-subtle)`).
* **Dividers:**
  * Minimalist hairlines using `border-border-subtle/40` only where essential for tabular or metadata clarity.

### 5.2 Buttons & Interactive CTAs
* **Primary CTA:**
  * Shape: Pill (`rounded-full`).
  * Height: `min-h-[44px] px-6`.
  * Background: `bg-brand` (`var(--bg-brand)`).
  * Text: `text-fg-on-brand font-medium`.
  * Optical Rim Light: Emissive radial or conic highlight along the border rim.
* **Secondary Action Button:**
  * Shape: Pill (`rounded-full`).
  * Background: `bg-surface` with hover to `bg-subtle`.
  * Text: `text-fg-primary`.
  * Borders/Shadows: None (`border-0 shadow-none`).
* **Micro Action Buttons (Pills):**
  * Registry selector pills, tags, and tabs use `rounded-full px-3.5 py-1.5 font-mono text-xs`.
  * Active state: `bg-brand/15 text-fg-brand font-semibold`.
  * Inactive state: `bg-surface text-fg-secondary hover:text-fg-primary hover:bg-subtle`.

### 5.3 Navigation & Header Controls
* **Logo Pill:**
  * Floating capsule with `bg-surface/85 backdrop-blur-md`.
  * Accent Ring: `ring-2 ring-brand/60` (derived from Paper `#EF6F50` 2px ring).
  * Icon Mark: Circle in `bg-brand text-fg-on-brand font-mono font-bold`.
* **Utility Pills (Search, Theme, Menu):**
  * Floating capsules in `bg-surface/85 backdrop-blur-md` without borders or shadows.

### 5.4 Documentation Chrome & Sidebar System (Paper `page button` Pattern)
* **Borderless Sidebar:**
  * Strict removal of dividing borders (`md:border-r border-border-subtle` removed).
  * The sidebar breathes directly on `bg-canvas`, relying on typographic hierarchy and whitespace.
* **Category Section Headers:**
  * Uppercase micro-typography: `text-[11px] font-semibold uppercase tracking-wider text-fg-muted`.
  * Category count badges rendered in tabular mono (`cmplt-tabular text-fg-muted/80`).
* **Active Nav Item (Solid Pill):**
  * Active links (e.g. `Button`) are styled as a solid coral capsule:
    ```tsx
    bg-brand text-fg-on-brand font-medium rounded-[11px] px-3.5 py-2
    ```
  * Inactive links use subtle ghost styling:
    ```tsx
    text-fg-secondary hover:bg-subtle hover:text-fg-primary rounded-[11px] px-3.5 py-2
    ```

### 5.5 Interactive Component Preview & Code Tabs
* **Live Preview Stage:**
  * Container: `rounded-[20px] bg-surface border-0 shadow-none`.
  * Dot grid backgrounds (`bg-cmplt-grid`) are replaced with a calm, uniform `bg-surface` plane.
  * Segmented Preview / Code control: Borderless pill container (`rounded-full bg-subtle p-1 border-0`) with pill triggers.
* **Usage Code Block:**
  * Outer: `rounded-[20px] bg-surface border-0 shadow-none overflow-hidden`.
  * Header bar: `bg-subtle/50 px-5 py-3 border-0` with pill copy trigger (`Button variant="secondary" shape="pill"`).

### 5.6 Borderless Tabular Data & State Attributes
* **Table Containers:**
  * Encapsulated in `rounded-[20px] bg-surface border-0 shadow-none p-6 md:p-8`.
  * Column headers: Clean uppercase tracking (`text-[11px] font-semibold tracking-wider text-fg-muted pb-4 px-4`).
  * Row dividers: 1px divider lines are eliminated. Contrast is maintained through monospace weighting and brand color highlights (`text-fg-brand` for types and data attributes).

### 5.7 CLI Terminal Surfaces
* **Container:** `rounded-[16px] bg-surface border-0 shadow-none overflow-hidden`.
* **Platform Switcher (npm / pnpm / bun / DirectURL):** Pill capsule tab group embedded in `bg-subtle rounded-full p-0.5`.
* **Snippet Surface:** Inset terminal code box styled with `rounded-[10px] bg-canvas/70 px-4 py-3 font-mono text-xs text-fg-primary`.

### 5.8 Minimal Text-Link Pagination
* Footer navigation between components removes heavy outline button containers and border lines.
* Replaced with clean directional text links:
  ```tsx
  <Link className="inline-flex items-center gap-2 text-sm font-medium text-fg-secondary hover:text-fg-primary transition-colors">
    <ArrowLeft className="h-4 w-4" />
    {prevComp.title}
  </Link>
  ```

---

## 6. Global Rollout Matrix

To propagate this design language across the rest of the codebase, follow this checklist:

### Phase 1: Foundational Pages (Completed)
- [x] **Global CSS:** Native smooth scroll & `html.snap-y` mandatory scroll snap ([`src/styles/globals.css`](file:///Users/ptrck/Developer/cmplt-design-system/src/styles/globals.css)).
- [x] **Homepage:** All 5 stages updated with `min-h-screen`, `snap-start`, uppercase headings, 222px gradients, and borderless/shadowless cards ([`src/app/page.tsx`](file:///Users/ptrck/Developer/cmplt-design-system/src/app/page.tsx)).
- [x] **Header Navigation:** Borderless utility controls & brand highlight ring ([`src/components/site-header.tsx`](file:///Users/ptrck/Developer/cmplt-design-system/src/components/site-header.tsx)).
- [x] **Site Footer:** Borderless transition & snap-start integration ([`src/components/site-footer.tsx`](file:///Users/ptrck/Developer/cmplt-design-system/src/components/site-footer.tsx)).

### Phase 2: Documentation Architecture & Component Pages (Completed)
- [x] **Docs Sidebar Navigation ([`src/app/docs/layout.tsx`](file:///Users/ptrck/Developer/cmplt-design-system/src/app/docs/layout.tsx)):** Borderless sidebar, uppercase categories with counter badges, and solid coral active nav capsule (`rounded-[11px] bg-brand text-fg-on-brand`).
- [x] **Component Page Template ([`src/app/docs/components/[slug]/page.tsx`](file:///Users/ptrck/Developer/cmplt-design-system/src/app/docs/components/[slug]/page.tsx)):** Borderless headers, capsule package badges, `rounded-[20px] bg-surface` preview stages, borderless tables with `text-fg-brand` attribute highlights, and minimal text-link pagination.
- [x] **CLI Installation Widget ([`src/components/docs/cli-install-tabs.tsx`](file:///Users/ptrck/Developer/cmplt-design-system/src/components/docs/cli-install-tabs.tsx)):** Borderless `rounded-[16px]` surface with inset canvas terminal snippet box.
- [x] **Button Component Live Demo ([`src/components/docs/component-catalog.tsx`](file:///Users/ptrck/Developer/cmplt-design-system/src/components/docs/component-catalog.tsx)):** Full pill shape ergonomics (`rounded-full`), borderless row spacing, and clean visual hierarchy matching Paper `page button`.

### Phase 3: Registry UI Blocks & Templates (Next)
- [ ] **`AiDeploymentCard` ([`src/registry/cmplt/blocks/ai-deployment-card.tsx`](file:///Users/ptrck/Developer/cmplt-design-system/src/registry/cmplt/blocks/ai-deployment-card.tsx)):** Ensure outer card variants use borderless defaults and concentric 14px inner radii.
- [ ] **`TokenSyncInspectorBlock` ([`src/registry/cmplt/blocks/token-sync-inspector.tsx`](file:///Users/ptrck/Developer/cmplt-design-system/src/registry/cmplt/blocks/token-sync-inspector.tsx)):** Remove borders from swatches and interactive rows.
- [ ] **`EngagementPanelBlock` & `AppManagerBlock`:** Harmonize with borderless 20px containers and coral accent highlights.
- [ ] **`AccountSettingsBlock`:** Remove table borders, applying `bg-subtle` group insets.

### Phase 4: Showcase & Visual Previews
- [ ] **Blocks Showcase ([`src/app/blocks/page.tsx`](file:///Users/ptrck/Developer/cmplt-design-system/src/app/blocks/page.tsx)):** Apply uppercase headlines and borderless preview stages.
- [ ] **Component Showcase ([`src/app/showcase/page.tsx`](file:///Users/ptrck/Developer/cmplt-design-system/src/app/showcase/page.tsx)):** Align bento cards with 20px radii and luminance contrast.

---

*Authored by Patrick Schrödter (ptrckschrdtr) & Antigravity pair programmer.*  
*Maintained under the `cmplt` design system repository.*
