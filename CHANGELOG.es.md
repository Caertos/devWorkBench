# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/),
y este proyecto sigue [Versionado Semántico](https://semver.org/lang/es/spec/v2.0.0.html).

## [0.1.0] - Sin publicar

### Añadido

- CLI ejecutable con `dwb` (HU-01)
- Servidor HTTP nativo con endpoint de health check `/health` (HU-01)
- Parada limpia con SIGINT (Ctrl+C) (HU-01)
- Logger con prefijos `[dwb]` (HU-01)
- Detección automática de la raíz del proyecto desde cualquier subcarpeta (HU-02)
- Lectura de `package.json`; los campos seleccionados (`name`, `version`, `description`, `type`) se guardan en `session.packageInfo` (HU-03)
- Detección automática de puerto libre; `PORT` se trata como puerto preferido (HU-04)
- Uso de un puerto libre, con aviso, cuando el puerto preferido está ocupado (`EADDRINUSE`) o requiere permisos elevados (`EACCES`) (HU-04)
- Validación de `PORT`: los valores inválidos (no enteros o fuera de 1-65535) se ignoran con un aviso (HU-04)
