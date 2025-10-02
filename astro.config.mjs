// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://web-profile-ryper-astro.vercel.app",
  output: "static",
  vite: {
    plugins: [tailwind()],
  },
  integrations: [sitemap(), react()],
});
