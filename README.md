# DevWorkbench

Local development tool for Node.js projects.

## Tech Stack

- TypeScript
- pnpm
- tsup (bundler)
- node:http (native server)

## Project Structure

```
devWorkBench/
├── bin/dwb.js          ← CLI entry point
├── src/
│   ├── cli.ts          ← CLI logic
│   ├── server.ts       ← HTTP server
│   ├── logger.ts       ← Logging utility
│   ├── project.ts      ← Project root & package.json reader
│   └── session.ts      ← Session state (project root, package info)
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

## Changelog

### v0.1.0

---

##### 2026-09-09

HU-01: Executable CLI with `dwb`

- Native HTTP server with health check (`/health`)
- Configurable port via `PORT` environment variable
- Clean shutdown with SIGINT (Ctrl+C)
- Logger with `[dwb]` prefixes

---

##### 2026-09-13

HU-02: Project root detector

- The dependency automatically detects the project root folder

---

##### 2026-09-20

HU-03: Detect package.json

- Reads and parses `package.json` from the project root
- Stores selected fields (`name`, `version`, `description`, `type`) in session state
- Available for the rest of the tool via `session.packageInfo`

---

## License

ISC
