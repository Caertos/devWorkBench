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
│   ├── cli.ts      	    ← Lógica CLI
│   ├── server.ts   	    ← Servidor HTTP
│   ├── logger.ts   	    ← Utilidad de logs
│   └── project.ts		← Detector de raíz de proyecto
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

## Changelog

### v0.1.0

---

##### 2026-09-09

HU-01: CLI ejecutable con `dwb`

- Servidor HTTP nativo con health check (`/health`)
- Puerto configurable via variable de entorno `PORT`
- Parada limpia con SIGINT (Ctrl+C)
- Logger con prefijos `[dwb]`

---

##### 2026-09-13

HU-02: Detector de raiz de proyecto

- La dependencia detecta automaticamente la carpeta raíz

---

## Licencia

ISC
