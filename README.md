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
│   ├── port.ts         ← Preferred port validation
│   ├── logger.ts       ← Logging utility
│   ├── project.ts      ← Project root & package.json reader
│   └── session.ts      ← Session state (project root, package info)
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## License

ISC
