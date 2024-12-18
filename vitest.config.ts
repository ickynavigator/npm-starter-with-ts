import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: ["./src/test/setup.ts"],
      reporters: ["hanging-process", "default", "html", "junit"],
      outputFile: {
        junit: "./coverage/junit-report.xml",
      },
      coverage: {
        thresholds: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
        provider: "istanbul",
        reporter: ["text", "text-summary", "html", "cobertura"],
        include: ["src/**/*.{js,jsx,ts,tsx}"],
        clean: false,
        cleanOnRerun: false,
      },
    },
  }),
);
