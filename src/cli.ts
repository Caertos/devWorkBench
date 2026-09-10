import { startServer } from "./server";
import { log } from "./logger";

log.info("Starting Dev-Workbench server...");

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 0;

try {
  const dwbServer = await startServer(port);

  const addr = dwbServer.address();
  const assignedPort = typeof addr === "object" && addr ? addr.port : "?";

  log.success(`Server running at http://localhost:${assignedPort}`);
  log.info("Press Ctrl+C to stop");

  process.on("SIGINT", () => {
    log.info("Shutting down...");
    dwbServer.close(() => process.exit(0));
  });
} catch (error) {
  log.error("Failed to start server:", error);
  process.exit(1);
}
