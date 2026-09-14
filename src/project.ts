import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";

function detectProjectRoot(startDir: string): string | null {
  let currentDir = resolve(startDir);

  while (true) {
    if (existsSync(resolve(currentDir, "package.json"))) {
      console.log(`Project root found at: ${currentDir}`);
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

export { detectProjectRoot };
