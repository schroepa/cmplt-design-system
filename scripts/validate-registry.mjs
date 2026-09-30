import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const registryPath = path.join(rootDir, "registry.json");
const publicRDir = path.join(rootDir, "public", "r");

if (!fs.existsSync(registryPath)) {
  console.error("Error: registry.json not found at", registryPath);
  process.exit(1);
}

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const items = registry.items || [];

console.log("🔍 Validating shadcn registry endpoints & schemas...\n");

let errorCount = 0;
const validTypes = new Set([
  "registry:ui",
  "registry:hook",
  "registry:block",
  "registry:component",
  "registry:lib",
  "registry:theme",
  "registry:base",
  "registry:font",
  "registry:page",
  "registry:file",
  "registry:item",
  "registry:style",
]);

// Types that are metadata/config based and do not strictly require file arrays
const noFilesAllowedTypes = new Set([
  "registry:theme",
  "registry:base",
  "registry:font",
]);

for (const item of items) {
  if (!item.name) {
    console.error("❌ Registry item missing 'name':", item);
    errorCount++;
    continue;
  }

  if (!item.type || !validTypes.has(item.type)) {
    console.error(`❌ Item '${item.name}' has invalid or missing type: ${item.type}`);
    errorCount++;
  }

  const requiresFiles = !noFilesAllowedTypes.has(item.type);

  if (requiresFiles && (!Array.isArray(item.files) || item.files.length === 0)) {
    console.error(`❌ Item '${item.name}' of type '${item.type}' has no files declared.`);
    errorCount++;
  } else if (Array.isArray(item.files)) {
    for (const file of item.files) {
      const filePath = path.join(rootDir, file.path);
      if (!fs.existsSync(filePath)) {
        console.error(`❌ Item '${item.name}' source file does not exist: ${file.path}`);
        errorCount++;
      }
    }
  }

  const endpointFile = path.join(publicRDir, `${item.name}.json`);
  if (!fs.existsSync(endpointFile)) {
    console.error(`❌ Missing compiled endpoint for '${item.name}': public/r/${item.name}.json`);
    errorCount++;
  } else {
    try {
      const parsed = JSON.parse(fs.readFileSync(endpointFile, "utf8"));
      if (!parsed.$schema || !parsed.name || !parsed.type) {
        console.error(`❌ Compiled endpoint '${item.name}.json' missing required schema keys.`);
        errorCount++;
      }
    } catch (e) {
      console.error(`❌ Compiled endpoint '${item.name}.json' is invalid JSON:`, e.message);
      errorCount++;
    }
  }
}

const indexFile = path.join(publicRDir, "index.json");
if (!fs.existsSync(indexFile)) {
  console.error("❌ Missing registry index file: public/r/index.json");
  errorCount++;
}

if (errorCount > 0) {
  console.error(`\n❌ Registry validation failed with ${errorCount} error(s).`);
  process.exit(1);
} else {
  console.log(`✓ All ${items.length} registry items passed validation successfully!`);
  process.exit(0);
}
