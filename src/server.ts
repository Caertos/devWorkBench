import { createServer, type Server } from "http";

export function startServer(port: number): Promise<Server> {
  return new Promise((resolve, reject) => {
    const dwbServer = createServer((req, res) => {
      if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "ok" }));
        return;
      }

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Dev-Workbench server is running");
    });

    dwbServer.on("error", reject);
    dwbServer.listen(port, () => resolve(dwbServer));
  });
}
