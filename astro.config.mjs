// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserPagesRepository = repositoryName?.toLowerCase() === "mikthz.github.io";
const base =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !isUserPagesRepository
    ? `/${repositoryName}`
    : "/";

export default defineConfig({
  // GitHub Actions automatically uses the repository path for project pages.
  // Local builds and the Mikthz.github.io user site use the domain root.
  base,
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
