# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - Unreleased

### Added

- Executable CLI with `dwb` (HU-01)
- Native HTTP server with health check endpoint `/health` (HU-01)
- Clean shutdown with SIGINT (Ctrl+C) (HU-01)
- Logger with `[dwb]` prefixes (HU-01)
- Automatic project root detection from any subfolder (HU-02)
- `package.json` reading; selected fields (`name`, `version`, `description`, `type`) stored in `session.packageInfo` (HU-03)
- Automatic free port detection; `PORT` is treated as a preferred port (HU-04)
- Fallback to a free port with a warning when the preferred port is in use (`EADDRINUSE`) or requires elevated permissions (`EACCES`) (HU-04)
- Validation of `PORT`: invalid values (non-integer or outside 1-65535) are ignored with a warning (HU-04)
