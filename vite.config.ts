import * as fs from "fs";
import * as path from "path";
import { defineConfig } from "vite";
// plugins
import dts from "vite-plugin-dts";

// dependencies

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      afterBuild: (emittedFiles) => {
        const files = emittedFiles.keys();

        for (const fileName of files) {
          const newFileName = fileName.replace(/\.d\.ts(\.map)?$/, ".d.cts$1");

          fs.copyFileSync(fileName, newFileName);
        }
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format, entryName) => {
        if (format === "es") return `${entryName}.mjs`;
        if (format === "cjs") return `${entryName}.cjs`;

        return `${entryName}.${format}.js`;
      },
    },
    emptyOutDir: true,
    rollupOptions: {
      treeshake: "recommended",
    },
  },
});
