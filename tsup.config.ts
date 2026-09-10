import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/cli.ts"],
  outDir: "dist",
  format: ["esm"],
  dts: false,
  clean: true,
  splitting: false,
  minify: true,
  sourcemap: true,
});
