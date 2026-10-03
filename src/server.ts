import { createServer, type Server } from "http";
import { log } from "./logger";

const RECOVERABLE_CODES = new Set(["EADDRINUSE", "EACCES"]);

const RECOVERABLE_MESSAGES: Record<string, string> = {
  EADDRINUSE: "is already in use",
  EACCES: "requires elevated permissions",
};

export function startServer(preferredPort: number): Promise<Server> {
  return new Promise((resolve, reject) => {
    let currentPort = preferredPort;

    const dwbServer = createServer((req, res) => {
      if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "ok" }));
        return;
      }

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Dev-Workbench server is running");
    });

    dwbServer.once("listening", () => resolve(dwbServer));

    dwbServer.on("error", (error: NodeJS.ErrnoException) => {
      const canFallback =
        currentPort !== 0 &&
        error.code !== undefined &&
        RECOVERABLE_CODES.has(error.code);

      if (canFallback) {
        log.warn(
          `Port ${currentPort} ${RECOVERABLE_MESSAGES[error.code!]}, falling back to a free port...`,
        );
        currentPort = 0;
        dwbServer.listen(0);
        return;
      }

      reject(error);
    });

    dwbServer.listen(currentPort);
  });
}
