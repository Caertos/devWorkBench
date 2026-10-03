# DevWorkbench

Herramienta de desarrollo local para proyectos Node.js.

## Tech Stack

- TypeScript
- pnpm
- tsup (bundler)
- node:http (servidor nativo)

## Estructura del proyecto

```
devWorkBench/
├── bin/dwb.js          ← Entry point CLI
├── src/
│   ├── cli.ts          ← Lógica CLI
│   ├── server.ts       ← Servidor HTTP
│   ├── port.ts         ← Validación del puerto preferido
│   ├── logger.ts       ← Utilidad de logs
│   ├── project.ts      ← Detector de raíz y lector de package.json
│   └── session.ts      ← Estado de sesión (raíz, info del paquete)
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

## Changelog

Ver [CHANGELOG.es.md](CHANGELOG.es.md).

## Licencia

ISC
