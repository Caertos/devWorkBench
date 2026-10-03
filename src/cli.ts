import { detectProjectRoot, readPackageJson } from "./project";
import { startServer } from "./server";
import { session } from "./session";
import { log } from "./logger";
import { resolvePreferredPort } from "./port";

session.projectRoot = detectProjectRoot(process.cwd());

if (!session.projectRoot) {
  log.error(
    "No project root found. Please ensure you are in a valid project directory.",
  );
  log.error("Make sure there is a package.json file in your project root.");
  process.exit(1);
}
log.success(`Project root detected at: ${session.projectRoot}`);

log.info("Starting Dev-Workbench server...");

const port = resolvePreferredPort(process.env.PORT);

try {
  const dwbServer = await startServer(port);

  const addr = dwbServer.address();
  const assignedPort = typeof addr === "object" && addr ? addr.port : "?";

  log.success(`Server running at http://localhost:${assignedPort}`);
  session.packageInfo = readPackageJson(session.projectRoot);
  log.info(`Project Data: ${JSON.stringify(session.packageInfo, null, 2)}`);
  log.info("Press Ctrl+C to stop");

  process.on("SIGINT", () => {
    log.info("Shutting down...");
    dwbServer.close(() => process.exit(0));
  });
} catch (error) {
  log.error("Failed to start server:", error);
  process.exit(1);
}
