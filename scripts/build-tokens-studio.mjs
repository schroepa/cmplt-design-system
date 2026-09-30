import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const srcTokensPath = path.join(rootDir, "src", "registry", "cmplt", "tokens", "tokens.json");
const outTokensStudioSrcPath = path.join(rootDir, "src", "registry", "cmplt", "tokens", "tokens-studio.json");
const outTokensStudioPublicPath = path.join(rootDir, "public", "tokens-studio.json");

const tokensData = JSON.parse(fs.readFileSync(srcTokensPath, "utf8"));

// 1. Build Global Token Set (Primitives & Radius)
const globalSet = {
  neutral: {},
  brand: {},
  radius: {},
};

for (const [step, val] of Object.entries(tokensData.color.primitive.neutral)) {
  globalSet.neutral[step] = {
    $type: "color",
    $value: val.hexFallback || val.$value,
    $description: `OKLCH Neutral Step ${step}: ${val.$value}`,
  };
}

for (const [step, val] of Object.entries(tokensData.color.primitive.brand)) {
  globalSet.brand[step] = {
    $type: "color",
    $value: val.hexFallback || val.$value,
    $description: `OKLCH Brand Step ${step}: ${val.$value}`,
  };
}

const defaultRadii = {
  sm: { px: "4px", rem: "0.25rem" },
  md: { px: "8px", rem: "0.5rem" },
  lg: { px: "12px", rem: "0.75rem" },
  xl: { px: "16px", rem: "1rem" },
  "2xl": { px: "24px", rem: "1.5rem" },
  full: { px: "9999px", rem: "9999px" },
};

const radiusSource = tokensData.radius || defaultRadii;
for (const [radKey, val] of Object.entries(radiusSource)) {
  globalSet.radius[radKey] = {
    $type: "borderRadius",
    $value: val.px,
    $description: `Corner radius ${radKey}: ${val.px} (${val.rem})`,
  };
}

// 2. Build Light and Dark Semantic Token Sets
const lightSet = {};
const darkSet = {};

function setNested(target, pathParts, valueObj) {
  let curr = target;
  for (let i = 0; i < pathParts.length - 1; i++) {
    const p = pathParts[i];
    if (!curr[p]) curr[p] = {};
    curr = curr[p];
  }
  curr[pathParts[pathParts.length - 1]] = valueObj;
}

function extractHex(valStr) {
  if (!valStr) return "#000000";
  const hexMatch = valStr.match(/#([0-9a-fA-F]{3,8})/);
  if (hexMatch) return hexMatch[0];
  return valStr;
}

for (const [tokenKey, sem] of Object.entries(tokensData.color.semantic)) {
  const parts = tokenKey.split(".");
  const lightHex = extractHex(sem.light);
  const darkHex = extractHex(sem.dark);

  setNested(lightSet, parts, {
    $type: "color",
    $value: lightHex,
    $description: `${sem.$description || ""} (Light: ${sem.light})`,
  });

  setNested(darkSet, parts, {
    $type: "color",
    $value: darkHex,
    $description: `${sem.$description || ""} (Dark: ${sem.dark})`,
  });
}

// 3. Assemble Tokens Studio Schema with Themes & Metadata
const tokensStudioPayload = {
  $schema: "https://tokens.studio/schema.json",
  global: globalSet,
  light: lightSet,
  dark: darkSet,
  $themes: [
    {
      id: "cmplt-light",
      name: "Light Mode (Warm Alabaster)",
      selectedTokenSets: {
        global: "enabled",
        light: "enabled",
        dark: "disabled",
      },
    },
    {
      id: "cmplt-dark",
      name: "Dark Mode (Matte Graphite)",
      selectedTokenSets: {
        global: "enabled",
        light: "disabled",
        dark: "enabled",
      },
    },
  ],
  $metadata: {
    tokenSetOrder: ["global", "light", "dark"],
    version: tokensData.meta?.version || "1.2.0",
    engine: "cmplt DTCG to Tokens Studio Converter",
  },
};

fs.writeFileSync(outTokensStudioSrcPath, JSON.stringify(tokensStudioPayload, null, 2) + "\n", "utf8");
fs.writeFileSync(outTokensStudioPublicPath, JSON.stringify(tokensStudioPayload, null, 2) + "\n", "utf8");

console.log("✓ Successfully generated Tokens Studio for Figma schema at:");
console.log("  - src/registry/cmplt/tokens/tokens-studio.json");
console.log("  - public/tokens-studio.json");
