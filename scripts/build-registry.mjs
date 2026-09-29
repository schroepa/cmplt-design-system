import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const registryPath = path.join(rootDir, "registry.json");
const outDir = path.join(rootDir, "public", "r");

fs.mkdirSync(outDir, { recursive: true });

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

const indexItems = [];

for (const item of registry.items) {
  const hydratedFiles = item.files.map((fileEntry) => {
    const absPath = path.join(rootDir, fileEntry.path);
    const content = fs.readFileSync(absPath, "utf8");
    return {
      path: fileEntry.path,
      content,
      type: fileEntry.type,
      target: fileEntry.target,
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
    registryDependencies: item.registryDependencies ?? [],
    files: hydratedFiles,
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
    registryDependencies: item.registryDependencies ?? [],
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
