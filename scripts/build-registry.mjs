import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const registryPath = path.join(rootDir, "registry.json");
const outDir = path.join(rootDir, "public", "r");

fs.mkdirSync(outDir, { recursive: true });

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

const indexItems = [];

for (const item of registry.items) {
  const hydratedFiles = (item.files ?? []).map((fileEntry) => {
    const absPath = path.join(rootDir, fileEntry.path);
    const content = fs.readFileSync(absPath, "utf8");
    return {
      path: fileEntry.path,
      content,
      type: fileEntry.type,
      ...(fileEntry.target ? { target: fileEntry.target } : {}),
    };
  });

  const registryItemPayload = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.name,
    type: item.type,
    title: item.title,
    author: item.author ?? registry.author,
    description: item.description,
    dependencies: item.dependencies ?? [],
    ...(item.devDependencies ? { devDependencies: item.devDependencies } : {}),
    registryDependencies: item.registryDependencies ?? [],
    ...(hydratedFiles.length > 0 ? { files: hydratedFiles } : {}),
    ...(item.tailwind ? { tailwind: item.tailwind } : {}),
    ...(item.cssVars ? { cssVars: item.cssVars } : {}),
    ...(item.css ? { css: item.css } : {}),
    ...(item.font ? { font: item.font } : {}),
    ...(item.meta ? { meta: item.meta } : {}),
    ...(item.docs ? { docs: item.docs } : {}),
    ...(item.categories ? { categories: item.categories } : {}),
    ...(item.style ? { style: item.style } : {}),
    ...(item.iconLibrary ? { iconLibrary: item.iconLibrary } : {}),
    ...(item.baseColor ? { baseColor: item.baseColor } : {}),
    ...(item.theme ? { theme: item.theme } : {}),
  };

  const itemOutPath = path.join(outDir, `${item.name}.json`);
  fs.writeFileSync(
    itemOutPath,
    JSON.stringify(registryItemPayload, null, 2) + "\n",
    "utf8"
  );

  indexItems.push({
    name: item.name,
    type: item.type,
    title: item.title,
    author: item.author ?? registry.author,
    description: item.description,
    dependencies: item.dependencies ?? [],
    ...(item.devDependencies ? { devDependencies: item.devDependencies } : {}),
    registryDependencies: item.registryDependencies ?? [],
    ...(item.categories ? { categories: item.categories } : {}),
    endpoint: `/r/${item.name}.json`,
  });
}

fs.writeFileSync(
  path.join(outDir, "index.json"),
  JSON.stringify(
    {
      $schema: "https://ui.shadcn.com/schema/registry.json",
      name: registry.name,
      homepage: registry.homepage,
      author: registry.author,
      owner: registry.owner,
      github: registry.github,
      totalItems: indexItems.length,
      items: indexItems,
    },
    null,
    2
  ) + "\n",
  "utf8"
);

console.log(
  `✓ Built ${indexItems.length} shadcn registry endpoints into public/r/*.json`
);
