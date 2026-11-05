// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compression from "compression";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind()],
  vite: {
    plugins: [
      {
        name: "dev-compression",
        configureServer(server) {
          server.middlewares.use(compression());
        },
      },
    ],
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
