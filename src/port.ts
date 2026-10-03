import { log } from "./logger";

function resolvePreferredPort(rawPort: string | undefined): number {
  if (rawPort === undefined || rawPort.trim() === "") {
    return 0;
  }

  const parsed = Number(rawPort);

  if (!Number.isInteger(parsed) || parsed < 1 || parsed > 65535) {
    log.warn(
      `Invalid PORT value "${rawPort}" (expected an integer between 1 and 65535). Using a free port instead.`,
    );
    return 0;
  }

  return parsed;
}

export { resolvePreferredPort };
