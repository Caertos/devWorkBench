export const log = {
  info: (...args: unknown[]) => console.log("[dwb]", ...args),
  success: (...args: unknown[]) => console.log("[dwb] ✓", ...args),
  warn: (...args: unknown[]) => console.warn("[dwb] ⚠", ...args),
  error: (...args: unknown[]) => console.error("[dwb] ✗", ...args),
};
