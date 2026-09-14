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
│   └── logger.ts       ← Logging utility
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

## Changelog

### v0.1.0 (2026-09-09)

- HU-01: Executable CLI with `dwb`
- Native HTTP server with health check (`/health`)
- Configurable port via `PORT` environment variable
- Clean shutdown with SIGINT (Ctrl+C)
- Logger with `[dwb]` prefixes

## License

ISC
