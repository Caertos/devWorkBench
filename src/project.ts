import { existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { log } from "./logger";
import type { PackageInfo } from "./session";

function detectProjectRoot(startDir: string): string | null {
  let currentDir = resolve(startDir);

  while (true) {
    if (existsSync(resolve(currentDir, "package.json"))) {
      log.success(`Project root found at: ${currentDir}`);
      return currentDir;
    }

    const parentDir = dirname(currentDir);

    if (parentDir === currentDir) {
      break;
    }

    currentDir = parentDir;
  }
  return null;
}

function readPackageJson(projectRoot: string) {
  const packageJsonPath = resolve(projectRoot, "package.json");
  const raw = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
  const packageJsonContent: PackageInfo = {
    name: raw.name,
    version: raw.version,
    description: raw.description,
    type: raw.type,
  };

  return packageJsonContent;
}

export { detectProjectRoot, readPackageJson };
