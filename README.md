# cmplt design system

**cmplt** is a complete design system engineered in code first and structured for 1:1 Figma synchronization:
1. **Headless Accessibility (`@base-ui/react` v1.8)** — Unstyled, WAI-ARIA compliant primitives with declarative `data-*` state attributes and Floating UI positioning.
2. **3-Tier Perceptual Token Architecture (OKLCH + W3C DTCG)** — Primitive scales, semantic roles (`--bg-surface`, `--fg-primary`, `--border-subtle`), and live theme presets (`precision`, `editorial`, `emerald`) defined in `src/styles/tokens.css` and `src/registry/cmplt/tokens/tokens.json`.
3. **Native `shadcn` Registry (`/r/[name].json`)** — All 21 tokens, primitives, and blocks are compiled into static `registry-item.json` endpoints via `npm run registry:build`.
4. **Self-Hosted Docs & Marketing Platform** — Built 100% with `@cmplt` components ("Dogfooding"), featuring a `shadcn/ui`-style documentation portal (`/docs`), interactive Token Explorer (`/docs/tokens`), Blocks Showcase (`/blocks`), and Code ↔ Figma Bridge (`/figma`).

## Quickstart

```bash
# Start development server (http://localhost:3000)
npm run dev

# Rebuild static shadcn registry JSON endpoints in public/r/*.json
npm run registry:build

# Production build
npm run build
```

## Installing Components via `shadcn` CLI

Add the `@cmplt` registry namespace to your consumer project's `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "registries": {
    "@cmplt": "http://localhost:3000/r/{name}.json"
  }
}
```

Then install any token set, primitive, or block:

```bash
npx shadcn@latest add @cmplt/tokens
npx shadcn@latest add @cmplt/button
npx shadcn@latest add @cmplt/dialog
npx shadcn@latest add @cmplt/ai-deployment-card
```

## Inventor & Owner

Created, invented, and owned by **Patrick Schrödter (`ptrckschrdtr`)**.

- **Owner & Inventor:** Patrick Schrödter (`ptrckschrdtr`)
- **Website:** [ptrckschrdtr.de](https://ptrckschrdtr.de)
- **GitHub:** [@schroepa](https://github.com/schroepa)

