import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";

function detectProjectRoot(startDir: string): string | null {
  let currentDir = resolve(startDir);
  const rootDir = resolve("/");
  while (currentDir !== rootDir) {
    if (existsSync(resolve(currentDir, "package.json"))) {
      console.log(`Project root found at: ${currentDir}`);
      return currentDir;
    }
    currentDir = dirname(currentDir);
  }
  return null;
}

export { detectProjectRoot };
